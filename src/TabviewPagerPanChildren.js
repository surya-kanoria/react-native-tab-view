import React from 'react';
import {TouchableWithoutFeedback} from "react-native";
const ReactNative = require('react-native');
const {
  View,
  StyleSheet,
  Text
} = ReactNative;

export default class TabviewPagerPanChildren extends React.Component {

  shouldComponentUpdate(newProps) {
    let currentChild = newProps.i;
    // console.log(currentChild, newProps.navigationState);
    // console.log(newProps.i, "should update", !visitedTabs.includes(currentChild));
    // console.log(currentChild, newProps.navigationState.index, currentChild === newProps.navigationState.index);
    console.log(currentChild, newProps.navigationState.index);
    return currentChild === newProps.navigationState.index && this.props.width !== newProps.width;
    // return true;
    // return false;
  }

  render() {
    let width = this.props.width;
    let i = this.props.i;
    if(this.props.navigationState.index === i) {
      console.log('rendering-->', this.props.navigationState.index, i, width);
      debugger;
    }
    let view = <View
      style={
        width
          ? {width}
          : this.props.i === this.props.navigationState.index ? StyleSheet.absoluteFill : null
      }
    >
      {i === this.props.navigationState.index || width ? this.props.child : null}
    </View>
    return view;
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
