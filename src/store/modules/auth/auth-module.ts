import Vue from 'vue';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import AuthenticationService from '@/services/authentications-service';
import store from '@/store/index';
import { User } from './auth-types';

@Module({ namespaced: true, name: 'auth', dynamic: true, store })
class AuthStore extends VuexModule {
  loading = false;

  signed = false;

  @Action({ rawError: true })
  async login(user: User) {
    try {
      this.setLoading(true);
      const userToken = `Basic ${btoa(`${user.username}:${user.password}`)}`;
      await AuthenticationService.login(userToken);
    } catch (error) {
      const [message] = error.data.messages[0];
      Vue.toasted.global.customError(message);
    } finally {
      this.setLoading(false);
    }
  }

  get isSigned() {
    return this.signed;
  }

  get isLoading() {
    return this.loading;
  }

  @Mutation
  setSigned(value: boolean) {
    this.signed = value;
  }

  @Mutation
  setLoading(value: boolean) {
    this.loading = value;
  }
}

export default getModule(AuthStore);
