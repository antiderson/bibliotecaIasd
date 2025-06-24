import { useState } from 'react';
import './LoginScreen.css';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginScreenProps {
  onLogin?: (data: LoginFormData) => void;
  onForgotPassword?: () => void;
}

export function LoginScreen({ onLogin, onForgotPassword }: LoginScreenProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate validation
    const newErrors: Partial<LoginFormData> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        onLogin?.(formData);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email or Username
            </label>
            <input
              type="email"
              id="email"
              className={`form-input ${errors.email ? 'form-input-error' : ''}`}
              placeholder="Enter your email or username"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`form-input ${errors.password ? 'form-input-error' : ''}`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={isSubmitting}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </div>

          <div className="forgot-password">
            <button
              type="button"
              className="forgot-password-link"
              onClick={onForgotPassword}
              disabled={isSubmitting}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 