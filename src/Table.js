import { Pagehead, Text } from "@primer/react";

import BaseTable from "./BaseTable";
import ConjugalQuotient from "./ConjugalQuotient";
import ExemptQuota from "./ExemptQuota";
import Taxes from "./Taxes";

import {
  calculateFixedCharges,
  calculateGlobalSalary,
  findBestCharges,
  calculateIndeNet,
  calculateGlobalNet,
  calculateSalaryNet,
} from "./utils";

function Table({ data }) {
  const globalSalary = [
    calculateGlobalSalary(data.salaryPartnerOne, data.independentPartnerOne),
    calculateGlobalSalary(data.salaryPartnerTwo, data.independentPartnerTwo),
  ];
  const salaryFixedCharges = [
    calculateFixedCharges(data.salaryPartnerOne),
    calculateFixedCharges(data.salaryPartnerTwo),
  ];

  const salaryChosedCharges = [
    findBestCharges(salaryFixedCharges[0], data.costSalaryPartnerOne),
    findBestCharges(salaryFixedCharges[1], data.costSalaryPartnerTwo),
  ];

  const indeFixedCharges = [
    calculateFixedCharges(data.independentPartnerOne),
    calculateFixedCharges(data.independentPartnerTwo),
  ];

  const indeChosedCharges = [
    findBestCharges(indeFixedCharges[0], data.costIndependentPartnerOne),
    findBestCharges(indeFixedCharges[1], data.costIndependentPartnerTwo),
  ];

  const salaryNet = [
    calculateSalaryNet(data.salaryPartnerOne, salaryChosedCharges[0]),
    calculateSalaryNet(data.salaryPartnerTwo, salaryChosedCharges[1]),
  ];

  const indeNet = [
    calculateIndeNet(data.independentPartnerOne, indeChosedCharges[0]),
    calculateIndeNet(data.independentPartnerTwo, indeChosedCharges[1]),
  ];

  const globalNet = [
    calculateGlobalNet(salaryNet[0], indeNet[0]),
    calculateGlobalNet(salaryNet[1], indeNet[1]),
  ];

  return (
    <>
      <Pagehead>
        <Text>Calcul IPP</Text>
      </Pagehead>
      <BaseTable
        data={data}
        globalSalary={globalSalary}
        salaryFixedCharges={salaryFixedCharges}
        salaryChosedCharges={salaryChosedCharges}
        indeFixedCharges={indeFixedCharges}
        indeChosedCharges={indeChosedCharges}
        salaryNet={salaryNet}
        indeNet={indeNet}
        globalNet={globalNet}
      />
      <ConjugalQuotient net={globalNet} />
      <ExemptQuota children={data.children} net={globalNet} />
      <Taxes
        globalNet={globalNet}
        children={data.children}
        anticipatedPayment={
          data.anticipatedPaymentPartnerOne + data.anticipatedPaymentPartnerTwo
        }
      />
    </>
  );
}

export default Table;
