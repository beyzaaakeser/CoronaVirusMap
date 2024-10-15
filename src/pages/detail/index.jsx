import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../redux/actions/actions';
import Heading from './Heading';
import Content from './Content';

const Detail = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(code));
  }, []);

  return (
    <div className="text-white flex-1 grid place-items-center p-6">
      <div
        className="bg-white border shadow-2xl min-h-[80%] px-8 py-6 rounded-lg 
      max-w-3xl max-md:w-full md:min-w-[500px]"
      >
        <Heading />
        <Content />
      </div>
    </div>
  );
};

export default Detail;
