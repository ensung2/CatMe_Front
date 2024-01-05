const url = 'https://catme.netlify.app/';

function setShare() {
    var resultImg = document.querySelector(".result_img");
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '두근두근 당신의 고양이는?';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image_' + resultAlt + '.PNG';
    const shareURL = url + 'page/result_' + resultAlt + ".html";

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl:
            shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },
        buttons: [
            {
                title: '결과 확인하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL
                }
            },
        ],
    });

}

function kakaoShare(){
Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl:
            shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },
        buttons: [
            {
                title: '결과 확인하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL
                }
            },
        ],
    });}