export interface IEmployeeTableItem {
  id: string;
  name: string;
  role: string;
  department: string;
  onDelete?: (id: string) => void;
}
