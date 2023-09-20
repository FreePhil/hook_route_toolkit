import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseCrust } from './rootSlice';

export const Step2 = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const crust = useSelector(state => state.root.crust);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    navigator("/step3");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='crust'>Pick crust: </label>
        <select id='crust' name='crust' {...register("crust")} defaultValue={crust}>
          <option value='classic_thin'>Classic Thin</option>
          <option value='deep_pan'>Deep Pan</option>
          <option value='filled_crust'>Filled Crust</option>
        </select>
      </div>
      <h5>data: {crust}</h5>
      <button>Next</button>
    </form>
  )
}