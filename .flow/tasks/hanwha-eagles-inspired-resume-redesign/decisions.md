# Decisions

## Confirmed

- 로고 없이 검정 바탕, 선명한 오렌지 포인트, 따뜻한 아이보리 본문색을 사용한다.
- 스포츠 무드는 전광판식 숫자, 경기 기록표 같은 선, 유니폼 라벨, 대각선 그래픽으로 표현한다.
- 경력 정보의 스캔 속도를 우선하며 장식은 정보 위계를 방해하지 않게 제한한다.
- 기존 HTML 구조와 데이터 모델은 최대한 보존하고 `index.html`, `styles.css`, `favicon.svg`를 중심으로 변경한다.

## Rejected options

- 공식 로고·마스코트·구단명 워드마크 삽입: 사용자가 불필요하다고 했고 이력서보다 팬 페이지처럼 보일 위험이 있다.
- 검정과 주황을 화면 전체에 같은 비중으로 사용: 장문 가독성과 포인트 위계가 약해진다.
- 야구공·배트 일러스트 중심 구성: 전문 이력서의 정보 밀도를 해친다.

## Open questions

- 없음. 실제 이력서 내용은 추후 `resume-data.js`에 반영한다.

## Gate record

| Gate | Result | Source / fallback |
|---|---|---|
| Framework probe | OpenSpec 1.6.0, gstack 1.60.1.0, CE 3.25.0 감지; OMX 미설치 | `personal-flow/scripts/probe-frameworks.ps1` |
| Discovery / brainstorm | 생략 — 컬러, 무드, 로고 제외 조건이 명확함 | Personal Flow standard 최소 게이트 선택 |
| Design review | 통과 — 스포츠 에디토리얼 콘셉트, 대비, 정보 위계, 반응형 원칙 확정 | 직접 검토 fallback; `plan-design-review`는 대화형 계획 전용이라 사용하지 않음 |
| Plan | 직접 실행 가능한 범위와 검증 방법 확정 | CE plan Direct contract |
| Work | 완료 — 스포츠 에디토리얼 테마와 직접 해시 복원 구현 | CE work |
| Review | 통과 — 수정 2건 반영, 비차단 제안 2건 기록 | CE code review, 로컬 5개 렌즈 |
| QA | 통과 — 정적 38개, 1440px/390px 브라우저 및 6개 직접 링크 확인 | 직접 브라우저 QA; `qa-only`는 별도 보고서 전용이라 사용하지 않음 |
