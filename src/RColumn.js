import React, { Component } from 'react';
import Field from 'react-jsonschema-form';
import { connect } from 'react-redux';

class RColumn extends Component {
  getData() {
    return this.props.dispatch({ type: 'GET' }).data;
  }
  log = type => console.log.bind(console, type);

  render() {
    return (
      <div>
        <Field
          id="read"
          schema={this.props.schema}
          formData={this.props.data}
          onError={this.log('errors')}
        />
      </div>
    );
  }
}

export default connect()(RColumn);
