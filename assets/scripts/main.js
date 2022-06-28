var themeBtn1 = document.querySelector(".themeBtn1");
var themeBtn2 = document.querySelector(".themeBtn2");
var themeLink = document.querySelector("#themeLink");

function changeTheme1(){
    if(themeBtn1.classList.contains('fa-moon')){
        themeBtn1.classList.remove('fa-moon');
        themeBtn1.classList.add('fa-lightbulb');
        themeLink.href = "assets/styles/lightTheme.css";
        localStorage.setItem("Portfolio_Theme","light");
    }
    else if(themeBtn1.classList.contains('fa-lightbulb')){
        themeBtn1.classList.remove('fa-lightbulb');
        themeBtn1.classList.add('fa-moon');
        themeLink.href = "assets/styles/darkTheme.css";
        localStorage.setItem("Portfolio_Theme","dark");
    }
}

function changeTheme2(){
    if(themeBtn2.classList.contains('fa-moon')){
        themeBtn2.classList.remove('fa-moon');
        themeBtn2.classList.add('fa-lightbulb');
        themeLink.href = "assets/styles/lightTheme.css";
        localStorage.setItem("Portfolio_Theme","light");
    }
    else if(themeBtn2   .classList.contains('fa-lightbulb')){
        themeBtn2.classList.remove('fa-lightbulb');
        themeBtn2.classList.add('fa-moon');
        themeLink.href = "assets/styles/darkTheme.css";
        localStorage.setItem("Portfolio_Theme","dark");
    }
}

function themeUpdate(){
    if(localStorage.getItem("Portfolio_Theme") === "dark"){
        themeBtn2.classList.remove('fa-lightbulb');
        themeBtn2.classList.add('fa-moon');
        themeLink.href = "assets/styles/darkTheme.css";
        themeBtn1.classList.remove('fa-lightbulb');
        themeBtn1.classList.add('fa-moon');
        themeLink.href = "assets/styles/darkTheme.css";
    }
    else if(localStorage.getItem("Portfolio_Theme") === "light"){
        themeBtn2.classList.remove('fa-moon');
        themeBtn2.classList.add('fa-lightbulb');
        themeLink.href = "assets/styles/lightTheme.css";
        themeBtn1.classList.remove('fa-moon');
        themeBtn1.classList.add('fa-lightbulb');
        themeLink.href = "assets/styles/lightTheme.css";
    }
}