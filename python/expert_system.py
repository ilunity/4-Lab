def define_winner(data):
    r_kills = int(data['r_kills'])
    d_kills = int(data['d_kills'])
    r_gold = int(data['r_gold'])
    d_gold = int(data['d_gold'])
    r_level = int(data['r_level'])
    d_level = int(data['d_level'])
    r_towers = int(data['r_towers'])
    d_towers = int(data['d_towers'])
    r_power = int(data['r_power'])
    d_power = int(data['d_power'])
    roshans_killed_r = int(data['roshans_killed_r'])
    roshans_killed_d = int(data['roshans_killed_d'])

    if r_kills > d_kills:
        if r_gold > d_kills:
            if r_level > d_level:
                return "radiant"
            elif r_towers > d_towers:
                return "radiant"
            elif r_power > d_power:
                return "radiant"
            else:
                return "dire"
        else:
            if r_level > d_level:
                if roshans_killed_r > roshans_killed_d:
                    return "radiant"
                else:
                    return "dire"
            else:
                if r_towers > d_towers:
                    if r_power > d_power:
                        return "radiant"
                    else:
                        return "dire"
                else:
                    return "dire"
    else:
        if r_gold < d_kills:
            if r_level < d_level:
                return "dire"
            elif r_towers < d_towers:
                return "dire"
            elif r_power < d_power:
                return "dire"
            else:
                return "radiant"
        else:
            if r_level < d_level:
                if roshans_killed_r < roshans_killed_d:
                    return "dire"
                else:
                    return "radiant"
            else:
                if r_towers < d_towers:
                    if r_power < d_power:
                        return "dire"
                    else:
                        return "radiant"
                else:
                    return "radiant"
