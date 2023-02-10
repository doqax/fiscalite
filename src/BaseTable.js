import { Box, Text } from "@primer/react";
import Answer from "./Answer";

import Charges from "./Charges";

export default function BaseTable({
  data,
  globalSalary,
  salaryFixedCharges,
  salaryChosedCharges,
  indeFixedCharges,
  indeNet,
  indeChosedCharges,
  globalNet,
  salaryNet
}) {
  return (
    <>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr","1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text />
        <Text fontWeight="bold">Conjoint (1)</Text>
        <Text fontWeight="bold">Conjoint (2)</Text>
        <Text>Revenus professionnels globalisés :</Text>
        <Answer color={0} bold>
          {globalSalary[0]}
        </Answer>
        <Answer color={1} bold>
          {globalSalary[1]}
        </Answer>
        <Text>Revenus salarié :</Text>
        <Answer color={0}>{data.salaryPartnerOne}</Answer>
        <Answer color={1}>{data.salaryPartnerTwo}</Answer>
        <Text>Revenus indépendant :</Text>
        <Answer color={0}>{data.independentPartnerOne}</Answer>
        <Answer color={1}>{data.independentPartnerTwo}</Answer>
      </Box>
      <Charges
        name="SALARIÉ"
        fixedCharges={salaryFixedCharges}
        costSalaryPartnerOne={data.costSalaryPartnerOne}
        costSalaryPartnerTwo={data.costSalaryPartnerTwo}
        salaryPartnerOne={data.salaryPartnerOne}
        salaryPartnerTwo={data.salaryPartnerTwo}
        chosedCharges={salaryChosedCharges}
      />
      <Box maxWidth="1024px" mx="auto">
        <Text color="red" fontWeight="bold">
          Salarié
        </Text>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr","1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        Revenus professionnelles NETS de frais professionnels :
        <Answer color={0}>
          {data.salaryPartnerOne - salaryChosedCharges[0]}
        </Answer>
        <Answer color={1}>
          {data.salaryPartnerTwo - salaryChosedCharges[1]}
        </Answer>
      </Box>
      <Charges
        name="INDÉPENDANT"
        fixedCharges={indeFixedCharges}
        costSalaryPartnerOne={data.costIndependentPartnerOne}
        costSalaryPartnerTwo={data.costIndependentPartnerTwo}
        salaryPartnerOne={data.independentPartnerOne}
        salaryPartnerTwo={data.independentPartnerTwo}
        chosedCharges={indeChosedCharges}
      />
      <Box maxWidth="1024px" mx="auto">
        <Text color="red" fontWeight="bold">
          Indépendant
        </Text>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr","1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Revenus professionnels (de départ) :</Text>
        <Answer color={0}>{data.independentPartnerOne}</Answer>
        <Answer color={1}>{data.independentPartnerTwo}</Answer>
        <Text>Charges professionnelles indépendant :</Text>
        <Answer color={0}>{indeChosedCharges[0]}</Answer>
        <Answer color={1}>{indeChosedCharges[1]}</Answer>
        <Text>Revenus professionnels NETS de frais professionnelles :</Text>
        <Answer color={0} bold>
          {indeNet[0]}
        </Answer>
        <Answer color={1} bold>
          {indeNet[1]}
        </Answer>
        <Text>Revenus SALARIE, après charges professionnelles :</Text>
        <Answer color={0}>{salaryNet[0]}</Answer>
        <Answer color={1}>{salaryNet[1]}</Answer>
        <Text>Revenus INDEPENDANT, après charges prof. :</Text>
        <Answer color={0}>{indeNet[0]}</Answer>
        <Answer color={1}>{indeNet[1]}</Answer>
        <Text>REVENUS PROF. NETS GLOBAUX :</Text>
        <Answer color={0} bold>
          {globalNet[0]}
        </Answer>
        <Answer color={1} bold>
          {globalNet[1]}
        </Answer>
      </Box>
    </>
  );
}
