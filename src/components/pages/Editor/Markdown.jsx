import { useState } from "react";
import {
  Stack,
  TextareaAutosize,
  Container,
  Typography,
  Box
} from "@mui/material";
import Textarea from "./Textarea";

const styles = {
  stack: { flex: 1 },
  fullHeight: { height: "100%" }
};

function Markdown() {
  const [text, setText] = useState("");
  return (
    <Stack sx={styles.stack}>
      <Box>
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
