"use strict";

// 指定した文字を除いて出力する関数
function removeTarget(input) {
    // 除外する文字列を定義
    let target = "aiueo";
    // 文字列を配列に変換する
    target = target.split("");
    
    // 入力文字列を配列に変換する
    let inputArr = Array.from(input);
    // console.log(inputArr);

    // 除外した結果を配列にする
    for (let i = 0; i < inputArr.length; i++) {
        for (let x = 0; x < target.length; x++) {
            if (inputArr[i] == target[x]) {
                delete inputArr[i];
            }
        }
    }
    // 配列から文字列に変換する
    let result = inputArr.join("");
    return result;
}


// HTMLの表示領域を定義
let _input = document.getElementById("input");
let _output = document.getElementById("output");


// 結果を表示する関数
function makePassword() {
    let result = removeTarget(_input.value);
    _output.innerHTML = result;
    _input.value = "";
}
