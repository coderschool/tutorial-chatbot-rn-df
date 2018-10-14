import React from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow-text";

const BOT_USER = {
  _id: 2,
  name: "SmartBot",
  avatar: "https://placeimg.com/140/140/any"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hello CoderSchool Fan!",
      createdAt: new Date(),
      user: BOT_USER
    };

    this.state = {
      messages: [firstMsg]
    };
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "CLIENT EMAIL",
      "PRICATE KEY",
      Dialogflow_V2.LANG_ENGLISH_US,
      "PROJECT ID"
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}