// const GameMsg = document.querySelector('#productDescription');
var requestURL = '../json/data.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var GameList = request.response;
    loadData(GameList);
}

function loadData(jsonObj) {
    var GameList = jsonObj['GAMELIST'];

    var GameName = document.querySelector('#GameName');
    var pageImg = document.querySelector('#pageImg img');
    var Link1 = document.querySelector('#Link1');
    var Link2 = document.querySelector('#Link2');
    var GameMain1 = document.querySelector('#GameMain1')
    var GameMain2 = document.querySelector('#GameMain2')
    var GameMain3 = document.querySelector('#GameMain3')
    var GameMain4 = document.querySelector('#GameMain4')

    function getNum(btnNo) {
        Num = btnNo.target.dataset.no;
        GameName.textContent = GameList[Num].name;
        pageImg.setAttribute('src', GameList[Num].img)
        Link1.setAttribute('href', GameList[Num].link1);
        Link2.setAttribute('href', GameList[Num].link2);
        GameMain1.textContent = GameList[Num].main1;
        GameMain2.textContent = GameList[Num].main2;
        GameMain3.textContent = GameList[Num].main3;
        GameMain4.textContent = GameList[Num].main4;
    }

    var el = document.body;
    el.addEventListener('click', getNum, false);
    
}
let btnNo = document.querySelectorAll('[name="btn"]');
for(var j = 0; j < btnNo.length ; j++) {
    btnNo[j].addEventListener('click', loadData,false);
}

