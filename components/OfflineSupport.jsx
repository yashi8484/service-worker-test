import React from 'react';

class OfflineSupport extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log(
            `service worker registration successful. scope=${registration.scope}`
          );
        })
        .catch(e => {
          console.warn('service worker registration failed', e.message);
        });
    }
  }
  render() {
    return null;
  }
}

export default OfflineSupport;
