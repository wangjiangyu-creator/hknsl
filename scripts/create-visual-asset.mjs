import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { deflateSync } from "node:zlib";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const output = join(__dirname, "..", "public", "assets", "portal-banner.png");
const width = 1600;
const height = 900;
const data = new Uint8ClampedArray(width * height * 4);

function setPixel(x, y, color) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const i = (y * width + x) * 4;
  data[i] = color[0];
  data[i + 1] = color[1];
  data[i + 2] = color[2];
  data[i + 3] = color[3] ?? 255;
}

function blendPixel(x, y, color, alpha = 1) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const i = (y * width + x) * 4;
  data[i] = Math.round(data[i] * (1 - alpha) + color[0] * alpha);
  data[i + 1] = Math.round(data[i + 1] * (1 - alpha) + color[1] * alpha);
  data[i + 2] = Math.round(data[i + 2] * (1 - alpha) + color[2] * alpha);
  data[i + 3] = 255;
}

function rect(x, y, w, h, color) {
  for (let yy = y; yy < y + h; yy += 1) {
    for (let xx = x; xx < x + w; xx += 1) setPixel(xx, yy, color);
  }
}

function strokeRect(x, y, w, h, color, thickness = 2) {
  rect(x, y, w, thickness, color);
  rect(x, y + h - thickness, w, thickness, color);
  rect(x, y, thickness, h, color);
  rect(x + w - thickness, y, thickness, h, color);
}

function line(x0, y0, x1, y1, color, thickness = 2) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let x = x0;
  let y = y0;
  while (true) {
    for (let yy = -thickness; yy <= thickness; yy += 1) {
      for (let xx = -thickness; xx <= thickness; xx += 1) blendPixel(x + xx, y + yy, color, 0.86);
    }
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }
}

function circle(cx, cy, r, color) {
  for (let y = cy - r; y <= cy + r; y += 1) {
    for (let x = cx - r; x <= cx + r; x += 1) {
      const d = (x - cx) ** 2 + (y - cy) ** 2;
      if (d <= r ** 2) setPixel(x, y, color);
    }
  }
}

function drawDocument(x, y, w, h, accent) {
  rect(x + 12, y + 12, w, h, [210, 216, 223, 255]);
  rect(x, y, w, h, [255, 255, 252, 255]);
  strokeRect(x, y, w, h, [185, 195, 205, 255], 3);
  rect(x, y, w, 18, accent);
  for (let i = 0; i < 9; i += 1) {
    const yy = y + 58 + i * 42;
    rect(x + 42, yy, w - 84 - (i % 3) * 36, 7, [70, 88, 105, 255]);
    rect(x + 42, yy + 18, w - 132 - (i % 4) * 26, 5, [159, 170, 181, 255]);
  }
  circle(x + w - 72, y + h - 82, 34, accent);
  circle(x + w - 72, y + h - 82, 20, [255, 255, 252, 255]);
}

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const shade = 247 - Math.round((x / width) * 10) + Math.round((y / height) * 6);
    setPixel(x, y, [shade, shade + 1, shade + 2, 255]);
  }
}

for (let x = 0; x < width; x += 64) line(x, 0, x - 340, height, [219, 225, 230, 255], 1);
for (let y = 40; y < height; y += 70) line(0, y, width, y - 170, [229, 233, 236, 255], 1);

const coast = [
  [100, 520],
  [250, 470],
  [410, 500],
  [560, 430],
  [745, 455],
  [940, 375],
  [1120, 405],
  [1330, 320],
  [1510, 350],
];
for (let i = 0; i < coast.length - 1; i += 1) {
  line(coast[i][0], coast[i][1], coast[i + 1][0], coast[i + 1][1], [12, 113, 105, 255], 5);
}

drawDocument(150, 120, 360, 500, [25, 79, 144, 255]);
drawDocument(570, 190, 430, 560, [161, 62, 62, 255]);
drawDocument(1050, 105, 370, 520, [138, 100, 34, 255]);

for (const [x, y, c] of [
  [260, 640, [25, 79, 144, 255]],
  [660, 120, [12, 113, 105, 255]],
  [1110, 690, [161, 62, 62, 255]],
  [1380, 220, [50, 120, 82, 255]],
]) {
  circle(x, y, 18, c);
  circle(x, y, 7, [255, 255, 252, 255]);
}

line(260, 640, 660, 120, [25, 79, 144, 255], 2);
line(660, 120, 1110, 690, [138, 100, 34, 255], 2);
line(1110, 690, 1380, 220, [161, 62, 62, 255], 2);

const raw = Buffer.alloc((width * 4 + 1) * height);
for (let y = 0; y < height; y += 1) {
  const rowStart = y * (width * 4 + 1);
  raw[rowStart] = 0;
  for (let x = 0; x < width; x += 1) {
    const source = (y * width + x) * 4;
    const target = rowStart + 1 + x * 4;
    raw[target] = data[source];
    raw[target + 1] = data[source + 1];
    raw[target + 2] = data[source + 2];
    raw[target + 3] = data[source + 3];
  }
}

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, payload) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(payload.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, payload])));
  return Buffer.concat([length, typeBuffer, payload, crc]);
}

const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const png = Buffer.concat([
  signature,
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

await mkdir(dirname(output), { recursive: true });
await writeFile(output, png);
console.log(`Wrote ${output}`);
