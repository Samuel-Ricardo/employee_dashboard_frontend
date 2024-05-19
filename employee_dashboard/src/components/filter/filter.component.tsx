'use client';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { IEmployeeFilterProps } from '../../@types/components/filter/employee.filter';
import { useEmployeeFilter } from '../../hook/employee/filter.hook';
import { useEmployees } from '../../hook/query/employee/all.hook';
import { IEmployeeDTO } from '../../module/domain/DTO/employee/employee.dto';
import { EmployeeTable } from '../table/employee/table.component';

export const EmployeeFilter = ({ employees }: IEmployeeFilterProps) => {
  const [data, setData] = useState(employees);
  const { data: response, refetch } = useEmployees();

  const [input, setInput] = useState('');
  const [order, setOrder] = useState('none');

  const { filter } = useEmployeeFilter();

  const sync = useCallback(
    (newData: IEmployeeDTO[]) => {
      refetch();
      setData(filter(input, order, newData));
    },
    [filter, input, order, refetch],
  );

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
    setData(filter(e.target.value, order, response?.result || employees));
  };
  const handleOrderChange = (value: string) => {
    setOrder(value);
    setData(filter(input, value, response?.result || employees));
  };

  const onClick = useCallback(() => {
    sync(response?.result || employees);
  }, [sync, response?.result, employees]);

  useEffect(() => {
    sync(response?.result || employees);
  }, [sync, response?.result, employees]);

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
          <RadioGroup defaultValue="none" onChange={handleOrderChange}>
            <HStack spacing="24px" maxW="80vw" overflowX="auto">
              <Radio value="none">não</Radio>
              <Radio value="name">sim, pelo nome</Radio>
              <Radio value="role">sim, pelo cargo</Radio>
              <Radio value="department">sim, pelo departamento</Radio>
              <Radio value="admission_date">sim, pelo data de admissão</Radio>
            </HStack>
          </RadioGroup>
        </VStack>
      </FormControl>

      <EmployeeTable
        itens={data as any}
        onDelete={id => {
          sync(response?.result || employees.filter(e => e.id !== id));
        }}
      />
    </>
  );
};
