import React from 'react';
import { useSelector } from 'react-redux';

const Slider = () => {
    const { banner } = useSelector(state => state.app);
    console.log(banner);
  return (
    <div>Slider</div>
  )
}

export default Slider