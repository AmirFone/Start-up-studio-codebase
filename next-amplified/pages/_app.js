// pages/_app.js
import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import AuthContext from './auth-context';
import '../src/app/globals.css';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
