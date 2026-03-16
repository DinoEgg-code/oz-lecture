// 1. 상수 선언 (const 사용)
const DEFAULT_VALUE = "Unknown";

// 2. 영화 객체를 저장할 배열 선언 (let 사용)
let movies = [
  {
    title: "The Matrix",
    director: "Wachowskis",
    year: 1999,
    genre: "Sci-Fi"
  },
  {
    title: "Inception",
    director: "Nolan",
    year: 2010,
    genre: "" // 빈 문자열로 설정하여 조건문 로직 테스트
  },
  {
    title: "Parasite",
    director: "", // 빈 문자열로 설정
    year: 2019,
    genre: "Drama"
  }
];

// 3. 영화 목록 출력 함수 (함수 선언문)
function printMovies(movieList) {
  console.log("Movie Collection:");

  // 4. 반복문을 사용하여 영화 정보 출력 (for 루프 선택)
  for (let i = 0; i < movieList.length; i++) {
    let movie = movieList[i];

    // 5. 조건문을 활용한 빈 속성 처리 및 기본값 설정
    if (!movie.title) movie.title = DEFAULT_VALUE;
    if (!movie.director) movie.director = DEFAULT_VALUE;
    if (!movie.genre) movie.genre = DEFAULT_VALUE;
    if (!movie.year) movie.year = 0;

    // 출력 형식에 맞춰 콘솔 출력
    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
    );
  }

  // 6. 총 영화 수 출력 (var 사용 요구사항 충족)
  var totalCount = movieList.length;
  console.log(`Total Movies: ${totalCount}`);
}

// 함수 실행
printMovies(movies);