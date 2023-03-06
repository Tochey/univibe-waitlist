import { useEffect, useState } from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import api from '../lib/api';

const VerticalFeatures = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/getAllUsers');
        setCount(response.data?.count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    // Return a cleanup function that will be executed when the component unmounts
    return () => {
      // Perform any cleanup here
    };
  }, []);
  return (
    <Section
      title={`🔥${count} students are waiting🔥`}
      description="Our mission is to connect Salem State students in a safe and inclusive space, where they can build meaningful relationships and explore new opportunities"
    >
      <VerticalFeatureRow
        title="Expand Your Social Circle"
        description="Make friends with students On and Off Campus. With Univibe, you can connect with other students who share your interests, passions, and hobbies."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Discover new opportunities"
        description="Univibe helps you discover new clubs, events, and activities happening on campus, so you never miss out on the fun."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
    </Section>
  );
};

export { VerticalFeatures };
