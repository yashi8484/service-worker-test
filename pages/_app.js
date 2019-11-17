import React from 'react';
import App from 'next/app';
import OfflineSupport from '../components/OfflineSupport';

class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <OfflineSupport />
      </>
    );
  }
}

export default RootApp;
