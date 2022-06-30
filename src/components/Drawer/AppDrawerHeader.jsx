import { styled } from "@mui/material/styles";

function AppDrawerHeader({ children }) {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 1),
    justifyContent: "flex-end"
  }));

  return <DrawerHeader>{children}</DrawerHeader>;
}

export default AppDrawerHeader;
