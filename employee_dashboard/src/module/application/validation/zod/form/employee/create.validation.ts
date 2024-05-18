import { z } from 'zod';

export const CREATE_EMPLOYEE_FORM_SCHEMA = z.object({
  name: z.string().min(3),
  role: z.string().min(3),
  department: z.string().min(3),
  admission_date: z.date().min(new Date()),
});

export type CreateEmployeeFormData = z.infer<
  typeof CREATE_EMPLOYEE_FORM_SCHEMA
>;
