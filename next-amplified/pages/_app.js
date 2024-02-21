// pages/_app.js
import '../src/app/globals.css'; // Adjust this path if necessary to correctly point to your globals.css file
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
