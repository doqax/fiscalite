import { Box, Text } from "@primer/react";
import Answer from "./Answer";

export default function Charges({
  name,
  fixedCharges,
  costSalaryPartnerOne,
  costSalaryPartnerTwo,
  salaryPartnerOne,
  salaryPartnerTwo,
  chosedCharges,
}) {

  return (
    <>
      <Box maxWidth="1024px" mx="auto">
        <Text color="red" fontWeight="bold">
          Charges professionnelles {name} :
        </Text>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr","1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
        backgroundColor="#FFFACD"
      >
        <Text>Charges professionnelles forfaitaires :</Text>
        <Answer>{fixedCharges[0]}</Answer>
        <Answer>{fixedCharges[1]}</Answer>
        <Text>Charges professionnelles réelles :</Text>
        <Answer>{costSalaryPartnerOne}</Answer>
        <Answer>{costSalaryPartnerTwo}</Answer>
        <Text>Charges professionnelles choisies :</Text>
        <Answer>{chosedCharges[0]}</Answer>
        <Answer>{chosedCharges[1]}</Answer>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr","1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
        backgroundColor="#F5F5F5"
      >
        <Text>
          Calcul des charges professionnelles forfaitaires (salarié) :
        </Text>
        <Box />
        <Box />
        <Text>30% des revenus professionnels globalisés</Text>
        <Answer>{salaryPartnerOne * 0.3}</Answer>
        <Answer>{salaryPartnerTwo * 0.3}</Answer>
      </Box>
    </>
  );
}
