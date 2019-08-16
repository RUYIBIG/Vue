/* eslint-disable */
import axios from 'axios';
// import util from './util';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 1000 * 60;
axios.interceptors.request.use(
  (config) => {
    if (config.data.action != 'get_bill'){
      window.console.log('show');
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => {
    window.console.log('hide');
    return response;
  },
  (error) => {
    window.console.log('hide');
    return Promise.reject(error);
  },
);

function process(res, resolve, reject) {
  if (!res || res.status !== 200) {
    reject('api error');
  } else {
    const resp = res.data;
    if (resp.code === 0) {
      resolve(resp);
    } else {
      window.console.log(resp.msg);
    }
  }
}

export default {
  request(url, data) {
    return new Promise((resolve, reject) => {
      let config = {};
      if (data.action === 'upload_image_file') {
        config = {
          headers: { 'Content-Type': 'multipart/form-data' },
        };
      }
      axios.post(url, data, config).then((res) => {
        process(res, resolve, reject);
      }).catch(function (error) {
        util.alert('请检查网络情况');
      });
    });
  },
};

