import { IconButton, Stack, Toolbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import MainBtn from "../../UI/Buttons/MainBtn";

const styles = {
  deleteBtn: {
    color: "primary.white",
    transition: "0.3s",
    "&:hover": {
      color: "primary.main"
    }
  }
};

function DocActions() {
  return (
    <Toolbar>
      <Stack direction="row" spacing={2}>
        <IconButton sx={styles.deleteBtn} aria-label="delete document">
          <DeleteIcon />
        </IconButton>
        <MainBtn
          startIcon={<SaveIcon />}
          aria-label="save changes"
          hideOnMobile
        >
          Save Changes
        </MainBtn>
      </Stack>
    </Toolbar>
  );
}

export default DocActions;
