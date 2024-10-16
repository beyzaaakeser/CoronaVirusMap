import React from 'react';

const Error = ({ info,retry }) => {
  return (
    <div className="my-20 flex flex-col justify-center col-span-3">
      <div data-testid="error" className="bg-red-400 p-5 rounded-md ">
        <p>An error has occurred. Please try again later</p>
        <p>{info}</p>
      </div>
      <button  onClick={retry} className="border shadow mt-10 text-black p-3">Try Again</button>
    </div>
  );
};

export default Error;
