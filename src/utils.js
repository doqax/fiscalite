export function convert(data) {
  let mappedData = {};
  for (let key in data) {
    const int = parseInt(data[key], 10);
    if (isNaN(int)) {
      mappedData[key] = 0;
    } else {
      mappedData[key] = int;
    }
  }
  return mappedData;
}

export function calculateGlobalSalary(salary, independent) {
  return salary + independent;
}

export function calculateFixedCharges(salary) {
  const thirty = salary * 0.3;
  if (thirty > 5040) return 5040;
  return thirty;
}

export function findBestCharges(fixedCharges, costSalary) {
  return fixedCharges > costSalary ? fixedCharges : costSalary;
}

export function calculateSalaryNet(salary, charges) {
  return salary - charges;
}

export function calculateIndeNet(inde, charges) {
  return inde - charges;
}

export function calculateGlobalNet(salary, inde) {
  return inde + salary;
}

// -----------------------------

export function globalNet(globalNet) {
  return globalNet[0] + globalNet[1];
}

export function calculatePartGlobalNet(net) {
  return net * 0.3;
}

export function isSmaller(globalNet, partGlobalNet) {
  if (globalNet[0] > partGlobalNet || globalNet[1] > partGlobalNet) {
    return true;
  }
  return false;
}

export function amount(partGlobalNet) {
  if (partGlobalNet < 11450) return partGlobalNet;
  return 11450;
}

export function calculateConjugalQuotient(amount, net) {
  if (net[0] < net[1]) {
    return amount - net[0];
  } else {
    return amount - net[1];
  }
}

export function isNegative(num) {
  return num < 0;
}

export function calculateCQWithGlobalNet(
  netCurrentPartner,
  netOtherPartner,
  CQ
) {
  if (netCurrentPartner > netOtherPartner) {
    return netCurrentPartner - CQ;
  } else {
    return netCurrentPartner + CQ;
  }
}

export function calculateCQ(net) {
  const gbNet = globalNet(net);
  const part = calculatePartGlobalNet(gbNet);
  const am = amount(part);
  const CQ = calculateConjugalQuotient(am, net);

  if (isSmaller(net, part) && !isNegative(CQ)) {
    return [calculateCQWithGlobalNet(net[0], net[1], CQ), calculateCQWithGlobalNet(net[1], net[0], CQ)];
  }
  return net;
}

export function calculateExemptQuota(children, currentNet, otherNet) {
  const quotas = [1690, 4340, 9730, 15740, 21750];
  if (currentNet > otherNet && children !== 0) {
    return 9270 + quotas[children - 1];
  }
  return 9270;
}

// Change to recursive ?
export function calculateTaxes(net) {
  if (0 <= net && net <= 13870) {
    return net * 0.25;
  } else if (13870 < net && net <= 24480) {
    return 13870 * 0.25 + (net - 13870) * 0.4;
  } else if (24480 < net && net <= 42370) {
    return 13870 * 0.25 + 10610 * 0.4 + (net - 24480) * 0.45;
  } else if (42370 < net) {
    return 13870 * 0.25 + 10610 * 0.4 + 17890 * 0.45 + (net - 42370) * 0.5;
  }
}
