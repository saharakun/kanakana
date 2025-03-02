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
    "ゃ": "ななかか_", "ゅ": "かかなな_", "ょ": "かかかかなな_", "っ": "なななかな_",
    "゛": "-", "゜": "+",
    "1": "なかかかか", "2": "ななかかか", "3": "かななかか", "4": "ななななか", "5": "ななななな",
    "6": "かなかなかなかな", "7": "かなかなかなかか", "8": "かなかなかかかな", "9": "かなかなななかな",
    "0": "ななかなかなかな",
    "a": "k", "b": "kb", "c": "kk", "d": "kbk", "e": "kbb", "f": "kkk", "g": "kkb", "h": "kbkk",
    "i": "kbkb", "j": "bkk", "k": "bkb", "l": "bbk", "m": "kkkk", "n": "bbb", "o": "kkbk", "p": "kkbb",
    "q": "kbkk", "r": "kbkb", "s": "kbbk", "t": "kbbb", "u": "bkkk", "v": "bkbb", "w": "bkbk",
    "x": "bbkk", "y": "bbkb", "z": "bbbk","A" : "k", "B" : "n", "C" : "kb", "D" : "bk", "E" : "kb", "F" : "kkk", "G" : "kkb", "H" : "kbk",
    "I" : "kbb", "J" : "bkk", "K" : "bkb", "L" : "bbk", "N" : "bbb", "M" : "kkkk", "?" : "kkkb",
    "O" : "kkbk", "P" : "kkbb", "Q": "kbkk", "R" : "kbkb", "S" : "kbbk", "T" : "kbbb", "U": "bkkk",
    "!" : "bkkb", "W" : "bkbk", "X" : "bkbb", "Y" : "bbkk", "Z" : "bbkb",
    "!": "bkkb", "?": "kkkb",
    " ": "/"
};

const reverseMorseDict = Object.fromEntries(
    Object.entries(morseDict).map(([key, value]) => [value, key])
);

function convertToMorse() {
    const input = document.getElementById("inputText").value.trim();
    let output = [];

    for (let char of input) {
        if (char === "゛" || char === "゜") {
            output.push(morseDict[char]);
        } else if (char in morseDict) {
            output.push(morseDict[char]);
        } else if (char.length > 1 && (char[1] === "゛" || char[1] === "゜")) {
            const baseChar = char[0];
            const accent = char[1];
            if (baseChar in morseDict && accent in morseDict) {
                output.push(morseDict[baseChar] + " " + morseDict[accent]);
            } else {
                output.push(char);
            }
        } else {
            output.push(char);
        }
    }

    document.getElementById("output").textContent = output.join(" / ");
}

function convertToText() {
    const input = document.getElementById("inputText").value.trim();
    let parts = input.split(" / ");
    let output = [];
    let prevChar = "";

    for (let part of parts) {
        if (part in reverseMorseDict) {
            if (part === "-" || part === "+") {
                if (output.length > 0) {
                    output[output.length - 1] += reverseMorseDict[part];
                }
            } else {
                output.push(reverseMorseDict[part]);
            }
        } else {
            output.push(part);
        }
    }

    document.getElementById("output").textContent = output.join("");
}
        function sendToLine() {
            const result = document.getElementById("output").textContent.trim();
            if (result === "") {
                alert("変換結果がありません");
                return;
            }
            const encodedText = encodeURIComponent(result);
            const lineUrl = `https://line.me/R/msg/text/?${encodedText}`;
            window.open(lineUrl, "_blank");
        }
