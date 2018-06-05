import React, { Component }from 'react';
import PropTypes from 'prop-types';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends Component {
    constructor() {
        super();

        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }

    componentWillUnmount() {
        Backend.closeChat();
    }
    

    onSend = (message) => {
        Backend.sendMessage(message);
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    _id: Backend.getUid(),
                    username: this.props.username
                }}
            />
        )
    }
}



export default Chat;