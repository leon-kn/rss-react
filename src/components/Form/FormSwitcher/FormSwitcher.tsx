import { Component } from 'react';

interface PropsType {
  type: 'radio';
  legend: string;
  name: string;
  firstValue: string;
  secondValue: string;
  // elementRef: React.RefObject<HTMLInputElement>;
  error: string;
}
type StateType = Record<string, never>;

class FormField extends Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <legend>{this.props.legend}</legend>
        <input
          type={this.props.type}
          id={this.props.firstValue}
          name={this.props.name}
          value={this.props.firstValue}
        />
        <label htmlFor={this.props.firstValue}>Male</label>
        <input
          type={this.props.type}
          id={this.props.secondValue}
          name={this.props.name}
          value={this.props.secondValue}
        />
        <label htmlFor={this.props.secondValue}>Female</label>
        <label>{this.props.error}</label>
      </div>
    );
  }
}

export default FormField;
