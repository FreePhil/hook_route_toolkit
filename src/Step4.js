import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseSauce } from './rootSlice';

export const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sauce = useSelector(state => state.root.sauce);
  const unwatched = sauce;
  const { register, handleSubmit } = useForm();

  console.log(unwatched);

  const onSubmit = (data) => {
    dispatch(chooseSauce(data.sauce));
    navigate("/result");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='sauce'>Pick sauce: </label>
        <select id='sauce' name='sauce' {...register("sauce")} defaultValue={sauce}>
          <option value='no_sauce'>No Sauce</option>
          <option value='tomato'>Tomato</option>
          <option value='spicy tomato'>Spicy Tomato</option>
        </select>
      </div>
      <h5>data: {sauce}</h5>
      <button>Next</button>
    </form>
  )
}