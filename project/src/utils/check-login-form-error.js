

export const checkLoginFormError = (email, password) =>  {
  switch (true) {
    case email.validity.valueMissing:
      return {
        login: true,
        password: false,
        message: 'Поля не должны быть пустыми',
      };
    case password.validity.valueMissing:
      return {
        login: false,
        password: true,
        message: 'Поля не должны быть пустыми',
      };
    case email.validity.typeMismatch:
      return {
        login: true,
        password: false,
        message: 'Введите корректный e-mail адрес',
      };
    case password.validity.tooShort:
    case password.validity.tooLong:
      return {
        login: false,
        password: true,
        message: `Пароль не должен быть короче ${password.minLength}-х
        и длиннее ${password.maxLength} символов.`,
      };
    case !password.value.trim():
      return {
        login: false,
        password: true,
        message: 'Пароль не может состоять только из пробелов',
      };
    default:
      return {
        login: false,
        password: false,
        message: '',
      };
  }
};
