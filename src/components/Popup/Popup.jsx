import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Popup extends PureComponent {
  state = { expanded: false }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = ({ target }) => {
    if (this.node.contains(target) || !this.state.expanded) return;
    this.toggle();
  }

  toggle = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  setRef = (node) => {
    this.node = node;
  }

  render() {
    return (
      <span ref={this.setRef}>
        {this.props.children({
          expanded: this.state.expanded,
          toggle: this.toggle,
        })}
      </span>
    );
  }
}

export default Popup;
