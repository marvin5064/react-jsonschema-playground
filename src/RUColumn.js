import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { connect } from 'react-redux';

class RUColumn extends Component {
  log = type => console.log.bind(console, type);
  updateData(input) {
    this.props.dispatch({ type: 'UPDATE', data: input.formData });
  }
  getData() {
    return this.props.data;
    // return this.props.dispatch({ type: 'GET' }).data;
  }

  render() {
    return (
      <div>
        <Form
          id="read-update"
          schema={this.props.schema}
          formData={this.getData()}
          onSubmit={input => this.updateData(input)}
          onError={this.log('errors')}
        />
      </div>
    );
  }
}

export default connect()(RUColumn);
