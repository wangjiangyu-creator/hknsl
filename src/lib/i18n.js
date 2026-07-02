export const locales = ["en", "zh-cn"];

export const localeMeta = {
  en: {
    code: "en",
    label: "English",
    shortLabel: "EN",
    dir: "ltr",
  },
  "zh-cn": {
    code: "zh-cn",
    label: "简体中文",
    shortLabel: "简",
    dir: "ltr",
  },
};

export const defaultLocale = "en";

export const copy = {
  en: {
    siteName: "HK National Security Law Research Portal",
    shortName: "HK NSL Portal",
    creatorNote: "This site is created by Professor Wang Jiangyu with Codex for his teaching and research purpose only.",
    deck: "A bilingual research portal on Hong Kong's national security law framework in comparative context.",
    disclaimer: "Research resource only. Not legal advice.",
    lastVerified: "Last verified",
    source: "Source",
    jurisdiction: "Jurisdiction",
    citation: "Citation",
    body: "Body",
    date: "Date",
    tags: "Tags",
    relatedTopics: "Related topics",
    readCase: "Read case brief",
    openSource: "Open source",
    allRecords: "All records",
    featuredSources: "Featured sources",
    searchPlaceholder: "Search title, citation, summary, jurisdiction, source type, or tag",
    noResults: "No matching records.",
    home: "Home",
    legislation: "Legislation & Rules",
    cases: "Cases",
    academic: "Academic Publications",
    reports: "NGO & Policy Reports",
    comparative: "Comparative Law",
    topics: "Research Topics",
    timeline: "Timeline",
    archive: "Archive/Search",
    overview: "Overview",
    issue: "Issue",
    outcome: "Outcome",
    posture: "Procedural posture",
    issues: "Issues",
    comparativeNote: "Comparative note",
    table: "Matrix",
    recordCount: "records",
    officialFirst: "Official and legal materials are separated from NGO, policy, academic, and comparative commentary.",
    currentThrough: "Seeded with source checks current through 2 July 2026.",
    languageSwitch: "Language",
  },
  "zh-cn": {
    siteName: "香港国家安全法研究门户",
    shortName: "香港国安法门户",
    creatorNote: "This site is created by Professor Wang Jiangyu with Codex for his teaching and research purpose only.",
    deck: "一个关于香港国家安全法律体系及其比较法背景的英中双语研究门户。",
    disclaimer: "仅供研究参考，不构成法律意见。",
    lastVerified: "最后核验",
    source: "来源",
    jurisdiction: "法域",
    citation: "引用",
    body: "机构",
    date: "日期",
    tags: "标签",
    relatedTopics: "相关议题",
    readCase: "阅读案例摘要",
    openSource: "打开来源",
    allRecords: "全部资料",
    featuredSources: "重点来源",
    searchPlaceholder: "搜索标题、引用、摘要、法域、来源类型或标签",
    noResults: "没有匹配资料。",
    home: "首页",
    legislation: "立法与规则",
    cases: "案例",
    academic: "学术出版物",
    reports: "非政府组织与政策报告",
    comparative: "比较法",
    topics: "研究议题",
    timeline: "时间线",
    archive: "资料库/搜索",
    overview: "概览",
    issue: "争点",
    outcome: "结果",
    posture: "程序姿态",
    issues: "议题",
    comparativeNote: "比较法注释",
    table: "矩阵",
    recordCount: "条资料",
    officialFirst: "官方和法律资料与非政府组织、政策、学术及比较法评论明确区分。",
    currentThrough: "初始资料已按2026年7月2日的来源状态核验。",
    languageSwitch: "语言",
  },
};

export const navItems = [
  { key: "legislation", path: "legislation" },
  { key: "cases", path: "cases" },
  { key: "academic", path: "academic" },
  { key: "reports", path: "reports" },
  { key: "comparative", path: "comparative" },
  { key: "topics", path: "topics" },
  { key: "timeline", path: "timeline" },
  { key: "archive", path: "archive" },
];

export const basePath =
  import.meta.env?.BASE_URL || globalThis.process?.env?.PUBLIC_BASE_PATH || "/";

export function stripBase(pathname) {
  const base = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  if (!base || base === "/") return pathname;
  if (pathname === base) return "/";
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length);
  return pathname;
}

export function withBase(path) {
  const base = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base || base === "/") return normalized;
  return `${base}${normalized}`;
}

export function t(locale, key) {
  return copy[locale]?.[key] ?? copy[defaultLocale][key] ?? key;
}

export function localized(value, locale) {
  if (!value || typeof value !== "object") return value ?? "";
  return locale === "zh-cn" ? value.zhCn || value.en || "" : value.en || value.zhCn || "";
}

export function withLocale(locale, path = "") {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return withBase(clean ? `/${locale}/${clean}/` : `/${locale}/`);
}

export function swapLocale(pathname, targetLocale) {
  const parts = stripBase(pathname).split("/").filter(Boolean);
  if (locales.includes(parts[0])) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }
  return withBase(`/${parts.join("/")}${pathname.endsWith("/") ? "/" : ""}`);
}
