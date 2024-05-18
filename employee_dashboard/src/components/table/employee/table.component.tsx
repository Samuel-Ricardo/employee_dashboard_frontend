import { TableList } from '../table.component';
import { IEmplyeeTableProps } from '../../../@types/components/table/employee/table.props';
import { EmployeeTableItem } from './item/item.component';

export const EmployeeTable = async ({
  itens,
  children,
}: IEmplyeeTableProps) => {
  return (
    <TableList
      caption="Funcionários da Empresa"
      fields={['Nome', 'Cargo', 'Departamento']}
    >
      {children
        ? children
        : itens?.map(item => <EmployeeTableItem key={item.id} {...item} />)}
    </TableList>
  );
};
