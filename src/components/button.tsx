import React from 'react';

type ButtonProps = {
  buttonText: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
      <>
        <button type="button">{ props.buttonText }</button>
      </>
  );
};