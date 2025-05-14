import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../SupabaseClient';
import { useUser } from '../context/UserContext';

function Dashboard() {
  const navigate = useNavigate();
  const { email, name, setEmail, setName } = useUser(); // Access email and name from context

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setEmail(''); // Clear email after logout
    setName('');  // Clear name after logout
    navigate('/login');
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error fetching session:', error.message);
        return;
      }

      const session = data?.session;
      if (session?.user) {
        const { email, user_metadata } = session.user;
        setEmail(email);
        setName(user_metadata?.name || 'No name available'); // Set name from user metadata
      } else {
        navigate('/login'); // Redirect to login if no user session
      }
    };

    fetchUserInfo();
  }, [navigate, setEmail, setName]);

  return (
    <div className='dashboard-container'>
      <h2>Welcome to Your Dashboard</h2>
      <div className='user-info'>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Name:</strong> {name}</p>
      </div>
      <button onClick={handleLogout} className='logout-btn'>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
