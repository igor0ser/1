import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Popup extends Component {
  state = { expanded: false }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  setRef = (node) => {
    this.node = node;
  }

  handleOutsideClick = ({ target }) => {
    if (this.node.contains(target) || !this.state.expanded) return;
    this.toggle();
  }

  toggle = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  render() {
    return (
      <span ref={this.setRef}>
        <button onClick={this.toggle}>abc</button>
        {this.props.children({
          expanded: this.state.expanded,
          toggle: this.toggle,
        })}
      </span>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Popup;
