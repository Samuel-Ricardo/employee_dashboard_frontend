import { TableList } from '../table.component';
import { IEmplyeeTableProps } from '../../../@types/components/table/employee/table.props';
import { EmployeeTableItem } from './item/item.component';

export const EmployeeTable = async ({ itens }: IEmplyeeTableProps) => {
  return (
    <TableList
      caption="Funcionários da Empresa"
      fields={['Nome', 'Cargo', 'Departamento']}
    >
      {itens.map(item => (
        <EmployeeTableItem key={item.id} {...item} />
      ))}
    </TableList>
  );
};
