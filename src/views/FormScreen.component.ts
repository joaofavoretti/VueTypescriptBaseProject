import userSchema from '@/shared/validations/form-validation-schema';
import YupFormValidator from '@/shared/yup/yup-form-validator';
import AuthStore from '@/store/modules/auth/auth-module';
import { User } from '@/store/modules/auth/auth-types';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  user: User = {
    username: '',
    password: '',
  };

  validator = {
    errors: {},
    isValid: false,
  };

  async validate(fieldname: keyof User): void {
    this.validator = await YupFormValidator.validate(userSchema, fieldname, this.user);
  }

  get loading(): boolean {
    return AuthStore.isLoading;
  }

  async login(): void {
    // await AuthStore.login(this.user);
  }
}
