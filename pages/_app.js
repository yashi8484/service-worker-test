import React from 'react';
import App from 'next/app';
import OfflineSupport from '../components/OfflineSupport';

class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div style={{ width: '1000px', margin: '0 auto' }}>
        <Component {...pageProps} />
        <OfflineSupport />
      </div>
    );
  }
}

export default RootApp;
