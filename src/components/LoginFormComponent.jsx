import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="login-form text-center px-4 w-100" style={{ maxWidth: '400px' }}>
      <h2 className="text-primary fw-bold mb-4">Masuk</h2>

      <div className="mb-3 text-start">
        <label className="form-label">Email atau nama pengguna</label>
        <input
          type="email"
          className="form-control rounded-4 bg-light border-0 px-3 py-2"
          placeholder="Email"
        />
      </div>

      <div className="mb-3 text-start">
        <label className="form-label">Kata sandi</label>
        <input
          type="password"
          className="form-control rounded-4 bg-light border-0 px-3 py-2"
          placeholder="Kata Sandi"
        />
      </div>

      <Link 
        to="/users" 
        className="btn btn-primary rounded-pill px-4 py-2 mb-3 d-block mx-auto" 
        role="button"
      >
        Masuk
      </Link>

      <hr />
      <p className="small">
        Tidak punya akun?{" "}
        <Link to="/Register" className="text-decoration-none">Daftar disini</Link>
      </p>
      <p className="text-muted small fst-italic">Lupa kata sandi Anda?</p>

      <p className="mt-5 text-muted fst-italic">FindFun - 2025</p>
    </div>
  );
};

export default LoginForm;
