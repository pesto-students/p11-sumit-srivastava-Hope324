function displayWindowProperties() {
    console.log('User Agent:', window.navigator.userAgent);
    console.log('Screen Dimensions:', window.screen.width, 'x', window.screen.height);
    console.log('Current URL:', window.location.href);
    console.log('Path:', window.location.pathname);
    console.log('Session Storage:', window.sessionStorage);
    console.log('Local Storage:', window.localStorage);
  }
  
  displayWindowProperties();
  