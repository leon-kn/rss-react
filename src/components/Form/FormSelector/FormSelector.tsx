import React, { Component } from 'react';
import styles from './FormSelector.module.css';
interface PropsType {
  elementRef: React.RefObject<HTMLSelectElement>;
  error: string;
}
type StateType = Record<string, never>;

class FormSelector extends Component<PropsType, StateType> {
  render() {
    return (
      <div className={styles.input}>
        <div className={styles.input__container}>
          <label htmlFor="selector" className={styles.input__label}>
            Country:{' '}
          </label>
          <select id="selector" name="country" ref={this.props.elementRef}>
            <option value="" hidden>
              Choose your country
            </option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <label htmlFor="selector" className={styles.input__error}>
          {this.props.error}
        </label>
      </div>
    );
  }
}

export default FormSelector;
