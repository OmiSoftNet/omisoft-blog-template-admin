import * as React from "react";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Notification from "../../utils/Notification";
import MenuListComposition from "../AdminControlList/AdminControlList";
import {
  StyledWrapper,
  StyledContainer,
  MainContainer,
  HeaderContainer,
  Title,
} from "./styles";

import SideBar from "../SideBar";
import ResetPasswordModal from "../ResetPasswordModal/ResetPasswordModal";
import { changePasswordThunk } from "../../redux/auth/thunks";
import { IChangePassword } from "../../types/auth";
import { TOPICS_BUTTON, TOPIC_ACTIONS } from "../../helpers/constants";
import authSlice from "../../redux/auth/slice";
import { useNavigate, useLocation } from "react-router-dom";
import { AdminRoutes } from "../../config/routes";
import postSlice from "../../redux/posts/slice";

const Container: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isMembers = location.pathname === TOPICS_BUTTON.MEMBERS;
  const headerTitle = !isMembers ? TOPIC_ACTIONS.TOPICS : TOPIC_ACTIONS.MEMBERS;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [notificationIsOpen, setNotification] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const handleMenuClose = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    if (
      element.nodeName === "LI" ||
      element.nodeName === "svg" ||
      element.nodeName === "P" ||
      element.nodeName === "path"
    ) {
      return;
    }
    setMenuIsOpen(false);
  };
  const hadleCloseNotification = () => {
    setNotification(false);
    dispatch(authSlice.actions.resetStatus());
    dispatch(postSlice.actions.resetStatus());
  };
  const handlePasswordModalClose = () => {
    setPasswordModal(false);
  };

  const handlePasswordModalOpen = () => {
    setPasswordModal(true);
  };

  const handlePasswordChange = (values: IChangePassword) => {
    dispatch(changePasswordThunk(values));
    setNotification(true);
  };

  const handleLogout = async () => {
    localStorage.clear();
    dispatch(authSlice.actions.reset());
    navigate(AdminRoutes.Login);
  };

  return (
    <MainContainer onClick={handleMenuClose}>
      <SideBar />
      <StyledWrapper>
        <HeaderContainer>
          <Title>{headerTitle}</Title>
          <MenuListComposition
            handlePasswordModalOpen={handlePasswordModalOpen}
            handleLogout={handleLogout}
          />
        </HeaderContainer>
        <StyledContainer>
          {passwordModal && (
            <ResetPasswordModal
              handlePasswordChange={handlePasswordChange}
              passwordModal={passwordModal}
              handlePasswordModalClose={handlePasswordModalClose}
            />
          )}

          {children}
        </StyledContainer>
      </StyledWrapper>
      {
        <Notification
          isOpen={notificationIsOpen}
          onClose={hadleCloseNotification}
        />
      }
    </MainContainer>
  );
};

export default Container;
