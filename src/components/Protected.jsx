import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const Protected = ({component: Component, ...rest}) => {
  return (<Route
    {...rest}
    render={(props) => user ? <Component {...props} /> : <Re}
  />)
};
