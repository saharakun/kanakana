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
    "1": "なかかかか", "2": "ななかかか", "3": "かななかか", "4": "ななななか", "5": "ななななな"
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
