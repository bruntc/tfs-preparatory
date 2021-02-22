import React, { useState } from 'react';

type CardProps = {
  frontText: string,
  backText: string
}

export const CollapsibleCard: React.FC<CardProps> = (props) => {
  const [hiddenText, setHiddenText] = useState(undefined);

  return (
    <div id="collapsibleCard">
      <div id="shownText">
        <p onClick={() => hiddenText ? setHiddenText(undefined) :
          setHiddenText(props.backText)}>{props.frontText}</p>
      </div>
      { hiddenText &&
        <div id="collapsibleText">
          <p>{hiddenText}</p>
        </div>}
    </div>
  );
}