const RADIANT = 'radiant';
const DIRE = 'dire';

function defineWinningTeam(teamsParameters) {
    const {
        r_kills,
        d_kills,
        r_gold,
        d_gold,
        r_level,
        d_level,
        r_towers,
        d_towers,
        r_power,
        d_power,
        roshans_killed_r,
        roshans_killed_d,
    } = teamsParameters;

    if (r_kills > d_kills) {
        if (r_gold > d_kills) {
            if (r_level > d_level) return RADIANT
            if (r_towers > d_towers) return RADIANT
            if (r_power > d_power) return RADIANT
            return DIRE
        }
        if (r_level > d_level) {
            if (roshans_killed_r > roshans_killed_d) return RADIANT
            return DIRE
        }
        if (r_towers > d_towers) {
            if (r_power > d_power) return RADIANT
            return DIRE
        }
        return DIRE
    }
    if (r_gold < d_kills) {
        if (r_level < d_level) return DIRE
        if (r_towers < d_towers) return DIRE
        if (r_power < d_power) return DIRE
        return RADIANT
    }
    if (r_level < d_level) {
        if (roshans_killed_r < roshans_killed_d) return DIRE
        return RADIANT
    }
    if (r_towers < d_towers) {
        if (r_power < d_power) return DIRE
        return RADIANT
    }
    return RADIANT
}

export {defineWinningTeam};