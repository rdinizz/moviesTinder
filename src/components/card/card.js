import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Card extends Component {
    render() {
        const imageURI = `https://image.tmdb.org/t/p/w500${this.props.card.poster_path}`;
        return (
            <View style={styles.card}>
                <Image source={{ uri: imageURI }} resizeMode='contain' style={styles.imageStyle} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }} >
                        <Text style={styles.titleText}>{this.props.card.original_title}, </Text>
                        <Text style={styles.titleText}>{this.props.card.release_date.split('-')[0]}</Text>
                    </View>
                    <View style={styles.viewDescription}>
                        <MaterialIcon name='import-contacts' size={20} color='#777' />
                        <Text numberOfLines={8} style={styles.descriptionText}>{this.props.card.overview}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'OpenSans-Semibold',
        fontSize: 20,
        flexWrap: 'wrap',
    },
    viewDescription: {
        paddingHorizontal: 20, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    descriptionText: {
        fontSize: 16,
        fontWeight: '200', 
        color: '#555'
    },
    imageStyle: {
        width: 350, 
        height: 350, 
        alignSelf: 'center'
    }
});
