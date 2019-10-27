// 宣告全區域變數
let adObj = new Array();
let smalladObj = new Array();
let adStart = 0, max = 5;
let adArr = ["ad1", "ad2", "ad3", "ad4", "ad5"];
let checkStop = false;
let carouselId;


document.addEventListener("DOMContentLoaded", function() {
    for(let i=0;i<adArr.length;i++) {
        adObj[i] = document.getElementById(adArr[i]);
        adObj[i].index = i;
    }
    /* 廣告輪播 button binding */
    document.getElementById("stopbut").addEventListener("click", mediaStop);
    document.getElementById("nextbut").addEventListener("click", mediaNext);
    document.getElementById("prebut").addEventListener("click", mediaPre);

    /* 廣告輪播縮圖 binding */
    smalladObj = document.querySelectorAll(".smallimg");
    for(let i=0;i<smalladObj.length;i++) {
        smalladObj[i].index = i;
        smalladObj[i].addEventListener("mouseover", mediamouseover);
    }
});

function mediaStop() {
    if(checkStop != true) {
        clearInterval(carouselId);
        this.src = "img/play.png";
        checkStop = true;
    } else {
        carouselId = setInterval(carousel, 2000);
        this.src = "img/pause.png";
        checkStop = false;
    }
}

function mediaNext() {
    smalladObj[adStart].style.border = "0px";
    adObj[adStart].style.opacity = 0;
    adObj[adStart].style.zIndex = 0;
    if((adStart+1) < max) {adStart++;} else { adStart = 0;}
    console.log(`這是 Next ${adStart+1}`);
    adObj[adStart].style.opacity = 1;
    adObj[adStart].style.zIndex = 9999;
    smalladObj[adStart].style.border = "5px solid hotpink";
}

function mediaPre() {
    smalladObj[adStart].style.border = "0px";
    adObj[adStart].style.opacity = 0;
    adObj[adStart].style.zIndex = 0;
    if((adStart-1) >= 0) { adStart--;} else { adStart = (max-1);}
    console.log(`這是 Pre ${adStart+1}`);
    adObj[adStart].style.opacity = 1;
    adObj[adStart].style.zIndex = 9999;
    smalladObj[adStart].style.border = "5px solid hotpink";
}

function mediamouseover() {
    smalladObj[adStart].style.border = "0px";
    adObj[adStart].style.opacity = 0;
    adObj[adStart].style.zIndex = 0;
    adStart = this.index;
    console.log(`縮圖 ${adStart+1}`);
    adObj[adStart].style.opacity = 1;
    adObj[adStart].style.zIndex = 9999;
    smalladObj[adStart].style.border = "5px solid hotpink";
}

function carousel() {
    adObj[adStart].style.opacity = 0;
    adObj[adStart].style.zIndex = 0;
    if((adStart+1) < max) {adStart++;} else { adStart = 0;}
    console.log(adStart)
    adObj[adStart].style.opacity = 1;
    adObj[adStart].style.zIndex = 9999;

    let last;
    if((adStart-1) >= 0) last = adStart-1; else last = (max-1);
    smalladObj[last].style.border = "0px";
    smalladObj[adStart].style.border = "5px solid hotpink";
}

carouselId = setInterval( carousel, 3000);