import React, { useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';
import { useDispatch } from 'react-redux';
import { fetchTitles } from './reducers/actions';

function App() {
  const dispatch = useDispatch();

  // fetch all titles and load them to redux
  useEffect(() => {
    dispatch(fetchTitles());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;