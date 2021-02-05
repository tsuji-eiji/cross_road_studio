'use strict';


function reserve() {
	//パラメータ取得
	const param = document.getElementById('rec-form');
	const name = param.name.value;
	const mail = param.mail.value;
	const tel = param.tel.value.replaceAll('-', '');
	const content = param.content.value;
	const errClr = 'rgba(240,65,86,0.55)';
	//リフレッシュ
	param.name.style.background = null;
	param.tel.style.background = null;
	param.mail.style.background = null;
	param.content.style.background = null;
	//入力チェック
	const msg = new Array;
	//名前
	if (name === '') {
		msg.push('名前を入力してください。');
		param.name.style.background = errClr;
	}
	//電話番号
	if (tel === '') {
		msg.push('電話番号を入力してください。');
		param.tel.style.background = errClr;
	}
	//メールアドレス
	if (mail === '') {
		msg.push('メールアドレスを入力してください。');
		param.mail.style.background = errClr;
	} else if (mail.split('@').length !== 2) {
		msg.push('正しいメールアドレスを入力してください。');
		param.mail.style.background = errClr;
	}
	//内容
	if (content === '') {
		msg.push('内容を入力してください。');
		param.content.style.background = errClr;
	}
	//エラーメッセージ表示
	let outmsg = '';
	let i = 0;
	//出力用メッセージ編集
	while (i < msg.length) {
		outmsg += msg[i];
		outmsg += '\n';
		i++;
	}
	//エラーメッセージがあれば出力
	if (outmsg !== '') {
		window.alert(outmsg);
		return false;
	}


	//完了画面へ遷移
	location.href = 'sent.html';
}
