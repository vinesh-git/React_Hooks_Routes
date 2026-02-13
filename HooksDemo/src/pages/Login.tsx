import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const loginFunc = (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    // simple client-side check — this is only for demo purposes
    if (user.trim() === "admin" && password === "admin123") {
      localStorage.setItem("auth", "true");
      navigate('/');
      return;
    }

    setError('Invalid username or password');
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={loginFunc} aria-labelledby="login-heading">
        <h2 id="login-heading">Sign in</h2>

        <label className="field">
          <span className="label-text">Username</span>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter username"
            autoComplete="username"
            required
          />
        </label>

        <label className="field">
          <span className="label-text">Password</span>
          <div className="password-row">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />
            <button type="button" className="toggle-pwd" onClick={() => setShowPassword(s => !s)} aria-pressed={showPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </label>

        {error && <div className="login-error" role="alert">{error}</div>}

        <div className="actions">
          <button className="btn-primary" type="submit" disabled={!user || !password}>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default Login