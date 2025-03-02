const morseDict = {
    "あ": "かかなかか", "い": "なか", "う": "ななか", "え": "なかななな", "お": "なかなな",
    "か": "なかななか", "き": "かなかなな", "く": "なななかか", "け": "かなかか", "こ": "かかかか",
    "さ": "かなかなか", "し": "かかなかな", "す": "かかかな", "せ": "なかかかな", "そ": "かかかなか",
    "た": "かな", "ち": "ななかなな", "つ": "なななかな", "て": "なかなか", "と": "ななかなかな",
    "な": "なかな", "に": "かなかなかな", "ぬ": "なななな", "ね": "かかななな", "の": "ななかかな",
    "は": "かななな", "ひ": "かななかかな", "ふ": "ななかな", "へ": "な", "ほ": "かななななな",
    "ま": "かななか", "み": "ななかなか", "む": "か", "め": "かなななか", "も": "かななかな",
    "や": "ななかか", "ゆ": "かかなな", "よ": "かかかかなな", "ら": "ななな", "り": "かかなか",
    "る": "かなかかな", "れ": "なななか", "ろ": "かかか", "ん": "かなかな",
    "1": "なかかかか", "2": "ななかかか", "3": "かななかか", "4": "ななななか", "5": "ななななな",
    "6" : "かなかなかなかな" , "7" : "かなかなかなかか", "8" : "かなかなかかかな", "9" : "かなかなななかな",
    "0" : "ななかなかなかな","が": "なかななか-", "ぎ": "かなかなな-", "ぐ": "なななかか-", "げ": "かなかか-", "ご": "かかかか-",
    "ざ": "かなかなか-", "じ": "かかなかな-", "ず": "かかかな-", "ぜ": "なかかかな-", "ぞ": "かかかなか-",
    "だ": "かな-", "ぢ": "ななかなな-", "づ": "なななかな-", "で": "なかなか-", "ど": "ななかなかな-",
    "ば": "かななな-", "び": "かななかかな-", "ぶ": "ななかな-", "べ": "な-", "ぼ": "かななななな-",
    "ぱ": "かななな+", "ぴ": "かななかかな+", "ぷ": "ななかな+", "ぺ": "な+", "ぽ": "かななななな+",
    "a" : "k", "b" : "b", "c" : "kb", "d" : "bk", "e" : "kb", "f" : "kkk", "g" : "kkb", "h" : "kbk",
    "i" : "kbb", "j" : "bkk", "k" : "bkb", "l" : "bbk", "n" : "bbb", "m" : "kkkk",
    "o" : "kkbk", "p" : "kkbb", "q": "kbkk", "r" : "kbkb", "s" : "kbbk", "t" : "kbbb", "u": "bkkk",
    "w" : "bkbk", "x" : "bkbb", "y" : "bbkk", "z" : "bbkb",
    "A" : "k", "B" : "n", "C" : "kb", "D" : "bk", "E" : "kb", "F" : "kkk", "G" : "kkb", "H" : "kbk",
    "I" : "kbb", "J" : "bkk", "K" : "bkb", "L" : "bbk", "N" : "bbb", "M" : "kkkk", "?" : "kkkb",
    "O" : "kkbk", "P" : "kkbb", "Q": "kbkk", "R" : "kbkb", "S" : "kbbk", "T" : "kbbb", "U": "bkkk",
    "!" : "bkkb", "W" : "bkbk", "X" : "bkbb", "Y" : "bbkk", "Z" : "bbkb"
};

const reverseMorseDict = Object.fromEntries(
    Object.entries(morseDict).map(([key, value]) => [value, key])
);

function convertToMorse() {
    const input = document.getElementById("inputText").value.trim();
    const output = input.split("").map(char => morseDict[char] || char).join(" / ");
    document.getElementById("output").textContent = output;
}

function convertToText() {
    const input = document.getElementById("inputText").value.trim();
    const output = input.split(" / ").map(code => reverseMorseDict[code] || code).join("");
    document.getElementById("output").textContent = output;
}
