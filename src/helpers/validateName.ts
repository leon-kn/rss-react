function containsOnlyLetters(string: string): boolean {
  return /\d/.test(string);
}

export function validateName<T>(
  name: string,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  if (name.length < 4) {
    error = 'Name should be more than 3 letter';
  }

  if (name) {
    if (name[0] !== name[0].toUpperCase()) {
      error = 'First letter should be Capitalize';
    }
  }

  if (containsOnlyLetters(name)) {
    error = 'Name cannot contain digits';
  }

  if (name.length === 0) {
    error = 'You did not specify your name';
  }

  setError((prevState) => ({ ...prevState, errorName: error }));

  return error ? false : true;
}
