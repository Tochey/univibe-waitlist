import { ReactNode, useState } from 'react';

import { Button } from '../button/Button';
import api from '../lib/api';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  studentCount: number;
};

export default function HeroOneButton({
  title,
  description,
  studentCount,
}: IHeroOneButtonProps) {
  const [data, setData] = useState({ email: '' });
  const [message, setMessage] = useState('');
  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = ({
    currentTarget: input,
  }) => {
    setMessage('');
    setData({ ...data, [input.name]: input.value.toLowerCase() });
  };

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {title}
      </h1>
      <div className="text-2xl mt-4 mb-16">{description}</div>
      <div className="text-black font-bold ">
        <p>
          Join Tochi Amanze, Joseph Severe and{' '}
          <span className="font-extrabold">{studentCount - 2}</span> others on
          the waitlist
        </p>
      </div>
      <input
        className="border borer-solid border-black mx-4 p-4 rounded-md text-black outline-none bg-gray-100 text-xl"
        placeholder="Salem State Email"
        id="email-input"
        name="email"
        onChange={handleChange}
      />
      <Button
        xl
        handleClick={async () => {
          if (!data.email.endsWith('@salemstate.edu')) {
            setMessage('Please Enter your Salem State email address');
            return;
          }

          try {
            await api.post('/api/join', data);
            setMessage(
              'Thank you for joining our waitlist! For any questions reach out to tochey@outlook.com'
            );
          } catch (error) {
            setMessage('You are already on the waitlist!');
          }
        }}
      >
        ✨Submit✨
      </Button>
      <p className="mt-3 font-extrabold">{message}</p>
    </header>
  );
}
