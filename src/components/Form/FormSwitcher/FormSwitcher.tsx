import { Component } from 'react';

interface PropsType {
  type: 'radio';
  legend: string;
  name: string;
  firstValue: string;
  secondValue: string;
  elementRefMale: React.RefObject<HTMLInputElement>;
  elementRefFemale: React.RefObject<HTMLInputElement>;
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
          ref={this.props.elementRefMale}
        />
        <label htmlFor={this.props.firstValue}>Male</label>
        <input
          type={this.props.type}
          id={this.props.secondValue}
          name={this.props.name}
          value={this.props.secondValue}
          ref={this.props.elementRefFemale}
        />
        <label htmlFor={this.props.secondValue}>Female</label>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default FormField;
