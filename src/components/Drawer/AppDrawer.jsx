import MainBtn from "../UI/Buttons/MainBtn";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/actions";
import Logo from "../UI/Logo";
import { IconButton, Divider, Typography, Drawer } from "@mui/material";
import AppDrawerHeader from "./AppDrawerHeader";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DocList from "./DocList";

const styles = {
  drawer: {
    width: 250,
    flexShrink: 0,
    hr: {
      backgroundColor: "#ffffff33"
    }
  },
  drawerPaper: {
    backgroundColor: "primary.lightBlack",
    width: 250,
    boxSizing: "border-box",
    padding: "0 10px"
  },
  drawerCloseBtn: {
    color: "white",
    svg: {
      fontSize: "24px"
    }
  },
  grayText: {
    color: "primary.grayText",
    m: "0 0 15px",
    textAlign: "left"
  }
};

function AppDrawer() {
  const drawerIsOpen = useSelector((state) => state.ui.drawerIsOpen);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const isAuth = Boolean(user);

  function toggleDrawer() {
    dispatch(uiActions.toggleDrawer());
  }

  //TODO: add document functionality
  function addDocumentHandler() {
    console.log("add document");
  }

  return (
    <Drawer
      sx={styles.drawer}
      variant="persistent"
      anchor="left"
      PaperProps={{ sx: styles.drawerPaper }}
      open={drawerIsOpen}
    >
      <AppDrawerHeader>
        <IconButton
          onClick={toggleDrawer}
          sx={styles.drawerCloseBtn}
          size="large"
        >
          <ChevronLeftIcon />
        </IconButton>
      </AppDrawerHeader>

      <Divider />

      <Logo textAlign="left" color="primary.white" p="20px 0 4px" />
      <Typography sx={styles.grayText}>My Documents</Typography>
      {isAuth && (
        <MainBtn onClick={addDocumentHandler} startIcon={<AddIcon />}>
          New Document
        </MainBtn>
      )}
      {!isAuth && <MainBtn linkTo="/login">Login</MainBtn>}

      {isAuth && <DocList />}
    </Drawer>
  );
}

export default AppDrawer;
