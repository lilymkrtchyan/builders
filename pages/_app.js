// pages/_app.
// import { BrowserRouter as Router } from 'react-router-dom';

import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    
      <Component {...pageProps} />
   
  );
}

export default MyApp;
