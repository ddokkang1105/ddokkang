# Plan

## Readiness

실행 가능. 제품 방향과 비목표가 확정됐고 구현 중 사용자 선택이 필요한 분기가 없다.

## Steps

1. [x] 히어로와 섹션 표기를 전광판·유니폼 넘버 콘셉트에 맞게 조정한다.
2. [x] 검정·오렌지·아이보리 토큰과 전체 레이아웃을 `styles.css`에 적용한다.
3. [x] 모바일, 접근성, reduced-motion, A4 인쇄 스타일을 정리한다.
4. [x] 정적 검사와 브라우저에서 데스크톱·모바일 동작을 검증한다.
5. [x] 코드 리뷰 및 QA 결과를 기록하고 작업을 닫는다.

## Affected paths

- `index.html`
- `styles.css`
- `favicon.svg`
- `scripts/validate.mjs`
- `.flow/tasks/hanwha-eagles-inspired-resume-redesign/*`

## Validation

- `node --check app.js`
- `node --check resume-data.js`
- `node --check scripts/validate.mjs`
- `node scripts/validate.mjs`
- 브라우저 데스크톱·390px 모바일 레이아웃, 내비게이션, 콘솔 오류, 키보드 포커스 확인

## Rollback or migration

데이터 스키마나 마이그레이션은 없다. 문제가 생기면 이번 작업의 HTML/CSS/파비콘 변경만 되돌리면 된다.
