import Header from "../components/Header/Header";
import Editor from "../components/Editor/Editor";
import { Box } from "@mui/material";
import AppDrawer from "../components/Drawer/AppDrawer";

const styles = {
  app: { backgroundColor: "primary.black" }
};

function MainPage() {
  return (
    <Box className="App" sx={styles.app}>
      <Header />
      <AppDrawer />
      <Editor />
    </Box>
  );
}

export default MainPage;
