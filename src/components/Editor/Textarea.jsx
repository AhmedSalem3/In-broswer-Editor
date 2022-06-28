import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CustomTextarea = styled(TextareaAutosize)(({ theme }) => ({
  color: theme.palette.primary.textColor,
  background: "transparent",
  border: "none",
  resize: "none",
  outline: "none",
  fontSize: "17px",
  width: "100%",
  minHeight: "100%",
  lineHeight: "1.7",
  padding: "15px 0"
}));

export default function Textarea({ textChangeHandler }) {
  return <CustomTextarea onInput={textChangeHandler} />;
}
