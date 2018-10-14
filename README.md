# Chatbot Tutorial: React Native and DialogFlow

This is a companion repo to the article at: [http://www.coderschool.vn/blog/intelligent-chatbots-in-react-native-and-dialogflow/](http://www.coderschool.vn/blog/intelligent-chatbots-in-react-native-and-dialogflow/).

You should probably read the above article. Not only is it a great, humorous article, it explains how to get this app running.

If you really just want to get started, clone this repo, figure out how to set up DialogFlow, and then change the values in `componentDidMount`:

```
  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "CLIENT EMAIL",
      "PRICATE KEY",
      Dialogflow_V2.LANG_ENGLISH_US,
      "PROJECT ID"
    );
  }
```
