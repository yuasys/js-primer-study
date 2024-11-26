// 値の評価と表示
const total = 42 + 42;
console.log(total); // -> 84
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
