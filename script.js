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
    "6": "かなかなかなかな", "7": "かなかなかなかか", "8": "かなかなかかかな", "9": "かなかなななかな",
    "0": "ななかなかなかな",
    "a": "k", "b": "kb", "c": "kk", "d": "kbk", "e": "kbb", "f": "kkk", "g": "kkb", "h": "kbkk",
    "i": "kbkb", "j": "bkk", "k": "bkb", "l": "bbk", "m": "kkkk", "n": "bbb", "o": "kkbk", "p": "kkbb",
    "q": "kbkk", "r": "kbkb", "s": "kbbk", "t": "kbbb", "u": "bkkk", "v": "bkbb", "w": "bkbk",
    "x": "bbkk", "y": "bbkb", "z": "bbbk",
    "A": "k", "B": "kb", "C": "kk", "D": "kbk", "E": "kbb", "F": "kkk", "G": "kkb", "H": "kbkk",
    "I": "kbkb", "J": "bkk", "K": "bkb", "L": "bbk", "M": "kkkk", "N": "bbb", "O": "kkbk", "P": "kkbb",
    "Q": "kbkk", "R": "kbkb", "S": "kbbk", "T": "kbbb", "U": "bkkk", "V": "bkbb", "W": "bkbk",
    "X": "bbkk", "Y": "bbkb", "Z": "bbbk",
    "!": "bkkb", "?": "kkkb",
    " ": "/"
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
