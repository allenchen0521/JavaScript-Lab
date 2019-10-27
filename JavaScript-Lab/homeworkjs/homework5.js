let yobj, mobj, dobj;
document.addEventListener("DOMContentLoaded", function() {
    yearF();
    monthF();

    yobj = document.getElementById("idSelectYear");
    mobj = document.getElementById("idSelectMonth");
    dobj = document.getElementById("idSelectDay");
    yobj.addEventListener("change", dateF);
    mobj.addEventListener("change", dateF);

    dobj.addEventListener("change", infor);
});

function yearF() {
    for(let i=2010;i<=2020;i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);

        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);

        document.getElementById("idSelectYear").appendChild(opt);
    }
}

function monthF() {
    for(let i=1;i<=12;i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);

        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);

        document.getElementById("idSelectMonth").appendChild(opt);
    }
}

function dateF() {
    let yvalue = yobj.value;
    let mvalue = mobj.value;

    // 8月的第0天就是7月的最後一天
    // alert(`${yvalue}/${mvalue}`);

    // let dobj = new Date(yvalue, mvalue, 0);
    let d = new Date(yvalue, mvalue, 0);
    let date = d.getDate();

    document.getElementById("idSelectDay").innerHTML = "";
    for(let i=1;i<=date;i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);

        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        document.getElementById("idSelectDay").appendChild(opt);
    }

}

function infor() {
    let yvalue = yobj.value;
    let mvalue = mobj.value;
    let dvalue = dobj.value;

    document.getElementById("idInfor").innerHTML = `<p>您選擇的日期是 ${yvalue} 年 ${mvalue} 月 ${dvalue} 日</p>`
}