import React, { PureComponent } from 'react';
import Select from 'react-select';
import { range } from 'lodash';

const hourOptions = range(0, 23).map(hour => ({
  value: hour,
  label: `${hour}:00 - ${hour + 1}:00`,
}));

const ValueComponent = ({ values, value, ...props }) => {
  console.group('name');
  console.log(values);
  console.log(value);
  console.log(props);
  console.groupEnd();

  if (values[values.length - 1] !== value) {
    return null;
  }

  const allValuesLabel = values
    .sort((a, b) => a.value - b.value)
    .reduce((acc, { value, label }, index, options) => {
      if (index === 0) {
        return label;
      }
      const prevValue = options[index - 1].value;
      if (prevValue - value === -1) {
        return acc.replace(
          acc.slice(-4),
          label.slice(-4),
        );
      }
      return `${acc}, ${label}`;
    }, '');
  return allValuesLabel;
};

class Home extends PureComponent {
  state = { values: [] }

  onChange = (values) => {
    this.setState({ values });
  }

  render() {
    const { values } = this.state;
    return (
      <div className="Home">
        <Select
          value={values}
          onChange={this.onChange}
          options={hourOptions}
          multi
          removeSelected={false}
          closeOnSelect={false}
          valueComponent={ValueComponent}
        >
          12345
        </Select>
      </div>
    );
  }
}

export default Home;
