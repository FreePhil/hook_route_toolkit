import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from './rootSlice';

export const Result = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  function reset() {
    dispatch(reset()); 
  }

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/" onClick={reset}>Start over</Link>
    </>
  );
}