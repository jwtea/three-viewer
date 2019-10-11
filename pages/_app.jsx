/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body,#__next {
    width: 100%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.01em;
    line-height: 1.8;
    margin: 0;
    padding: 0;
    color: #555555;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    user-select: none;
    overflow: hidden;
  }

  button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;

    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
      background: #0053ba;
  }

  button:focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
  }

  button:active {
      transform: scale(0.99);
  }

  ul{
    list-style: none;
  }

`;

const theme = {
  colors: {
    primary: '#1563FF',
    secondary: 'white',
    black: 'black',
    white: 'white',
    grey: '#7b8a8e',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
