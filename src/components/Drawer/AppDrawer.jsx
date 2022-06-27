import Drawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MainBtn from "../UI/Buttons/MainBtn";
import AddIcon from "@mui/icons-material/Add";

const styles = {
  drawerPaper: {
    backgroundColor: "primary.lightBlack"
  }
};

function AppDrawer() {
  const open = true;

  return (
    // <Drawer
    //   hideBackdrop
    //   open={open}
    //   onClose={() => {}}
    //   PaperProps={{ sx: styles.drawerPaper }}
    // >
    //   <List>
    //     <ListItem>
    //       <ListItemText>MARKDOWN</ListItemText>
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText>MY DOCUMENTS</ListItemText>
    //     </ListItem>

    //     <ListItem>
    //       <MainBtn startIcon={<AddIcon />}>New Document</MainBtn>
    //     </ListItem>
    //   </List>
    // </Drawer>
    <></>
  );
}

export default AppDrawer;
