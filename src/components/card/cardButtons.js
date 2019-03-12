import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class CardButtons extends Component {
    render() {
        return (
           <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.buttons} onPress={() => this.props.nope()}>
                    <Ionicon name='ios-close' size={62} color='black' style={{}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => this.props.yup()}>
                    <Ionicon name='ios-heart' size={40} color='#ff0a00' style={{ marginTop: 5 }} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        width: 80, 
        height: 80, 
        borderWidth: 10, 
        borderColor: '#e7e7e7', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 20,
    },
        buttonSmall: {
        width: 60, 
        height: 60, 
        borderWidth: 10, 
        borderColor: '#e7e7e7', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 30
    },
    viewButtons: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 30
    }
});
