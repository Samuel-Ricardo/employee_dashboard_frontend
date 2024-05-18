'use client';

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  HStack,
  Radio,
  RadioGroup,
  VStack,
  Button,
} from '@chakra-ui/react';
import { IEmployeeFilterProps } from '../../@types/components/filter/employee.filter';
import { useCallback, useEffect, useState } from 'react';
import { EmployeeTable } from '../table/employee/table.component';
import { MODULES } from '../../module/app.factory';
import { IEmployeeTableItem } from '../../@types/components/table/employee/item/item.type';

export const EmployeeFilter = ({ employees }: IEmployeeFilterProps) => {
  const [data, setData] = useState(employees);

  const filter = useCallback(
    (search: string, order: string) => {
      const result = data.filter(employee =>
        employee.name.toLowerCase().includes(search.toLowerCase()),
      );

      switch (order) {
        case 'name':
          return result.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
          );
        case 'role':
          return result.sort((a, b) =>
            a.role.toLowerCase().localeCompare(b.role.toLowerCase()),
          );
        case 'department':
          return result.sort((a, b) =>
            a.department
              .toLowerCase()
              .localeCompare(b.department.toLowerCase()),
          );
        case 'admission_date':
          return result.sort(
            (a, b) => a.admission_date.getTime() - b.admission_date.getTime(),
          );
        default:
          return result;
      }
    },
    [data],
  );

  const [input, setInput] = useState('');
  const handleInputChange = (e: any) => {
    setInput(e.target.value);
    setData(filter(e.target.value, 'none'));
  };

  const onClick = useCallback(() => {
    MODULES.APPLICATION.CONTROLLER.EMPLOYEE()
      .findAll()
      .then(({ result }) => setData(result));
  }, []);

  return (
    <>
      <FormControl w="100%" p={2}>
        <VStack spacing={1} justifyContent="center">
          <HStack width="100%" spacing={4}>
            {' '}
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Procurar funcionário"
            />
            <Button mt={4} colorScheme="red" onClick={onClick}>
              Pesquisar
            </Button>
          </HStack>
          <FormLabel as="legend">Deseja ordenar a listagem?</FormLabel>
          <RadioGroup
            defaultValue="none"
            onChange={order => setData(filter(input, order))}
          >
            <HStack spacing="24px">
              <Radio value="none">não</Radio>
              <Radio value="name">sim, pelo nome</Radio>
              <Radio value="role">sim, pelo cargo</Radio>
              <Radio value="department">sim, pelo departamento</Radio>
              <Radio value="admission_date">sim, pelo data de admissão</Radio>
            </HStack>
          </RadioGroup>
        </VStack>
      </FormControl>

      <EmployeeTable itens={data as IEmployeeTableItem[]} />
    </>
  );
};
