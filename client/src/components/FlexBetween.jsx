const { Box } = require("@mui/material");
const { styled, flexbox } = require("@mui/system");

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export default FlexBetween;
