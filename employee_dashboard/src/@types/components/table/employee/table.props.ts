import { ReactNode } from 'react';
import { ITableProps } from '../table.props';
import { IEmployeeTableItem } from './item/item.type';

export interface IEmplyeeTableProps {
  itens: IEmployeeTableItem[];
  children?: ReactNode;
}
