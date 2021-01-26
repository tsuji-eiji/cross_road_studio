'use strict';
/*jshint esversion:6, node:true*/
/*globals window*/

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
    console.log(id + password);
    //    TODO:DBからユーザ情報を取ってくる
    document.getElementById('data-form').name.value = '山田太郎';
    document.getElementById('data-form').tel.value = '09011112222';
}


function reserve() {
    //パラメータ取得
    const param = document.getElementById('data-form');
    const name = param.name.value;
    const tel = param.tel.value;
    const date = param.date.value;
    const studio = param.studio.value;
    const start = param.start.value;
    const number = param.number.value;
    const time = param.time.value;
	const errClr = 'rgba(240,65,86,0.55)';
	//リフレッシュ
	param.name.style.background = null;
	param.tel.style.background = null;
	param.date.style.background = null;
	param.studio.style.background = null;
	param.number.style.background = null;
    //入力チェック
    const msg = new Array;
    //名前
    if (name == '') {
        msg.push('名前を入力してください。');
        param.name.style.background = errClr;
    }
    //電話番号
    if (tel == '') {
        msg.push('電話番号を入力してください。');
        param.tel.style.background = errClr;
    }
    //日程
    if (date == '') {
        msg.push('日程を入力してください。');
        param.date.style.background = errClr;
    }
    //希望スタジオ
    if (studio == '') {
        msg.push('希望スタジオを選択してください。');
        param.studio.style.background = errClr;
    }
    //人数
    if (number == '') {
        msg.push('人数を入力してください。');
        param.number.style.background = errClr;
    } else if (number < 1) {
        msg.push('正しい人数を入力してください。');
        param.number.style.background = errClr;
    }

    //エラーメッセージ表示
    let outmsg = '';
    if (msg.length > 0) {
        for (let item of msg) {
            outmsg += item;
            outmsg += '\n';
        }
        window.alert(outmsg);
        return false;
    } else {
        return true;
    }
}
