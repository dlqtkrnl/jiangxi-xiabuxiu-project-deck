const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const notesButton = document.getElementById("toggleNotes");
const fullscreenButton = document.getElementById("fullscreenButton");
const sideNav = document.getElementById("sideNav");
const languageSwitch = document.getElementById("languageSwitch");
const langButtons = [...document.querySelectorAll(".lang-button")];
const metaDescription = document.getElementById("metaDescription");

const STORAGE_KEY = "xiabu-deck-language";

const translations = {
  zh: {
    htmlLang: "zh-CN",
    metaTitle: "夏布绣项目面谈展示",
    metaDescription:
      "江西夏布绣数字化转译与当代系列服装设计人才培训 - 与南昌非遗研究保护中心交流展示",
    sideNavAria: "页面导航",
    languageSwitchAria: "语言切换",
    brandKicker: "专家面谈展示",
    brandTitle: "江西夏布绣项目合作提案",
    toggleNotes: "演讲备注",
    hideNotes: "关闭备注",
    fullscreen: "全屏",
    exitFullscreen: "退出全屏",
    prev: "上一页",
    next: "下一页",
    navWelcome: "01 开场",
    navValue: "02 为什么是夏布绣",
    navTiming: "03 为什么是现在",
    navPath: "04 项目路径",
    navRole: "05 邀请您参与",
    navMode: "06 参与方式",
    navPrinciples: "07 合作原则",
    navNext: "08 今天确认什么",
    welcomeEyebrow: "国家艺术基金项目交流",
    welcomeTitle: "江西夏布绣数字化转译与当代系列服装设计人才培训",
    welcomeCopy:
      "我们希望邀请来自南昌非遗研究保护中心的专家以外部工艺导师的身份，共同参与这一项以工艺真实性、设计转译和青年人才培养为核心的项目。",
    heroMetaOrg: "申报单位：江西服装学院",
    heroMetaLead: "项目负责人：李允耕",
    heroMetaPartner: "交流机构：南昌非遗研究保护中心",
    heroMetaPeriod: "周期：2027.03 - 2028.06",
    overviewImageAlt: "夏布绣相关案例综合图",
    statStudents: "30名学员",
    statBootcamp: "集中授课",
    statDuration: "完整训练周期",
    statOutcomeLead: "系列成果",
    statOutcome: "成果导向型培养",
    heroFlowKicker: "项目核心结构",
    heroFlow1Title: "工艺真实性",
    heroFlow1Text: "先建立真实的工艺理解，而不是先定义视觉效果。",
    heroFlow2Title: "设计转译",
    heroFlow2Text: "把材料、针法与文化语义转化为当代服装语言。",
    heroFlow3Title: "人才培养",
    heroFlow3Text: "让学员在完整路径中学习，而不是只看到结果图像。",
    heroFlowCaption:
      "这次面谈更重要的是确认方法与协作关系，而不是展示某种已经定型的视觉风格。",
    welcomeQuote:
      "我们不是把夏布绣当作装饰符号，而是希望在真实工艺理解的基础上，把材料、针法与文化语义转译为当代服装设计语言。",
    noteWelcome:
      "开场先说明项目性质、合作目标和尊重态度，再进入具体邀请内容。",
    valueEyebrow: "项目价值",
    valueTitle: "为什么是夏布绣，而不是一般的“非遗元素”",
    valueCard1Title: "夏布绣的独特价值",
    valueList1:
      "它同时包含材料肌理、针法逻辑与地域生活文化，不只是视觉图案。",
    valueList2:
      "夏布与刺绣之间的关系，天然适合连接纺织工艺研究与服装语言转译。",
    valueList3:
      "它能够帮助学员理解“工艺如何进入系列设计”，而不是停留在表面借用。",
    valueList4:
      "它也使项目更有机会形成既扎根地方又能面向当代的成果。",
    valueCard2Title: "项目真正想解决的问题",
    valuePara1:
      "很多面向“非遗”的设计项目，只停留在图案提取、形式拼贴或宣传陈列，缺少对工艺逻辑和文化语义的深入理解。",
    valuePara2:
      "我们这次希望建立的是一条从材料认知、样片试验、系列转译到成衣表达的完整路径，让教学、创作与研究真正连起来。",
    methodFlowKicker: "研究与转译的基本顺序",
    methodFlow1Title: "材料观察",
    methodFlow1Text: "先理解夏布本身的结构、触感与使用语境。",
    methodFlow2Title: "针法拆解",
    methodFlow2Text: "把工艺语言拆解清楚，知道哪些部分不能被误读。",
    methodFlow3Title: "样片验证",
    methodFlow3Text: "通过小样试验判断转译是否真实、是否可做。",
    methodFlow4Title: "系列表达",
    methodFlow4Text: "最后才进入系列造型、结构语言与成果呈现。",
    methodFlowCaption:
      "我们希望先把研究顺序讲清楚，再讨论成果形式，这样更符合本次面谈的目的。",
    sourceImageAlt: "夏布绣来源图",
    sourceCaption: "来源图：从材料、纹样与工艺语汇出发，建立最初的观察与判断。",
    sampleImageAlt: "夏布绣样片图",
    sampleCaption: "样片图：通过针法、肌理与局部试样，验证转译的方向是否成立。",
    noteValue:
      "这一页重点是让对方看到，我们重视的是完整工艺链，而不是单纯做“元素提取”。",
    timingEyebrow: "当下判断",
    timingTitle: "为什么是现在，决定了项目能否成立",
    identityBanner: "本次交流机构：南昌非遗研究保护中心",
    problemTitle: "当前常见的问题",
    problem1: "年轻设计者接触到的多是图像资料，缺少现场工艺判断。",
    problem2: "许多项目过早追求成品展示，忽略了材料试验和工艺验证。",
    problem3: "数字化表达常被误解为替代人工，而不是辅助研究与记录。",
    problem4: "如果没有一线专家把关，项目很容易在文化表达上跑偏。",
    solutionTitle: "我们的应对方式",
    solution1: "把工艺真实性放在项目起点，而不是放在最后修正。",
    solution2: "先做材料观察与样片试验，再进入设计语言和系列结构。",
    solution3: "让外部工艺导师在关键节点上提出校核意见。",
    solution4: "把数字工具明确定位为辅助研究、记录和表达的工具。",
    noteTiming:
      "这部分要传达的是：我们已经意识到风险，也已经为真实性和专业性预留了结构。",
    pathEyebrow: "实施路径",
    pathTitle: "项目将如何推进",
    path1Title: "田野调研",
    path1Text:
      "进入相关地区与工艺现场，建立材料、工艺与文化语境的第一手认知。",
    path2Title: "工艺示范与样片试验",
    path2Text:
      "通过工艺示范与小样验证，明确哪些转译方式真实可行，哪些表达需要调整。",
    path3Title: "材料研究",
    path3Text:
      "将夏布、刺绣、结构与版型放在同一语境里，形成更稳定的设计判断。",
    path4Title: "课程训练",
    path4Text:
      "把研究所得转化为可教学、可复盘、可迭代的训练模块。",
    path5Title: "数字化辅助转译",
    path5Text:
      "使用 AIGC、LLM 与 CLO 3D 等工具辅助记录、分析与方案演示，而不替代手工判断。",
    path6Title: "系列成衣成果",
    path6Text:
      "最终形成能够代表训练成果与研究深度的系列服装作品和教学资料。",
    timeline1: "2027.06 - 2027.08 前期调研与课程筹备",
    timeline2: "2027.09 - 2027.11 集中训练与样片推进",
    timeline3: "2027.12 - 2028.03 系列设计与中期评核",
    timeline4: "2028.04 - 2028.06 成果整合与展示输出",
    roleEyebrow: "合作角色",
    roleTitle:
      "我们希望邀请来自南昌非遗研究保护中心的专家担任：外部工艺导师",
    roleCardTitle: "主要职责",
    role1: "夏布绣工艺示范",
    role2: "关键针法与样片指导",
    role3: "项目阶段性校核与建议",
    role4: "文化语义与工艺边界判断",
    role5: "必要时参与中期评图与成果讨论",
    commitTitle: "我们真正需要的不是“挂名”",
    commitPara1:
      "我们真正需要的是来自非遗研究与保护一线的判断：哪些理解是准确的，哪些表达会跑偏，哪些材料和工艺搭配才真正成立。",
    commitPara2:
      "这份参与的价值，不在于形式，而在于让项目站得住、作品做得稳、学员学得真。",
    noteRole: "这一页说清楚“需要什么帮助”，也同时说明“不会只借用名字”。",
    modeEyebrow: "参与方式",
    modeTitle: "我们希望以怎样的方式合作",
    modeLeftTitle: "建议的参与节奏",
    modePhase1Title: "前期沟通",
    modePhase1Text:
      "先确认方向、合作边界与可参与的内容，再安排正式资料与日程。",
    modePhase2Title: "集中训练阶段",
    modePhase2Text:
      "以工艺示范、样片指导和关键节点讨论为主，不占用过多零碎时间。",
    modePhase3Title: "中期与成果阶段",
    modePhase3Text:
      "对阶段成果做方向判断与修正建议，帮助项目避免偏离初衷。",
    modeRightTitle: "我们会提前准备什么",
    modePrep1: "提前整理项目简介、课程安排和拟参与节点。",
    modePrep2: "明确案例、材料、图纸和样片需求，减少临时沟通成本。",
    modePrep3: "对影像记录、署名方式和资料使用范围做书面确认。",
    modePrep4: "将合作方式、节奏与报酬安排尽量表达得清楚透明。",
    collabFlowKicker: "面谈后更适合推进的合作流程",
    collabFlow1Title: "确认方向",
    collabFlow1Text: "先确认项目逻辑、合作边界与可参与内容。",
    collabFlow2Title: "整理资料",
    collabFlow2Text: "再把课程节点、需求与说明材料整理清楚。",
    collabFlow3Title: "阶段参与",
    collabFlow3Text: "在关键节点开展示范、样片指导与中期校核。",
    collabFlow4Title: "形成成果",
    collabFlow4Text: "最终沉淀课程、样片、作品与可复用的项目经验。",
    collabFlowCaption:
      "这样的合作节奏更容易让专家看到项目的真实结构，也更便于后续逐步推进。",
    garmentImageAlt: "夏布绣成衣系列案例图",
    garmentCaption:
      "成衣图：通过系列化成果检验前期研究是否真正转化为稳定、完整且可展示的服装语言。",
    principlesEyebrow: "合作原则",
    principlesTitle: "我们希望把这次合作建立在以下共识上",
    principle1Title: "工艺真实性",
    principle1Text: "不把关键工艺判断简化为图像模仿或装饰借用。",
    principle2Title: "文化尊重",
    principle2Text: "不脱离语境地消费地方工艺，而是在理解中转译。",
    principle3Title: "署名与权益",
    principle3Text: "对参与方式、署名、资料使用与成果展示保持清晰约定。",
    principle4Title: "沟通节奏",
    principle4Text: "尽量减少无效打扰，把每次沟通都准备得更充分。",
    bannerStrong: "我们对数字工具的态度：",
    bannerText:
      "项目会使用 AIGC、LLM 与 CLO 3D 等工具做辅助研究、记录和展示，但人工判断与工艺真实性始终优先。",
    notePrinciples:
      "这一页的作用是降低顾虑，让对方知道我们重视的是尊重、边界和长期合作感。",
    nextEyebrow: "今天重点",
    nextTitle: "今天我们最想确认的四件事",
    check1: "您是否认可这个项目的总体方向与合作逻辑。",
    check2: "您认为哪些工艺内容最值得作为核心教学与转译起点。",
    check3: "您更适合以怎样的方式参与和提供指导。",
    check4: "如果继续推进，后续材料应如何整理得更清楚、也更尊重贵方节奏。",
    closingLine1:
      "我们希望这个项目建立在真实的工艺理解和文化尊重之上，而不是停留在“把非遗元素做成视觉效果”的层面。",
    closingLine2:
      "如果贵方愿意继续沟通，我们会把后续材料整理得尽量简洁、清楚、尊重沟通节奏。",
    noteNext:
      "结尾不要急着要答复，重点是确认方向、留下后续沟通空间，并让对方感觉轻松而被尊重。",
  },
  ko: {
    htmlLang: "ko",
    metaTitle: "하포수 프로젝트 전문가 면담 자료",
    metaDescription:
      "장시 하포수 디지털 전환과 현대 패션 시리즈 디자인 인재양성 프로젝트 - 남창시 무형문화유산 연구보호센터 면담 자료",
    sideNavAria: "페이지 탐색",
    languageSwitchAria: "언어 전환",
    brandKicker: "전문가 면담 자료",
    brandTitle: "장시 하포수 프로젝트 협력 제안",
    toggleNotes: "발표 메모",
    hideNotes: "메모 닫기",
    fullscreen: "전체화면",
    exitFullscreen: "전체화면 종료",
    prev: "이전",
    next: "다음",
    navWelcome: "01 시작",
    navValue: "02 왜 하포수인가",
    navTiming: "03 왜 지금인가",
    navPath: "04 프로젝트 경로",
    navRole: "05 참여 제안",
    navMode: "06 참여 방식",
    navPrinciples: "07 협업 원칙",
    navNext: "08 오늘 확인할 것",
    welcomeEyebrow: "국가예술기금 프로젝트 미팅",
    welcomeTitle:
      "장시 하포수의 디지털 전환과 현대 시리즈 의상 디자인 인재양성",
    welcomeCopy:
      "저희는 남창시 무형문화유산 연구보호센터의 전문가를 외부 공예 멘토로 모시고, 공예의 진정성, 디자인 전환, 청년 인재 양성을 핵심으로 하는 이 프로젝트를 함께 추진하고자 합니다.",
    heroMetaOrg: "신청 기관: 江西服装学院",
    heroMetaLead: "프로젝트 책임자: 李允耕",
    heroMetaPartner: "교류 기관: 南昌非遗研究保护中心",
    heroMetaPeriod: "기간: 2027.03 - 2028.06",
    overviewImageAlt: "하포수 관련 사례 종합 이미지",
    statStudents: "30명 학원",
    statBootcamp: "집중 수업",
    statDuration: "전체 훈련 주기",
    statOutcomeLead: "시리즈 성과",
    statOutcome: "성과 지향형 양성",
    heroFlowKicker: "프로젝트 핵심 구조",
    heroFlow1Title: "공예의 진정성",
    heroFlow1Text: "먼저 실제 공예 이해를 세우고, 시각 효과를 먼저 정하지 않습니다.",
    heroFlow2Title: "디자인 전환",
    heroFlow2Text: "재료, 침법, 문화적 의미를 동시대 패션 언어로 전환합니다.",
    heroFlow3Title: "인재 양성",
    heroFlow3Text: "학원들이 결과 이미지가 아니라 전체 경로 속에서 배우게 합니다.",
    heroFlowCaption:
      "이번 면담에서는 특정 스타일 이미지를 보여주는 것보다 방법과 협력 구조를 확인하는 일이 더 중요합니다.",
    welcomeQuote:
      "저희는 하포수를 단순한 장식 기호로 다루려는 것이 아니라, 실제 공예 이해를 바탕으로 재료, 침법, 문화적 의미를 현대 패션 언어로 전환하고자 합니다.",
    noteWelcome:
      "도입에서는 프로젝트 성격과 협력 목표, 존중의 태도를 먼저 설명한 뒤 구체적인 제안으로 들어가면 좋습니다.",
    valueEyebrow: "프로젝트 가치",
    valueTitle: "왜 하포수이며, 왜 단순한 '비유 요소'가 아닌가",
    valueCard1Title: "하포수의 고유한 가치",
    valueList1:
      "하포수는 재료의 질감, 침법의 논리, 지역 생활문화까지 함께 품고 있어 단순한 시각 패턴에 그치지 않습니다.",
    valueList2:
      "하포와 자수의 관계는 섬유 공예 연구와 패션 언어 전환을 자연스럽게 연결해 줍니다.",
    valueList3:
      "학원들이 공예가 어떻게 시리즈 디자인 안으로 들어오는지 이해하도록 돕고, 표면적 차용에 머물지 않게 합니다.",
    valueList4:
      "지역성에 뿌리를 두면서도 동시대적으로 확장 가능한 결과물을 만드는 데 유리합니다.",
    valueCard2Title: "이 프로젝트가 실제로 풀고 싶은 문제",
    valuePara1:
      "많은 '비유' 관련 디자인 프로젝트는 문양 추출이나 형식적 결합, 홍보 전시에 머물며 공예 논리와 문화적 의미에 대한 깊은 이해가 부족합니다.",
    valuePara2:
      "이번 프로젝트는 재료 인식, 샘플 실험, 시리즈 전환, 의상 표현을 하나의 완결된 경로로 연결해 교육과 창작, 연구가 실제로 맞물리게 하려는 시도입니다.",
    methodFlowKicker: "연구와 전환의 기본 순서",
    methodFlow1Title: "재료 관찰",
    methodFlow1Text: "먼저 하포 자체의 구조, 촉감, 사용 맥락을 이해합니다.",
    methodFlow2Title: "침법 해석",
    methodFlow2Text: "공예 언어를 분해해 무엇이 왜곡되면 안 되는지 분명히 합니다.",
    methodFlow3Title: "샘플 검증",
    methodFlow3Text: "소규모 실험을 통해 전환이 실제로 가능한지, 진정성이 있는지 확인합니다.",
    methodFlow4Title: "시리즈 표현",
    methodFlow4Text: "그 다음에야 시리즈 실루엣, 구조 언어, 성과 제시로 넘어갑니다.",
    methodFlowCaption:
      "성과 형식을 먼저 정하기보다 연구 순서를 분명히 하는 것이 이번 면담 목적에 더 잘 맞습니다.",
    sourceImageAlt: "하포수 원천 이미지",
    sourceCaption:
      "원천 이미지: 재료, 문양, 공예 어휘에서 출발해 최초의 관찰과 판단을 세웁니다.",
    sampleImageAlt: "하포수 샘플 이미지",
    sampleCaption:
      "샘플 이미지: 침법, 질감, 부분 시험을 통해 전환 방향이 실제로 성립하는지 검증합니다.",
    noteValue:
      "이 페이지에서는 저희가 단순한 '요소 추출'이 아니라 전체 공예 체인을 중시한다는 점을 보여주는 것이 핵심입니다.",
    timingEyebrow: "현재의 판단",
    timingTitle: "왜 지금인가가 프로젝트의 성립 여부를 좌우합니다",
    identityBanner: "이번 교류 기관: 南昌非遗研究保护中心",
    problemTitle: "현재 자주 보이는 문제",
    problem1: "젊은 디자이너들이 주로 이미지 자료만 접하고 현장 공예 판단을 배우기 어렵습니다.",
    problem2: "많은 프로젝트가 결과물 전시에 너무 빨리 집중해 재료 실험과 공예 검증을 놓칩니다.",
    problem3: "디지털 표현이 수작업을 대체하는 것으로 오해되고, 연구와 기록의 보조 도구로 이해되지 않습니다.",
    problem4: "현장 전문가의 검토가 없으면 문화적 표현이 쉽게 빗나갈 수 있습니다.",
    solutionTitle: "저희의 대응 방식",
    solution1: "공예의 진정성을 프로젝트 마지막이 아니라 시작점에 둡니다.",
    solution2: "먼저 재료 관찰과 샘플 실험을 하고, 그 다음 디자인 언어와 시리즈 구조로 넘어갑니다.",
    solution3: "외부 공예 멘토가 핵심 단계마다 교정 의견을 제시하도록 합니다.",
    solution4: "디지털 도구는 연구, 기록, 표현을 위한 보조 도구로 명확히 위치시킵니다.",
    noteTiming:
      "이 부분에서는 저희가 위험을 이미 인식하고 있고, 진정성과 전문성을 위한 구조도 미리 마련해 두었다는 점을 전달하면 됩니다.",
    pathEyebrow: "실행 경로",
    pathTitle: "프로젝트는 이렇게 추진됩니다",
    path1Title: "현지 조사",
    path1Text:
      "관련 지역과 공예 현장에 들어가 재료, 공예, 문화 맥락에 대한 1차 인식을 구축합니다.",
    path2Title: "공예 시연과 샘플 실험",
    path2Text:
      "시연과 소규모 샘플 검증을 통해 어떤 전환 방식이 실제로 가능한지, 무엇을 조정해야 하는지 판단합니다.",
    path3Title: "재료 연구",
    path3Text:
      "하포, 자수, 구조, 패턴을 하나의 문맥 안에서 다루어 더 안정적인 디자인 판단을 만듭니다.",
    path4Title: "교육 훈련",
    path4Text:
      "연구 결과를 교육 가능하고 반복 검토 가능하며 확장 가능한 훈련 모듈로 바꿉니다.",
    path5Title: "디지털 보조 전환",
    path5Text:
      "AIGC, LLM, CLO 3D 등을 기록, 분석, 시안 설명에 활용하되, 손작업 판단을 대체하지는 않습니다.",
    path6Title: "시리즈 의상 성과",
    path6Text:
      "최종적으로 훈련 성과와 연구 깊이를 보여줄 수 있는 시리즈 의상과 교육 자료를 만듭니다.",
    timeline1: "2027.06 - 2027.08 사전 조사와 수업 준비",
    timeline2: "2027.09 - 2027.11 집중 훈련과 샘플 진행",
    timeline3: "2027.12 - 2028.03 시리즈 디자인과 중간 점검",
    timeline4: "2028.04 - 2028.06 성과 정리와 전시 출력",
    roleEyebrow: "협력 역할",
    roleTitle:
      "남창시 무형문화유산 연구보호센터의 전문가를 외부 공예 멘토로 모시고 싶습니다",
    roleCardTitle: "주요 역할",
    role1: "하포수 공예 시연",
    role2: "핵심 침법과 샘플 지도",
    role3: "프로젝트 단계별 검토와 제안",
    role4: "문화적 의미와 공예 경계에 대한 판단",
    role5: "필요 시 중간 평가와 성과 논의 참여",
    commitTitle: "저희가 필요한 것은 '이름만 올리는 것'이 아닙니다",
    commitPara1:
      "저희에게 필요한 것은 무형문화유산 연구와 보호의 현장에서 나온 판단입니다. 무엇이 정확한 이해인지, 어떤 표현이 방향을 벗어나는지, 어떤 재료와 공예 조합이 실제로 성립하는지를 함께 판단해 주시는 역할입니다.",
    commitPara2:
      "이 참여의 가치는 형식이 아니라, 프로젝트를 탄탄하게 세우고 작품을 안정적으로 만들며 학원들이 제대로 배우게 하는 데 있습니다.",
    noteRole:
      "이 페이지에서는 어떤 도움을 요청드리는지 분명히 말하면서도, 이름만 빌리는 방식은 아니라는 점을 함께 보여주면 좋습니다.",
    modeEyebrow: "참여 방식",
    modeTitle: "어떤 방식으로 협력하고 싶은가",
    modeLeftTitle: "권장되는 참여 흐름",
    modePhase1Title: "초기 소통",
    modePhase1Text:
      "방향, 협력 범위, 참여 가능한 내용을 먼저 확인한 뒤 정식 자료와 일정을 맞춥니다.",
    modePhase2Title: "집중 훈련 단계",
    modePhase2Text:
      "공예 시연, 샘플 지도, 핵심 단계 토론을 중심으로 하여 과도한 단편 시간을 요구하지 않습니다.",
    modePhase3Title: "중기 및 성과 단계",
    modePhase3Text:
      "단계별 성과에 대해 방향 판단과 수정 제안을 받아 프로젝트가 초심에서 벗어나지 않도록 합니다.",
    modeRightTitle: "저희가 미리 준비할 내용",
    modePrep1: "프로젝트 소개, 수업 일정, 참여 희망 시점을 미리 정리합니다.",
    modePrep2: "사례, 재료, 도면, 샘플 요구를 분명히 해 임시 소통 비용을 줄입니다.",
    modePrep3: "촬영 기록, 표기 방식, 자료 사용 범위를 문서로 확인합니다.",
    modePrep4: "협력 방식, 일정, 사례를 가능한 한 투명하게 설명합니다.",
    collabFlowKicker: "면담 후 더 적합한 협업 흐름",
    collabFlow1Title: "방향 확인",
    collabFlow1Text: "먼저 프로젝트 논리, 협력 경계, 참여 가능한 내용을 맞춥니다.",
    collabFlow2Title: "자료 정리",
    collabFlow2Text: "그 다음 수업 단계, 요구 사항, 설명 자료를 명확히 정리합니다.",
    collabFlow3Title: "단계별 참여",
    collabFlow3Text: "핵심 단계마다 시연, 샘플 지도, 중간 검토를 진행합니다.",
    collabFlow4Title: "성과 축적",
    collabFlow4Text: "최종적으로 수업, 샘플, 작품, 재사용 가능한 프로젝트 경험을 남깁니다.",
    collabFlowCaption:
      "이런 흐름이 전문가에게도 프로젝트의 실제 구조를 더 잘 보여주고, 이후 진행도 더 수월하게 합니다.",
    garmentImageAlt: "하포수 성과 의상 사례 이미지",
    garmentCaption:
      "의상 이미지: 시리즈 결과물을 통해 초기 연구가 실제로 안정적이고 완결된 패션 언어로 전환되었는지 검증합니다.",
    principlesEyebrow: "협업 원칙",
    principlesTitle: "이번 협업은 다음의 공감대 위에서 이루어지길 바랍니다",
    principle1Title: "공예의 진정성",
    principle1Text: "핵심 공예 판단을 이미지 모방이나 장식 차용으로 단순화하지 않습니다.",
    principle2Title: "문화적 존중",
    principle2Text: "지역 공예를 맥락 없이 소비하지 않고, 이해를 바탕으로 전환합니다.",
    principle3Title: "표기와 권리",
    principle3Text: "참여 방식, 표기, 자료 사용, 성과 공개 범위를 명확히 합의합니다.",
    principle4Title: "소통 리듬",
    principle4Text: "불필요한 방해를 줄이고, 매번 충분히 준비된 소통을 지향합니다.",
    bannerStrong: "디지털 도구에 대한 저희의 태도:",
    bannerText:
      "프로젝트는 AIGC, LLM, CLO 3D 등을 연구, 기록, 시각화 보조 도구로 활용하지만, 인간의 판단과 공예의 진정성이 항상 우선입니다.",
    notePrinciples:
      "이 페이지는 상대방의 부담을 낮추고, 저희가 존중과 경계, 장기적 협업 감각을 중요하게 생각한다는 점을 보여주는 역할을 합니다.",
    nextEyebrow: "오늘의 핵심",
    nextTitle: "오늘 가장 확인하고 싶은 네 가지",
    check1: "이 프로젝트의 전체 방향과 협력 논리를 어떻게 보시는지.",
    check2: "어떤 공예 내용이 핵심 교육 및 전환의 출발점이 되어야 한다고 보시는지.",
    check3: "어떤 방식으로 참여하고 지도해 주시는 것이 가장 적절한지.",
    check4: "계속 추진한다면 후속 자료를 어떤 방식으로 정리해야 더 명확하고 부담이 없는지.",
    closingLine1:
      "저희는 이 프로젝트가 실제 공예 이해와 문화적 존중 위에 서기를 바라며, 단순히 '비유 요소를 시각 효과로 소비하는' 수준에 머물고 싶지 않습니다.",
    closingLine2:
      "귀 기관이 계속 대화를 이어가 주신다면, 이후 자료도 최대한 간결하고 명확하며 존중의 방식으로 정리하겠습니다.",
    noteNext:
      "마무리에서는 바로 답을 재촉하기보다 방향을 확인하고, 이후 대화를 열어 두며, 상대가 편안하고 존중받는다고 느끼게 하는 것이 중요합니다.",
  },
  en: {
    htmlLang: "en",
    metaTitle: "Xiabu Embroidery Expert Meeting Deck",
    metaDescription:
      "Training Program for the Digital Translation of Jiangxi Xiabu Embroidery into Contemporary Fashion Series Design - meeting deck for Nanchang Intangible Cultural Heritage Research and Protection Center",
    sideNavAria: "Page navigation",
    languageSwitchAria: "Language switcher",
    brandKicker: "Expert Meeting Deck",
    brandTitle: "Collaboration Proposal for the Jiangxi Xiabu Embroidery Project",
    toggleNotes: "Speaker Notes",
    hideNotes: "Hide Notes",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit Fullscreen",
    prev: "Prev",
    next: "Next",
    navWelcome: "01 Opening",
    navValue: "02 Why Xiabu Embroidery",
    navTiming: "03 Why Now",
    navPath: "04 Project Path",
    navRole: "05 Invitation",
    navMode: "06 Participation",
    navPrinciples: "07 Principles",
    navNext: "08 What We Hope to Confirm",
    welcomeEyebrow: "National Arts Fund Project Meeting",
    welcomeTitle:
      "Training Program for the Digital Translation of Jiangxi Xiabu Embroidery into Contemporary Fashion Series Design",
    welcomeCopy:
      "We hope to invite an expert from the Nanchang Intangible Cultural Heritage Research and Protection Center to participate as an external craft mentor in a project centered on craft authenticity, design translation, and the cultivation of young talent.",
    heroMetaOrg: "Applicant Institution: Jiangxi Institute of Fashion Technology",
    heroMetaLead: "Project Lead: Li Yungeng",
    heroMetaPartner:
      "Meeting Institution: Nanchang Intangible Cultural Heritage Research and Protection Center",
    heroMetaPeriod: "Period: Mar 2027 - Jun 2028",
    overviewImageAlt: "Overview image of Xiabu embroidery reference cases",
    statStudents: "30 participants",
    statBootcamp: "intensive sessions",
    statDuration: "full training cycle",
    statOutcomeLead: "Series Output",
    statOutcome: "outcome-oriented training",
    heroFlowKicker: "Core Project Structure",
    heroFlow1Title: "Craft Authenticity",
    heroFlow1Text:
      "Build a real understanding of the craft first, rather than defining a visual effect in advance.",
    heroFlow2Title: "Design Translation",
    heroFlow2Text:
      "Translate materials, stitch logic, and cultural meaning into a contemporary fashion language.",
    heroFlow3Title: "Talent Development",
    heroFlow3Text:
      "Let trainees learn through the full process instead of seeing only final images.",
    heroFlowCaption:
      "For this meeting, it matters more to clarify method and collaboration structure than to show a pre-fixed visual style.",
    welcomeQuote:
      "We do not want to treat Xiabu embroidery as a decorative symbol. We want to translate its materials, stitch logic, and cultural meaning into a contemporary fashion language based on real craft understanding.",
    noteWelcome:
      "Open by clarifying the nature of the project, the collaboration goal, and the respectful intent before moving into the actual invitation.",
    valueEyebrow: "Project Value",
    valueTitle: "Why Xiabu Embroidery, rather than a generic 'heritage element'",
    valueCard1Title: "What makes Xiabu embroidery distinctive",
    valueList1:
      "It carries material texture, stitch logic, and regional life culture at the same time, not just a visual motif.",
    valueList2:
      "The relationship between Xiabu fabric and embroidery naturally connects textile craft research with fashion-language translation.",
    valueList3:
      "It helps trainees understand how craft enters a fashion series, rather than stopping at surface-level borrowing.",
    valueList4:
      "It makes it more possible to produce outcomes that are locally rooted yet contemporary in expression.",
    valueCard2Title: "What this project is really trying to solve",
    valuePara1:
      "Many design projects around intangible heritage stop at motif extraction, formal collage, or display, without a deep understanding of craft logic and cultural meaning.",
    valuePara2:
      "This project aims to build a full path from material awareness to sample testing, series translation, and finished-garment expression so that teaching, creation, and research truly connect.",
    methodFlowKicker: "Basic Sequence of Research and Translation",
    methodFlow1Title: "Material Observation",
    methodFlow1Text:
      "First understand the structure, touch, and context of Xiabu fabric itself.",
    methodFlow2Title: "Stitch Analysis",
    methodFlow2Text:
      "Break down the craft language clearly and identify what should not be misunderstood.",
    methodFlow3Title: "Sample Validation",
    methodFlow3Text:
      "Use small studies to test whether the translation is both authentic and workable.",
    methodFlow4Title: "Series Expression",
    methodFlow4Text:
      "Only then move into series silhouette, structural language, and final output.",
    methodFlowCaption:
      "Clarifying the research sequence is more useful for this meeting than showing a speculative final outcome.",
    sourceImageAlt: "Source image for Xiabu embroidery",
    sourceCaption:
      "Source reference: starting from materials, motifs, and craft vocabulary to build the first layer of observation and judgment.",
    sampleImageAlt: "Sample image for Xiabu embroidery",
    sampleCaption:
      "Sample study: testing stitches, texture, and local trials to verify whether the translation direction really works.",
    noteValue:
      "The purpose of this slide is to show that we value the whole craft chain, not a simple extraction of visual elements.",
    timingEyebrow: "Why Now",
    timingTitle: "Why this moment matters to whether the project can truly stand",
    identityBanner:
      "Meeting Institution: Nanchang Intangible Cultural Heritage Research and Protection Center",
    problemTitle: "Common challenges at present",
    problem1:
      "Young designers often have access only to images, not to on-site craft judgment.",
    problem2:
      "Many projects rush too quickly toward final display and skip material testing and craft validation.",
    problem3:
      "Digital methods are often misunderstood as replacements for manual practice rather than tools for research and documentation.",
    problem4:
      "Without guidance from frontline experts, cultural expression can easily drift off course.",
    solutionTitle: "How we plan to respond",
    solution1:
      "Put craft authenticity at the starting point of the project, not at the end as a correction step.",
    solution2:
      "Begin with material observation and sample testing before moving into design language and series structure.",
    solution3:
      "Invite the external craft mentor to review key milestones and offer course corrections.",
    solution4:
      "Define digital tools clearly as aids for research, documentation, and communication.",
    noteTiming:
      "This section should communicate that we already see the risks and have left room in the structure for authenticity and expertise.",
    pathEyebrow: "Implementation Path",
    pathTitle: "How the project will move forward",
    path1Title: "Field Research",
    path1Text:
      "Enter relevant regions and craft sites to build first-hand understanding of materials, process, and cultural context.",
    path2Title: "Craft Demonstration and Sample Testing",
    path2Text:
      "Use demonstrations and small sample studies to identify what kinds of translation are truly viable and what needs adjustment.",
    path3Title: "Material Research",
    path3Text:
      "Place Xiabu, embroidery, garment structure, and patternmaking into the same design context for more stable judgment.",
    path4Title: "Training Modules",
    path4Text:
      "Turn research findings into teachable, reviewable, and repeatable modules.",
    path5Title: "Digital-Assisted Translation",
    path5Text:
      "Use tools such as AIGC, LLMs, and CLO 3D for documentation, analysis, and proposal communication without replacing hand-based judgment.",
    path6Title: "Series Garment Outcomes",
    path6Text:
      "Produce a coherent fashion series and teaching materials that reflect both training outcomes and research depth.",
    timeline1: "2027.06 - 2027.08 Early research and course preparation",
    timeline2: "2027.09 - 2027.11 Intensive training and sample development",
    timeline3: "2027.12 - 2028.03 Series design and mid-term review",
    timeline4: "2028.04 - 2028.06 Output integration and presentation",
    roleEyebrow: "Collaboration Role",
    roleTitle:
      "We hope to invite an expert from the Nanchang Intangible Cultural Heritage Research and Protection Center to serve as an external craft mentor",
    roleCardTitle: "Main responsibilities",
    role1: "Demonstration of Xiabu embroidery techniques",
    role2: "Guidance on key stitches and sample studies",
    role3: "Stage-based review and project recommendations",
    role4: "Judgment on cultural meaning and craft boundaries",
    role5: "Participation in mid-term reviews and outcome discussions when needed",
    commitTitle: "What we need is not a symbolic name on the project",
    commitPara1:
      "What we truly need is judgment grounded in frontline heritage research and protection: what is an accurate understanding, what kind of expression would drift off course, and which combinations of materials and craft actually hold together.",
    commitPara2:
      "The value of this participation lies not in formality, but in helping the project stand firmly, the work develop steadily, and the trainees learn something real.",
    noteRole:
      "This slide should make the requested role concrete while also showing that we are not simply borrowing a name.",
    modeEyebrow: "Participation Format",
    modeTitle: "How we hope to collaborate",
    modeLeftTitle: "Suggested rhythm of involvement",
    modePhase1Title: "Initial Alignment",
    modePhase1Text:
      "First confirm the direction, boundaries of collaboration, and feasible types of participation, then arrange formal materials and scheduling.",
    modePhase2Title: "Intensive Training Stage",
    modePhase2Text:
      "Focus mainly on craft demonstration, sample guidance, and discussion at key moments without taking too much fragmented time.",
    modePhase3Title: "Mid-Term and Outcome Stage",
    modePhase3Text:
      "Offer directional feedback and revision suggestions on interim outcomes so the project does not drift away from its original intent.",
    modeRightTitle: "What we will prepare in advance",
    modePrep1:
      "Organize the project summary, course plan, and intended involvement points in advance.",
    modePrep2:
      "Clarify case references, materials, drawings, and sample needs to reduce ad hoc communication costs.",
    modePrep3:
      "Confirm image documentation, crediting, and scope of material use in writing.",
    modePrep4:
      "Make the collaboration format, timeline, and compensation arrangement as transparent as possible.",
    collabFlowKicker: "A More Suitable Collaboration Flow After This Meeting",
    collabFlow1Title: "Align Direction",
    collabFlow1Text:
      "First align on project logic, collaboration boundaries, and feasible forms of participation.",
    collabFlow2Title: "Prepare Materials",
    collabFlow2Text:
      "Then organize course stages, needs, and explanatory materials more clearly.",
    collabFlow3Title: "Stage-Based Involvement",
    collabFlow3Text:
      "Carry out demonstrations, sample guidance, and mid-term review at key stages.",
    collabFlow4Title: "Build Outcomes",
    collabFlow4Text:
      "Ultimately consolidate courses, samples, works, and reusable project experience.",
    collabFlowCaption:
      "This rhythm makes the project structure easier for experts to assess and easier to advance step by step.",
    garmentImageAlt: "Finished garment case image for Xiabu embroidery",
    garmentCaption:
      "Finished-garment example: using a series outcome to test whether the earlier research has truly become a stable, coherent, and presentable fashion language.",
    principlesEyebrow: "Collaboration Principles",
    principlesTitle: "We hope to build this collaboration on the following shared understandings",
    principle1Title: "Craft Authenticity",
    principle1Text:
      "We will not reduce key craft judgments to image imitation or decorative borrowing.",
    principle2Title: "Cultural Respect",
    principle2Text:
      "We will not consume local craft out of context; we will translate it through understanding.",
    principle3Title: "Credit and Rights",
    principle3Text:
      "We will keep participation scope, crediting, material use, and outcome presentation clearly agreed.",
    principle4Title: "Communication Rhythm",
    principle4Text:
      "We will minimize unnecessary disturbance and make each conversation well prepared.",
    bannerStrong: "Our view on digital tools:",
    bannerText:
      "The project will use AIGC, LLMs, and CLO 3D as supporting tools for research, documentation, and presentation, while human judgment and craft authenticity remain primary.",
    notePrinciples:
      "This slide is meant to reduce concerns and show that we care about respect, boundaries, and a sustainable working relationship.",
    nextEyebrow: "Today's Focus",
    nextTitle: "The four things we most hope to confirm today",
    check1: "Whether you agree with the overall direction and collaboration logic of the project.",
    check2:
      "Which craft contents you believe are most worth turning into the core teaching and translation starting points.",
    check3: "What kind of participation and guidance format would suit you best.",
    check4:
      "If we continue, how the follow-up materials should be organized so they are clearer and more respectful of your pace.",
    closingLine1:
      "We hope this project will stand on real craft understanding and cultural respect, rather than stopping at the level of turning heritage into visual effect.",
    closingLine2:
      "If your institution is open to continuing the conversation, we will prepare the next materials as clearly, concisely, and respectfully as possible.",
    noteNext:
      "Do not push for an immediate answer at the end. The goal is to confirm direction, leave room for follow-up, and make the other side feel comfortable and respected.",
  },
};

let currentIndex = 0;
let currentLanguage = "zh";

function getCurrentTranslation() {
  return translations[currentLanguage] || translations.zh;
}

function updateActiveState(index) {
  currentIndex = index;

  navLinks.forEach((link, linkIndex) => {
    link.classList.toggle("active", linkIndex === index);
  });

  const progress = ((index + 1) / slides.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function scrollToSlide(index) {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides[safeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateControlLabels() {
  const t = getCurrentTranslation();
  notesButton.textContent = document.body.classList.contains("notes-on")
    ? t.hideNotes
    : t.toggleNotes;
  fullscreenButton.textContent = document.fullscreenElement
    ? t.exitFullscreen
    : t.fullscreen;
  prevButton.textContent = t.prev;
  nextButton.textContent = t.next;
}

function updateLanguageButtonState() {
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language) {
  const nextLanguage = translations[language] ? language : "zh";
  const t = translations[nextLanguage];

  currentLanguage = nextLanguage;
  document.body.dataset.lang = nextLanguage;
  document.documentElement.lang = t.htmlLang;
  document.title = t.metaTitle;
  metaDescription.setAttribute("content", t.metaDescription);
  sideNav.setAttribute("aria-label", t.sideNavAria);
  languageSwitch.setAttribute("aria-label", t.languageSwitchAria);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[key]) node.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (t[key]) node.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const key = node.dataset.i18nKey;
    const attr = node.dataset.i18nAttr;
    if (t[key] && attr) node.setAttribute(attr, t[key]);
  });

  updateLanguageButtonState();
  updateControlLabels();
  localStorage.setItem(STORAGE_KEY, nextLanguage);
}

navLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSlide(index);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

nextButton.addEventListener("click", () => scrollToSlide(currentIndex + 1));
prevButton.addEventListener("click", () => scrollToSlide(currentIndex - 1));

notesButton.addEventListener("click", () => {
  document.body.classList.toggle("notes-on");
  updateControlLabels();
});

fullscreenButton.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
  } else {
    await document.exitFullscreen();
  }

  updateControlLabels();
});

document.addEventListener("fullscreenchange", updateControlLabels);

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    scrollToSlide(currentIndex + 1);
  }

  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    scrollToSlide(currentIndex - 1);
  }

  if (event.key.toLowerCase() === "n") {
    notesButton.click();
  }

  if (event.key.toLowerCase() === "f") {
    fullscreenButton.click();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = slides.indexOf(entry.target);
      if (index >= 0) updateActiveState(index);
    });
  },
  {
    threshold: 0.55,
  }
);

slides.forEach((slide) => observer.observe(slide));

const initialLanguage = localStorage.getItem(STORAGE_KEY) || "zh";
applyLanguage(initialLanguage);
updateActiveState(0);
