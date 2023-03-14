import React, { useState } from 'react';
import Context from './index';

const CustomizerProvider = (props) => {
  
  // set sidebar background layout
  const addSidebarBackgroundLayout = (e, layout) => {
    e.preventDefault();
    document.querySelectorAll('.theme-layout-type li').forEach((item) => {
      item.classList.remove('active');
    });
    document.body.className = ` main-page ${layout}`;
    e.currentTarget.classList.add('active');
  };


  // set wallpapers for chats content


  // set wallpapers as gradients for chats content


  return (
    <Context.Provider
      value={{
        addSidebarBackgroundLayout: addSidebarBackgroundLayout,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CustomizerProvider;
