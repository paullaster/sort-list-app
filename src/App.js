import React from 'react';
import sortBy from 'lodash.sortby';
import './App.css';

function App() {
  const [list, setList] = React.useState ([
    {id: 1, name: 'picker', value: 4},
    {id: 2, name: 'proof', value: 6},
    {id: 3, name: 'applet', value: 9},
    {id: 4, name: 'oranges', value: 3}
  ]);
  const [sort, setSort] = React.useState ( 'name');

  const handleNameSort = () => {
    setSort ('name');
  };
  const handleValueSort = () => {
    setSort ( 'value');
  };

  const sortedList  = sortBy ( list, sort);
  return (
    <div className="App">
      <button type='button' onClick={handleNameSort} >
        sort by name
      </button>
      <button type='button' onClick={handleValueSort} >
        sort by value
      </button>
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
