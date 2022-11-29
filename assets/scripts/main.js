var themeBtn1 = document.querySelector(".themeBtn1");
var themeBtn2 = document.querySelector(".themeBtn2");
var themeLink = document.querySelector("#themeLink");
var workImage = document.querySelector(".workImage");

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

function forceDownload(blob, filename) {
    var a = document.createElement('a');
    a.download = filename;
    a.href = blob;
    // For Firefox https://stackoverflow.com/a/32226068
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  
  // Current blob size limit is around 500MB for browsers
  function downloadResource(url, filename) {
    if (!filename) filename = url.split('\\').pop().split('/').pop();
    fetch(url, {
        headers: new Headers({
          'Origin': location.origin
        }),
        mode: 'cors'
      })
      .then(response => response.blob())
      .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        forceDownload(blobUrl, filename);
      })
      .catch(e => console.error(e));
  }