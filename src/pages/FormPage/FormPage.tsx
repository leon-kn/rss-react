import React, { SyntheticEvent } from 'react';
import { Component } from 'react';
import FormField from 'src/components/Form/FormField';
import FormSelector from 'src/components/Form/FormSelector';
import { validateName } from 'src/helpers/validateName';
import Header from 'src/layout/Header';
import { FormItem } from 'src/types/FormItem';

type PropsType = Record<string, never>;
interface StateType {
  cards: FormItem[];
  errorName: string;
}
type InputRef = React.RefObject<HTMLInputElement>;

function validateDate<T>(date: string, setError: React.Dispatch<React.SetStateAction<T>>) {
  const error = '';

  
}

class FormPage extends Component<PropsType, StateType> {
  private textInput: InputRef;
  private dateInput: InputRef;
  private selector: React.RefObject<HTMLSelectElement>;
  private checkboxInput: InputRef;
  private switchInput: InputRef;
  private fileInput: InputRef;

  constructor(props: PropsType) {
    super(props);
    this.state = { cards: [], errorName: '' };
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
    console.log(this.state);
    console.log(this.dateInput.current!.value);
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
          />
          <FormSelector elementRef={this.selector} />
          <FormField
            type="checkbox"
            id="checkboxInput"
            name="consent"
            label="I consent to my personal data"
            elementRef={this.checkboxInput}
          />
          <FormField
            type="checkbox"
            id="switchInput"
            name="gender"
            label="Specify your gender"
            elementRef={this.switchInput}
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
