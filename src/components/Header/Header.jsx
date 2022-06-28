import { AppBar, IconButton, Toolbar, Box } from "@mui/material";
import DocActions from "./HeaderActions/DocActions";
import AuthActions from "./HeaderActions/AuthActions";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DocName from "../UI/DocName";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/actions";
import Logo from "../UI/Logo";

const styles = {
  box: { flexGrow: 1 },
  navBar: {
    backgroundColor: "primary.gray",
    flexDirection: "row",
    alignItems: "center"
  },
  menuBtn: {
    padding: "20px",
    backgroundColor: "primary.lightGray",
    borderRadius: 0,
    color: "primary.white",
    fontSize: "2rem"
  },
  headerLeftHolder: {
    paddingLeft: "0 !important"
  },
  title: {
    letterSpacing: "5px",
    textTransform: "uppercase",
    fontWeight: 500,
    p: "8px 20px",
    borderRight: "1px solid #ffffff40",
    display: {
      xs: "none",
      md: "block"
    }
  }
};

function Header() {
  const dispatch = useDispatch();

  function toggleDrawer() {
    dispatch(uiActions.toggleDrawer());
  }

  //TODO: check if the user is authenticated or not
  const isAuth = true;

  return (
    <Box sx={styles.box}>
      <AppBar position="static" sx={styles.navBar}>
        <Toolbar sx={styles.headerLeftHolder}>
          <IconButton sx={styles.menuBtn} onClick={toggleDrawer}>
            <MenuOutlinedIcon fontSize="inherit" />
          </IconButton>
          <Logo rightBorder={true} color="primary.white" hideOnMobile />
        </Toolbar>

        <DocName hideHeaderOnMobile />

        {isAuth ? <DocActions /> : <AuthActions />}
      </AppBar>
    </Box>
  );
}

export default Header;
