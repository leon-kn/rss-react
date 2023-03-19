import React from 'react';

type PropType = Record<string, never>;
type StateType = { value: string };
class SearchBar extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    this.state = { value: localStorage.getItem('value') ? localStorage.getItem('value')! : '' };
  }

  componentWillUnmount(): void {
    localStorage.setItem('value', this.state.value);
  }

  render() {
    return (
      <input
        defaultValue={this.state.value}
        onChange={(e) => {
          this.setState({ value: e.target.value });
          console.log(this.state.value);
        }}
      />
    );
  }
}

export default SearchBar;
