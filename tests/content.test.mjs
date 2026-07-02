import test from "node:test";
import assert from "node:assert/strict";
import { records } from "../src/data/records.js";
import { topics } from "../src/data/topics.js";
import { buildSearchIndex, recordsForTopic } from "../src/lib/content.js";

test("records have unique IDs", () => {
  const ids = records.map((record) => record.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("every topic has at least one linked record", () => {
  for (const topic of topics) {
    assert.ok(recordsForTopic(topic.id).length > 0, topic.id);
  }
});

test("search index contains both languages for each record", () => {
  const index = buildSearchIndex();
  assert.equal(index.length, records.length * 2);
  for (const record of records) {
    assert.ok(index.some((item) => item.id === record.id && item.locale === "en"));
    assert.ok(index.some((item) => item.id === record.id && item.locale === "zh-cn"));
  }
});

test("case records have procedural detail", () => {
  const cases = records.filter((record) => record.type === "case");
  assert.ok(cases.length >= 8);
  for (const record of cases) {
    assert.ok(record.court);
    assert.ok(record.posture.en);
    assert.ok(record.posture.zhCn);
    assert.ok(record.outcome.en);
    assert.ok(record.outcome.zhCn);
  }
});
