const reactOnPostApi = (data) => {
    const xhr = axios.request({
      method: 'post',
      url: `${APP_URL}/v1.5/like/create`,
      data,
    });
    return xhr;
  };