import React, { useState } from 'react';
import { Route } from "react-router-dom";
import MovieCard from "./Movies/MovieCard";
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieCard} />
      <Route path="/movies/:id" render={(props => <Movie addToSavedList={addToSavedList} {...props} list={savedList} />)} />

    </div>
  );
};

export default App;

// component={Movie}