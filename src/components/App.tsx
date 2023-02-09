import React from 'react'

export const App = () => {

    let list = [
            'Diego',
            'João',
            'Maria'
    ];

    

  return (
    <div>
        <h2>Lista de presença</h2>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

    </div>
  );
}
