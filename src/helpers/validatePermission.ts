export function validatePermission<T>(
  value: boolean,
  setError: React.Dispatch<React.SetStateAction<T>>
) {
  let error = '';

  if (!value) {
    error = 'You should consent to the personal data';
  }

  setError((prevState) => ({ ...prevState, errorCheckbox: error }));
}
