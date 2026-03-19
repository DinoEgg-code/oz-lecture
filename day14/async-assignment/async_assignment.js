const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

// var: 타이머 메시지 저장용
var timerMessage = "";

// const: 최대/최소 시간 상수
const MAX_TIME = 10;
const MIN_TIME = 1;

// let: 현재 타이머 카운트
let timerCount = 0;

const resetTimerInput = () => {
  // timerInput 초기화
  timerInput.value = "";
};

const resetTimerDisp = () => {
  // timerDisplay 초기화 (텍스트, 에러 클래스 제거)
  timerDisplay.textContent = "";
  timerDisplay.classList.remove("error");
};

const showTimerSec = (sec) => {
  resetTimerDisp();
  // timerDisplay에 sec 표시
  timerMessage = `타이머: ${sec}초`;
  timerDisplay.textContent = timerMessage;
};

const showTimerComplete = () => {
  resetTimerDisp();
  // timerDisplay에 타이머 종료 메세지 표시
  timerMessage = "타이머 종료!";
  timerDisplay.textContent = timerMessage;
};

const showTimerError = (message) => {
  // timerDisplay에 오류 메세지 표시 (.error 클래스로 빨간색)
  timerDisplay.textContent = message;
  timerDisplay.classList.add("error");
};

// 함수 선언문 + 매개변수 기본값
function processTimer(seconds = MAX_TIME) {
  timerCount = seconds;
  showTimerSec(timerCount);

  // 버튼 비활성화
  startTimer.disabled = true;

  // 1초마다 반복되는 함수
  const timer = setInterval(() => {
    // 1초마다 timerCount 감소
    timerCount -= 1;

    // timerCount가 0 이상이면 sec 표시
    if (timerCount > 0) {
      showTimerSec(timerCount);
    } else {
      clearInterval(timer);
      // 타이머 종료 메세지 표시
      showTimerComplete();
      // 버튼 재활성화
      startTimer.disabled = false;
      resetTimerInput();
    }
  }, 1000);
}

// 타이머 시작
function handleClickTimer() {
  try {
    // timer input에서 sec 가져오기
    const inputVal = timerInput.value;
    const time = Number(inputVal);

    // 유효성 검사: 빈값, 숫자 아님, 범위 초과
    if (inputVal === "" || isNaN(time) || time < MIN_TIME || time > MAX_TIME) {
      throw new Error("유효한 숫자(1-10)를 입력하세요!");
    }

    processTimer(time);
  } catch (error) {
    // 오류 메세지 출력
    showTimerError(error.message);
    resetTimerInput();
  }
}

// click 이벤트 리스너 등록
startTimer.addEventListener("click", handleClickTimer);
