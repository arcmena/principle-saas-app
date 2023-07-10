import { styled } from "@/styles/stitches";

export const Button = styled("button", {
  backgroundColor: "$blue4",
  color: "$blue11",
  borderColor: "$blue7",
  "&:hover": {
    backgroundColor: "$blue5",
    borderColor: "$blue8",
  },
});
