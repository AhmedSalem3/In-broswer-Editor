import { Stack } from "@mui/material";

function Preview() {
  const compiled = [<h1>I am Domy</h1>, <p>Hello</p>];
  return <Stack sx={{ flex: 1 }}>{compiled}</Stack>;
}

export default Preview;
