import React from 'react';
import { Component } from 'react';
import FormField from 'src/components/Form/FormField';
import FormSelector from 'src/components/Form/FormSelector';
import Header from 'src/layout/Header';

type PropsType = Record<string, never>;
type StateType = Record<string, never>;
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
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selector = React.createRef();
    this.checkboxInput = React.createRef();
    this.switchInput = React.createRef();
    this.fileInput = React.createRef();
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormPage;
