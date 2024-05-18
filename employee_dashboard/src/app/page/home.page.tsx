import { Box, Button, Heading } from '@chakra-ui/react';
import { EmployeeTable } from '../../components/table/employee/table.component';
import { MODULES } from '../../module/app.factory';
import { IEmployeeTableItem } from '../../@types/components/table/employee/item/item.type';
import Link from 'next/link';
import { EmployeeFilter } from '../../components/filter/filter.component';

export const HomePage = async () => {
  let employees: IEmployeeTableItem[] = [];

  try {
    employees = (
      await MODULES.APPLICATION.CONTROLLER.EMPLOYEE().findAll()
    ).result.map(e => ({ ...e }) as IEmployeeTableItem);
  } catch (error) {
    console.log({ error });
  }

  return (
    <Box>
      <Heading as="h1" width="100%" textAlign="center" marginBottom={4}>
        Dashboard de Funcionários
      </Heading>
      <EmployeeFilter employees={employees} />
      <EmployeeTable itens={[]} />
      <Link href="/employee/create">
        <Button marginX={4} marginY={2}>
          Adicionar um novo funcionário
        </Button>
      </Link>
    </Box>
  );
};
