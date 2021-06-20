import router from '@/router';
import { AuthErrors, AuthSessionKeys } from '@/store/modules/auth/auth-types';
import { AxiosInstance } from 'axios';
import Vue from 'vue';
import AuthenticationService from './authentications-service';

const configApiInterceptors = (Api: AxiosInstance): void => {
  Api.interceptors.request.use((config) => {
    if (config.headers.Authorization) {
      return config;
    }

    const authToken = sessionStorage.getItem(AuthSessionKeys.TOKEN);

    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = authToken;

    return config;
  });

  Api.interceptors.response.use((response) => response, async (error) => {
    const { status, config: originalRequest } = error.response;

    const isLoginPage = (router as any).history.current.name === 'login';

    const isRefreshRequest = originalRequest.url.includes('refresh');

    if ((status === AuthErrors.UNAUTHORIZED || status === AuthErrors.FORBIDDEN) && !isLoginPage && isRefreshRequest) {
      Vue.toasted.global.customError('Seu tempo de sessão expirou. Por favor, faça login novamente para continuar.');
      return router.push({ name: 'login' });
    }

    if (status === AuthErrors.FORBIDDEN && !isLoginPage) {
      const [message] = error.response.data.messages;
      Vue.toasted.global.customError(message);
      return router.push({ name: 'login' });
    }

    return Promise.reject(error.response);
  });
};

export default configApiInterceptors;
