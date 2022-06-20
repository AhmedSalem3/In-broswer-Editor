import InsertDriveIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Stack, Typography } from "@mui/material";

const styles = {
  doc: {
    display: {
      xs: "none",
      md: "block",
    },
  },
};

function DocName() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <InsertDriveIcon />

      <Stack alignItems="flex-start">
        <Typography variant="body1" color="primary.grayText" sx={styles.doc}>
          Document Name
        </Typography>
        <Typography variant="body1" color="primary.white">
          doc.md
        </Typography>
      </Stack>
    </Stack>
  );
}

export default DocName;
