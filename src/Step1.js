import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseBase } from './rootSlice';

export const Step1 = () => {
  // return (
  //   <h1>Step 1</h1>
  // )
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const base = useSelector(state => state.base);
  const { register, handleSubmit } = useForm();

  console.log(base);

  const onSubmit = (data) => {
    console.log(data.base);
    dispatch(chooseBase(data.base));
    navigator("/step2");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='base'>Pick Base: </label>
        <select id='base' name='base' {...register("base")} defaultValue={base}>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
      </div>
      <h5>data: {base}</h5>
      <button>Next</button>
    </form>
  )
}