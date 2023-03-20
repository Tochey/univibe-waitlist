import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = ({ studentCount }: { studentCount: number }) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero studentCount={studentCount} />
    <VerticalFeatures studentCount={studentCount} />
  </div>
);

export { Base };
