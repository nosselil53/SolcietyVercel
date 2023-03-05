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

  // set layout theme to LTR or RTL



/*
  // set themes primary colors
  const addThemeColors = (e, color) => {
    document.querySelectorAll('.colors li').forEach((item) => {
      item.classList.remove('active');
    });
    // document.getElementById("color").setAttribute("href", `/assets/css/${color}.css`);
    document.documentElement.className = color || localStorage.getItem('color');
    e.currentTarget.classList.add('active');
    localStorage.setItem('color', color);
  };*/

  // set wallpapers for chats content
  const addBackgroundWallpaper = (e, wallpaper) => {
    document.querySelectorAll('.wallpaper li').forEach((item) => {
      item.classList.remove('active');
    });

    if (wallpaper === 0) {
      document.querySelector(
        '.wallpapers'
      ).style = `background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(239, 247, 254))); background-color: transparent; background-blend-mode: unset;`;
    } else {
      document.querySelector(
        '.wallpapers'
      ).style = `background-image: url(${`/assets/images/wallpaper/${wallpaper}.jpg`}) ; background-color: transparent; background-blend-mode: unset`;
    }
    e.currentTarget.classList.add('active');
  };

  // set wallpapers as gradients for chats content
  const addBackgroundWallpaperGradients = (gradient) => {
    //setBackgroundWallpaperGradients(gradient)
  };

  return (
    <Context.Provider
      value={{
        addSidebarBackgroundLayout: addSidebarBackgroundLayout,
     
      
       // addThemeColors: addThemeColors,
        addBackgroundWallpaper: addBackgroundWallpaper,
        addBackgroundWallpaperGradients: addBackgroundWallpaperGradients,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CustomizerProvider;
