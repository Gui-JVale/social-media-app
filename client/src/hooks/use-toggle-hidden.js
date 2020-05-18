import { useState } from 'react';

const useToggleHidden = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => setHidden(!hidden);

  return { hidden, toggleHidden };
};

export default useToggleHidden;
