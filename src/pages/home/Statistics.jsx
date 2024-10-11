import React from 'react';
import Container from '../../components/Container';
import Item from './Item';

const Statistics = () => {
  return (
    <Container designs="!py-0">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 
      gap-5 mt-[-34px] md:mt-[-48px]">
        <Item color="text-pink-600" text="Total Cases" value="12334" />
        <Item
          color="text-green-500"
          text="Total Recovered Cases"
          value="12334"
        />
        <Item color="text-gray-500" text="Total Deaths" value="12334" />
      </div>
    </Container>
  );
};

export default Statistics;
