import Axios from 'axios';

const envMode = process.env.NODE_ENV;

/**
 * 	* JWT
 * 	* Security scheme type:	HTTP
 * 	* HTTP Authorization Scheme	bearer
 *  * api call is only success return, other error response is server Error
 */

export const axiosSetting = {
  scheme:
    envMode === 'production' ? window.location.protocol.replace(':', '') : process.env.NEXT_PUBLIC_REACT_APP_SCHEME,
  host: envMode === 'production' ? window.location.host : process.env.NEXT_PUBLIC_REACT_APP_HOST,
  api: process.env.NEXT_PUBLIC_REACT_APP_API,
  port: envMode === 'production' ? '' : process.env.NEXT_PUBLIC_REACT_APP_PORT,
  server() {
    return `${this.scheme ? `${this.scheme}:` : ''}//${this.host}${this.port ? `:${this.port}` : ''}${this.api}`;
  },
};

export const axios = Axios.create({
  baseURL: axiosSetting.server(),
});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const accessToken = '';
    let { headers } = config;
    if (accessToken)
      headers = {
        ...config.headers,
        Authorization: `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_TOKEN} ${accessToken}`,
      };
    return { ...config, headers };
  },
  (error) => Promise.reject(error),
);
