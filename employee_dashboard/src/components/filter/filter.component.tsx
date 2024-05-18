'use client';
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Radio,
  RadioGroup,
  VStack,
  Button,
} from '@chakra-ui/react';
import { IEmployeeFilterProps } from '../../@types/components/filter/employee.filter';
import { useCallback, useState } from 'react';
import { EmployeeTable } from '../table/employee/table.component';
import { useEmployeeFilter } from '../../hook/employee/filter.hook';

export const EmployeeFilter = ({ employees }: IEmployeeFilterProps) => {
  const [data, setData] = useState(employees);

  const [input, setInput] = useState('');
  const [order, setOrder] = useState('none');

  const { filter } = useEmployeeFilter();

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
    setData(filter(e.target.value, order, employees));
  };
  const handleOrderChange = (value: string) => {
    setOrder(value);
    setData(filter(input, value, employees));
  };

  const onClick = useCallback(() => {
    setData(filter(input, order, employees));
  }, [filter, input, order, employees]);

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

      <EmployeeTable itens={data as any} />
    </>
  );
};
