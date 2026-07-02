import { records } from "../src/data/records.js";

const coreIds = [
  "hksar-nsl-portal",
  "hk-nsl-2020",
  "safeguarding-national-security-ordinance-2024",
  "procedural-matters-regulation-2026",
  "legco-brief-national-security-laws-2025",
  "amnesty-five-years-2025",
  "hrw-article-23-2024",
  "freedom-house-hk-2026",
];

const coreRecords = records.filter((record) => coreIds.includes(record.id));
const timeoutMs = Number(process.env.LINKCHECK_TIMEOUT_MS || 12000);

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "HK-NSL-Portal-LinkCheck/0.1" },
    });
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "HK-NSL-Portal-LinkCheck/0.1" },
      });
    }
    return { ok: response.ok, status: response.status, finalUrl: response.url };
  } catch (error) {
    return { ok: false, status: "ERR", error: error.message };
  } finally {
    clearTimeout(timer);
  }
}

let failures = 0;
for (const record of coreRecords) {
  const result = await check(record.url);
  const marker = result.ok ? "OK" : "WARN";
  if (!result.ok) failures += 1;
  console.log(`${marker} ${record.id} ${result.status} ${record.url}`);
  if (result.error) console.log(`  ${result.error}`);
}

if (failures) {
  console.warn(`${failures} core link check warning(s). Network or bot protections may affect this smoke check.`);
} else {
  console.log("Core source link smoke check passed.");
}
