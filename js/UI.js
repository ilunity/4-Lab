const ERROR_INPUT_STYLE = 'input-table__input_error';

const firstTeamInputElems = {
    kills: document.getElementById('first-team__kills'),
    gold: document.getElementById('first-team__gold'),
    level: document.getElementById('first-team__level'),
    towers: document.getElementById('first-team__towers'),
    power: document.getElementById('first-team__power'),
    bossKills: document.getElementById('first-team__boss-kills'),
}

const secondTeamInputElems = {
    kills: document.getElementById('second-team__kills'),
    gold: document.getElementById('second-team__gold'),
    level: document.getElementById('second-team__level'),
    towers: document.getElementById('second-team__towers'),
    power: document.getElementById('second-team__power'),
    bossKills: document.getElementById('second-team__boss-kills'),
}

const teamsInputs = {
    firstTeam: firstTeamInputElems,
    secondTeam: secondTeamInputElems,
}

function setErrorInputStyle(errorInput) {
    errorInput.classList.add(ERROR_INPUT_STYLE);
}

function removeErrorInputStyle(errorInput) {
    errorInput.classList.remove(ERROR_INPUT_STYLE);
}

const defineBtnElem = document.querySelector('.btns-panel__define-winner');


const resetBtnElem = document.querySelector('.btns-panel__reset');

resetBtnElem.addEventListener('click', resetApp);

function resetApp() {
    Object.values(teamsInputs).forEach((teamsInputs) => {
        Object.values(teamsInputs).forEach((input) => {
            input.value = '';
            removeErrorInputStyle(input);
        })
    })
    resultFrame.reset();
}


const TEAMS = {
    dire: {
        colorStyle: 'result-frame_red',
        text: 'Победа сил Тьмы!',
    },
    radiant: {
        colorStyle: 'result-frame_blue',
        text: 'Победа сил Света!',
    },
}

const resultFrame = {
    _elem: document.querySelector('.result-frame'),
    currentColorStyle: null,
}

resultFrame.setWinner = function(teamName) {
    if (!Object.keys(TEAMS).includes(teamName)) throw new SyntaxError("Team name doesn't exist");

    resultFrame.reset();
    resultFrame.setText(TEAMS[teamName].text);
    resultFrame.setColor(TEAMS[teamName].colorStyle);
}

resultFrame.setColor = function (colorStyle) {
    if (!Object.values(TEAMS).find(team => {
        return team.colorStyle === colorStyle;
    })) throw new SyntaxError("Color doesn't exist");

    resultFrame.currentColorStyle = colorStyle;
    resultFrame._elem.classList.add(colorStyle);
}

resultFrame.setText = function (text) {
    resultFrame._elem.textContent = text;
}

resultFrame.reset = function () {
    resultFrame._elem.classList.remove(resultFrame.currentColorStyle);
    resultFrame._elem.classList.remove('result-frame_error-message');
    resultFrame.currentColorStyle = null;
    resultFrame._elem.textContent = "";
}

resultFrame.setErrorInputMessage = function () {
    resultFrame._elem.classList.add('result-frame_error-message');
}

export {teamsInputs, setErrorInputStyle, removeErrorInputStyle, defineBtnElem, resultFrame};
