import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from '../../components/loader/ContentLoader';
import Error from '../../components/error/Error';
import Card from './Card';
import { getDetails } from '../../redux/actions/actions';
import { useParams } from 'react-router-dom';

const Content = () => {
  const { data, error, isLoading } = useSelector((store) => store);
  const dispatch = useDispatch();
  const {code }= useParams()
  const arr = Object.entries(data || {});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} retry={() => dispatch(getDetails(code))} />
      ) : (
        arr.map((item, index) => <Card key={index} item={item} />)
      )}
    </div>
  );
};

export default Content;
