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
            {list.map((item, index) => (
                <li key={index}>{item.toUpperCase()}</li>
            ))}
        </ul>

    </div>
  );
}

