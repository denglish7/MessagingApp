import React, { Component }from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native'

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='home' component={Home} title='Welcome!'/>
                    <Scene key='chat' component={Chat} title='Messages'/>
                </Scene>
            </Router>
        )
    }
}

export default App;