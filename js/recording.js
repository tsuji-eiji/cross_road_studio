'use strict';


function reserve() {
    //パラメータ取得
    const param = document.getElementById('rec-form');
    const name = param.name.value;
    const tel = param.tel.value;
    const content = param.content.value;
    //入力チェック
    const msg = new Array;
    //名前
    if (name == '') {
        msg.push('名前を入力してください。');
        param.name.style.background = 'rgba(240,65,86,0.55)';
    }
    //電話番号
    if (tel == '') {
        msg.push('電話番号を入力してください。');
        param.tel.style.background = 'rgba(240,65,86,0.55)';
    } else if (!libphonenumber.isValidNumber(tel, 'JP')) {
        msg.push('正しい電話番号を入力してください。');
        param.tel.style.background = 'rgba(240,65,86,0.55)';
    }
    //内容
    if (content == '') {
        msg.push('内容を入力してください。');
        param.content.style.background = 'rgba(240,65,86,0.55)';
    }
    //エラーメッセージ表示
    let outmsg ='';
    let i = 0;
    //出力用メッセージ編集
    while (i < msg.length) {
        outmsg += msg[i];
        outmsg += '\n';
        i++;
    }
    //エラーメッセージがあれば出力
    if(outmsg !== ''){
       window.alert(outmsg);
        return false;
       }
    //完了画面へ遷移
    location.href = 'sent.html';
}
