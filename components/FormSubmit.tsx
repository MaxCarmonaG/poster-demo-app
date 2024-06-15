'use client';

import { FC } from 'react';
import { useFormStatus } from 'react-dom';

const FormSubmit: FC = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <span>Creating post...</span>
  ) : (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
};

export default FormSubmit;
