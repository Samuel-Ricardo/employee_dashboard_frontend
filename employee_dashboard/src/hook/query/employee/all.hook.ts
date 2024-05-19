'use client';

import { useQuery } from '@tanstack/react-query';
import { MODULES } from '../../../module/app.factory';
import { IEmployeeDTO } from '../../../module/domain/DTO/employee/employee.dto';

export const useEmployees = () => {
  const MODULE = MODULES.APPLICATION.CONTROLLER.EMPLOYEE();

  const { data, isPending, error, refetch } = useQuery<
    any,
    any,
    { result: IEmployeeDTO[] }
  >({
    queryFn: async () => await MODULE.findAll(),
    queryKey: ['employees::all'],
  });

  return {
    data,
    isPending,
    error,
    refetch,
  };
};
