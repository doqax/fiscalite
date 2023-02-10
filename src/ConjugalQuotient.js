import { Box, Text, Pagehead } from "@primer/react";

import Answer from "./Answer";

import {
  calculateConjugalQuotient,
  globalNet,
  calculatePartGlobalNet,
  isSmaller,
  amount,
  isNegative,
  calculateCQWithGlobalNet
} from "./utils";

export default function ConjugalQuotient({ net }) {
  const sum = globalNet(net);
  const part = calculatePartGlobalNet(sum);
  const isSmallerThanNet = isSmaller(net, part);
  const am = isSmallerThanNet ? amount(part) : 0;
  const CQ = isSmallerThanNet ? calculateConjugalQuotient(am, net) : 0;
  const isUsable = !isNegative(CQ);
  const resultPartnerOne = isUsable ? calculateCQWithGlobalNet(net[0], net[1], CQ) : '-';
  const resultPartnerTwo = isUsable ? calculateCQWithGlobalNet(net[1], net[0], CQ) : '-';

  return (
    <>
      <Pagehead>
        <Text>Quotient Conjugal</Text>
      </Pagehead>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns="1fr 200px 200px"
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Quotient Conjugal</Text>
        <Answer>{resultPartnerOne}</Answer>
        <Answer>{resultPartnerTwo}</Answer>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns="1fr 424px"
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
        backgroundColor="#F5F5F5"
      >
        <Text>(1) Cumul des revenus prof. NETS GLOBAUX :</Text>
        <Answer>{sum}</Answer>
        <Text>(2) Calcul des 30% des revenus cumulés :</Text>
        <Answer>{part}</Answer>
        <Text>(3) Vérification de la condition :</Text>
        <Answer>{isSmallerThanNet ? "Oui" : "Non"}</Answer>
        <Text>(4) Montant à prendre en considération :</Text>
        <Answer>{am}</Answer>
        <Text>(5) Calcul du Quotient conjugal net :</Text>
        <Answer>{CQ}</Answer>
        <Text>(6) Application sur les revenus des conjoints :</Text>
        <Answer>{isUsable ? CQ : '-'}</Answer>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns="1fr 200px 200px"
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Revenus imposables globalement</Text>
        <Answer color={0} bold>{isUsable ? resultPartnerOne : net[0]}</Answer>
        <Answer color={1} bold>{isUsable ? resultPartnerTwo : net[1]}</Answer>
        </Box>
    </>
  );
}
