import Image from 'next/image';
import { Navbar } from '../components/navbar/navbar.component';
import { Box } from '@chakra-ui/react';
import { NavBarItem } from '../components/navbar/item/item.component';

export default function Home() {
  return (
    <main className="flex  min-w-screen min-h-screen flex-col p-2 bg-[#171717]">
      <Navbar
        tabs={[
          {
            title: 'Home',
            body: (
              <NavBarItem>
                <p>Home :D</p>
              </NavBarItem>
            ),
          },
        ]}
      />
    </main>
  );
}
