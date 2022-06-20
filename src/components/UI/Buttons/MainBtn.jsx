import { Button, Typography } from "@mui/material";

const styles = {
  btn: {
    backgroundColor: "primary.main",
    color: "primary.white",
    borderRadius: "3px",
    padding: "12px",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: 0.6,
      transition: "0.3s"
    }
  },
  btnText: {
    textTransform: "initial",
    display: {
      xs: "none",
      md: "block"
    }
  }
};

function MainBtn({ children, ...props }) {
  return (
    <Button sx={styles.btn} {...props}>
      <Typography variant="body1" sx={styles.btnText}>
        {children}
      </Typography>
    </Button>
  );
}

export default MainBtn;
