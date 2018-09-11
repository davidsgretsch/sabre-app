import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import './App.css';
import 'bulma/css/bulma.css';
import { PlayerList, TitleApp, FilterForm } from '../components';
import { fetchGetPlayers } from '../actions/playersAction';
import { playerListsSelector } from '../selectors/playerSelector';

class App extends Component {
  componentDidMount() {
    this.props.fetchGetPlayers();
  }

  render() {
    const { players } = this.props;

    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column">
              <TitleApp title={'Football Player Finder'} />
              <FilterForm />
              <PlayerList players={players} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  players: arrayOf(object)
};

const mapToStateProps = state => ({ players: playerListsSelector(state)});

export default connect(mapToStateProps, { fetchGetPlayers })(App);
