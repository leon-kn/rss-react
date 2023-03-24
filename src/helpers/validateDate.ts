export function validateDate<T>(date: string, setError: React.Dispatch<React.SetStateAction<T>>) {
  let error = '';

  if ((date.length === 10 && Number(date.slice(0, 4)) >= 2024) || date.length > 10) {
    error = 'You cannot specify a future date';
  }

  if (!date) {
    error = 'Date is not specified';
  }

  setError((prevState) => ({ ...prevState, errorDate: error }));
}
