import * as React from "react";
import { useEffect } from "react";
import { Box, Grid, Tooltip, Pagination, PaginationItem } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getAllPostsThunk } from "../../redux/posts/thunks";
import { postsSelector } from "../../redux/posts/selectors";
import { AdminRoutes } from "../../config/routes";
import { Post } from "../../types/post";
import { BTN_TITLE, ICON_TITLE } from "../../helpers/constants";
import AdminMainButton from "../../components/AdminMainButton";
import {
  LinkWrapper,
  StyledStatusButton,
  StyledTable,
  StyledTBody,
  StyledTRow,
  StyledTitleNoTopics,
  NoTopicsWrapper,
  ImageBackground,
  NoTopicsTitleWrapper,
  StyledTDataUrl,
  StyledTDataName,
  StyledHead,
  StyledNameBox,
  StyledStatusBox,
  StyledUrlBox,
  StyledDataBox,
  StyledActionBox,
  StyledTDataStatus,
  StyledTDataDate,
  StyleName,
  StyledUrl,
  StyledLine,
  ActionWrapper,
  GridWrapper,
  BoxWrapper,
  StyledTDataAction,
} from "./styles";
import ActionTopicButton from "../../components/ActionTopicButton";
import { format } from "date-fns";
import Container from "../../components/Container";

const Topics: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(postsSelector);
  useEffect(() => {
    dispatch(getAllPostsThunk({ limit: 8, page: posts?.page, status: "All" }));
  }, [dispatch]);

  const renderPost = (arr: any) => {
    return arr?.map((post: Post) => (
      <>
        <StyledTRow key={post._id}>
          <StyledTDataName>
            <StyleName>{post.title}</StyleName>
          </StyledTDataName>
          <StyledTDataStatus>
            <StyledStatusButton
              style={
                post.status === "DRAFT"
                  ? { background: "#EBF6FF", color: "#2196F3" }
                  : post.status === "PUBLISHED"
                  ? { background: "#2196F3" }
                  : { background: "#CAC7C7" }
              }
            >
              {post.status}
            </StyledStatusButton>
          </StyledTDataStatus>
          <StyledTDataUrl>
            <StyledUrl>{post.url}</StyledUrl>
          </StyledTDataUrl>
          <StyledTDataDate>
            {format(new Date(`${post.createdAt}`), "dd.MM.yyyy")}
          </StyledTDataDate>
          <StyledTDataAction>
            <LinkWrapper to={`${AdminRoutes.Topic}/edit/${post._id}`}>
              <Tooltip title={ICON_TITLE.EDIT_POST} arrow>
                <ActionTopicButton text={BTN_TITLE.EDIT} />
              </Tooltip>
            </LinkWrapper>
          </StyledTDataAction>
        </StyledTRow>
        <StyledLine></StyledLine>
      </>
    ));
  };

  return (
    <Container>
      {posts?.docs.length ? (
        <BoxWrapper>
          <Box sx={{ maxWidth: "100%" }}>
            <Grid container xs={12}>
              <GridWrapper container justifyContent="space-between">
                <Grid item></Grid>
                <Grid item>
                  <LinkWrapper to={`${AdminRoutes.Topic}/add`}>
                    <AdminMainButton text={BTN_TITLE.CREATE} />
                  </LinkWrapper>
                </Grid>
              </GridWrapper>
              <StyledHead>
                <StyledNameBox>Name</StyledNameBox>
                <StyledStatusBox>Status</StyledStatusBox>
                <StyledUrlBox>Url</StyledUrlBox>
                <StyledDataBox>Date</StyledDataBox>
                <StyledActionBox>
                  <ActionWrapper>Action</ActionWrapper>
                </StyledActionBox>
              </StyledHead>
              <StyledTable>
                <StyledTBody>{renderPost(posts?.docs)}</StyledTBody>
              </StyledTable>
            </Grid>
          </Box>
          <Pagination
            hideNextButton
            hidePrevButton
            renderItem={(item) => {
              const selected = Boolean(item.page === posts?.page);
              const newItem = { ...item, selected: selected };
              return (
                <PaginationItem
                  sx={{
                    fontFamily: `"Montserrat", sans-serif`,
                    fontWeight: 600,
                    color: "#717384",
                  }}
                  {...newItem}
                />
              );
            }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            count={posts?.totalPages}
            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              dispatch(
                getAllPostsThunk({
                  limit: posts?.limit,
                  page: page,
                  status: "All",
                })
              );
            }}
          />
        </BoxWrapper>
      ) : (
        <NoTopicsWrapper>
          <ImageBackground></ImageBackground>
          <NoTopicsTitleWrapper>
            <StyledTitleNoTopics>Have no topics yet</StyledTitleNoTopics>
            <LinkWrapper to={`${AdminRoutes.Topic}/add`}>
              <AdminMainButton text={BTN_TITLE.CREATE} />
            </LinkWrapper>
          </NoTopicsTitleWrapper>
        </NoTopicsWrapper>
      )}
    </Container>
  );
};

export default Topics;
