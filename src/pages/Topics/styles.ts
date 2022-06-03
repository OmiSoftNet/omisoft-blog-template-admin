import styled from "@emotion/styled";
import { ListItem, Avatar, TableCell, TableBody, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledList = styled("div")(() => ({
  border: 0,
  maxWidth: "100%",
  flexBasis: "100%",
  padding: 0,
}));

export const StyledListTitle = styled("div")(() => ({
  fontWeight: 700,
  fontSize: 17,
  color: "#2196F3",
  textTransform: "uppercase",
  margin: 0,
}));

export const StyledListItem = styled(ListItem)(() => ({
  padding: 0,
  color: "black",
}));
export const NameWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const AvatarWrapper = styled(Avatar)(() => ({
  marginRight: 4,
}));
export const StyledTableTitle = styled("h4")(() => ({
  fontSize: 18,
  margin: 0,
}));
export const TableCellWrapper = styled(TableCell)(() => ({
  backgroundColor: "#EBF6FF",
  padding: 10,
}));
export const TableCellRelative = styled(TableCell)(() => ({
  position: "relative",
}));
export const LinkWrapper = styled(NavLink)(() => ({
  textDecoration: "none",
}));

export const StyledTableBody = styled(TableBody)(() => ({
  display: "block",
  overflow: "auto",
  height: 200,
  overflowY: "scroll",
}));
export const StyledStatusButton = styled("button")(() => ({
  minWidth: 85,
  borderRadius: 50,
  fontWeight: 400,
  fontSize: 16,
  color: "white",
  border: "none",
  padding: "8px 10px",
  textTransform: "lowercase",
}));

export const StyledTable = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  color: "black",
  width: "100%",
}));
export const StyledHead = styled("div")(() => ({
  width: "100%",
  textAlign: "left",
  color: "black",
  backgroundColor: "#EBF6FF",
  fontWeight: 600,
  fontSize: 18,
  padding: "13px 32px",
  borderRadius: 10,
  display: "flex",
}));
export const StyledNameBox = styled("div")(() => ({
  flexBasis: "29%",
  flexGrow: 3,
}));
export const StyledStatusBox = styled("div")(() => ({
  flexGrow: 1,
  flexBasis: "17%",
}));
export const StyledUrlBox = styled("div")(() => ({
  flexGrow: 2,
  flexBasis: "22%",
}));
export const StyledDataBox = styled("div")(() => ({
  flexGrow: 1,
  flexBasis: "17%",
}));
export const StyledActionBox = styled("div")(() => ({
  textAlign: "right",
  flexBasis: "15%",
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
}));
export const StyledTBody = styled("div")(() => ({
  fontWeight: 500,
  fontSize: 16,
  marginTop: 9,
  color: "#000000",
  width: "100%",
}));
export const StyledTDataAction = styled("div")(() => ({
  flexGrow: 1,
  textAlign: "right",
  flexBasis: "15%",
}));
export const StyledTDataStatus = styled("div")(() => ({
  flexBasis: "17%",
  flexGrow: 1,
}));
export const StyledTDataDate = styled("div")(() => ({
  flexGrow: 1,
  flexBasis: "17%",
}));

export const StyledTDataName = styled("div")(() => ({
  color: "#333333",
  flexBasis: "29%",
  flexGrow: 3,
}));

export const StyleName = styled("div")(() => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "14vw",
  display: "inline-block",
  WebkitBoxOrient: "vertical",
  padding: "2px 0",
}));
export const StyledUrl = styled("div")(() => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  height: "1.2em",
  whiteSpace: "nowrap",
  maxWidth: "9vw",
  display: "block",
  WebkitBoxOrient: "vertical",
  padding: "2px 0",
}));
export const StyledTDataUrl = styled("div")(() => ({
  color: "#595959",
  flexGrow: 2,
  flexBasis: "22%",
}));
export const StyledTRow = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "17px 32px ",
}));
export const StyledTitleNoTopics = styled("h2")(() => ({
  fontWeight: 700,
  fontSize: 48,
  color: "black",
  marginBottom: "4vw",
}));
export const NoTopicsWrapper = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "15vh",
}));
export const ImageBackground = styled("div")(() => ({
  width: 470,
  height: 457,
  backgroundImage: "url('/images/no-topic.webp')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}));
export const NoTopicsTitleWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));
export const StyledLine = styled("div")(() => ({
  borderBottom: "2px solid #EBF5FD",
  marginLeft: 32,
  marginRight: 32,
}));
export const ActionWrapper = styled("div")(() => ({
  minWidth: "7vw",
  textAlign: "left",
}));
export const GridWrapper = styled(Grid)(() => ({
  paddingBottom: 30,
}));

export const StyledMenuArrow = styled("button")(() => ({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
}));

export const MenuBox = styled("div")(() => ({
  display: "flex",
  alignItems: "baseline",
  position: "relative",
}));

export const StyledMenuTitle = styled("p")(() => ({
  fontWeight: "700",
  fontSize: 17,
  marginRight: 9,
  color: "white",
}));

export const StyledMenuList = styled("ul")(() => ({
  position: "absolute",
  listStyleType: "none",
  backgroundColor: "white",
  color: "#717384",
  fontWeight: "600",
  fontSize: 17,
  padding: "15px 26px",
  width: 190,
  borderRadius: 10,
  left: "-175%",
  top: "-50%",
}));

export const StyledMenuItem = styled("li")(() => ({
  cursor: "pointer",
  "&:first-of-type": {
    marginBottom: 10,
  },
}));
export const BoxWrapper = styled("div")(() => ({
  marginTop: 25,
}));
export const ActionWrapperBox = styled("div")(() => ({
  minWidth: "7vw",
}));
