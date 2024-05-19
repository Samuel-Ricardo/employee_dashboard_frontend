import { Box, Button, Heading } from '@chakra-ui/react';
import { MODULES } from '../../module/app.factory';
import Link from 'next/link';
import { EmployeeFilter } from '../../components/filter/filter.component';
import { IEmployeeDTO } from '../../module/domain/DTO/employee/employee.dto';

export const HomePage = async () => {
  let employees: IEmployeeDTO[] = [];

  try {
    employees = (await MODULES.APPLICATION.CONTROLLER.EMPLOYEE().findAll())
      .result;
  } catch (error) {}

  return (
    <Box>
      <Heading as="h1" width="100%" textAlign="center" marginBottom={4}>
        Dashboard de Funcionários
      </Heading>
      <EmployeeFilter employees={employees} />
      <Link href="/employee/create">
        <Button marginX={4} marginY={2}>
          Adicionar um novo funcionário
        </Button>
      </Link>
    </Box>
  );
};
