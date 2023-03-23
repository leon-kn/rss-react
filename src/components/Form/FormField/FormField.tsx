import React, { Component } from 'react';

interface PropsType {
  type: 'text' | 'date' | 'checkbox' | 'file';
  id: 'textInput' | 'dateInput' | 'checkboxInput' | 'switchInput' | 'fileInput';
  name: 'name' | 'date' | 'consent' | 'gender' | 'avatar';
  label:
    | 'Name'
    | 'Birthday'
    | 'I consent to my personal data'
    | 'Specify your gender'
    | 'Upload your avatar';
  elementRef: React.RefObject<HTMLInputElement>;
}
type StateType = Record<string, never>;

class FormField extends Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          ref={this.props.elementRef}
        ></input>
      </div>
    );
  }
}

export default FormField;
