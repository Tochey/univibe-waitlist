import api from '../lib/api';
import { Base } from '../templates/Base';

const Index = ({ studentCount }: { studentCount: number }) => (
  <Base studentCount={studentCount} />
);

export default Index;

export const getStaticProps = async () => {
  const response = await api.get('/api/getAllUsers');
  return {
    props: {
      studentCount: response.data?.count,
    },
  };
};
