import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/example';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.increment(this.props.value);
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <h1>db-feed-ui</h1>
        <p>{ value }</p>

        <button onClick={ this.handleClick }>Add</button>
      </div>
    );
  }
}

function mapStateToProps({ example }, action) {
  return {
    value: example.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
