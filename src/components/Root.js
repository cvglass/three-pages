import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content'
import Route from 'react-router';

const Root = () => {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  )
}

export default Root;
