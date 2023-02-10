import { Box } from "@primer/react";

function Answer({ children, color = 3, bold = false }) {
  const colors = ["#ADD8E6", "#90EE90", "white"];
  return (
    <Box
      borderColor="border.default"
      borderWidth={1}
      borderStyle="solid"
      p={1}
      borderRadius="4px"
      textAlign="center"
      maxWidth="200px"
      backgroundColor={colors[color]}
      fontWeight={bold ? "bold" : "normal"}
    >
      {children}
    </Box>
  );
}

export default Answer;
