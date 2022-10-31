import React from 'react';
import './App.css';

function App() {
  const [list, setList] = React.useState ([
    {id: 1, name: 'picker', value: 4},
    {id: 2, name: 'proof', value: 6},
    {id: 3, name: 'applet', value: 9},
    {id: 4, name: 'oranges', value: 3}
  ]);
  const [sort, setSort] = React.useState ( 'name');
  return (
    <div className="App">
      <ul>
        {
          list.map ( (item) => {
            return (
              <li>
                <span>{item.name}</span> : <span>{item.value}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
