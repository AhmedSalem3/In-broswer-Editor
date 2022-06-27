import { Stack, Box } from "@mui/material";
import EditorFieldTitle from "./EditorFieldTitle";

const styles = {
  stack: { flex: 1 }
};

function Preview() {
  // const compiled = [<h1>I am Domy</h1>, <p>Hello</p>];
  return (
    <Stack sx={styles.stack}>
      <Box>
        <EditorFieldTitle>Preview</EditorFieldTitle>
      </Box>
    </Stack>
  );
}

export default Preview;
