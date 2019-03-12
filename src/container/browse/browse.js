import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import Card from '../../components/card/card';
import NoMoreCards from '../../components/card/noMoreCards';
import { addLike } from '../../redux/actions/likesAction';
import { addDislike } from '../../redux/actions/dislikesAction';

class Browse extends Component {
  handleLike(card) {
    this.props.addLike(card);
  }

  handleDislike(card) {
    this.props.addDislike(card);
  }

  renderCard(card) {
    return (
      <Card card={card} />
    );
  }
  
  render() {
    return (
      <View style={styles.container} >
          <View style={styles.viewSwipeCards}>
            <SwipeCards
              ref={'swiper'}
              cards={this.props.movies}
              containerStyle={{ backgroundColor: '#f7f7f7', alignItems: 'center' }}
              renderCard={(cardData) => this.renderCard(cardData)}
              renderNoMoreCards={() => <NoMoreCards />}
              handleYup={this.handleLike.bind(this)}
              handleNope={this.handleDislike.bind(this)}
            />
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies
});
  
export default connect(mapStateToProps, 
{ addLike, addDislike })(Browse);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSwipeCards: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtons: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    alignSelf: 'center',
  }
});
