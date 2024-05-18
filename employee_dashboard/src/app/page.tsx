import 'reflect-metadata';

import { Navbar } from '../components/navbar/navbar.component';
import { NavBarItem } from '../components/navbar/item/item.component';
import { HomePage } from './page/home.page';
import { CreateEmployeePage } from './page/employee/create/employee.page';

export default function Home() {
  return (
    <main className="flex  min-w-screen min-h-screen flex-col p-2 bg-[#171717]">
      <Navbar
        tabs={[
          {
            title: 'Home',
            body: (
              <NavBarItem>
                <HomePage />
              </NavBarItem>
            ),
          },
          {
            title: 'Create',
            body: (
              <NavBarItem>
                <CreateEmployeePage />
              </NavBarItem>
            ),
          },
        ]}
      />
    </main>
  );
}
