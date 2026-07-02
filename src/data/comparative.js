export const hongKongBaseline = {
  title: {
    en: "Hong Kong baseline",
    zhCn: "香港基准",
  },
  summary: {
    en: "Hong Kong's national security framework now rests on the 2020 National Security Law, the 2024 Safeguarding National Security Ordinance, Article 43 implementation rules, NPCSC interpretation, and related procedural instruments. It combines offence creation, executive and police powers, special criminal procedure, organization controls, online-content powers, and extraterritorial provisions.",
    zhCn: "香港国家安全法律框架目前以2020年香港国安法、2024年《维护国家安全条例》、第四十三条实施细则、全国人大常委会解释及相关程序性法例为基础。该框架同时涵盖罪名设定、行政和警察权力、特殊刑事程序、组织管制、网络内容措施及域外适用。",
  },
  recordIds: [
    "hk-nsl-2020",
    "safeguarding-national-security-ordinance-2024",
    "implementation-rules-article-43",
    "npcsc-interpretation-2022",
    "procedural-matters-regulation-2026",
  ],
};

export const comparativeJurisdictions = [
  {
    id: "united-states",
    name: {
      en: "United States",
      zhCn: "美国",
    },
    system: {
      en: "Federal constitutional system",
      zhCn: "联邦宪制体系",
    },
    introduction: {
      en: "U.S. national security law is dispersed across federal criminal law, intelligence-surveillance statutes, foreign-agent disclosure law, sanctions law, and constitutional rights doctrine. The main statutory anchors in this portal are espionage and national-defense information offences, FISA, FARA, and IEEPA.",
      zhCn: "美国国家安全法分散在联邦刑法、情报监控法律、外国代理人披露制度、制裁法律以及宪法权利法理之中。本门户所列核心材料包括间谍与国防信息罪、FISA、FARA和IEEPA。",
    },
    comparison: {
      en: "Compared with Hong Kong, the U.S. framework is less codified as a single national-security code and more fragmented by institutional function. It is especially useful for comparing judicially supervised surveillance, foreign-influence transparency, sanctions and asset controls, and the tension between national-defense secrecy and First Amendment limits.",
      zhCn: "与香港相比，美国制度并非集中于一部国家安全法典，而是按制度功能分散配置。它特别适合用于比较司法监督下的监控、外国影响透明度、制裁和资产控制，以及国防保密与第一修正案限制之间的张力。",
    },
    contrasts: {
      en: ["fragmented federal architecture", "court-centered intelligence surveillance", "registration rather than broad political-offence framing"],
      zhCn: ["分散的联邦制度结构", "以法院为中心的情报监控", "以登记披露替代更广泛的政治犯罪框架"],
    },
    recordIds: ["us-espionage-censorship-chapter-37", "us-fisa-1978", "us-fara-1938", "us-ieepa-1977"],
  },
  {
    id: "united-kingdom",
    name: {
      en: "United Kingdom",
      zhCn: "英国",
    },
    system: {
      en: "Parliamentary common-law system",
      zhCn: "议会制普通法体系",
    },
    introduction: {
      en: "The U.K. framework combines the National Security Act 2023, official-secrets law, terrorism legislation, and investigatory-powers legislation. The 2023 Act modernizes espionage, foreign interference, sabotage, protected-information, and foreign power-related offences.",
      zhCn: "英国制度结合《2023年国家安全法》、官方秘密法、恐怖主义法和调查权力法。《2023年国家安全法》更新了间谍、外国干预、破坏、受保护信息及外国势力相关罪行。",
    },
    comparison: {
      en: "The U.K. is a close common-law comparator because it shares criminal procedure traditions with Hong Kong, yet its modern national-security reform remains embedded in parliamentary legislation, ministerial powers, prosecutorial controls, and judicial commissioner oversight rather than a constitutional-national law model.",
      zhCn: "英国是重要普通法比较对象，因为其刑事程序传统与香港相近；但其现代国家安全改革仍嵌入议会立法、部长权力、检控控制和司法专员监督，而不是香港式的宪制性全国性法律模式。",
    },
    contrasts: {
      en: ["common-law procedure with parliamentary modernization", "foreign power condition in the 2023 Act", "judicial commissioner oversight for surveillance"],
      zhCn: ["以议会现代化改造普通法程序", "《2023年国家安全法》中的外国势力条件", "监控权力中的司法专员监督"],
    },
    recordIds: ["uk-national-security-act-2023", "uk-official-secrets-act-1989", "uk-terrorism-act-2000", "uk-investigatory-powers-act-2016"],
  },
  {
    id: "singapore",
    name: {
      en: "Singapore",
      zhCn: "新加坡",
    },
    system: {
      en: "Parliamentary common-law system",
      zhCn: "议会制普通法体系",
    },
    introduction: {
      en: "Singapore's national security law is built from the Internal Security Act, Official Secrets Act, Foreign Interference (Countermeasures) Act, and online falsehoods legislation. The framework is notable for preventive detention, ministerial directions, politically significant person controls, and platform-facing online measures.",
      zhCn: "新加坡国家安全法由《内部安全法》《官方秘密法》《防止外来干预（对应措施）法》以及网络假信息法律共同构成。其制度特点包括预防性拘留、部长指令、具政治影响力人士管制以及面向平台的网络措施。",
    },
    comparison: {
      en: "Singapore is useful for comparing executive-centered public-security powers with Hong Kong's national-security committee, police powers, online-removal tools, and organization-control measures. Both systems use strong administrative tools, but Singapore's ISA preventive detention model is more explicit and longstanding.",
      zhCn: "新加坡适合用于比较以行政为中心的公共安全权力与香港国安委、警察权力、网络移除工具和组织管制措施。两地都使用较强行政工具，但新加坡ISA的预防性拘留模式更明确且历史更久。",
    },
    contrasts: {
      en: ["preventive detention as an express statutory pillar", "ministerial countermeasures for foreign interference", "online correction and blocking directions"],
      zhCn: ["预防性拘留是明确法定支柱", "以部长对应措施处理外国干预", "网络更正和阻断指令"],
    },
    recordIds: ["singapore-internal-security-act-1960", "singapore-official-secrets-act-1935", "singapore-fica-2021", "singapore-pofma-2019"],
  },
  {
    id: "japan",
    name: {
      en: "Japan",
      zhCn: "日本",
    },
    system: {
      en: "Civil-law parliamentary system",
      zhCn: "大陆法系议会制体系",
    },
    introduction: {
      en: "Japan's national security framework is not organized as one general national-security code. The relevant comparators here are the specially designated secrets law, the Subversive Activities Prevention Act, and the economic-security promotion statute covering supply chains, infrastructure, critical technologies, and patent non-disclosure.",
      zhCn: "日本国家安全制度并非由一部综合国家安全法典构成。本页比较的重点是《特定秘密保护法》《破坏活动防止法》以及涵盖供应链、基础设施、关键技术和专利不公开的经济安全法。",
    },
    comparison: {
      en: "Japan is most useful for comparing targeted statutory regimes: official secrecy with reporting to the Diet, organization-control powers for violent subversive activity, and economic security as a distinct national-security field. Hong Kong's framework is broader in criminal-political coverage, while Japan's materials show narrower sectoral design.",
      zhCn: "日本最适合用于比较目标明确的部门性制度：带有国会报告机制的官方保密、针对暴力破坏活动的组织管制，以及作为独立国家安全领域的经济安全。香港框架在政治刑事覆盖面上更广，日本材料则显示较窄的部门化设计。",
    },
    contrasts: {
      en: ["sector-specific national security statutes", "secrecy designation and Diet reporting", "economic security as a separate statutory field"],
      zhCn: ["部门化国家安全法律", "秘密指定与向国会报告", "经济安全作为独立法定领域"],
    },
    recordIds: ["japan-specially-designated-secrets-act-2013", "japan-subversive-activities-prevention-act-1952", "japan-economic-security-promotion-act-2022"],
  },
  {
    id: "france",
    name: {
      en: "France",
      zhCn: "法国",
    },
    system: {
      en: "Civil-law semi-presidential system",
      zhCn: "大陆法系半总统制体系",
    },
    introduction: {
      en: "French national security criminal law is centered in the Penal Code's offences against the fundamental interests of the nation, covering treason, espionage, attacks on national defence, and terrorism-related structures in a codified civil-law system.",
      zhCn: "法国国家安全刑法主要集中在《刑法典》中危害国家根本利益的罪名体系，涵盖叛国、间谍、危害国防以及恐怖主义相关制度，体现大陆法系的法典化结构。",
    },
    comparison: {
      en: "France provides a codified criminal-law comparator. Unlike Hong Kong's dual source of national law plus local Article 23 legislation, France places many national-security offences inside the ordinary Penal Code structure, with national defence and public-order concepts organized through code titles and chapters.",
      zhCn: "法国提供法典化刑法比较对象。与香港同时依赖全国性法律和本地第二十三条立法不同，法国把许多国家安全罪名纳入普通《刑法典》结构，通过编、章组织国防和公共秩序概念。",
    },
    contrasts: {
      en: ["codified civil-law offence structure", "fundamental interests of the nation as organizing concept", "ordinary penal-code placement"],
      zhCn: ["法典化大陆法罪名结构", "以国家根本利益作为组织概念", "置于普通刑法典之内"],
    },
    recordIds: ["france-penal-code-national-interests"],
  },
  {
    id: "germany",
    name: {
      en: "Germany",
      zhCn: "德国",
    },
    system: {
      en: "Federal constitutional civil-law system",
      zhCn: "联邦宪制大陆法体系",
    },
    introduction: {
      en: "Germany's Criminal Code addresses high treason, threats to the democratic state under the rule of law, treason, state secrets, and external-security offences. The structure reflects a constitutional commitment to protecting democratic order while organizing offences through the general criminal code.",
      zhCn: "德国《刑法典》规制叛国、危害民主法治国家、泄露国家秘密和外部安全犯罪。其结构体现了保护民主秩序的宪制承诺，同时通过普通刑法典组织相关罪名。",
    },
    comparison: {
      en: "Germany is useful for distinguishing protection of constitutional democracy from broader state-security language. Compared with Hong Kong, German law places national-security offences within a constitutional criminal-law architecture that expressly separates democratic-state protection, treason, and external security.",
      zhCn: "德国适合用于区分保护宪制民主与更宽泛国家安全话语。与香港相比，德国法把国家安全罪行置于宪制刑法架构中，并明确区分民主国家保护、叛国和外部安全。",
    },
    contrasts: {
      en: ["constitutional democracy as a protected object", "criminal-code structure for state security", "separation of treason and democratic-order offences"],
      zhCn: ["以宪制民主作为保护对象", "以刑法典组织国家安全罪", "区分叛国与民主秩序犯罪"],
    },
    recordIds: ["germany-criminal-code-state-security"],
  },
  {
    id: "spain",
    name: {
      en: "Spain",
      zhCn: "西班牙",
    },
    system: {
      en: "Constitutional civil-law system",
      zhCn: "宪制大陆法体系",
    },
    introduction: {
      en: "Spain's Criminal Code organizes relevant material through offences against the Constitution, treason, public order, state institutions, and terrorism. It is particularly useful for studying how a constitutional criminal code separates rebellion, institutional offences, and terrorist offences.",
      zhCn: "西班牙《刑法典》通过危害宪法、叛国、公共秩序、国家机构和恐怖主义等罪名组织相关国家安全材料。它特别适合研究宪制刑法典如何区分叛乱、机构性犯罪和恐怖主义罪。",
    },
    comparison: {
      en: "Compared with Hong Kong, Spain shows a more code-centered approach to constitutional security and public-order threats. It gives the page a European civil-law comparator beyond France and Germany, especially for constitutional offences and terrorism.",
      zhCn: "与香港相比，西班牙展现了更以法典为中心处理宪制安全和公共秩序威胁的方式。它为本页提供法国、德国之外的欧洲大陆法比较对象，尤其适用于宪制犯罪和恐怖主义比较。",
    },
    contrasts: {
      en: ["constitutional offences in the criminal code", "rebellion and institutional offences", "terrorism within general penal legislation"],
      zhCn: ["刑法典中的宪制犯罪", "叛乱与国家机构犯罪", "普通刑法中的恐怖主义罪"],
    },
    recordIds: ["spain-criminal-code-national-security"],
  },
  {
    id: "canada",
    name: {
      en: "Canada",
      zhCn: "加拿大",
    },
    system: {
      en: "Federal common-law and bijural system",
      zhCn: "联邦普通法与双法系体系",
    },
    introduction: {
      en: "Canada's foreign-interference and security-of-information framework addresses protected information, foreign-influenced threats, and national-security confidentiality in a rights-conscious constitutional setting.",
      zhCn: "加拿大的外国干预与信息安全框架处理受保护信息、受外国影响的威胁以及国家安全保密问题，并置于重视权利保障的宪制环境中。",
    },
    comparison: {
      en: "Canada is useful for comparing foreign interference and security-of-information offences with Hong Kong's collusion, external-interference, and state-secrets provisions, especially because Canadian law operates alongside Charter review and federal institutional oversight.",
      zhCn: "加拿大适合用于比较外国干预和信息安全罪与香港的勾结、境外干预和国家秘密条文，特别是加拿大制度同时受宪章审查和联邦机构监督约束。",
    },
    contrasts: {
      en: ["foreign interference and protected information", "Charter-review background", "federal national-security institutions"],
      zhCn: ["外国干预与受保护信息", "宪章审查背景", "联邦国家安全机构"],
    },
    recordIds: ["canada-foreign-interference-security-information-act"],
  },
  {
    id: "australia",
    name: {
      en: "Australia",
      zhCn: "澳大利亚",
    },
    system: {
      en: "Federal common-law system",
      zhCn: "联邦普通法体系",
    },
    introduction: {
      en: "Australia modernized espionage, foreign interference, sabotage, secrecy, and related national-security offences through the 2018 reform legislation. The framework is especially relevant for foreign-interference and secrecy comparisons.",
      zhCn: "澳大利亚通过2018年改革立法更新了间谍、外国干预、破坏、保密及相关国家安全罪行。该制度特别适合用于外国干预和保密比较。",
    },
    comparison: {
      en: "Australia is a strong common-law comparator for Hong Kong's external-interference, sabotage, espionage, and state-secrets provisions. The comparison is useful because both systems address foreign-state activity, but Australia places the reforms within federal criminal law and parliamentary security legislation.",
      zhCn: "澳大利亚是比较香港境外干预、破坏、间谍和国家秘密条文的重要普通法对象。两地都处理外国国家活动，但澳大利亚把改革置于联邦刑法和议会安全立法中。",
    },
    contrasts: {
      en: ["modern foreign-interference offences", "federal criminal-law structure", "espionage and secrecy reforms"],
      zhCn: ["现代外国干预罪", "联邦刑法结构", "间谍与保密改革"],
    },
    recordIds: ["australia-espionage-foreign-interference-2018"],
  },
  {
    id: "mainland-china",
    name: {
      en: "Mainland China",
      zhCn: "中国内地",
    },
    system: {
      en: "Socialist legal system",
      zhCn: "社会主义法律体系",
    },
    introduction: {
      en: "Mainland national security law is a necessary comparator because Hong Kong's 2020 NSL is national legislation applied in the HKSAR. The counter-espionage law illustrates Mainland approaches to state security duties, investigation powers, and legal responsibility.",
      zhCn: "内地国家安全法是必要比较对象，因为2020年香港国安法是适用于香港特别行政区的全国性法律。反间谍法展示了内地关于国家安全义务、调查权力和法律责任的制度取向。",
    },
    comparison: {
      en: "This comparison is different from foreign comparators: it clarifies cross-system interaction inside one country. It helps distinguish the Hong Kong common-law criminal process from Mainland state-security concepts that inform national legislation and interpretation.",
      zhCn: "这种比较不同于外国法比较：它说明一国之内的跨制度互动。它有助于区分香港普通法刑事程序与影响全国性法律和解释的内地国家安全概念。",
    },
    contrasts: {
      en: ["same country, different systems", "state-security investigative model", "national law applied in Hong Kong"],
      zhCn: ["一国之内的不同制度", "国家安全调查模式", "适用于香港的全国性法律"],
    },
    recordIds: ["prc-counter-espionage-law-2023", "hk-nsl-2020", "npcsc-interpretation-2022"],
  },
  {
    id: "international-human-rights",
    name: {
      en: "International human-rights framework",
      zhCn: "国际人权框架",
    },
    system: {
      en: "Treaty and monitoring framework",
      zhCn: "条约与监督框架",
    },
    introduction: {
      en: "The ICCPR and treaty-body materials are not national security statutes, but they are central to comparative evaluation because they supply legality, necessity, proportionality, fair-trial, speech, association, and liberty benchmarks.",
      zhCn: "ICCPR和条约机构材料并非国家安全法，但在比较评价中十分关键，因为它们提供罪刑法定、必要性、相称性、公平审讯、表达、结社和人身自由等基准。",
    },
    comparison: {
      en: "For Hong Kong, this framework matters because the ICCPR is reflected in Basic Law Article 39 and the Hong Kong Bill of Rights Ordinance. It supplies a cross-jurisdictional standard for comparing restrictions justified by national security.",
      zhCn: "对香港而言，该框架的重要性在于ICCPR通过《基本法》第三十九条和《香港人权法案条例》得到体现。它为比较各法域以国家安全为由的限制提供跨法域标准。",
    },
    contrasts: {
      en: ["legality and proportionality baseline", "speech, association, liberty and fair-trial standards", "cross-jurisdictional review vocabulary"],
      zhCn: ["罪刑法定与相称性基准", "表达、结社、自由和公平审讯标准", "跨法域审查术语"],
    },
    recordIds: ["iccpr-hong-kong", "un-hrc-hong-kong-concluding-observations-2022"],
  },
];
