import React, { SyntheticEvent } from 'react';
import { Component } from 'react';
import FormCard from 'src/components/FormCard/FormCard';
import FormField from 'src/components/Form/FormField';
import { FormItem } from 'src/types/FormItem';
import FormSelector from 'src/components/Form/FormSelector';
import FormSwitcher from 'src/components/Form/FormSwitcher';
import Header from 'src/layout/Header';
import Modal from 'src/components/Modal';
import { validateCountry } from 'src/helpers/validateCountry';
import { validateDate } from 'src/helpers/validateDate';
import { validateFile } from 'src/helpers/validateFile';
import { validateGender } from 'src/helpers/validateGender';
import { validateName } from 'src/helpers/validateName';
import { validatePermission } from 'src/helpers/validatePermission';
import styles from './FormPage.module.css';

type PropsType = Record<string, never>;
interface StateType {
  cards: FormItem[];
  errorName: string;
  errorDate: string;
  errorSelector: string;
  errorCheckbox: string;
  errorSwitcher: string;
  errorFile: string;
  modal: boolean;
}
type InputRef = React.RefObject<HTMLInputElement>;

class FormPage extends Component<PropsType, StateType> {
  private inputText: InputRef;
  private inputDate: InputRef;
  private inputSelector: React.RefObject<HTMLSelectElement>;
  private inputCheckbox: InputRef;
  private inputSwitchMale: InputRef;
  private inputSwitchFemale: InputRef;
  private inputFile: InputRef;
  private form: React.RefObject<HTMLFormElement>;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      cards: [],
      errorName: '',
      errorDate: '',
      errorSelector: '',
      errorCheckbox: '',
      errorSwitcher: '',
      errorFile: '',
      modal: false,
    };
    this.form = React.createRef();
    this.inputText = React.createRef();
    this.inputDate = React.createRef();
    this.inputSelector = React.createRef();
    this.inputCheckbox = React.createRef();
    this.inputSwitchMale = React.createRef();
    this.inputSwitchFemale = React.createRef();
    this.inputFile = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const name = validateName<StateType>(this.inputText.current!.value, this.setState.bind(this));
    const date = validateDate<StateType>(this.inputDate.current!.value, this.setState.bind(this));
    const country = validateCountry<StateType>(
      this.inputSelector.current!.value,
      this.setState.bind(this)
    );

    const permission = validatePermission<StateType>(
      this.inputCheckbox.current!.checked,
      this.setState.bind(this)
    );

    const gender = validateGender<StateType>(
      this.inputSwitchMale.current!.checked,
      this.inputSwitchFemale.current!.checked,
      this.setState.bind(this)
    );

    const file = validateFile<StateType>(this.inputFile.current!.files!, this.setState.bind(this));

    const card = {
      name: this.inputText.current!.value,
      birthday: this.inputDate.current!.value,
      country: this.inputSelector.current!.value,
      gender: this.inputSwitchMale.current!.checked ? 'Male' : 'Female',
      avatar: this.inputFile.current!.files![0],
    };
    console.log(this.inputFile.current!.files![0]);

    if (name && date && country && permission && gender && file) {
      this.setState((prevState) => ({
        cards: [...prevState.cards, card],
        modal: true,
      }));
    }
    this.form.current?.reset();
    setTimeout(() => {
      this.setState({ modal: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.modal && <Modal />}
        <Header title="Form Page" />
        <form ref={this.form} className={styles.form}>
          <FormField
            type="text"
            id="inputText"
            name="name"
            label="Name:"
            elementRef={this.inputText}
            error={this.state.errorName}
          />
          <FormField
            type="date"
            id="inputDate"
            name="date"
            label="Birthday:"
            elementRef={this.inputDate}
            error={this.state.errorDate}
          />
          <FormSelector elementRef={this.inputSelector} error={this.state.errorSelector} />
          <FormField
            type="checkbox"
            id="inputCheckbox"
            name="consent"
            label="I consent to my personal data"
            elementRef={this.inputCheckbox}
            error={this.state.errorCheckbox}
          />
          <FormSwitcher
            type="radio"
            name="gender"
            firstValue="Male"
            secondValue="Female"
            legend="Specify your gender:"
            elementRefMale={this.inputSwitchMale}
            elementRefFemale={this.inputSwitchFemale}
            error={this.state.errorSwitcher}
          />
          <FormField
            type="file"
            id="inputFile"
            name="avatar"
            label="Upload your avatar"
            elementRef={this.inputFile}
            error={this.state.errorFile}
          />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        <div className={styles.cards}>
          {this.state.cards.map((card, index) => (
            <FormCard key={index} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormPage;
