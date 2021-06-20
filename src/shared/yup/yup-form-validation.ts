export type YupFormValidation<T> = {
  isValid: boolean;
  errors: {
    [P in keyof T]?: string[];
  }
}
