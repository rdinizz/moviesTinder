import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getLikes } from '../../redux/actions/likesAction';

class Liked extends Component {
  componentWillMount() {
    this.props.getLikes();
  }

  renderItem(item) {
    return (
      <View style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 2, width: '100%' }}>
        <Text style={styles.text}>Name: {item.item.original_title}</Text>
        <Text style={styles.text}>Release Date: {item.item.release_date}</Text>
      </View>
    );
  }

  renderLikes() {
    if (this.props.likes.length > 0) {
      return (
        <View style={styles.mainView}>
          <FlatList
            data={this.props.likes}
            renderItem={item => this.renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>No likes yet, go like something!</Text>
      </View>
    );
  }

  render() {
    return (
      this.renderLikes()
    );
  }
}

const mapStateToProps = state => (
  {
    likes: state.likesReducer.likes
  }
);
  
export default connect(mapStateToProps, 
{ getLikes })(Liked);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 16,
  }
});
