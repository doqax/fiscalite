import { useState } from "react";
import {
  BaseStyles,
  Box,
  Button,
  Heading,
  Pagehead,
  Text,
  TextInput,
  ThemeProvider,
} from "@primer/react";
import { useForm } from "react-hook-form";

import Table from "./Table";
import { convert } from "./utils";


function App() {
  const [data, setData] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setData(convert(data));

  return (
    <ThemeProvider>
      <BaseStyles>
        <Box mx={3}>
          <Pagehead>
            <Heading>Fiscalité</Heading>
          </Pagehead>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              my={3}
              display="grid"
              gridTemplateColumns="100px 1fr 1fr"
              gridGap="24px 8px"
              maxWidth="780px"
              mx="auto"
            >
              <Text fontWeight="bold">Données</Text>
              <Text fontWeight="bold">Conjoint 1</Text>
              <Text fontWeight="bold">Conjoint 2</Text>
              <Text mr={3}>Revenu Salarié</Text>
              <TextInput
                validationStatus={errors.salaryPartnerOne ? "error" : ""}
                leadingVisual="€"
                {...register("salaryPartnerOne")}
              />

              <TextInput
                validationStatus={errors.salaryPartnerTwo ? "error" : ""}
                leadingVisual="€"
                {...register("salaryPartnerTwo")}
              />
              <Text mr={3}>Charges Salarié</Text>
              <TextInput
                leadingVisual="€"
                validationStatus={errors.costSalaryPartnerOne ? "error" : ""}
                {...register("costSalaryPartnerOne")}
              />
              <TextInput
                leadingVisual="€"
                validationStatus={errors.costSalaryPartnerTwo ? "error" : ""}
                {...register("costSalaryPartnerTwo")}
              />
              <Text mr={3}>Revenu Indépendant</Text>
              <TextInput
                leadingVisual="€"
                validationStatus={errors.independentPartnerOne ? "error" : ""}
                {...register("independentPartnerOne")}
              />
              <TextInput
                validationStatus={errors.independentPartnerTwo ? "error" : ""}
                leadingVisual="€"
                {...register("independentPartnerTwo")}
              />
              <Text mr={3}>Charges Indé</Text>
              <TextInput
                leadingVisual="€"
                validationStatus={errors.costIndePartnerOne ? "error" : ""}
                {...register("costIndependentPartnerOne")}
              />
              <TextInput
                leadingVisual="€"
                validationStatus={errors.costIndePartnerTwo ? "error" : ""}
                {...register("costIndependentPartnerTwo")}
              />

              <Text mr={3}>Versements anticipés</Text>
              <TextInput
                leadingVisual="€"
                validationStatus={
                  errors.anticipatedPaymentPartnerOne ? "error" : ""
                }
                {...register("anticipatedPaymentPartnerOne")}
              />
              <TextInput
                leadingVisual="€"
                validationStatus={
                  errors.anticipatedPaymentPartnerTwo ? "error" : ""
                }
                {...register("anticipatedPaymentPartnerTwo")}
              />
              <Text mr={3}>Nombre d'enfants</Text>
              <TextInput
                aria-label="Enfants"
                name="children"
                placeholder="2"
                validationStatus={errors.children ? "error" : ""}
                {...register("children")}
              />
            </Box>
            <Box mx="auto" maxWidth="780px" my="40px">
              <Button type="submit">Calculer</Button>
            </Box>
          </form>
          {data && <Table data={data} />}
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
