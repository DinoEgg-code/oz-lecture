# 카운트다운 타이머

사용자가 입력한 초(1~10)만큼 카운트다운을 진행하고 HTML 화면에 결과를 출력하는 타이머 애플리케이션입니다.

---

## 파일 구조

```
async-assignment/
├── index.html           # 타이머 UI
├── async_assignment.js  # 타이머 로직
└── README.md
```

---

## 실행 방법

별도의 설치 없이 브라우저에서 바로 실행 가능합니다.

1. `index.html` 파일을 브라우저로 열기 (더블클릭 또는 드래그 앤 드롭)
2. 입력란에 **1~10** 사이의 숫자 입력
3. **타이머 시작** 버튼 클릭

---

## 주요 기능

| 상황 | 출력 |
|---|---|
| 타이머 진행 중 | `타이머: N초` |
| 타이머 종료 | `타이머 종료!` |
| 유효하지 않은 입력 | `유효한 숫자(1-10)를 입력하세요!` (빨간색) |

- 타이머 실행 중 버튼 비활성화, 종료 후 자동 재활성화
- 유효하지 않은 입력: 빈 값, 숫자 아님, 1~10 범위 초과

---

## 구현 요구사항 체크리스트

- [x] `var`, `let`, `const` 각각 최소 1회 사용
  - `const MAX_TIME`, `const MIN_TIME` — 범위 상수
  - `let timerCount` — 현재 카운트 추적
  - `var timerMessage` — 타이머 메시지 저장
- [x] 함수 선언문 + 매개변수 기본값: `function processTimer(seconds = MAX_TIME)`
- [x] `setInterval` / `clearInterval` 비동기 처리
- [x] `click` 이벤트 리스너 등록
- [x] `if` + `isNaN` + `>=` + `<=` + `&&` 유효성 검사
- [x] DOM 조작: `textContent`, `disabled`, `classList.add`

---

## 디자인 커스텀 내역

기본 제공된 Bootstrap 5 스타일을 유지하면서 아래 항목을 커스텀하였습니다.

### CSS 변경 사항 (`index.html` `<style>`)

| 항목 | 기본값 | 커스텀 내용 |
|---|---|---|
| `.container` | `max-width: 600px`, `margin-top: 50px` | 유지 |
| `#timerDisplay` | `font-size: 24px` | 유지 |
| `.error` | `color: red` | 유지 |

> 현재 버전은 기본 디자인을 그대로 사용합니다.
> 추가 커스텀 예시: 타이머 색상 변화, 버튼 호버 효과 등은 `<style>` 블록에서 자유롭게 수정 가능합니다.

### 커스텀 (선택 적용)

```css
/* 버튼 호버 효과 */
#startTimer:hover:not(:disabled) {
  transform: scale(1.05);
  transition: transform 0.2s;
}

/* 타이머 숫자 강조 */
#timerDisplay {
  font-size: 36px;
  font-weight: bold;
  color: #0d6efd;
}
```
