import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

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
    const { expanded } = this.state;

    return (
      <span ref={this.setRef}>
        <button onClick={this.toggle}>abc</button>
        {expanded && (
          <div className="Popup">
            {this.props.children(this.toggle)}
          </div>
        )}
      </span>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Popup;
