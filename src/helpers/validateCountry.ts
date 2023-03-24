export function validateCountry<T>(
  country: string,
  setError: React.Dispatch<React.SetStateAction<T>>
) {
  let error = '';

  if (!country) {
    error = 'You did not choose a country';
  }

  setError((prevState) => ({ ...prevState, errorSelector: error }));
}
