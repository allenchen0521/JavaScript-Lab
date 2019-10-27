let imgArr = ["star1","star2","star3","star4","star5"];
let currentIndex = -1;
let clickCheck = false;
let targetStar;

document.addEventListener("DOMContentLoaded", function() {
    for(let i=0;i<imgArr.length;i++) {
        let starObj = document.getElementById(imgArr[i]);
        starObj.index = i;
        starObj.addEventListener("mouseover", scoreStar);
        starObj.addEventListener("mouseout", clearStar);
        starObj.addEventListener("click", clickStar);
        starObj.addEventListener("dblclick", noneStar);
    }
});

function scoreStar() {
    let mouseIndex = this.index;
    if(clickCheck == false) {
        for(let i=0;i<=mouseIndex;i++) {
            document.getElementById(imgArr[i]).src = "img/chngstar.gif";
            document.getElementById("starscore").innerHTML = `打分中...${i+1}`;
        }
    }
    targetStar = mouseIndex;
}

function clearStar() {
    let mouseIndex = this.index;
    if(clickCheck == false) {
        for(let i=0;i<=mouseIndex;i++) {
            document.getElementById(imgArr[i]).src = "img/star.gif";
            document.getElementById("starscore").innerHTML = `打分中...0`;
        }
    }
}

function clickStar() {
    noneStar();
    clickCheck = true;

    if(clickCheck) {
        for(let i=0;i<=targetStar;i++) {
            document.getElementById(imgArr[i]).src = "img/chngstar.gif";
            document.getElementById("starscore").innerHTML = `打分中...${i+1}`;
        }
    }
}

function noneStar() {
    let mouseIndex = imgArr.length-1;
    if(clickCheck) {
        for(let i=0;i<=mouseIndex;i++) {
            document.getElementById(imgArr[i]).src = "img/star.gif";
            document.getElementById("starscore").innerHTML = `打分中...0`;
        }
    }
    clickCheck = false;
}