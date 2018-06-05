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

    goToMessaging = () => {
        Actions.chat({
            username: this.state.username
        })
    }

    render() {
        const button = this.state.username.length < 3 ? (
            <Text style={styles.errorMessage}>Username must be at least 3 characters long</Text>
        ) : (
            <TouchableOpacity 
                style={styles.button}
                onPress={this.state.username.length < 3 ? null : this.goToMessaging}
            >
                <Text style={styles.buttonText}>Click to send a message!</Text>
            </TouchableOpacity>
        );

        return (
            <View>
                <Text style={styles.title}>Enter your username to send a message:</Text>
                <TextInput 
                    style={styles.nameInput}
                    onChangeText={(text) => {
                        this.setState({
                            username: text
                        });
                    }}
                    value={this.state.username}
                />
                    {button}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 20
    },
    buttonText: {
        fontSize: 16
    },
    errorMessage: {
        marginLeft: 20,
        fontSize: 16
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 5,
        fontSize: 20
    }
})
export default Home;