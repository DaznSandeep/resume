import React from 'react';
import PropTypes from 'prop-types';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
