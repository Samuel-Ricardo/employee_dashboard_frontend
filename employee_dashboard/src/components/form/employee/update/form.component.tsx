'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useMemo } from 'react';
import { MODULES } from '../../../../module/app.factory';
import { CreateEmployeeFormData } from '../../../../module/application/validation/zod/form/employee/create.validation';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from '@chakra-ui/react';
import { UpdateEmployeeFormData } from '../../../../module/application/validation/zod/form/employee/update.validation';
import { useParams } from 'next/navigation';

export const UpdateEmployeeForm = () => {
  const VALIDATION = useMemo(
    () => MODULES.APPLICATION.VALIDAITON.ZOD.FORM.EMPLOYEE.UPDATE(),
    [],
  );

  const params = useParams();
  const id = useMemo(() => params.id as string, [params.id]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateEmployeeFormData>({
    resolver: zodResolver(VALIDATION),
  });

  const submit = useCallback(
    () =>
      handleSubmit(
        async data =>
          await MODULES.APPLICATION.CONTROLLER.EMPLOYEE().update({
            id,
            ...data,
            admission_date: new Date(data.admission_date),
          }),
      ),
    [handleSubmit, id],
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
        <Input id="name" placeholder="nome..." {...register('name')} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>

        <FormLabel htmlFor="role">Cargo</FormLabel>
        <Input id="role" placeholder="cargo..." {...register('role')} />
        <FormErrorMessage>
          {errors.role && errors.role.message}
        </FormErrorMessage>

        <FormLabel htmlFor="department">Departamento</FormLabel>
        <Input
          id="department"
          placeholder="Departamento..."
          {...register('department')}
        />
        <FormErrorMessage>
          {errors.department && errors.department.message}
        </FormErrorMessage>

        <FormLabel htmlFor="admission_date"> Data de Admição </FormLabel>
        <Input
          id="admission_date"
          type="date"
          placeholder="data..."
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
