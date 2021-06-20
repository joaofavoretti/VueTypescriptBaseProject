import { RequestResponse } from '@/shared/models/request-response-model';
import { AuthenticationTokens, AuthSessionKeys } from '@/store/modules/auth/auth-types';
import Api from './api';

export default class AuthenticationService {

  static async login(token: string): Promise<void> {
    const headers = { Authorization: token };

    const { data: res } = await Api.post<any, RequestResponse<AuthenticationTokens>>('your/authentication/token/uri', {}, { headers });

    this.setSessionStorageAuth(res.data);
  }

  static setSessionStorageAuth(authTokens: AuthenticationTokens): void {
    sessionStorage.setItem(AuthSessionKeys.TOKEN, `Bearer ${authTokens.accessToken}`);
  }

  static get authToken(): string | null {
    return sessionStorage.getItem(AuthSessionKeys.TOKEN);
  }
}
