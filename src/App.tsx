import { LoginScreen } from './components/LoginScreen'
import './App.css'

function App() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login attempt:', data);
    // This is where you would integrate with your authentication system
    alert(`Login attempt with email: ${data.email}`);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // This is where you would handle forgot password functionality
    alert('Forgot password functionality would be implemented here');
  };

  return (
    <LoginScreen 
      onLogin={handleLogin}
      onForgotPassword={handleForgotPassword}
    />
  )
}

export default App
