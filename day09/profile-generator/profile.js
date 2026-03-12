var userAge = 25;              // Number 타입
let userName = "권용안";        // String 타입
const isHacker = true;         // Boolean 타입


console.log("데이터 타입 확인:");
console.log("- userAge 타입:", typeof userAge);
console.log("- userName 타입:", typeof userName);


const hobbies = ["게임", "코딩", "산책"];
const hobbySentence = "My hobbies: " + hobbies.join(", ");
console.log(hobbySentence);


const myProfile = {
    name: userName,
    age: userAge,
    status: "Active"
};

const profileMessage = "안녕하세요! " + myProfile.name + "님의 프로필입니다." + 
                       "\n\t나이:\t" + myProfile.age + "세" + 
                      "\n\t상태:\t" + myProfile.jobStatus + " (인디 해커)";

console.log(profileMessage);


const finalGreeting = userName + "님은 " + userAge + "세이며, 현재 " + hobbies[1] + "에 몰두하고 있습니다.";
console.log(finalGreeting);