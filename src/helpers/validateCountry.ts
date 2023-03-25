export function validateCountry<T>(
  country: string,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  if (!country) {
    error = 'You did not choose a country';
  }

  setError((prevState) => ({ ...prevState, errorSelector: error }));

  return error ? false : true;
}
