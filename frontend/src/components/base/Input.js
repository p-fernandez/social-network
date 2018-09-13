import React, { Component, Fragment } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name } = this.props;
    this.props.onChange(name, event);
  }

  render() {
    const { label, type, placeholder = '' } = this.props;
    return (
      <Fragment>
        <span>{label}</span>
        <input
          onChange={this.onChange}
          placeholder={placeholder}
          type={type}
        />
      </Fragment>
    )
  }
}

export default Input;
