import { useState } from "react";
import { Stack, Container, Box } from "@mui/material";
import Textarea from "./Textarea";
import EditorFieldTitle from "./EditorFieldTitle";

const styles = {
  stack: { flex: 1 },
  fullHeight: { height: "100%" }
};

function Markdown() {
  const [text, setText] = useState("");
  return (
    <Stack sx={styles.stack}>
      <Box>
        <EditorFieldTitle>Markdown</EditorFieldTitle>
        <Container sx={styles.fullWidth}>
          <Textarea
            textChangeHandler={() => {
              setText();
            }}
          />
        </Container>
      </Box>
    </Stack>
  );
}

export default Markdown;
