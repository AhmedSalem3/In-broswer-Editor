import Markdown from "./Markdown";
import Preview from "./Preview";
import { Box, Stack, Divider } from "@mui/material";

const styles = {
  stack: {
    minHeight: "calc(100vh - 72px)"
  },
  divider: {
    backgroundColor: "rgb(90, 96, 105)"
  }
};

function Editor() {
  return (
    <Box>
      <Stack direction="row" sx={styles.stack}>
        <Markdown />
        <Divider orientation="vertical" flexItem sx={styles.divider} />
        <Preview />
      </Stack>
    </Box>
  );
}

export default Editor;
