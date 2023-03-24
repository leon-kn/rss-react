import React, { SyntheticEvent } from 'react';
import { Component } from 'react';
import FormField from 'src/components/Form/FormField';
import FormSelector from 'src/components/Form/FormSelector';
import FormSwitcher from 'src/components/Form/FormSwitcher';
import { validateDate } from 'src/helpers/validateDate';
import { validateName } from 'src/helpers/validateName';
import { validatePermission } from 'src/helpers/validatePermission';
import { validateCountry } from 'src/helpers/validateCountry';
import Header from 'src/layout/Header';
import { FormItem } from 'src/types/FormItem';

type PropsType = Record<string, never>;
interface StateType {
  cards: FormItem[];
  errorName: string;
  errorDate: string;
  errorSelector: string;
  errorCheckbox: string;
  errorSwitcher: string;
}
type InputRef = React.RefObject<HTMLInputElement>;

class FormPage extends Component<PropsType, StateType> {
  private textInput: InputRef;
  private dateInput: InputRef;
  private selector: React.RefObject<HTMLSelectElement>;
  private checkboxInput: InputRef;
  private switchInput: InputRef;
  private fileInput: InputRef;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      cards: [],
      errorName: '',
      errorDate: '',
      errorSelector: '',
      errorCheckbox: '',
      errorSwitcher: '',
    };
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selector = React.createRef();
    this.checkboxInput = React.createRef();
    this.switchInput = React.createRef();
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    validateName<StateType>(this.textInput.current!.value, this.setState.bind(this));
    validateDate<StateType>(this.dateInput.current!.value, this.setState.bind(this));
    validateCountry<StateType>(this.selector.current!.value, this.setState.bind(this));
    validatePermission<StateType>(this.checkboxInput.current!.checked, this.setState.bind(this));
    console.log(this.state);
    console.log(this.checkboxInput.current!.checked);
  }

  render() {
    return (
      <div>
        <Header title="Form Page" />
        <form>
          <FormField
            type="text"
            id="textInput"
            name="name"
            label="Name"
            elementRef={this.textInput}
            error={this.state.errorName}
          />
          <FormField
            type="date"
            id="dateInput"
            name="date"
            label="Birthday"
            elementRef={this.dateInput}
            error={this.state.errorDate}
          />
          <FormSelector elementRef={this.selector} error={this.state.errorSelector} />
          <FormField
            type="checkbox"
            id="checkboxInput"
            name="consent"
            label="I consent to my personal data"
            elementRef={this.checkboxInput}
            error={this.state.errorCheckbox}
          />
          <FormSwitcher
            type="radio"
            name="gender"
            firstValue="male"
            secondValue="female"
            legend="Specify your gender:"
            // elementRef={this.switchInput}
            error={this.state.errorSwitcher}
          />
          <FormField
            type="file"
            id="fileInput"
            name="avatar"
            label="Upload your avatar"
            elementRef={this.fileInput}
          />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default FormPage;
