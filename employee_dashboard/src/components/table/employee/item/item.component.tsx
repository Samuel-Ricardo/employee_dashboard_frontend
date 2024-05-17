import { Tr, Td, Stack, Button } from '@chakra-ui/react';
import { ITableItem } from '../../../../@types/components/table/item/item.type';

import Link from 'next/link';
import { MODULES } from '../../../../module/app.factory';

export const TableItem = async ({ id, name, role, department }: ITableItem) => {
  const _module = MODULES.APPLICATION.CONTROLLER.EMPLOYEE();

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{role}</Td>
      <Td>{department}</Td>
      <Td>
        <Stack spacing={2} direction="row" align="center">
          <Link href={`/employee/edit/${id}`}>
            <Button>Editar</Button>
          </Link>
          <Button onClick={() => _module.delete({ id })}>Excluir</Button>
        </Stack>
      </Td>
    </Tr>
  );
};
