import { Typography } from "@mui/material";

const styles = {
  editorTitle: {
    backgroundColor: "primary.lightBlack",
    color: "primary.grayText",
    padding: "12px",
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "2px",
    paddingLeft: "20px"
  }
};

function EditorFieldTitle({ children }) {
  return (
    <Typography variant="body1" sx={styles.editorTitle}>
      {children}
    </Typography>
  );
}

export default EditorFieldTitle;
