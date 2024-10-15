import React from 'react'
import { useSelector } from 'react-redux';

const Content = () => {
    const { data, error, isLoading } = useSelector((store) => store);
  return (
    <div>Content</div>
  )
}

export default Content