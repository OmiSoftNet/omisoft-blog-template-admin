import * as React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, getValidationSchema, Props } from "./config";
import { Modal, Box } from "@mui/material";
import {
  style,
  StyledButtonContainer,
  StyledFormButton,
  TextFieldWrapper,
  StyledText,
  StyledFormicError,
  ClosedEyeButton,
  OpenEyeButton,
} from "./styles";

const ResetPasswordModal = (props: Props) => {
  const [isOldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);

  const showOldPassword = () => {
    setOldPasswordVisible(!isOldPasswordVisible);
  };
  const showNewPassword = () => {
    setNewPasswordVisible(!isNewPasswordVisible);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: getValidationSchema,
    onSubmit: (values) => {
      const reqValues = {
        password: values.password,
        newPassword: values.newPassword,
      };
      props.handlePasswordChange(reqValues);
      props.handlePasswordModalClose();
    },
  });
  const disabledButton = Boolean(
    formik.errors.confirmPassword ||
      formik.errors.newPassword ||
      !formik.values.confirmPassword ||
      !formik.values.newPassword ||
      !formik.values.password
  );

  return (
    <div>
      <Modal
        open={props.passwordModal}
        onClose={props.handlePasswordModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledText id="modal-modal-title">Change Password</StyledText>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 1 }}>
              <TextFieldWrapper
                onChange={formik.handleChange}
                margin="normal"
                required
                fullWidth
                id="password"
                type={isOldPasswordVisible ? "text" : "password"}
                label="Old password"
                name="password"
                autoFocus
              />
              {isOldPasswordVisible ? (
                <OpenEyeButton onClick={showOldPassword} />
              ) : (
                <ClosedEyeButton onClick={showOldPassword} />
              )}
              <TextFieldWrapper
                color={
                  formik.errors.newPassword && formik.touched.newPassword
                    ? "error"
                    : "primary"
                }
                onChange={formik.handleChange}
                margin="normal"
                required
                fullWidth
                onBlur={formik.handleBlur}
                name="newPassword"
                label="New password"
                type={isNewPasswordVisible ? "text" : "password"}
                id="newPassword"
              />
              {isNewPasswordVisible ? (
                <OpenEyeButton onClick={showNewPassword} />
              ) : (
                <ClosedEyeButton onClick={showNewPassword} />
              )}
              {formik.errors.newPassword && formik.touched.newPassword && (
                <StyledFormicError>
                  {formik.errors.newPassword}
                </StyledFormicError>
              )}
              <TextFieldWrapper
                onChange={formik.handleChange}
                margin="normal"
                onBlur={formik.handleBlur}
                color={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? "error"
                    : "primary"
                }
                required
                fullWidth
                name="confirmPassword"
                label="Confirm new password"
                type={isNewPasswordVisible ? "text" : "password"}
                id="confirmPassword"
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <StyledFormicError>
                    {formik.errors.confirmPassword}
                  </StyledFormicError>
                )}
              <StyledButtonContainer>
                <StyledFormButton
                  type="button"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={props.handlePasswordModalClose}
                >
                  cancel
                </StyledFormButton>
                <StyledFormButton
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={disabledButton}
                >
                  change
                </StyledFormButton>
              </StyledButtonContainer>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ResetPasswordModal;
