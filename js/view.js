const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 10;

function addAnswer(answerText, qIdx) {
    var a = document.querySelector(".answerBox");
    var answer = document.createElement("button");
    answer.classList.add("answerList");
    answer.classList.add("fadeIn");
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function (){
        var children = document.querySelectorAll(".answerList");
        for (let i = 0; i<children.length; i++) {
            children[i].disabled = true;
            children[i].style.animation = "fadeOut 1s"
        }
        setTimeout(()=>{
            for (let i = 0; i<children.length; i++) {
                children[i].style.display="none";
            }
        goNext(++qIdx);
        } ,950)
    }, false);
}

function goNext(qIdx) {
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
    var status = document.querySelector(".status_bar");
    status.style.width = (100/endPoint) * (qIdx+1) + "%";
}
function begin() {
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        },450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450)
}