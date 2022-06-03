import * as React from "react";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import { Cancel } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Grid,
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import "react-markdown-editor-lite/lib/index.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  initialValues,
  initialValuesI,
  initialValuesEdit,
  initialValuesEditI,
} from "./config";
import {
  selectedPostSelector,
  loadingSelector,
  allPostsUrlsSelector,
  postStatusSelector,
} from "../../redux/posts/selectors";
import {
  TOPIC_ACTIONS,
  BTN_TITLE,
  INPUT_LABEL,
  STATUS_TYPES_ENUM,
  STATUS_SELECT,
  LoadingResultsT,
} from "../../helpers/constants";
import {
  editPostThunk,
  createPostThunk,
  getPostByIdThunk,
  getAllUrlThunk,
} from "../../redux/posts/thunks";
import postSlice from "../../redux/posts/slice";
import AdminMainButton from "../../components/AdminMainButton";
import CancelButton from "../../components/CancelButton";
import Container from "../../components/Container";
import Notification from "../../utils/Notification";
import { AdminRoutes } from "../../config/routes";
import {
  StyledGrid,
  ButtonsWrapper,
  SaveButtonWrapper,
  StyledTitle,
  TextFieldWrapper,
  StyledGridBottom,
  StyledGridItem,
  InputGrid,
  StyledGridSelect,
  StyledTitleWrapper,
  FormWrapper,
  StyledTitleGrid,
} from "./styles";

const Topic: React.FC = () => {
  const loading = useSelector(loadingSelector);
  const allUrls = useSelector(allPostsUrlsSelector);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectedPostSelector);
  const mdParser = new MarkdownIt();
  const { action, id } = params;
  const isEdit = action === TOPIC_ACTIONS.URL_EDIT;
  const actionTitle = isEdit ? TOPIC_ACTIONS.EDIT : TOPIC_ACTIONS.ADD;
  const [tags, setTags] = useState<string[]>([]);
  const tagRef = useRef<HTMLInputElement>();
  const [similarArticles, setSimilarArticles] = useState<string[]>([]);
  const [notificationIsOpen, setNotification] = useState(false);
  const postStatuses = useAppSelector(postStatusSelector);
  const succeedCreate = postStatuses["posts/createPostThunk"]?.success;

  const formik = useFormik({
    initialValues: isEdit ? initialValuesEdit(post) : initialValues(),
    enableReinitialize: true,
    onSubmit: (values, helpers) => {
      handleSubmit(values);
      !isEdit && succeedCreate && helpers.resetForm();
    },
  });

  React.useEffect(() => {
    dispatch(getAllUrlThunk());
  }, []);

  React.useEffect(() => {
    isEdit && setTags(post?.tags || []);
  }, [post]);

  React.useEffect(() => {
    const similarArticlesUrl = post?.similarArticles.map((item) => {
      return item.title;
    });
    isEdit && setSimilarArticles(similarArticlesUrl || []);
  }, [post]);

  React.useEffect(() => {
    isEdit && dispatch(getPostByIdThunk(id || ""));
  }, [dispatch, isEdit, id]);

  React.useEffect(() => {
    if (loading === LoadingResultsT.SUCCEEDED) {
      navigate("/topics");
    }
  }, [loading]);

  const handleChangeMarkdown = (text: string) =>
    formik.setFieldValue("topic", text);

  const hadleCloseNotification = () => {
    setNotification(false);
    dispatch(postSlice.actions.resetStatus());
  };

  const handleOpenNotification = () => setNotification(true);

  const handleSubmit = (values: initialValuesI | initialValuesEditI) => {
    values.tags = tags;
    handleOpenNotification();
    if (isEdit) {
      dispatch(editPostThunk(values as initialValuesEditI));
      setTags([]);
    } else {
      values.status = STATUS_TYPES_ENUM.DRAFT;
      dispatch(createPostThunk(values));
      setTags([]);
    }
  };

  const cancelHandler = () => {
    setTags([]);
    navigate(AdminRoutes.Topics);
  };

  const handleDeleteTag = (value: string) => {
    const newtags = tags.filter((val) => val !== value);
    setTags(newtags);
  };

  const InputTags = () => {
    const handleOnSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (tagRef && tagRef.current && tagRef.current.value.trim()) {
        const newArray = [...tags, tagRef.current.value];
        setTags(newArray);
        tagRef.current.value = "";
      }
    };
    return (
      <StyledGrid container xs={12}>
        <Grid item xs={7}>
          <form onSubmit={handleOnSubmit}>
            <TextFieldWrapper
              inputRef={tagRef}
              fullWidth
              size="small"
              label={INPUT_LABEL.ADDTAG}
            />
          </form>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "16px",
            }}
          >
            {tags.map((data: string) => {
              return (
                <Box
                  sx={{
                    borderRadius: 50,
                    background: "#EBF6FF",
                    height: "100%",
                    display: "flex",
                    padding: "8px 15px",
                    margin: "18px 8px 0  0",
                    justifyContent: "center",
                    alignContent: "center",
                    color: "#2196F3",
                  }}
                >
                  <Stack direction="row" gap={1}>
                    <Typography>{data}</Typography>
                    <Cancel
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        handleDeleteTag(data);
                      }}
                    />
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </StyledGrid>
    );
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 600,
        width: 430,
      },
    },
  };
  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;

    setSimilarArticles(typeof value === "string" ? value.split(",") : value);

    const formikValueSimilarTopic = allUrls
      ?.filter((item) => value.includes(item.title))
      .map((item) => item._id);

    formik.setFieldValue("similarArticles", formikValueSimilarTopic);
  };
  const limitError = similarArticles.length > 3;
  return (
    <Container>
      <StyledTitleWrapper>
        <StyledTitle>{actionTitle}</StyledTitle>
      </StyledTitleWrapper>

      {actionTitle !== "edit topic" || formik.values.status ? (
        <FormWrapper>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
              const element = e.target as HTMLElement;
              if (element.nodeName !== "TEXTAREA" && e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            <StyledGrid justifyContent="space-between" container xs={7}>
              <StyledTitleGrid item xs={7}>
                <TextFieldWrapper
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  label={INPUT_LABEL.TITLE}
                  name="title"
                  value={formik.values.title}
                  helperText={formik.touched["title"] && formik.errors["title"]}
                />
              </StyledTitleGrid>
              {isEdit && (
                <StyledGridSelect item xs={4}>
                  <Box>
                    <FormControl
                      size="small"
                      sx={{
                        minWidth: 130,
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{ borderRadius: "10px", padding: 0 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.status}
                        label="status"
                        name="status"
                        onChange={formik.handleChange}
                      >
                        <MenuItem value={STATUS_TYPES_ENUM.PUBLISHED}>
                          {STATUS_SELECT.PUBLISHED}
                        </MenuItem>
                        <MenuItem value={STATUS_TYPES_ENUM.DRAFT}>
                          {STATUS_SELECT.DRAFT}
                        </MenuItem>
                        <MenuItem value={STATUS_TYPES_ENUM.ARCHIVED}>
                          {STATUS_SELECT.ARCHIVED}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </StyledGridSelect>
              )}
            </StyledGrid>
            <StyledGrid container xs={12}>
              <Grid item xs={7}>
                <TextFieldWrapper
                  size="small"
                  fullWidth
                  multiline
                  rows={1}
                  inputProps={{ style: { minHeight: 113, width: "100%" } }}
                  onChange={formik.handleChange}
                  label={INPUT_LABEL.SHORT_DESCRIPTION}
                  name="shortDescription"
                  value={formik.values.shortDescription}
                  helperText={
                    formik.touched["shortDescription"] &&
                    formik.errors["shortDescription"]
                  }
                />
              </Grid>
            </StyledGrid>
            <StyledGrid container spacing={2}>
              <Grid item xs={12}>
                <MdEditor
                  onChange={({ text }) => handleChangeMarkdown(text)}
                  value={formik.values.topic}
                  style={{
                    width: "100%",
                    height: "238px",
                    borderRadius: 10,
                  }}
                  renderHTML={(text) => mdParser.render(text)}
                  plugins={[
                    "header",
                    "font-bold",
                    "font-italic",
                    "list-unordered",
                    "list-ordered",
                    "block-quote",
                    "block-wrap",
                    "block-code-inline",
                    "block-code-block",
                    "image",
                    "link",
                    "clear",
                    "logger",
                    "mode-toggle",
                    "full-screen",
                  ]}
                />
              </Grid>
            </StyledGrid>
          </form>

          <InputGrid item>
            <InputTags />
          </InputGrid>

          <form
            noValidate
            onSubmit={formik.handleSubmit}
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
              const element = e.target as HTMLElement;

              if (element.nodeName !== "TEXTAREA" && e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            <StyledGrid container xs={12}>
              <StyledGridItem item xs={7}>
                <TextFieldWrapper
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  label={INPUT_LABEL.IMAGE}
                  name="imageUrl"
                  value={formik.values.imageUrl}
                  helperText={
                    formik.touched["imageUrl"] && formik.errors["imageUrl"]
                  }
                />
              </StyledGridItem>
              <StyledGridItem item xs={7}>
                <TextFieldWrapper
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  label={INPUT_LABEL.IMAGE_ALT}
                  name="imageAlt"
                  value={formik.values.imageAlt}
                  helperText={
                    formik.touched["imageAlt"] && formik.errors["imageAlt"]
                  }
                />
              </StyledGridItem>
              <StyledGridItem item xs={7}>
                <TextFieldWrapper
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  label={INPUT_LABEL.SEO_TITLE}
                  name="seoTitle"
                  value={formik.values.seoTitle}
                  helperText={
                    formik.touched["seoTitle"] && formik.errors["seoTitle"]
                  }
                />
              </StyledGridItem>
              <StyledGridBottom container xs={12}>
                <Grid container xs={7}>
                  <StyledGridItem item xs={12}>
                    <TextFieldWrapper
                      size="small"
                      fullWidth
                      multiline
                      rows={1}
                      inputProps={{
                        style: { minHeight: 90, width: "100%" },
                      }}
                      onChange={formik.handleChange}
                      label={INPUT_LABEL.SEO_DESCRIPTION}
                      name="seoDesctiption"
                      value={formik.values.seoDesctiption}
                      helperText={
                        formik.touched["seoDesctiption"] &&
                        formik.errors["seoDesctiption"]
                      }
                    />
                  </StyledGridItem>
                  <StyledGridItem item xs={12}>
                    <TextFieldWrapper
                      size="small"
                      fullWidth
                      onChange={formik.handleChange}
                      label={INPUT_LABEL.URL}
                      name="url"
                      value={formik.values.url}
                      disabled={
                        post ? isEdit && Boolean(post.url.length > 0) : false
                      }
                      helperText={formik.touched["url"] && formik.errors["url"]}
                    />
                  </StyledGridItem>

                  <FormControl
                    size="small"
                    error={limitError}
                    variant="outlined"
                    sx={{ minWidth: "100%" }}
                  >
                    <InputLabel id="demo-multiple-checkbox-label">
                      Similar Topics
                    </InputLabel>
                    <Select
                      IconComponent={KeyboardArrowDownIcon}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      sx={{ borderRadius: "10px" }}
                      multiple
                      value={similarArticles}
                      onChange={handleChange}
                      input={
                        <OutlinedInput
                          id="form-selector"
                          required
                          label="Similar Topics"
                        />
                      }
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {allUrls?.map((spec, index) => (
                        <MenuItem key={index} value={spec.title}>
                          <Checkbox
                            checked={similarArticles.indexOf(spec.title) > -1}
                          />
                          <ListItemText primary={spec.title} />
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>
                      You can choose no more than three similar topics
                    </FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item>
                  <ButtonsWrapper>
                    <Grid item xs={5}>
                      <CancelButton
                        onClick={cancelHandler}
                        text={BTN_TITLE.CANCEL}
                        type="button"
                      />
                    </Grid>
                    <SaveButtonWrapper item xs={5}>
                      <AdminMainButton text={BTN_TITLE.SAVE} />
                    </SaveButtonWrapper>
                  </ButtonsWrapper>
                </Grid>
              </StyledGridBottom>
            </StyledGrid>
          </form>
          {notificationIsOpen && (
            <Notification
              isOpen={notificationIsOpen}
              onClose={hadleCloseNotification}
            />
          )}
        </FormWrapper>
      ) : (
        <h1>loading</h1>
      )}
    </Container>
  );
};

export default Topic;
