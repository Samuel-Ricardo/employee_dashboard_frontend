import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { ITableProps } from '../../@types/components/table/table.props';

export const TableList = ({ caption, fields, children }: ITableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableCaption>{caption}</TableCaption>

        <Thead>
          <Tr>
            {fields.map(f => (
              <Th key={f}>{f}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};
