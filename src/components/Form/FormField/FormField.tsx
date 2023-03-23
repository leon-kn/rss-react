import React, { Component } from 'react';
import styles from './FormField.module.css';

interface PropsType {
  type: 'text' | 'date' | 'checkbox' | 'file';
  id: string;
  name: string;
  label: string;
  elementRef: React.RefObject<HTMLInputElement>;
  error?: string;
}
type StateType = Record<string, never>;

class FormField extends Component<PropsType, StateType> {
  render() {
    return (
      <div className={styles.div}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          ref={this.props.elementRef}
        ></input>
        <label htmlFor={this.props.id}>{this.props.error}</label>
      </div>
    );
  }
}

export default FormField;
