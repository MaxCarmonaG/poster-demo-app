'use client';

import { FC } from "react";

const NewPostError: FC<{ error: Error }> = ({ error }) => {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  );
}

export default NewPostError;
