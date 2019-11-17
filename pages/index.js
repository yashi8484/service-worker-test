import axios from 'axios';
import Link from 'next/link';

function Index({ users }) {
  return (
    <>
      <h1>test app</h1>
      <h3>select user id</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        {users.map((u, i) => (
          <Link key={i} href={'/user/[id]'} as={`/user/${u.id}`}>
            <button
              style={{
                width: '50px',
                margin: '0 1rem 1rem 0',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              {u.id}
            </button>
          </Link>
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
