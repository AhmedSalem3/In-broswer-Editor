import { useState } from "react";
import { Stack, Container, Box } from "@mui/material";
import Textarea from "./Textarea";
import EditorHeader from "./EditorHeader";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSelector } from "react-redux";

function Markdown() {
  const [text, setText] = useState("");
  const previewIsOn = useSelector((state) => state.ui.previewIsOn);

  const styles = {
    editor: {
      flex: 1,
      display: previewIsOn ? "none" : "block"
    },
    fullHeight: { height: "100%" }
  };

  return (
    <Stack sx={styles.editor}>
      <Box>
        <EditorHeader
          previewOnBtn={<VisibilityOffIcon />}
          previewOffBtn={<VisibilityIcon />}
          hideMobileBtn
        >
          Markdown
        </EditorHeader>
        <Container sx={styles.fullWidth}>
          {/* // render textarea optionally to solve error
          // 'too many re-renders for the textarea' */}
          {!previewIsOn && (
            <Textarea
              textChangeHandler={() => {
                setText();
              }}
            />
          )}
        </Container>
      </Box>
    </Stack>
  );
}

export default Markdown;
