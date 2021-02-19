import React, { Component } from 'react';

type TextboxProps = {
    defaultText: string,
    label: string
  }

export const OurLabelledTextbox: React.FC<TextboxProps> = (props) => {
    return (
        <>
            <label>{props.label}: </label>
            <input type="text" value={props.defaultText}/>
        </>
    );
  };
