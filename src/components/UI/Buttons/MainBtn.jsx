import { Button, Typography } from "@mui/material";

function MainBtn({
  children,
  hideOnMobile = false,
  linkTo = null,
  onClick = null,
  ...props
}) {
  const navigate = () => {};
  //  useNavigate();
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
        xs: hideOnMobile ? "none" : "block",
        md: "block"
      }
    }
  };
  function clickHadnler(e) {
    if (linkTo) {
      navigate(linkTo);
    }
    // passed click event
    if (onClick instanceof Function) {
      onClick(e);
    }
  }

  return (
    <Button sx={styles.btn} onClick={clickHadnler} {...props}>
      <Typography variant="body1" sx={styles.btnText}>
        {children}
      </Typography>
    </Button>
  );
}

export default MainBtn;
