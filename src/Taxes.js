import { Box, Text, Pagehead } from "@primer/react";
import Answer from "./Answer";

import { calculateTaxes, calculateExemptQuota, calculateCQ } from "./utils";

export default function Taxes({ globalNet, children, anticipatedPayment }) {
  const exempt1 = calculateExemptQuota(children, globalNet[0], globalNet[1]);
  const exempt2 = calculateExemptQuota(children, globalNet[1], globalNet[0]);

  const reduction1 = calculateTaxes(exempt1);
  const reduction2 = calculateTaxes(exempt2);

  const total1 = calculateTaxes(calculateCQ(globalNet)[0]) - reduction1;
  const total2 = calculateTaxes(calculateCQ(globalNet)[1]) - reduction2;
  console.log(reduction1);
  console.log(reduction2);

  const federalTaxes = total1 * 0.75 + total2 * 0.75;
  const regionalTaxes = total1 * 0.25 + total2 * 0.25;
  const total =
    federalTaxes + regionalTaxes + (federalTaxes + regionalTaxes) * 0.085;

  const precountTotal = globalNet[0] * 0.3331 + globalNet[1] * 0.3331;
  return (
    <>
      <Pagehead>
        <Text>Impot</Text>
      </Pagehead>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr", "1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Revenus Imposables globalement :</Text>
        <Answer>{calculateCQ(globalNet)[0]}</Answer>
        <Answer>{calculateCQ(globalNet)[1]}</Answer>
        <Text>Impot de base :</Text>
        <Answer>{calculateTaxes(globalNet[0])}</Answer>
        <Answer>{calculateTaxes(globalNet[1])}</Answer>
        <Text>Réduction d'impot sur les Quotités Exemptées :</Text>
        <Answer>{reduction1}</Answer>
        <Answer>{reduction2}</Answer>
        <Text color="red">Quotités Exemptées :</Text>
        <Answer>{exempt1}</Answer>
        <Answer>{exempt2}</Answer>
        <Text color="red">Impots à répartir :</Text>
        <Answer>{total1}</Answer>
        <Answer>{total2}</Answer>
      </Box>
      <Pagehead>
        <Text>Montant total à payer</Text>
      </Pagehead>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr", "1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Impot à répartir :</Text>
        <Answer>{total1}</Answer>
        <Answer>{total2}</Answer>
        <Text>Impot d'État réduit :</Text>
        <Answer>{total1 * 0.75}</Answer>
        <Answer>{total2 * 0.75}</Answer>
        <Text>Impot régional:</Text>
        <Answer>{total1 * 0.25}</Answer>
        <Answer>{total2 * 0.25}</Answer>
      </Box>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 2fr", "1fr 424px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Pagehead></Pagehead>
        <Box />
        <Text>SOLDE IMPOT FEDERAL:</Text>
        <Answer>{federalTaxes}</Answer>
        <Text>SOLDE IMPOT REGIONAL :</Text>
        <Answer>{regionalTaxes}</Answer>
        <Text>SOLDE IMPOT TOTAL :</Text>
        <Answer>{federalTaxes + regionalTaxes}</Answer>
        <Text>Additionnels communaux</Text>
        <Answer>{(federalTaxes + regionalTaxes) * 0.085}</Answer>
        <Text>TOTAL</Text>
        <Answer>{total}</Answer>
      </Box>
      <Pagehead>
        <Text>Précompte professionnel</Text>
      </Pagehead>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 1fr 1fr", "1fr 200px 200px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text />
        <Text fontWeight="bold">Conjoint (1)</Text>
        <Text fontWeight="bold">Conjoint (2)</Text>
        <Text>Revenus professionnels NETS :</Text>
        <Answer color={0} bold>
          {globalNet[0]}
        </Answer>
        <Answer color={1} bold>
          {globalNet[1]}
        </Answer>
        <Text>Précompte professionnel déjà retenu :</Text>
        <Answer>{globalNet[0] * 0.3331}</Answer>
        <Answer>{globalNet[1] * 0.3331}</Answer>
      </Box>
      <Pagehead></Pagehead>
      <Box
        my={3}
        display="grid"
        gridTemplateColumns={["1fr 2fr", "1fr 424px"]}
        gridGap="18px 24px"
        maxWidth="1024px"
        mx="auto"
      >
        <Text>Total Précomptes professionnels :</Text>
        <Answer>{precountTotal}</Answer>
        <Text>Impôts à payer (NET) : </Text>
        <Answer>{total - precountTotal}</Answer>
        <Text>Versements anticipés :</Text>
        <Answer>{anticipatedPayment}</Answer>
        <Text>Impôts final restant à payer :</Text>
        <Answer>{total - precountTotal - anticipatedPayment}</Answer>
      </Box>
    </>
  );
}
