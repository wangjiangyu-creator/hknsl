import { records, RECORD_TYPES, SOURCE_TYPES } from "../src/data/records.js";
import { topics } from "../src/data/topics.js";
import { timeline } from "../src/data/timeline.js";
import { comparativeJurisdictions, hongKongBaseline } from "../src/data/comparative.js";

const errors = [];
const warnings = [];
const topicIds = new Set(topics.map((topic) => topic.id));
const recordIds = new Set();
const urlPattern = /^https:\/\/[^\s]+$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function hasBilingual(value) {
  return Boolean(value?.en?.trim?.() && value?.zhCn?.trim?.());
}

function hasBilingualArray(value) {
  return Boolean(
    Array.isArray(value?.en) &&
      value.en.length > 0 &&
      value.en.every((item) => typeof item === "string" && item.trim()) &&
      Array.isArray(value?.zhCn) &&
      value.zhCn.length > 0 &&
      value.zhCn.every((item) => typeof item === "string" && item.trim()),
  );
}

for (const topic of topics) {
  assert(topic.id && /^[a-z0-9-]+$/.test(topic.id), `Topic has invalid id: ${topic.id}`);
  assert(hasBilingual(topic.title), `Topic ${topic.id} is missing bilingual title`);
  assert(hasBilingual(topic.summary), `Topic ${topic.id} is missing bilingual summary`);
  assert(Array.isArray(topic.questions?.en) && topic.questions.en.length > 0, `Topic ${topic.id} missing English questions`);
  assert(Array.isArray(topic.questions?.zhCn) && topic.questions.zhCn.length > 0, `Topic ${topic.id} missing Chinese questions`);
}

for (const record of records) {
  assert(record.id && /^[a-z0-9-]+$/.test(record.id), `Record has invalid id: ${record.id}`);
  assert(!recordIds.has(record.id), `Duplicate record id: ${record.id}`);
  recordIds.add(record.id);
  assert(RECORD_TYPES.includes(record.type), `Record ${record.id} has invalid type: ${record.type}`);
  assert(SOURCE_TYPES.includes(record.sourceType), `Record ${record.id} has invalid source type: ${record.sourceType}`);
  assert(hasBilingual(record.title), `Record ${record.id} is missing bilingual title`);
  assert(hasBilingual(record.summary), `Record ${record.id} is missing bilingual summary`);
  assert(record.citation?.trim(), `Record ${record.id} missing citation`);
  assert(record.jurisdiction?.trim(), `Record ${record.id} missing jurisdiction`);
  assert(record.body?.trim(), `Record ${record.id} missing body`);
  assert(datePattern.test(record.date), `Record ${record.id} has invalid date: ${record.date}`);
  assert(datePattern.test(record.lastVerified), `Record ${record.id} has invalid lastVerified date: ${record.lastVerified}`);
  assert(urlPattern.test(record.url), `Record ${record.id} has invalid URL: ${record.url}`);
  assert(Array.isArray(record.tags) && record.tags.length > 0, `Record ${record.id} has no tags`);
  assert(Array.isArray(record.relatedTopics) && record.relatedTopics.length > 0, `Record ${record.id} has no related topics`);
  for (const topicId of record.relatedTopics ?? []) {
    assert(topicIds.has(topicId), `Record ${record.id} references missing topic: ${topicId}`);
  }
  if (record.type === "case") {
    assert(record.court?.trim(), `Case ${record.id} missing court`);
    assert(hasBilingual(record.posture), `Case ${record.id} missing bilingual posture`);
    assert(hasBilingual(record.outcome), `Case ${record.id} missing bilingual outcome`);
    assert(Array.isArray(record.issues?.en) && record.issues.en.length > 0, `Case ${record.id} missing English issues`);
    assert(Array.isArray(record.issues?.zhCn) && record.issues.zhCn.length > 0, `Case ${record.id} missing Chinese issues`);
  }
}

for (const item of timeline) {
  assert(datePattern.test(item.date), `Timeline item has invalid date: ${item.date}`);
  assert(hasBilingual(item.title), `Timeline item ${item.date} missing bilingual title`);
  assert(hasBilingual(item.summary), `Timeline item ${item.date} missing bilingual summary`);
  for (const recordId of item.recordIds ?? []) {
    assert(recordIds.has(recordId), `Timeline item ${item.date} references missing record: ${recordId}`);
  }
}

assert(hasBilingual(hongKongBaseline.title), "Hong Kong comparative baseline missing bilingual title");
assert(hasBilingual(hongKongBaseline.summary), "Hong Kong comparative baseline missing bilingual summary");
assert(
  Array.isArray(hongKongBaseline.recordIds) && hongKongBaseline.recordIds.length > 0,
  "Hong Kong comparative baseline missing records",
);
for (const recordId of hongKongBaseline.recordIds ?? []) {
  assert(recordIds.has(recordId), `Hong Kong comparative baseline references missing record: ${recordId}`);
}

for (const jurisdiction of comparativeJurisdictions) {
  assert(jurisdiction.id && /^[a-z0-9-]+$/.test(jurisdiction.id), `Comparative jurisdiction has invalid id: ${jurisdiction.id}`);
  assert(hasBilingual(jurisdiction.name), `Comparative jurisdiction ${jurisdiction.id} missing bilingual name`);
  assert(hasBilingual(jurisdiction.system), `Comparative jurisdiction ${jurisdiction.id} missing bilingual system`);
  assert(hasBilingual(jurisdiction.introduction), `Comparative jurisdiction ${jurisdiction.id} missing bilingual introduction`);
  assert(hasBilingual(jurisdiction.comparison), `Comparative jurisdiction ${jurisdiction.id} missing bilingual comparison`);
  assert(hasBilingualArray(jurisdiction.contrasts), `Comparative jurisdiction ${jurisdiction.id} missing bilingual contrasts`);
  assert(
    Array.isArray(jurisdiction.recordIds) && jurisdiction.recordIds.length > 0,
    `Comparative jurisdiction ${jurisdiction.id} missing records`,
  );
  for (const recordId of jurisdiction.recordIds ?? []) {
    assert(recordIds.has(recordId), `Comparative jurisdiction ${jurisdiction.id} references missing record: ${recordId}`);
  }
}

for (const topic of topics) {
  const count = records.filter((record) => record.relatedTopics.includes(topic.id)).length;
  warn(count > 0, `Topic ${topic.id} has no records`);
}

if (warnings.length) {
  console.warn("Content warnings:");
  for (const message of warnings) console.warn(`- ${message}`);
}

if (errors.length) {
  console.error("Content validation failed:");
  for (const message of errors) console.error(`- ${message}`);
  process.exit(1);
}

console.log(`Validated ${records.length} records, ${topics.length} topics, ${timeline.length} timeline entries.`);
