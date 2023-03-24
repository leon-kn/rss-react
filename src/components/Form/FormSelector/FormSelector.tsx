import React, { Component } from 'react';

interface PropsType {
  elementRef: React.RefObject<HTMLSelectElement>;
  error: string;
}
type StateType = Record<string, never>;

class FormSelector extends Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <label htmlFor="selector">Country</label>
        <select id="selector" name="country" ref={this.props.elementRef}>
          <option value="" hidden>
            Choose your country
          </option>
          <option value="canada">Canada</option>
          <option value="france">France</option>
          <option value="italy">Italy</option>
          <option value="russia">Russia</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="selector">{this.props.error}</label>
      </div>
    );
  }
}

export default FormSelector;
