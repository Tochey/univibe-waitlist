import { useState } from 'react';

import { Section } from '../layout/Section';
import api from '../pages/lib/api';

const VerticalFeatures = () => {
  const [count, setCount] = useState();

  api.get('/api/getAllUsers').then((e) => {
    setCount(e.data?.count);
  });
  return (
    <Section
      title={`🔥${count! + 2} students are waiting🔥`}
      description="Salem State Students gain early access to univibe, where you can make new friends and stay up to date with campus life and culture"
    >
      {/* <VerticalFeatureRow
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
    image="/assets/images/feature.svg"
    imageAlt="First feature alt text"
  /> */}
      {/* <VerticalFeatureRow
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
    image="/assets/images/feature2.svg"
    imageAlt="Second feature alt text"
    reverse
  />
  <VerticalFeatureRow
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
    image="/assets/images/feature3.svg"
    imageAlt="Third feature alt text"
  /> */}
    </Section>
  );
};

export { VerticalFeatures };
