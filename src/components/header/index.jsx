import React from 'react';
import { Link } from 'react-router-dom';
import { PiVirus } from 'react-icons/pi';
import Container from '../container/Container';

const Header = () => {
  return (
    <div className="border-b border-gray-600 bg-blue-900 text-white">
      <Container designs="flex justify-between items-center">
        <Link to={'/'} className="flex items-center gap-3">
          <PiVirus className="text-4xl text-pink-700" />
          <span className="font-semibold">Covid-19</span>
        </Link>

        <nav className="flex gap-4 ">
          <a href="#">Home</a>
          <a href="#">Results</a>
          <div className="flex gap-4 max-md:hidden">
            <a href="#">About</a>
            <a href="#">Contact Info</a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
