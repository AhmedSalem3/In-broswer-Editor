import Typography from "@mui/material/Typography";

function Logo({ rightBorder = false, hideOnMobile = false, ...otherStyles }) {
  const styles = {
    title: {
      letterSpacing: "5px",
      textTransform: "uppercase",
      fontWeight: 500,
      p: "8px 20px",
      borderRight: rightBorder ? "1px solid #ffffff40" : "",
      display: {
        xs: hideOnMobile ? "none" : "block",
        md: "block"
      },
      ...otherStyles
    }
  };

  return (
    <Typography variant="body1" sx={styles.title}>
      Markdown
    </Typography>
  );
}

export default Logo;
