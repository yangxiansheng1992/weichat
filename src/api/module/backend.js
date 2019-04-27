// 业务模块1
import http from '../http';
import url from '../url';

export default {
  getList(params) {
    return http({
      method: 'get',
      url: `${url.backend}/api/v1/list`,
      params
    });
  },
};
