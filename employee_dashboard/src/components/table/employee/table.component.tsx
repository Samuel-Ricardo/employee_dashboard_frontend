import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Stack,
  StackItem,
} from '@chakra-ui/react';
import { TableList } from '../table.component';
import { IEmplyeeTableProps } from '../../../@types/components/table/employee/table.props';
import { EmployeeTableItem } from './item/item.component';

export const EmployeeTable = ({ itens }: IEmplyeeTableProps) => {
  return (
    <TableList
      caption="Funcionários da Empresa"
      fields={['Nome', 'Cargo', 'Departamento']}
    >
      {itens.map(item => (
        <EmployeeTableItem key={item.id} {...item} />
      ))}
    </TableList>
  );

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="red">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Cargo</Th>
            <Th>Departamento</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
            <Td>
              <Stack spacing={2} direction="row" align="center">
                <Button>Editar</Button>
                <Button>Excluir</Button>
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
