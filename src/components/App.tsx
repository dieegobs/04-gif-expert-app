import React from 'react'

export const App = () => {

    let list = [
        {name: 'Diego', age: '32'},
        {name: 'João', age: '25'},
        {name: 'Samanta', age: '27'},
        {name: 'Maria', age: '43'},
        {name: 'Julia', age: '57'},
    
    ];

    

  return (
    <div>
        <h2>Lista de presença</h2>
        <ul>
            {list.map((item, index) => (
                <li key={index}> {item.name} - {item.age} anos</li>
            ))}
        </ul>

    </div>
  );
}

