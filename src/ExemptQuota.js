import { Pagehead, Text, Box } from "@primer/react";
import Answer from "./Answer";
import { calculateExemptQuota } from "./utils";

export default function ExemptQuota({ children, net }) {
  return (
    <>
      <Pagehead>
        <Text>Quotités Exemptées</Text>
      </Pagehead>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr","1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Total Quotités Exemptées</Text>
        <Answer color={0} bold>
          {calculateExemptQuota(children, net[0], net[1])}
        </Answer>
        <Answer color={1} bold>
          {calculateExemptQuota(children, net[1], net[0])}
        </Answer>
      </Box>
    </>
  );
}
