import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { incrementPage } from '../../redux/actions/pageActions';
import { fetchMovies } from '../../redux/actions/moviesAction';

class NoMoreCards extends Component {
  async componentWillMount() {
    await this.incrementPage();
  }

  async incrementPage() {
    if (this.props.canIncrementPage) {
      await this.props.incrementPage();
      await this.props.fetchMovies();
    }
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', }} >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  canIncrementPage: state.pageReducer.canIncrementPage
});
  
export default connect(mapStateToProps, 
{ incrementPage, fetchMovies })(NoMoreCards);
