import { Component } from 'react';
import styles from './FormSwitcher.module.css';

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
      <div className={styles.input}>
        <div className={styles.input__container}>
          <legend className={styles.input__label}>{this.props.legend}</legend>
          <input
            type={this.props.type}
            id={this.props.firstValue}
            name={this.props.name}
            value={this.props.firstValue}
            ref={this.props.elementRefMale}
          />
          <label htmlFor={this.props.firstValue} className={styles.input__radio}>
            Male
          </label>
          <input
            type={this.props.type}
            id={this.props.secondValue}
            name={this.props.name}
            value={this.props.secondValue}
            ref={this.props.elementRefFemale}
          />
          <label htmlFor={this.props.secondValue} className={styles.input__radio}>
            Female
          </label>
        </div>
        <p className={styles.input__error}>{this.props.error}</p>
      </div>
    );
  }
}

export default FormField;
