import http from './http';

function getFormData(p) {
  const params = p;
  params.timestamp = Math.round(new Date().getTime() / 1000);
  params.org_code = localStorage.getItem('org_code');
  // params.user_code = localStorage.getItem('user_code');
  const data = new FormData();
  data.append('app_id', 4);
  data.append('table', 'business');
  data.append('param', JSON.stringify(params));
  data.append('m', 'CardSdk');
  return data;
}

export default {
  post(action, param) {
    const data = getFormData(param);
    data.append('action', action);
    return http.request(process.env.VUE_APP_API_URL, data);
  },
};
