import axios from 'axios';
import { User } from '../components/User';

function Index({ users }) {
  return (
    <>
      <div>
        <h1>test app</h1>
        <div>count={users.length}</div>
        {users.map((u, i) => (
          <User model={u} key={i} />
        ))}
      </div>
    </>
  );
}

Index.getInitialProps = async ({ req }) => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return { users: result.data };
};

export default Index;
