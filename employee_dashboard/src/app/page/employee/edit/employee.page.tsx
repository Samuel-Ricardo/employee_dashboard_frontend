import { Box, Heading } from '@chakra-ui/react';
import { CreateEmployeeForm } from '../../../../components/form/employee/create/form.component';
import { UpdateEmployeeForm } from '../../../../components/form/employee/update/form.component';

export const EditEmployeePage = () => {
  return (
    <Box>
      <Heading as="h1" width="100%" textAlign="center" marginBottom={4}>
        Atualizar Funcionário
      </Heading>

      <UpdateEmployeeForm />
    </Box>
  );
};
