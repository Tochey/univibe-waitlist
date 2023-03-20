import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = ({ studentCount }: { studentCount: number }) => {
  return (
    <Section
      title={`🔥${studentCount} students are waiting🔥`}
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
