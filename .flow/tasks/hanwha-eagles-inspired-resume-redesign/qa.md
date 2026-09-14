# QA

## Automated checks

| Command | Result | Evidence |
|---|---|---|
| `node --check app.js` | 통과 | 종료 코드 0 |
| `node --check resume-data.js` | 통과 | 종료 코드 0 |
| `node --check scripts/validate.mjs` | 통과 | 종료 코드 0 |
| `node scripts/validate.mjs` | 통과 | `✓ 38 static checks passed` |

## Manual scenarios

| Scenario | Expected | Result |
|---|---|---|
| 1440×1000 | 검정·오렌지 테마, 가로 오버플로 없음 | 통과; 콘솔 오류·경고 0 |
| 390×844 | 단일 열, 가로 오버플로 없음, 44px 터치 타깃 | 통과; 6개 섹션 렌더링 |
| 6개 직접 해시 | 렌더링·웹폰트 안정화 후 목표 섹션 노출 | 통과; 5개 섹션 top 96px, contact는 문서 끝까지 이동 |
| 키보드 포커스 | skip link와 3px 포커스 링 표시 | 통과 |

## Known limits

- `@page size: A4`, 인쇄 전용 토큰, 장식 숨김, `break-inside: avoid`는 정적으로 확인했다.
- 실제 이력서 분량이 들어온 뒤 네이티브 PDF 페이지 나눔을 최종 검수해야 한다.
