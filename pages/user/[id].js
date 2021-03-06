import axios from 'axios';
import { User } from '../../components/User';

function UserPage({ user }) {
  return (
    <>
      <User model={user} />
    </>
  );
}

UserPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return { user: result.data };
};

export default UserPage;
