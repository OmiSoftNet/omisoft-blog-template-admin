import * as Yup from "yup";

export type QueryProps = {
  password: string;
  newPassword: string;
};

export type Props = {
  passwordModal: boolean;
  handlePasswordModalClose: () => void;
  handlePasswordChange: (arg0: QueryProps) => void;
};

export const initialValues = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

export const getValidationSchema = () =>
  Yup.object().shape({
    password: Yup.string().required("This field is required"),
    newPassword: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[A-Za-z\d\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]{8,}$/,
        "The password must contain small and large latin letters, numbers and special characters and minimum 8 characters"
      )
      .required("This field is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords do not match")
      .required("This field is required"),
  });
