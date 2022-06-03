export interface ILoginCredentials {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface ISignUpCredentials {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  repeatPassword?: FormDataEntryValue | null;
}

export interface IChangePassword {
  password: FormDataEntryValue | null;
  newPassword: FormDataEntryValue | null;
  confirmPassword?: FormDataEntryValue | null;
}

export interface IOneTimeLink {
  token: string;
}

export interface IResetPasswordCredentials {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  repeatPassword?: FormDataEntryValue | null;
}
