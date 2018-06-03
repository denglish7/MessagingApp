import React, { Component }from 'react';
import PropTypes from 'prop-types';

import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
    constructor() {
        super(props);

        this.state = {
            messages: []
        };
    }

    onSend = (message) => {
        // send message to backend
    }

    render() {
        const { username } = this.props;

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    id: 1
                }}
            />
        )
    }
}

Chat.propTypes = {
    username: PropTypes.string
}

export default Chat;