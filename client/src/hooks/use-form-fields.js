import { useState } from 'react';

const useFormFields = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return { handleChange, values };
};

export default useFormFields;