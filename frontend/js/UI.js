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

const defineBtnElem = document.querySelector('.define-winner-btn');

const TEAMS_COLORS = {
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

resultFrame.setWinner = function(teamColor) {
    if (!Object.keys(TEAMS_COLORS).includes(teamColor)) throw new SyntaxError("Team name doesn't exist");

    resultFrame.reset();
    resultFrame.setText(TEAMS_COLORS[teamColor].text);
    resultFrame.setColor(TEAMS_COLORS[teamColor].colorStyle);
}

resultFrame.setColor = function (colorStyle) {
    if (!Object.values(TEAMS_COLORS).find(team => {
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

resultFrame.setErrorMessage = function () {
    resultFrame._elem.classList.add('result-frame_error-message');
}

export {teamsInputs, defineBtnElem, resultFrame};
