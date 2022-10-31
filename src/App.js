import React from 'react';
import sortBy from 'lodash.sortby';
import {v4 as uuidv4} from 'uuid';
import './App.css';

function App() {
  const [name, setName] = React.useState ('');
  const [value, setValue] = React.useState ( '');
  const [list, setList] = React.useState ([
    {id: 1, name: 'picker', value: 4},
    {id: 2, name: 'proof', value: 6},
    {id: 3, name: 'applet', value: 9},
    {id: 4, name: 'oranges', value: 3}
  ]);
  const [sort, setSort] = React.useState ( {
    property: 'name',
    isReverse: false,
  });

  const handleNameSort = () => {
    const isReverse = sort.property === 'name' && !sort.isReverse;
    setSort ( {property: 'name', isReverse});
  };
  const handleValueSort = () => {
    const isReverse = sort.property === 'value' && !sort.isReverse;
    setSort ( {
      property: 'value',
      isReverse
    });
  };

  const handleName = (event) => {
    setName (event.target.value);

    //setName ('');
  };
  const handleValue = (event) => {
    setValue (event.target.value);

    //setValue ( '');
  };
  const handleAdd = () => {
    const newItem = {
      id: uuidv4 (),
      name: name,
      value: parseInt (value)
    };
    const newList = list.concat ( newItem);
    setList (newList);
  };
  const sortedList  = sort.isReverse ? 
  sortBy ( list, sort.property) 
  : sortBy ( list, sort.property).reverse ();

  return (
    <div className="App">
      <div>
        <input type='text' placeholder='enter name' onChange={handleName} />
        <input type='number' placeholder='Enter value' onChange={handleValue} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <button type='button' onClick={handleNameSort} >
        sort by name
      </button>
      <button type='button' onClick={handleValueSort} >
        sort by value
      </button>
      <ul>
        {
          sortedList.map ( (item) => {
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
