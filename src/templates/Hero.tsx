import Link from 'next/link';

import { Background } from '../background/Background';
import HeroOneButton from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = ({ studentCount }: { studentCount: number }) => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="mailto:jserverex@gmail.com">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A Social Network for students\n'}
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
              BY STUDENTS
            </span>
          </>
        }
        description="Join the rest of Salem Students to be notified when we go live!"
        studentCount={studentCount}
      />
    </Section>
  </Background>
);

export { Hero };
