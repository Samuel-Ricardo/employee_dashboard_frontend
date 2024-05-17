import Image from 'next/image';
import { Navbar } from '../components/navbar/navbar.component';

export default function Home() {
  return (
    <main className="flex  min-w-screen min-h-screen flex-col p-2 bg-[#171717]">
      <Navbar
        tabs={[
          {
            title: 'Home',
            body: (
              <div>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                  priority
                />
              </div>
            ),
          },
        ]}
      />
    </main>
  );
}
