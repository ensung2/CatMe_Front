const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 10;
const select =[0,0,0,0,0,0,0,0,0,0,0,0,0];

/* 가장 많이 선택한 타입을 결과 화면으로 보여주는 계산식 */
function calResult() {
/*    var pointArray = [
        {name: 'forest', value:0, key:0},
        {name: 'ragdoll', value:0, key:1},
        {name: 'blue', value:0, key:2},
        {name: 'munchikin', value:0, key:3},
        {name: 'bengal', value:0, key:4},
        {name: 'british', value:0, key:5},
        {name: 'siamese', value:0, key:6},
        {name: 'fold', value:0, key:7},
        {name: 'sphynx', value:0, key:8},
        {name: 'american', value:0, key:9},
        {name: 'abyssinian', value:0, key:10},
        {name: 'angora', value:0, key:11},
        {name: 'persian', value:0, key:12},]
    for (let i=0; i< endPoint; i++) {
        var target = qnaList[i].a[select[i]]; // select에 결과 담김 (0 or 1)
        for (let j=0; j< target.type.length; j++) {  // 타입의 반복
            for (let k=0; k < pointArray.length; k++) {
                if (target.type[j] === pointArray[k].name) {
                    pointArray[k].value +=1;        // value가 높은 값이 결과로 출력됨
                }
            }
        }
    }
        var resultArray = pointArray.sort(function (a,b) {
            if (a.value > b.value) {
                return -1;
            }
            if (a.value < b.value) {
                return 1;
            }
            return 0;
        });*/
    console.log(select);
                                        // 최대값 반환 (...전개구문 = 선택한 배열 펼침) = 최대값을 갖고있는 인덱스 반환
    var result = select.indexOf(Math.max(...select));
    return result;
    // console.log(resultArray);
    // let resultword = resultArray[0].key;
    // return resultword;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.result_name');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('.result_img');
    var imgURL = 'img/image_' + point + '.PNG';
    resultImg.src = imgURL;
    resultImg.alt = point;
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.result_desc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display = "none";
            result.style.display = "block";
        },450)})

    setResult();
}

function addAnswer(answerText, qIdx, idx) {
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
            var target = qnaList[qIdx].a[idx].type;
            for (let i=0; i < target.length; i++) {
                select[target[i]] += 1;
            }
            for (let i = 0; i<children.length; i++) {
                children[i].style.display="none";
            }
        goNext(++qIdx);
        } ,450)
    }, false);
}

function goNext(qIdx) {
    if(qIdx === endPoint) {
        goResult();
        return;
    }
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
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
