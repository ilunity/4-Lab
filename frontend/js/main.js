import {teamsInputs, defineBtnElem, resultFrame} from './UI.js';
import {defineWinningTeam} from './backendAPI.js';


function forEachErrorInput(callback) {
    Object.values(teamsInputs).forEach((teamInputs) => {
        Object.values(teamInputs).forEach((inputElem) => {
            if (!inputElem.value) {
                callback(inputElem);
            }
        })
    });
}

function getTeamParameters() {
    const teamParameters = {
        r_kills: teamsInputs.firstTeam.kills.value,
        d_kills: teamsInputs.secondTeam.kills.value,
        r_gold: teamsInputs.firstTeam.gold.value,
        d_gold: teamsInputs.secondTeam.gold.value,
        r_level: teamsInputs.firstTeam.level.value,
        d_level: teamsInputs.secondTeam.level.value,
        r_towers: teamsInputs.firstTeam.towers.value,
        d_towers: teamsInputs.secondTeam.towers.value,
        r_power: teamsInputs.firstTeam.power.value,
        d_power : teamsInputs.secondTeam.power.value,
        roshans_killed_r: teamsInputs.firstTeam.bossKills.value,
        roshans_killed_d: teamsInputs.secondTeam.bossKills.value,
    }

    return teamParameters;
}

function checkInputCorrect(inputElem) {
    return inputElem.value && inputElem.value >= 0;
}


//Object.values(teamsInputs).forEach(teamInputs => {
//    Object.values(teamInputs).forEach(inputElem => {
//        inputElem.addEventListener('blur', () => {
//            if (!checkInputCorrect(inputElem)) {
//                resultFrame.reset();
//                inputElem.classList.add('input-table__input_error');
//                inputElem.focus();
//                return;
//            }
//
//            inputElem.classList.remove('input-table__input_error');
//        });
//    });
//});

defineBtnElem.addEventListener('click', () => {
    resultFrame.reset();
    let isErrorsExists = false;
    forEachErrorInput(errorInput => {
        isErrorsExists = true;
        errorInput.classList.add('input-table__input_error');
    })
    if (isErrorsExists) {
        resultFrame.setErrorMessage();
        return;
    }

    defineWinningTeam(
        getTeamParameters(),
        resultFrame.setWinner,
    );
})