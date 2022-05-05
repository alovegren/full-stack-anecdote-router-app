import { useState } from 'react';

export const useField = (name, type = 'text') => {
  const initialValue = type === 'text' ? '' : 'Reset';
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return {
    setValue,
    attributes: {
      name,
      type,
      value,
      onChange
    }
  }
};