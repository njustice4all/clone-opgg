import axios, { AxiosInstance } from 'axios';

class Http {
  private baseURL: string;
  instance: AxiosInstance;

  constructor() {
    this.baseURL = process.env.REACT_APP_BASE_URL || '';
    this.instance = axios.create({ baseURL: this.baseURL, timeout: 10000 });

    this.initialize();
  }

  private initialize() {
    this.instance.interceptors.request.use((config) => {
      return config;
    });

    this.instance.interceptors.response.use(undefined, (error) => {
      const { status } = error.response;

      switch (status) {
        case 401:
          console.error('Unauthorized');
          break;
        case 403:
          console.error('Forbidden');
          break;
        case 404:
          console.error('Not Found');
          break;
      }

      return Promise.reject(error);
    });
  }
}

export default new Http();
