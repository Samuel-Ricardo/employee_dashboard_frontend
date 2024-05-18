'use client';

import { useCallback } from 'react';
import { IEmployeeDTO } from '../../module/domain/DTO/employee/employee.dto';

export const useEmployeeFilter = () => {
  const filter = useCallback(
    (search: string, order: string, data: IEmployeeDTO[]) => {
      const result =
        search.trim() !== ''
          ? data.filter(employee =>
              employee.name.toLowerCase().includes(search.toLowerCase()),
            )
          : data;

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
    [],
  );

  return { filter };
};
