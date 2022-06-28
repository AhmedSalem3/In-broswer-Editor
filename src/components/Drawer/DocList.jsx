import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import DocListItem from "./DocListItem";

function DocList() {
  const dispatch = useDispatch();
  const docs = useSelector((state) => state.docs.docs);

  return (
    <List>
      {docs && docs.map((doc) => <DocListItem key={doc.id} docData={doc} />)}
    </List>
  );
}

export default DocList;
