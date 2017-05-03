import React, { Component } from 'react';
import Navbar from './Navbar'

const RootContainer = ({children}) => {
    return (
      <div>
        <Navbar />
        { children }
      </div>
    )
}

export default RootContainer;
