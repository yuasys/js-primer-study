// 値の評価と表示
const total = 42 + 42;
console.log(total); // -> 1
const MSG = '私からの特別メッセージですよ〜';
console.log(MSG);
let myMSG = MSG;
console.log('これは、' + MSG);

// タグ付きテンプレート関数：変数を文字列に埋め込む
console.log(`これぞ${myMSG}`);
console.log(`これまた、「${MSG}」ですね`);

// typeof演算子でデータ型を調べる
console.log(typeof true); // => "booean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof 'JavaScript'); // => "string"
console.log(typeof Symbol('シンボル')); // => "symbol"
console.log(typeof undefined); // => "undefind"
console.log(typeof null); // => "object"
console.log(typeof ['配列']); // => "object"
console.log(typeof { key: 'value' }); // => "object"
console.log(typeof function () {}); // => "function"

// プロパティ名は文字列の"123"
const object = {
  123: 'value',
};
// OK: ブラケット記法では、文字列として書くことができる
console.log(object['123']); // => "value"
// NG: ドット記法では、数値からはじまる識別子は利用できない
// object.123
console.log("正規表現");
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
console.log(numberRegExp.test("123")); // => true
