import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoriesCardsGrid from './CategoriesCardGrid';
import ChooseInput from './ChooseInput';

const CategoriesTabPanel = () => {
  const allFoods = useSelector((state) => state.foods.allFoods);
  const [selectedCat, setSelectedCat] = useState('pizza');

  const foodsToShow = [...allFoods];
  foodsToShow.filter((food) => food.category === selectedCat);

  return (
    <>
      <ChooseInput setSelectedCat={setSelectedCat} />
      <CategoriesCardsGrid foodsToShow={foodsToShow} />
    </>
  );
};

export default CategoriesTabPanel;
