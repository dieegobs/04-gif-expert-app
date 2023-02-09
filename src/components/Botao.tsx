import React from "react";

type Props = {
    text: string;
}

export const Botao = ({ text }: Props) => {

    const handleClick = () => {
        console.log('clicou');
    }

  return (
     <button onClick={handleClick}>{text}</button>
  );
}
