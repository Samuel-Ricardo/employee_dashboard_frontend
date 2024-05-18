import { Box, Heading } from '@chakra-ui/react';
import { CreateEmployeeForm } from '../../../../components/form/employee/create/form.component';

export const CreateEmployeePage = () => {
  return (
    <Box>
      <Heading as="h1" width="100%" textAlign="center" marginBottom={4}>
        Cadastrar Funcionário
      </Heading>

      <CreateEmployeeForm />
    </Box>
  );
};
