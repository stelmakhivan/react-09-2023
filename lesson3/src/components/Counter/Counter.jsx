import { useEffect, useState } from 'react';
import { useClickListener } from '../../hooks/useClickListener/useClickListener.js';
import { useTodos } from '../../hooks/useTodos/useTodos.js';
import { Box } from '../Box/Box.jsx';
import { Button } from '../Button/Button.jsx';

const handleClick = () => {
  console.log('Clicked');
}

// const USERS = [
//   {
//     id: 1,
//     name: 'First user'
//   },
//   {
//     id: 1,
//     name: 'Second user'
//   }
// ]

const Counter = ({ isVisible, url }) => {
  const [counter, setCounter] = useState(0);

  const { isLoading, todos } = useTodos();
  
  useClickListener();

  console.log('Counter', { isLoading, todos });

  // const callback = () => {
  //   console.log('Counter mounted')
  // }

  // useEffect(() => {
  //   console.log('Counter mounted', isVisible);
  //   return () => {
  //     console.log('Counter unmounted', isVisible);
  //   }
  // }, [isVisible]);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log('Counter interval');
  //   }, 1000);
  //
  //   console.log('Counter id - mounted', {id});
  //   return () => {
  //     clearInterval(id);
  //     console.log('Counter id - unmounted', {id});
  //   }
  // }, []);
  // useInterval();

  // useEffect(() => {
  //   console.log('Counter mounted', counter);
  //   fetch(url)
  // }, [url]);

  return (
    <Box>
      {isLoading ? <p>Loading...</p> : <ul>{todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>
      })}</ul>}
      <h2>Counter {counter}</h2>
      <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
    </Box>
  );
};

export { Counter };
