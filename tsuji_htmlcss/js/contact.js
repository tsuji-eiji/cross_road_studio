'use strict';

window.onload = function getRoomId() {
    const url = location.href;
    const roomId = url.split('?id=');
    if (roomId[1] == undefined) {
        document.getElementById('studio').value = 'a';
    } else {
        document.getElementById('studio').value = roomId[1];
    }
}

function search() {
    const id = document.getElementById('data-form').id.value;
    const password = document.getElementById('data-form').password.value;
//    console.log(id + password);
//    TODO:DBからユーザ情報を取ってくる
    document.getElementById('data-form').name.value ='山田太郎';
    document.getElementById('data-form').tel.value ='09011112222';
}


function reserve() {
    //パラメータ取得
    const name = document.getElementById('data-form').name.value ;
    const tel = document.getElementById('data-form').tel.value ;
    const date = document.getElementById('data-form').date.value ;
    const studio = document.getElementById('data-form').studio.value ;
    const start = document.getElementById('data-form').start.value ;
    const number = document.getElementById('data-form').number.value ;
    const time = document.getElementById('data-form').time.value ;
    //入力チェック
    
}