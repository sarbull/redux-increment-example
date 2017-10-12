import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/example';

class App extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment(this.props.value);
  }

  decrement() {
    this.props.decrement(this.props.value);
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <h1>db-feed-ui</h1>
        <p>{ value }</p>

        <button onClick={ this.increment }>Add</button>
        <button onClick={ this.decrement }>Decrement</button>
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
