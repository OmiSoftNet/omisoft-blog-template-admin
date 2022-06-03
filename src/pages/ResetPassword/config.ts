import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

export const getValidationSchema = () =>
  Yup.object().shape({
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[A-Za-z\d\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]{8,}$/,
        "The password must contain small and large latin letters, numbers and special characters  and minimum 8 characters"
      )
      .oneOf(
        [Yup.ref("repeatPassword"), null],
        "The two password fields didn't match"
      )
      .required("This field is required"),
    repeatPassword: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[A-Za-z\d\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]{8,}$/,
        "Wrong pattern"
      )
      .oneOf(
        [Yup.ref("password"), null],
        "The two password fields didn't match"
      )
      .required("This field is required"),
  });
