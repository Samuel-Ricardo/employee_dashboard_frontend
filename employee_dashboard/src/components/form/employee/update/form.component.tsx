'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MODULES } from '../../../../module/app.factory';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from '@chakra-ui/react';
import { UpdateEmployeeFormData } from '../../../../module/application/validation/zod/form/employee/update.validation';
import { useParams, useRouter } from 'next/navigation';
import { ICreateEmployeeDTO } from '../../../../module/domain/DTO/employee/create.dto';

export const UpdateEmployeeForm = () => {
  const _module = MODULES.APPLICATION.CONTROLLER.EMPLOYEE();

  const r = useRouter();
  const params = useParams();
  const id = useMemo(() => params.id as string, [params.id]);

  const [employee, setEmployee] = useState<ICreateEmployeeDTO>();

  useEffect(() => {
    _module.findOne({ id }).then(data => setEmployee(data.result));
  }, [_module, id, setEmployee]);

  const VALIDATION = useMemo(
    () => MODULES.APPLICATION.VALIDAITON.ZOD.FORM.EMPLOYEE.UPDATE(),
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateEmployeeFormData>({
    resolver: zodResolver(VALIDATION),
  });

  const submit = useCallback(
    () =>
      handleSubmit(async data => {
        await _module.update({
          ...employee,
          id,
          ...data,
          admission_date: new Date(
            (data.admission_date || employee?.admission_date) as string,
          ),
        }),
          r.push('/');
      }),
    [_module, handleSubmit, id, r, employee],
  );

  return (
    <form onSubmit={submit()}>
      <FormControl
        isInvalid={
          !!errors.name ||
          !!errors.role ||
          !!errors.department ||
          !!errors.admission_date
        }
      >
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input id="name" defaultValue={employee?.name} {...register('name')} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>

        <FormLabel htmlFor="role">Cargo</FormLabel>
        <Input id="role" defaultValue={employee?.role} {...register('role')} />
        <FormErrorMessage>
          {errors.role && errors.role.message}
        </FormErrorMessage>

        <FormLabel htmlFor="department">Departamento</FormLabel>
        <Input
          id="department"
          defaultValue={employee?.department}
          {...register('department')}
        />
        <FormErrorMessage>
          {errors.department && errors.department.message}
        </FormErrorMessage>

        <FormLabel htmlFor="admission_date"> Data de Admição </FormLabel>
        <Input
          id="admission_date"
          type="date"
          defaultValue={employee?.admission_date?.toString()}
          {...register('admission_date')}
        />
        <FormErrorMessage>
          {errors.admission_date && errors.admission_date.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="red" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
