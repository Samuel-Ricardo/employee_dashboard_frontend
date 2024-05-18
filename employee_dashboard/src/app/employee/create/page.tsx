import { NavBarItem } from '../../../components/navbar/item/item.component';
import { Navbar } from '../../../components/navbar/navbar.component';
import { CreateEmployeePage } from '../../page/employee/create/employee.page';
import { HomePage } from '../../page/home.page';

export default function CreateEmployee() {
  return (
    <main className="flex  min-w-screen min-h-screen flex-col p-2 bg-[#171717]">
      <Navbar
        tabs={[
          {
            title: 'Create',
            body: (
              <NavBarItem>
                <CreateEmployeePage />
              </NavBarItem>
            ),
          },

          {
            title: 'Home',
            body: (
              <NavBarItem>
                <HomePage />
              </NavBarItem>
            ),
          },
        ]}
      />
    </main>
  );
}
