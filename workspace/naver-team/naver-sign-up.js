// 아이디 변수
const idInput = document.querySelector("#id-input");
// 아이디 에러 변수
const idWarning = document.querySelector("#id-warning");
// 비밀번호 변수
const passwordInput = document.querySelector("#password-input");
// 비밀번호 에러 변수
const passwordWarning = document.querySelector("#password-warning");
// 비밀번호 확인 변수
const passwordCheckInput = document.querySelector("#password-check-input");
// 비밀번호 확인 에러 변수
const passwordCheckWarning = document.querySelector("#password-check-warning");
// 이름 확인 변수
const nameInput = document.querySelector("#name-input");
// 이름 확인 에러 변수
const nameWarning = document.querySelector("#name-warning");
// 생일 연 확인 변수
const birthYearInput = document.querySelector("#birth-year-input");
// 생일 월 확인 변수
const birthMonthInput = document.querySelector("#month");
// 생일 일 확인 변수
const birthDayInput = document.querySelector("#birth-day-input");
// 생일 확인 에러 변수
const birthWarning = document.querySelector("#birth-warning");
// 성별 변수
const genderSelect = document.querySelector("#gender-select");
// 성별 에러 변수
const genderWarning = document.querySelector("#gender-warning");
// 이메일 변수
const inputEmail = document.querySelector("#input-email");
// 이메일 에러 변수
const emailWarning = document.querySelector("#email-warning");
//핸드폰 변수
const mobile = document.querySelector('#input-phone-number');
//핸드폰 에러 변수
const errorphoneNumber = document.querySelector('#phone-warning');
// 비밀번호 input감싸고 있는 span태그
const passwordWrapper = document.querySelector("#password-wrapper");
// 비밀번호 확인 input 감싸고 있는 span 태그
const passwordCheckWrapper = document.querySelector("#password-check-wrapper");
// 이름 input 감싸고 있는 span 태그
const nameWrapper = document.querySelector("#input-name-wrapper");
// 년도 감싸고 있는 span 태그
const yearWrapper = document.querySelector("#year-wrapper");
// 월 감싸고 있는 span 태그
const monthWrapper = document.querySelector("#month-wrapper");
// 일 감싸고 있는 span 태그
const dayWrapper = document.querySelector("#day-wrapper");
// 성별 감싸고 있는 span 태그
const genderSelectWrapper = document.querySelector("#gender-select-wrapper");
// 이메일 감싸고 있는 span 태그
const emailInputWrapper = document.querySelector("#email-input-wrapper");
// 인증번호->휴대폰번호 감싸고 있는 span 태그
const phoneInputWrapper = document.querySelector("#input-phone-wrapper");


// 생일 연 정규식 이벤트 사용
birthYearInput.addEventListener("blur", checkBirth);
// 생일 월 정규식 이벤트 사용
birthMonthInput.addEventListener("change", checkBirth);
// 생일 일 정규식 이벤트 사용
birthDayInput.addEventListener("blur", checkBirth);
// 핸드폰 정규식 이벤트 사용
mobile.addEventListener("blur", checkPhoneNum);
// 성별 정규식 이벤트 사용
genderSelect.addEventListener("change", e => checkGenderResult(checkGender));
// 이메일 정규식 이벤트 사용
inputEmail.addEventListener("blur", checkEmail);

// 성별 정규식 함수
function checkGender(asValue, warningTag){
    let checkTrue = () => warningTag.style.display = "none";
    let checkFalse = () => warningTag.style.display = "block";

    asValue.value ? checkTrue() : checkFalse();
}
// 성별 정규식 함수
function checkGenderResult(callback){
    if(callback){
        console.log("callback 들어옴");
        callback(genderSelect, genderWarning);
    }
}

// 이메일 정규식 함수
function checkEmail() {
    const emailWarning = document.querySelector("#email-warning");
    const emailValue = inputEmail.value;
    var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    console.log(emailValue);
    if(emailValue.length < 1){ 
        emailWarning.style.display = "none";  
    } else if(emailPattern.test(emailValue)) {
        emailWarning.style.display = "none"; 
    } else {
        emailWarning.innerHTML = "이메일 주소를 다시 확인해주세요.";
        emailWarning.style.color = "red";
        emailWarning.style.display = "block";

    }

}

//핸드폰번호 정규식 함수
function checkPhoneNum() {
    var isPhoneNum = /([01]{2,})([01679]{1,})([0-9]{3,4})([0-9]{4})/;

    if(mobile.value.length < 1) {
        errorphoneNumber.innerHTML = "필수 정보입니다.";
        errorphoneNumber.style.display = "block";
    } else if(!isPhoneNum.test(mobile.value)) {
        errorphoneNumber.innerHTML = "형식에 맞지 않는 번호입니다.";
        errorphoneNumber.style.display = "block";
    } else {
        errorphoneNumber.style.display = "none";
    }
}

// 아이디 정규식 이벤트 사용 및 함수 
idInput.addEventListener("blur", function(){
    var idInputValue = document.querySelector("#id-input").value;

    idWarning.style.color = "red";
    // 검증에 사용할 정규식 변수 regExp에 저장
    idWarning.style.display = "block";
    var regExp =  /^[A-Za-z0-9]([-_.]?[0-9a-z]){5,20}$/;
    if(idInputValue.length < 1){
        idWarning.innerHTML = "필수 정보입니다.";
    } else if (idInputValue.match(regExp) == null) {
      //정규식에 맞지않으면 return null
      idWarning.style.color = "red";
      idWarning.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    }
    else {
        idWarning.innerHTML = "멋진 아이디네요!";
        idWarning.style.color = "green";
    //   alert('Good!');
    }
});

// 비밀번호 정규식 이벤트 사용 및 함수
passwordInput.addEventListener("blur", function(){
    var passwordInputValue = document.querySelector("#password-input").value;
    var num = passwordInputValue.search(/[0-9]/g);
    var eng = passwordInputValue.search(/[a-z]/ig);
    var spe = passwordInputValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    
    passwordWarning.style.color = "red";    
    if(passwordInputValue.length < 1){
        passwordWarning.style.display = "block";
        passwordWarning.innerHTML = "필수 정보입니다.";
    } else if(passwordInputValue.length < 8 || passwordInputValue.length > 20){
     passwordWarning.innerHTML = "8자리 ~ 20자리 이내로 입력해주세요.";
     passwordWarning.style.display = "block";
     return false;
    }else if(passwordInputValue.search(/\s/) != -1){
     passwordWarning.innerHTML = "비밀번호는 공백 없이 입력해주세요.";
     passwordWarning.style.display = "block";
     return false;
    }else if(num < 0 || eng < 0 || spe < 0 ){
     passwordWarning.innerHTML = "영문,숫자, 특수문자를 혼합하여 입력해주세요.";
     passwordWarning.style.display = "block";
     return false;
    }else {
        passwordWarning.style.color = "green";
        passwordWarning.innerHTML = "사용 가능한 비밀번호입니다.";
        passwordWarning.style.display = "none";
        return true;
    }
});

// 비밀번호 확인 정규식 이벤트 사용 및 함수
passwordCheckInput.addEventListener("blur", function(){
    if(passwordCheckInput.value.length < 1){
        passwordCheckWarning.style.display = "block";
        passwordCheckWarning.style.display = "필수 정보입니다.";
    } else if(passwordCheckInput.value == passwordInput.value){
        passwordCheckWarning.style.display = "none";
        return true;
    } else {
        passwordCheckWarning.style.display = "block";
        passwordCheckWarning.innerHTML = "비밀번호가 일치하지 않습니다.";
        return false;
    }
});

// 이름 정규식 이벤트 사용 및 함수
nameInput.addEventListener("blur", function(){
    const nameInputValue = nameInput.value;
    var name = nameInputValue.search(/^[가-힣a-zA-Z]{2,6}$/);

    if(nameInputValue.length < 1){
        nameWarning.style.display = "block";
        nameWarning.innerHTML = "필수 정보입니다.";
    }else if(nameInputValue.(search/\s/) != -1){
     nameWarning.innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
     nameWarning.style.display = "block";
     return false;
    }else if(name < 0){
        nameWarning.innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        nameWarning.style.display = "block";
     return false;
    }else {
        nameWarning.style.display = "none";
        return true;
    }
});

// 생일 정규식 함수
function checkBirth(){
    var birthYearValue = birthYearInput.value;
    var birthMonthValue = birthMonthInput.value;
    var birthDayValue = birthDayInput.value;
    var birthYearCheck = birthYearValue.search(/^[0-9]{3,4}$/);
    var birthDayCheck = birthYearValue.search(/^[0-9]{1,2}$/);
    var check1 = false;
    var check2 = false;
    var check3 = false;

    if(birthYearValue.length < 1){
        birthWarning.style.display = "block";
        birthWarning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
    }else if(birthYearValue.search(/\s/) != -1){
     birthWarning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
     birthWarning.style.display = "block";
    }else if(birthYearCheck < 0){
        birthWarning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        birthWarning.style.display = "block";
    }else {
        birthWarning.style.display = "none";
        check1 = true;
    }
    
    if(check1 && !check2){
        if(birthMonthValue.length < 1){
            birthWarning.style.display = "block";
            birthWarning.innerHTML = "태어난 월을 선택하세요.";
        } else {
            birthWarning.style.display = "none";
            check2 = true;
        }
    
    }

    if(check1 == true && check2 == true){
        if(birthDayValue.length < 1){
            birthWarning.style.display = "block";
            birthWarning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
        }else if(birthDayValue.search(/\s/) != -1){
         birthWarning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
         birthWarning.style.display = "block";
        }else if(parseInt(birthDayValue) > 31 || parseInt(birthDayValue) < 1){
            birthWarning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요..";
            birthWarning.style.display = "block";
        } else {
            birthWarning.style.display = "none";
            check3 = true;
        }
    }
}


// focus 됐을 때 테두리 색 변하게 하기
// passwordInput.addEventListener("focus", function(){
//     passwordWrapper.style.board = "solid 1px #03c75a";
// });

// passwordInput.addEventListener("blur", function(){
//     passwordWrapper.style.board = "solid 1px #dadada";
// });

nameInput.addEventListener("focus", function(){
    nameWrapper.style.border = "solid 1px #03c75a";
});

nameInput.addEventListener("blur", function(){
    nameWrapper.style.border = "solid 1px #dadada";
});

birthYearInput.addEventListener("focus", function(){
    yearWrapper.style.border = "solid 1px #03c75a";
})

birthYearInput.addEventListener("blur", function(){
    yearWrapper.style.border = "solid 1px #dadada";
})

birthMonthInput.addEventListener("focus", function(){
    monthWrapper.style.border = "solid 1px #03c75a";
})

birthMonthInput.addEventListener("blur", function(){
    monthWrapper.style.border = "solid 1px #dadada";
})

birthDayInput.addEventListener("focus", function(){
    dayWrapper.style.border = "solid 1px #03c75a";
})

birthDayInput.addEventListener("blur", function(){
    dayWrapper.style.border = "solid 1px #dadada";
})

/* ------- */
genderSelect.addEventListener("focus", function(){
    genderSelectWrapper.style.border = "solid 1px #03c75a";
})

genderSelect.addEventListener("blur", function(){
    genderSelectWrapper.style.border = "solid 1px #dadada";
})

inputEmail.addEventListener("focus", function(){
    emailInputWrapper.style.border = "solid 1px #03c75a";
})

inputEmail.addEventListener("blur", function(){
    emailInputWrapper.style.border = "solid 1px #dadada";
})

mobile.addEventListener("focus", function(){
    phoneInputWrapper.style.border = "solid 1px #03c75a";
})

mobile.addEventListener("blur", function(){
    phoneInputWrapper.style.border = "solid 1px #dadada";
})

