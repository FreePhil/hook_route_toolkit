import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseCheese } from './rootSlice';

export const Step3 = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const cheese = useSelector(state => state.root.cheese);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    navigator("/step4");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='cheese'>Pick crust: </label>
        <select id='cheese 'name='cheese' {...register("cheese")} defaultValue={cheese}>
          <option value='no_cheese'>No Cheese</option>
          <option value='mozarella'>Mozarella</option>
          <option value='parmigiano'>Parmigiano</option>
        </select>
      </div>
      <h5>data: {cheese}</h5>
      <button>Next</button>
    </form>
  )
}