export function validateGender<T>(
  male: boolean,
  female: boolean,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';
  if (!male && !female) {
    error = 'You did not choose your gender';
  }

  setError((prevState) => ({ ...prevState, errorSwitcher: error }));

  return error ? false : true;
}
