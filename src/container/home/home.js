import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/moviesAction';
import Browse from '../browse/browse';
import Liked from '../liked/liked';

const window = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = { activeTab: 'browse' };
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  changeTabToBrowse() {
    this.setState({ activeTab: 'browse' });
  }

  changeTabToLiked() {
    this.setState({ activeTab: 'liked' });
  }

  renderTab() {
    if (this.state.activeTab === 'browse') {
      return (
        <Browse />
      );
    }
    return (
      <Liked />
    );
  }

  renderTabs() {
    return (
      <View style={styles.viewTabs} >
        <TouchableOpacity
          style={styles.tab}
          onPress={() => this.changeTabToBrowse()}
        >
          <View style={this.state.activeTab === 'browse' ? styles.tabSelected : styles.none}>
            <Text style={styles.tabText}>Browse</Text> 
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => this.changeTabToLiked()}
        >
          <View style={this.state.activeTab === 'liked' ? styles.tabSelected : styles.none}>
            <Text style={styles.tabText}>Liked</Text> 
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.viewContent}>
          {this.renderTab()}
        </View>
        <View style={styles.tabView}>
          {this.renderTabs()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    movies: state.moviesReducer.movies
  }
);
  
export default connect(mapStateToProps, 
{ fetchMovies })(Home);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  viewContent: {
    flex: 0.9,
  },
  viewTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabView: {
    flex: 0.1,
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 2,
  },
  tabText: {
    fontFamily: 'OpenSans',
    fontSize: 22,
    color: '#00002b',
  },
  tab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabSelected: {
    borderBottomWidth: 2, 
    borderBottomColor: 'black'
  }
});
