import InsertDriveIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Stack, Typography } from "@mui/material";

function DocName({
  hideHeaderOnMobile = false,
  header = "Document Name",
  docName = "unknown",
  ...props
}) {
  const styles = {
    header: {
      cursor: "pointer",
      display: {
        xs: hideHeaderOnMobile ? "none" : "block",
        md: "block"
      }
    },
    wrapper: {
      flexGrow: 1
    },
    docIcon: {
      color: "primary.white"
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={styles.wrapper}
      {...props}
    >
      <InsertDriveIcon sx={styles.docIcon} />

      <Stack alignItems="flex-start">
        <Typography variant="body1" color="primary.grayText" sx={styles.header}>
          {header}
        </Typography>
        <Typography variant="body1" color="primary.white">
          {docName}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default DocName;
