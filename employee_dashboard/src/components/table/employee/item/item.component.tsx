'use client';

import { Tr, Td, Stack, Button } from '@chakra-ui/react';
import { IEmployeeTableItem } from '../../../../@types/components/table/employee/item/item.type';

import Link from 'next/link';
import { MODULES } from '../../../../module/app.factory';
import { useRouter } from 'next/navigation';

export const EmployeeTableItem = ({
  id,
  name,
  role,
  department,
  onDelete,
}: IEmployeeTableItem) => {
  const _module = MODULES.APPLICATION.CONTROLLER.EMPLOYEE();

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{role}</Td>
      <Td>{department}</Td>
      <Td>
        <Stack spacing={2} direction="row" align="center">
          <Link href={`/employee/${id}/edit`}>
            <Button>Editar</Button>
          </Link>
          <Button
            onClick={() => {
              _module.delete({ id });
              onDelete && onDelete(id);
            }}
          >
            Excluir
          </Button>
        </Stack>
      </Td>
    </Tr>
  );
};
