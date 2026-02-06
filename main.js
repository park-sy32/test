const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 테마 상태를 localStorage에서 불러오기
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggle.textContent = '☀️';
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light-mode';
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        theme = 'dark-mode';
    } else {
        themeToggle.textContent = '🌙';
    }
    // 테마 상태를 localStorage에 저장
    localStorage.setItem('theme', theme);
});


let userScore = 0;
let compScore = 0;

function play(userChoice) {
    const choices = ['가위', '바위', '보'];
    const emojis = { '가위': '✌️', '바위': '✊', '보': '🖐' };
    
    // 컴퓨터의 랜덤 선택
    const compChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';
    let cssClass = '';

    // 승패 로직
    if (userChoice === compChoice) {
        result = "비겼습니다!";
        cssClass = "draw";
    } else if (
        (userChoice === '가위' && compChoice === '보') ||
        (userChoice === '바위' && compChoice === '가위') ||
        (userChoice === '보' && compChoice === '바위')
    ) {
        result = "이겼습니다! 🎉";
        cssClass = "win";
        userScore++;
    } else {
        result = "졌습니다... 😭";
        cssClass = "lose";
        compScore++;
    }

    // 결과 화면 업데이트
    const resultMsg = document.getElementById('result-message');
    const details = document.getElementById('game-details');
    
    resultMsg.textContent = result;
    resultMsg.className = 'result-text ' + cssClass;
    
    details.innerHTML = `나: ${emojis[userChoice]} vs 컴퓨터: ${emojis[compChoice]}`;

    // 점수 업데이트
    document.getElementById('user-score').textContent = `나: ${userScore}`;
    document.getElementById('comp-score').textContent = `컴퓨터: ${compScore}`;
}
