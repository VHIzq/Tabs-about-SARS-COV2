/* selecting items */
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");

/* crating events and functions */
tab1.addEventListener("click", showInfo1);
tab2.addEventListener("click", showInfo2);
tab3.addEventListener("click", showInfo3);

function showInfo1(){
    info1.style.display = "block";
    info2.style.display = "none";
    info3.style.display = "none";
}
function showInfo2(){
    info2.style.display = "block";
    info1.style.display = "none";
    info3.style.display = "none";
}
function showInfo3(){
    info3.style.display = "block";
    info1.style.display = "none";
    info2.style.display = "none";
}


