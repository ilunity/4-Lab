import eel
import python.expert_system as es


@eel.expose
def process_data(team_parameters):
    winning_team = es.define_winner(team_parameters)
    return winning_team


eel.init('frontend')
eel.start('index.html', mode='default')
