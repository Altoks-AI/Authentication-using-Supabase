import { useEffect } from 'react';
import { supabase } from '../../SupabaseClient';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 
import './login.css';

function Login() {
  const navigate = useNavigate();
  const { setEmail } = useUser(); // ✅ Destructure setEmail from context

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email) {
        setEmail(session.user.email);
        navigate('/dashboard');
      }
    };
    checkSession();
  }, [navigate, setEmail]);

   

  const signUp = async () => {
    await supabase.auth.signOut(); // ✅ force logout before fresh login
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
        queryParams: {
          prompt: 'select_account', // ✅ force Google to show account picker
        },
      },
    });
  };

  return (
    <div className='login_page'>
      <a href="/" className='getbackhome'>🡐 Get back to Home Page</a>
      <h1 className='letsgetstarted'>Let's get you started...</h1>
      
      <button onClick={signUp} className='login_button'>
        <img src="../../google.png" alt="G" className='google_icon' />
        <span className='bar'>|</span>
        <span className='signin_text'> Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
