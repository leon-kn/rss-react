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
      <div className={styles.input}>
        <div className={styles.input__container}>
          <label htmlFor={this.props.id} className={styles.input__label}>
            {this.props.label}
          </label>
          <input
            type={this.props.type}
            id={this.props.id}
            name={this.props.name}
            ref={this.props.elementRef}
            className={styles.input__field}
          />
        </div>
        <label htmlFor={this.props.id} className={styles.input__error}>
          {this.props.error}
        </label>
      </div>
    );
  }
}

export default FormField;
