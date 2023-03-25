export function validateFile<T>(
  fileList: FileList,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  if (!fileList[0]) {
    error = 'You must add avatar';
  }

  setError((prevState) => ({ ...prevState, errorFile: error }));

  return error ? false : true;
}
