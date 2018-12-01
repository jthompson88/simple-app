import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state  => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  //Remember this always has a render function that returns something
 //*Also, render is a built-in function from React
  render () {
    const { searchField, onSearchChange, robots,isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      //statement below is essentially saying that if the name of the robot
      //(or anything the string), in lowercase, includes 'toLowerCase' then
      //only return the robot that is true to this condition
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
            <CardList  robots={ filteredRobots }/>
        </ErrorBoundry>
        </Scroll>
      </div>
    );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
