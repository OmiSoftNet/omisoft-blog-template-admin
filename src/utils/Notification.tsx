import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppSelector } from "../hooks/useAppSelector";
import { authStatusSelector } from "../redux/auth/selectors";
import { postStatusSelector } from "../redux/posts/selectors";
import { Messages } from "../helpers/constants";

type NotificationProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export const NotificationMessage = () => {
  const authStatuses = useAppSelector(authStatusSelector);
  const postStatuses = useAppSelector(postStatusSelector);
  return {
    errorMessage:
      postStatuses["posts/editPostThunk"]?.error ||
      postStatuses["posts/createPostThunk"]?.error ||
      authStatuses["auth/resetPasswordThunk"]?.error ||
      authStatuses["auth/changePasswordThunk"]?.error,
    successMessage:
      postStatuses["posts/editPostThunk"]?.success ||
      postStatuses["posts/createPostThunk"]?.success ||
      authStatuses["auth/resetPasswordThunk"]?.success ||
      authStatuses["auth/changePasswordThunk"]?.success,
  };
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification({ isOpen, onClose }: NotificationProps) {
  const authStatuses = useAppSelector(authStatusSelector);
  const postStatuses = useAppSelector(postStatusSelector);
  const errorMessage =
    postStatuses["posts/editPostThunk"]?.error ||
    postStatuses["posts/createPostThunk"]?.error ||
    authStatuses["auth/resetPasswordThunk"]?.error ||
    authStatuses["auth/changePasswordThunk"]?.error;

  let successMessage;

  if (postStatuses["posts/editPostThunk"]?.success) {
    successMessage = Messages.successEditPost;
  }
  if (postStatuses["posts/createPostThunk"]?.success) {
    successMessage = Messages.successCreatePost;
  }
  if (authStatuses["auth/resetPasswordThunk"]?.success) {
    successMessage = Messages.successPassword;
  }
  if (authStatuses["auth/changePasswordThunk"]?.success) {
    successMessage = Messages.successPassword;
  }

  const severity = errorMessage ? "error" : "success";
  const message = errorMessage || successMessage;
  const openOnSuccess =
    postStatuses["posts/createPostThunk"]?.success ||
    postStatuses["posts/editPostThunk"]?.success;

  return message ? (
    <Snackbar
      open={isOpen || openOnSuccess}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  ) : null;
}

export default Notification;
