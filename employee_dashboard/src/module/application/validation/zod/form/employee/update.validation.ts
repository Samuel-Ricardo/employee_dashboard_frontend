import { z } from 'zod';

export const UPDATE_EMPLOYEE_FORM_SCHEMA = z.object({
  name: z.string().min(3),
  role: z.string().min(3),
  department: z.string().min(3),
  admission_date: z.string().date(),
});

export type UpdateEmployeeFormData = z.infer<
  typeof UPDATE_EMPLOYEE_FORM_SCHEMA
>;
