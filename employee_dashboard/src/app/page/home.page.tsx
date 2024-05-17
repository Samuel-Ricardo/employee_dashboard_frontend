import { Box, Button, Heading } from '@chakra-ui/react';
import { EmployeeTable } from '../../components/table/employee/table.component';

export const HomePage = async () => {
  return (
    <Box>
      <Heading as="h1" width="100%" textAlign="center" marginBottom={4}>
        Home Page
      </Heading>
      <EmployeeTable
        itens={[
          {
            id: '1',
            name: 'Joaquim',
            role: 'Desenvolvedor',
            department: 'Desenvolvimento',
          },
          {
            id: '2',
            name: 'Joaquim',
            role: 'Desenvolvedor',
            department: 'Desenvolvimento',
          },

          {
            id: '3',
            name: 'Joaquim',
            role: 'Desenvolvedor',
            department: 'Desenvolvimento',
          },
        ]}
      />
      <Button>Adicionar um novo funcionário</Button>
    </Box>
  );
};
