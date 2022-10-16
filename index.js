
console.log("正規表現リテラル");
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
console.log(numberRegExp.test("aaa")); // => true
console.log(numberRegExp.test("123")); // => true
console.log(numberRegExp.test("aaa"));
