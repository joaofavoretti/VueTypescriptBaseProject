import { ObjectSchema, Shape } from 'yup';
import { YupFormValidation } from './yup-form-validation';

export default class YupFormValidator {
  static errors: any = {};

  static async validate<T extends object>(
    schema: ObjectSchema<Shape<T | undefined, T>, object>,
    fieldname: keyof T,
    value: Shape<T | undefined, T>,
  ): Promise<YupFormValidation<T>> {
    try {
      await schema.validateAt(fieldname as string, value);
      this.errors[fieldname] = [];
    } catch (error) {
      this.errors[fieldname] = [error.message];
    } finally {
      const isValid = await schema.isValid(value);
      const { errors } = this;
      return { errors, isValid } as YupFormValidation<T>;
    }
  }
}
