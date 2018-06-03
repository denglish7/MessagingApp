import React, { Component }from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Enter your name:</Text>
                <TextInput 
                    style={styles.nameInput}
                    placeholder='John Snow'
                    onChangeText={(text) => {
                        this.setState({
                            username: text
                        });
                    }}
                    value={this.state.username}
                />
                <TouchableOpacity 
                    style={styles.buttonText}
                    onPress={() => {
                        Actions.chat({
                            username: this.state.username
                        })
                    }}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    }
})
export default Home;