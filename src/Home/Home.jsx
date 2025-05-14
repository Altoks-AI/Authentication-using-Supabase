import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const taketoSignIn = () => {
    navigate('/login');
  };

  return (
    <div className='home'>
      <h1>Home Page</h1>
      <button className="sign-in-btn" onClick={taketoSignIn}>
        Sign in
      </button>
    </div>
  );
}

export default Home;
