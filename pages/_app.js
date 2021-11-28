import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

import { store } from 'redux/store';
import { getLayoutTitle } from "helpers/common";

import { Layout } from 'components/Layout';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const title = getLayoutTitle(pathname)
  
  return (
    <Provider store={store}>
      <Layout title={title}>
        <Component {...pageProps} />
      </Layout>
      
    </Provider>
  );
}

export default MyApp;
