import Yup from '@/shared/yup/yup-config';
import { User } from '@/store/modules/auth/auth-types';

const userSchema = Yup.object<User>().shape<User>({
  username: Yup.string().document().required().label('CPF'),
  password: Yup.string().length(6).required().label('Senha'),
});

export default userSchema;
