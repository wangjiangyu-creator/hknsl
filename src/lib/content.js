import { records } from "../data/records.js";
import { topics } from "../data/topics.js";
import { timeline } from "../data/timeline.js";
import { localized, withLocale } from "./i18n.js";

export const typeLabels = {
  en: {
    legislation: "Legislation",
    rule: "Rule / guidance",
    case: "Case",
    academic: "Academic",
    report: "Report",
    comparative: "Comparative",
    topic: "Topic",
  },
  "zh-cn": {
    legislation: "立法",
    rule: "规则/指引",
    case: "案例",
    academic: "学术",
    report: "报告",
    comparative: "比较法",
    topic: "议题",
  },
};

export const sourceTypeLabels = {
  en: {
    official: "Official",
    case: "Case law",
    academic: "Academic",
    ngo: "NGO",
    policy: "Policy",
    comparative: "Comparative statute",
    international: "International",
  },
  "zh-cn": {
    official: "官方",
    case: "判例",
    academic: "学术",
    ngo: "非政府组织",
    policy: "政策",
    comparative: "比较法法例",
    international: "国际",
  },
};

export function getRecordsByType(types) {
  const allowed = Array.isArray(types) ? types : [types];
  return records.filter((record) => allowed.includes(record.type));
}

export function getRecordsBySourceType(sourceTypes) {
  const allowed = Array.isArray(sourceTypes) ? sourceTypes : [sourceTypes];
  return records.filter((record) => allowed.includes(record.sourceType));
}

export function getRecord(id) {
  return records.find((record) => record.id === id);
}

export function getTopic(id) {
  return topics.find((topic) => topic.id === id);
}

export function recordsForTopic(topicId) {
  return records.filter((record) => record.relatedTopics.includes(topicId));
}

export function timelineWithRecords() {
  return timeline.map((item) => ({
    ...item,
    records: item.recordIds.map(getRecord).filter(Boolean),
  }));
}

export function localizedRecord(record, locale) {
  return {
    ...record,
    titleText: localized(record.title, locale),
    summaryText: localized(record.summary, locale),
    postureText: localized(record.posture, locale),
    outcomeText: localized(record.outcome, locale),
    issuesText: localized(record.issues, locale),
    typeLabel: typeLabels[locale]?.[record.type] ?? record.type,
    sourceTypeLabel: sourceTypeLabels[locale]?.[record.sourceType] ?? record.sourceType,
  };
}

export function buildSearchIndex() {
  return ["en", "zh-cn"].flatMap((locale) =>
    records.map((record) => {
      const localizedItem = localizedRecord(record, locale);
      return {
        locale,
        id: record.id,
        type: record.type,
        sourceType: record.sourceType,
        sourceTypeLabel: localizedItem.sourceTypeLabel,
        title: localizedItem.titleText,
        summary: localizedItem.summaryText,
        citation: record.citation,
        jurisdiction: record.jurisdiction,
        body: record.body,
        date: record.date,
        tags: record.tags,
        relatedTopics: record.relatedTopics,
        url: casePath(record, locale),
        sourceUrl: record.url,
        searchText: [
          localizedItem.titleText,
          localizedItem.summaryText,
          record.citation,
          record.jurisdiction,
          record.body,
          record.sourceType,
          localizedItem.sourceTypeLabel,
          ...record.tags,
          ...record.relatedTopics,
        ]
          .join(" ")
          .toLowerCase(),
      };
    }),
  );
}

export function casePath(record, locale) {
  if (record.type === "case") return withLocale(locale, `cases/${record.id}`);
  return `${withLocale(locale, "archive")}#${record.id}`;
}

export function sourceTypeCounts() {
  return records.reduce((acc, record) => {
    acc[record.sourceType] = (acc[record.sourceType] || 0) + 1;
    return acc;
  }, {});
}
