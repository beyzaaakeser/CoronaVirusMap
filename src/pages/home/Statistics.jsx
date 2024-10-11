import React, { useEffect, useState } from 'react';
import Container from '../../components/container/Container';
import Item from './Item';
import api from '../../api';
import millify from 'millify';
import HomeLoader from '../../components/loader/HomeLoader';

const Statistics = () => {
  const [totals, setTotals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get('/totals')
      .then((res) => setTotals(res.data[0]))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container designs="!py-0">
      <div
        className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 
      gap-5 mt-[-34px] md:mt-[-48px]"
      >
        {isLoading ? (
          <HomeLoader/>
        ) : (
          <>
            <Item
              color="text-pink-600"
              text="Total Cases"
              value={millify(totals.confirmed)}
            />
            <Item
              color="text-green-500"
              text="Total Recovered Cases"
              value={millify(totals.recovered)}
            />
            <Item
              color="text-gray-500"
              text="Total Deaths"
              value={millify(totals.deaths)}
            />
          </>
        )}
      </div>
    </Container>
  );
};

export default Statistics;
