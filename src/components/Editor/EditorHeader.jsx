import { Typography, Stack, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/actions";

function EditorHeader({
  children,
  previewOnBtn,
  previewOffBtn,
  hideMobileBtn = false
}) {
  const styles = {
    stack: {
      backgroundColor: "primary.lightBlack",
      padding: "0 15px"
    },
    editorTitle: {
      backgroundColor: "primary.lightBlack",
      color: "primary.grayText",
      padding: "12px",
      textTransform: "uppercase",
      textAlign: "left",
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "2px"
    },
    visibilityBtn: {
      color: "primary.grayText",
      svg: {
        fontSize: "20px"
      },
      display: !hideMobileBtn
        ? "block"
        : {
            xs: "block",
            md: "none"
          }
    }
  };

  const previewIsOn = useSelector((state) => state.ui.previewIsOn);
  const dispatch = useDispatch();

  function toggleView() {
    dispatch(uiActions.toggleEditorView());
  }

  return (
    <Stack direction="row" justifyContent="space-between" sx={styles.stack}>
      <Typography variant="body1" sx={styles.editorTitle}>
        {children}
      </Typography>
      <IconButton onClick={toggleView} sx={styles.visibilityBtn}>
        {previewIsOn ? previewOnBtn : previewOffBtn}
      </IconButton>
    </Stack>
  );
}

export default EditorHeader;
