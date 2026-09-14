/**
 * Replace the placeholder values below when the real resume is available.
 * Keep `isTemplate: true` until the content has been reviewed for accuracy.
 * Optional arrays can be left empty; their sections will be hidden automatically.
 */
window.resumeData = {
  isTemplate: true,
  locale: "ko-KR",
  lastUpdated: "2026.09",

  profile: {
    name: "YOUR NAME",
    nameKo: "이름을 입력하세요",
    shortName: "RESUME",
    roleEn: "SOFTWARE ENGINEER",
    headline: "문제를 구조화하고,\n제품으로 완성합니다.",
    summary:
      "지원 분야와 강점을 2~3문장으로 적어 주세요. 어떤 문제를 잘 풀고, 어떤 방식으로 협업하며, 어떤 결과를 만드는지 구체적으로 보여주는 자리입니다.",
    about: [
      "첫 문단에는 경력의 방향과 가장 강한 전문성을 적어 주세요. 기술 이름을 나열하기보다 어떤 상황에서 어떤 판단을 내리는 사람인지 설명하면 좋습니다.",
      "두 번째 문단에는 일하는 방식과 팀에 주는 가치를 적어 주세요. 실제 이력서가 들어오면 중복 표현을 덜어내고, 경력과 프로젝트의 증거가 이 소개를 뒷받침하도록 연결합니다.",
    ],
    location: "Seoul, Korea",
    availability: "희망 직무와 근무 형태를 입력하세요",
  },

  proofPoints: [
    { value: "NN년", label: "관련 경력" },
    { value: "NN개", label: "주요 프로젝트" },
    { value: "3+", label: "핵심 전문 분야" },
  ],

  links: [
    { label: "Email", value: "이메일 추가", href: "" },
    { label: "GitHub", value: "GitHub 연결", href: "" },
    { label: "LinkedIn", value: "LinkedIn 연결", href: "" },
  ],

  experience: [
    {
      company: "회사명을 입력하세요",
      role: "직무 / 포지션",
      period: "20XX.XX — 현재",
      location: "근무 지역 또는 형태",
      summary:
        "팀의 목표와 맡았던 역할을 한 문장으로 설명해 주세요. 아래 항목은 업무 목록보다 변화와 결과를 중심으로 작성합니다.",
      highlights: [
        "문제 상황과 행동, 측정 가능한 결과가 드러나는 대표 성과를 입력하세요.",
        "협업 범위와 본인의 기여가 분명한 개선 사례를 입력하세요.",
        "성능, 품질, 비용, 고객 경험 중 실제로 달라진 지표를 입력하세요.",
      ],
      technologies: ["기술 1", "기술 2", "기술 3"],
    },
    {
      company: "이전 회사 또는 조직",
      role: "직무 / 포지션",
      period: "20XX.XX — 20XX.XX",
      location: "근무 지역 또는 형태",
      summary: "이 역할에서 맡았던 제품과 책임 범위를 간결하게 입력하세요.",
      highlights: [
        "가장 설득력 있는 성과를 수치 또는 전후 비교와 함께 입력하세요.",
        "기술적 선택이 사용자나 조직에 준 영향을 입력하세요.",
      ],
      technologies: ["기술 1", "기술 2"],
    },
  ],

  projects: [
    {
      title: "대표 프로젝트 이름",
      type: "PRODUCT / 20XX",
      summary:
        "왜 이 프로젝트가 필요했고, 무엇을 만들었으며, 어떤 결과가 있었는지 2~3문장으로 설명해 주세요.",
      highlights: [
        "본인이 주도한 핵심 의사결정이나 어려운 문제 해결을 입력하세요.",
        "사용자 또는 비즈니스 결과를 보여주는 증거를 입력하세요.",
      ],
      tags: ["역할", "기술", "도메인"],
      links: [],
    },
    {
      title: "사내 웹 시스템 보안 취약점 개선",
      type: "SUB PROJECT / APPSEC",
      summary:
        "사내 표준관리 웹 시스템의 보안점검 결과를 분석하고, 애플리케이션 계층의 취약점 개선부터 수동 재현과 재점검까지 수행했습니다.",
      highlights: [
        "SAST 3,243건을 조치 완료 2,216건과 검토 의견 1,027건으로 정리하고, DAST 154건을 조치 요청 112건과 오탐 42건으로 분류했습니다.",
        "SQL Injection, XSS, CSRF, 인증·인가, 경로 조작 이슈를 코드 흐름과 요청 경로 단위로 분석해 개선했습니다.",
        "Burp Suite, Chrome DevTools, Tomcat 로그를 활용해 취약점 재현부터 수정 후 재점검과 영향 범위 확인까지 수행했습니다.",
      ],
      tags: ["Java", "Servlet/JSP", "MyBatis", "Tomcat", "Burp Suite", "SAST/DAST"],
      links: [],
    },
  ],

  skills: [
    {
      category: "Core",
      description: "가장 자신 있는 문제 영역",
      items: ["전문 역량 1", "전문 역량 2", "전문 역량 3"],
    },
    {
      category: "Engineering",
      description: "업무에서 실제로 활용한 기술",
      items: ["언어 / 프레임워크", "데이터 / 인프라", "테스트 / 운영"],
    },
    {
      category: "Collaboration",
      description: "팀과 제품을 움직이는 방식",
      items: ["기술 의사결정", "문서화", "멘토링 / 협업"],
    },
  ],

  education: [
    {
      school: "학교 또는 교육기관",
      program: "전공 / 과정",
      period: "20XX — 20XX",
      note: "선택: 관련 활동, 연구, 수상",
    },
  ],

  credentials: [
    {
      title: "자격증 또는 수상",
      issuer: "발급 기관",
      year: "20XX",
    },
  ],

  contact: {
    heading: "함께 만들 이야기가 있다면",
    text: "채용 또는 프로젝트 문의를 받을 연락 방법을 연결해 주세요.",
  },
};
