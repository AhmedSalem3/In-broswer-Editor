import {
  ListItemIcon,
  ListItemButton,
  Typography,
  ListItemText,
  ListItem,
  List
} from "@mui/material";
import DocName from "../UI/DocName";

function DocListItem({ docData }) {
  const { name, id, content, dateCreated } = docData;
  function clickHandler(e) {
    console.log({ name, id, content, dateCreated });
  }

  return (
    <ListItem>
      <DocName header={dateCreated} docName={name} onClick={clickHandler} />
    </ListItem>
  );
}

export default DocListItem;
