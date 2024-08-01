const answerList = [
    "carts","money","again","which","there","their","about","would","these","other","words","could","write","first","water","after","where","right","think"
];

const gridId = [
    ["gridOneOne",
        "gridOneTwo",
        "gridOneThree",
        "gridOneFour",
        "gridOneFive"],
    ["gridTwoOne",
        "gridTwoTwo",
        "gridTwoThree",
        "gridTwoFour",
        "gridTwoFive"],
    ["gridThreeOne",
        "gridThreeTwo",
        "gridThreeThree",
        "gridThreeFour",
        "gridThreeFive"],
    ["gridFourOne",
        "gridFourTwo",
        "gridFourThree",
        "gridFourFour",
        "gridFourFive"],
    ["gridFiveOne",
        "gridFiveTwo",
        "gridFiveThree",
        "gridFiveFour",
        "gridFiveFive"],
    ["gridSixOne",
        "gridSixTwo",
        "gridSixThree",
        "gridSixFour",
        "gridSixFive"],
]

let answer;
let j;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function onPageLoad() {
    answer = answerList[getRandomInt(answerList.length)];
    j = 0;
    console.log(answer);
}

function submitFunction() {
    let newGuess = document.getElementById("submitInput").value

    if(newGuess.length == 5) {

        for (let i = 0; i < 5; i++) {
            if (newGuess[i] == answer[i]) {
                document.getElementById(gridId[j][i]).style.backgroundColor = "#218000";
                document.getElementById(gridId[j][i]).style.borderColor = "#5EA504";
            } else if (newGuess[i] == answer[0] || newGuess[i] == answer[1] || newGuess[i] == answer[2] || newGuess[i] == answer[3] || newGuess[i] == answer[4]) {
                document.getElementById(gridId[j][i]).style.backgroundColor = "#f6d835";
                document.getElementById(gridId[j][i]).style.borderColor = "#f8efe0";
            } else {
                document.getElementById(gridId[j][i]).style.backgroundColor = '#e6e6e6'
            }
        }

        j++;
        document.getElementById("notifText").style.visibility = "hidden";

    } else {
        document.getElementById("notifText").style.visibility = "visible";
    }

    document.getElementById("submitInput").value = "";
}

function search(ele) {
    if(event.key === 'Enter') {
        submitFunction();
    }
}

// https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt
