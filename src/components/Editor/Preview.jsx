import { Stack, Box, IconButton } from "@mui/material";
import EditorHeader from "./EditorHeader";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSelector } from "react-redux";

function Preview() {
  // const compiled = [<h1>I am Domy</h1>, <p>Hello</p>];
  const previewIsOn = useSelector((state) => state.ui.previewIsOn);

  const styles = {
    editor: {
      flex: 1,
      display: {
        xs: previewIsOn ? "block" : "none",
        md: "block"
      }
    }
  };

  return (
    <Stack sx={styles.editor}>
      <Box>
        <EditorHeader
          previewOnBtn={<VisibilityIcon />}
          previewOffBtn={<VisibilityOffIcon />}
        >
          Preview
        </EditorHeader>
      </Box>
    </Stack>
  );
}

export default Preview;
