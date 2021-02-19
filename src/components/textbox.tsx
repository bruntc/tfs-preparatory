import React, { Component } from 'react';

type TextboxProps = {
    defaultText: string,
    label: string
  }

export const OurLabelledTextbox: React.FC = (props: TextboxProps) => {
    return (
        <>
            <label>{props.label}: </label>
            <input type="text" value={props.defaultText}/>
        </>
    );
  };