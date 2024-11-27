# Step 02

## 学習内容 

オブジェクト型のサンプルコード 

1. 値の取得と表示（全体）
1. 値の取得と表示（個別プロパティのキーを指定）
1. プロパティの値を更新（個別プロパティのキーを指定）
2. 新規プロパティの追加
3. プロパティの削除
4. プロパティ名のキーを変数で設定
5. プロパティ名とプロパティ値の変数名が同じ場合の省略法

```javascript
/*---------------------------------
[step02]オブジェクト型のサンプルコード
---------------------------------*/

let result = {
  name: '山田太郎',// プロパティ key(name): value('山田太郎')
  age: 26// プロパティ key(age): value(26)
}



// 値の取得と表示（全体）
console.log(result);// => {name: '山田太郎', age: 26}

// 値の取得と表示（個別プロパティのキーを指定）
console.log(result.name);// => '山田太郎'
console.log(result.age);// => 26

// プロパティの値を更新（個別プロパティのキーを指定）
result.age = 27;
console.log(result);// => {name: '山田太郎', age: 27}

// 新規プロパティの追加
result.hasPet = false;
console.log(result);// => {name: '山田太郎', age: 27, gender: '男性'}

// プロパティの削除
delete result.hasPet;
console.log(result);// => {name: '山田太郎', age: 27}

// プロパティ名のキーを変数で設定
let gender = 'male';
result.gender = gender;
console.log(result);// => {name: '山田太郎', age: 27, gender: 'male'}

// プロパティ名とプロパティ値の変数名が同じ場合の省略法
delete result.gender;// 削除
console.log(result);// => {name: '山田太郎', age: 27}

gender = 'female';
result = {
  name: '山田花子',
  age: 25,
  gender  // 省略記法
}
console.log(result);// => {name: '山田花子', age: 25, gender: 'female'}

```

