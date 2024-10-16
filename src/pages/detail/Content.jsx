import React from 'react';
import { useSelector } from 'react-redux';
import ContentLoader from '../../components/loader/ContentLoader';
import Error from '../../components/error/Error';
import Card from './Card';

const Content = () => {
  const { data, error, isLoading } = useSelector((store) => store);

  const arr = Object.entries(data || {});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error />
      ) : (
        arr.map((item, index) => <Card key={index} item={item} />)
      )}
    </div>
  );
};

export default Content;
