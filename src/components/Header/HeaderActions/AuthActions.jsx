import MainBtn from "../../UI/Buttons/MainBtn";
import { Stack, Toolbar } from "@mui/material";

function AuthActions() {
  return (
    <Toolbar>
      <Stack direction="row" spacing={1}>
        <MainBtn>Login</MainBtn>
        <MainBtn>SignUp</MainBtn>
      </Stack>
    </Toolbar>
  );
}

export default AuthActions;
