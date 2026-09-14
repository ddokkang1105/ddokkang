# Review

## Scope

`HEAD` 대비 `app.js`, `favicon.svg`, `index.html`, `scripts/validate.mjs`, `styles.css`의 로컬 변경분을 검토했다. 정확성, 테스트 신뢰성, 유지보수성, 비동기 프런트엔드, 적대적 실패 시나리오 렌즈를 사용했다. 외부 교차 모델 CLI가 없어 모든 검토는 로컬에서 수행했다.

## Findings and disposition

| Severity | Finding | Disposition | Verification |
|---|---|---|---|
| P1 | 정적 검증기가 `app.js` 문법 오류를 놓칠 수 있음 | 수정: `new vm.Script(app)`로 통합 검증 자체에서 파싱 | `node scripts/validate.mjs` 통과 |
| P2 | 주황 연락처 패널의 노란 포커스 링 대비가 약함 | 수정: 패널 내부 포커스를 검정색으로 재정의 | CSS 규칙 확인, 전역 키보드 포커스 확인 |
| P2 | 직접 해시·반응형·인쇄가 자동 브라우저 테스트가 아님 | 비차단: 무빌드 정적 사이트에 새 의존성을 추가하지 않고 실제 브라우저 QA로 보완 | 6개 해시, 1440px, 390px, 콘솔 확인 |
| P2 | `styles.css`가 1,000줄을 넘음 | 기각: 한 페이지·한 테마의 연속된 cascade이며 파일 분리가 네트워크·편집 순서 복잡도를 늘림 | 전체 diff와 cascade 순서 재검토 |

## Additional QA-driven fix

웹폰트 로딩 뒤 레이아웃이 변하면서 첫 직접 링크 위치가 흔들리는 경우를 재현했다. `load`, `hashchange`, `document.fonts.ready` 이후 두 프레임에 해시 위치를 복원하도록 수정했다.

## Result

통과. 미해결 P0/P1 없음.
