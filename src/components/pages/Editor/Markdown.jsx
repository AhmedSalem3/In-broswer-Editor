import {
  Stack,
  TextareaAutosize,
  Container,
  Typography,
  Box
} from "@mui/material";

const styles = {
  stack: { flex: 1 },
  fullWidth: { height: "100%" },
  textarea: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    outlineWidth: "0",
    color: "primary.main",
    resize: "none"
  }
};

function Markdown() {
  return (
    <Stack sx={styles.stack}>
      <Box sx={styles.fullWidth}>
        <Container sx={styles.fullWidth}>
          <textarea style={styles.textarea}></textarea>
        </Container>
      </Box>
    </Stack>
  );
}

export default Markdown;
