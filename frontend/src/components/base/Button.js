import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event, id) {
    event.preventDefault();

    const { onClick, form } = this.props;

    if (onClick) {
      onClick(event, id, form);
    }
  }

  render() {
    const { action, form, title, type } = this.props;
    return(
      <button
        form={form}
        name={action}
        onClick={this.onClick}
        type={type}>
        {title}
      </button>
    );
  }
}

export default Button;
