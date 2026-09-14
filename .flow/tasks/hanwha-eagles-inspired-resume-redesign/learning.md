# Learning: 동적 정적 페이지의 직접 해시 복원

## Context

JavaScript가 이력서 섹션을 채우고 외부 웹폰트가 레이아웃을 바꾸는 동안 브라우저의 초기 해시 스크롤이 너무 일찍 계산됐다.

## Reusable insight

렌더 직후뿐 아니라 `load`와 `document.fonts.ready` 이후에도 해시 위치를 맞추고, 같은 문서에서 바뀌는 해시는 `hashchange`로 처리한다.

## Evidence

모바일에서는 우연히 맞았지만 1440px 새 로드에서 목표 섹션이 화면 밖에 남는 현상을 재현했고, 보완 후 6개 직접 링크를 다시 검증했다.

## Applies when

클라이언트 렌더링과 웹폰트가 있는 정적 단일 페이지에서 URL 해시로 내부 섹션을 직접 여는 경우.
