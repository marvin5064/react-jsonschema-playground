import React, { Component } from 'react';
import RColumn from './RColumn';
import RUColumn from './RUColumn';
import { connect } from 'react-redux';

class App extends Component {
  schema = {
    title: 'Person',
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        title: 'First Name'
      },
      lastName: {
        type: 'string',
        description: "The person's last name."
      },
      age: {
        Title: 'Age',
        description:
          'Age in years which must be equal to or greater than zero.',
        type: 'integer',
        minimum: 0
      },
      nestedObject: {
        type: 'object',
        properties: {
          yourFeelings: {
            type: 'string',
            enum: ['HAPPY', 'CHILLING']
          },
          yourGrades: {
            type: 'integer',
            enum: [1, 2, 3, 4]
          }
        },
        required: ['yourFeelings']
      }
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.props.dispatch({
              type: 'INIT',
              data: { firstName: 'abc', lastName: 'edf', age: 12 }
            })
          }
        >
          Get Sample Data
        </button>
        <RColumn schema={this.schema} data={this.props.data} />
        <RUColumn schema={this.schema} data={this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state
  };
};

export default connect(mapStateToProps)(App);
