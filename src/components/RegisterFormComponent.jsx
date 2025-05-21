import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <div className="register-form text-center px-4 w-100" style={{ maxWidth: '400px' }}>
      <h2 className="text-primary fw-bold mb-4">Daftar</h2>

      <div className="mb-3 text-start">
        <label className="form-label">Nama Lengkap</label>
        <input
          type="text"
          className="form-control rounded-4 bg-light border-0 px-3 py-2"
          placeholder="Nama"
        />
      </div>

      <div className="mb-3 text-start">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control rounded-4 bg-light border-0 px-3 py-2"
          placeholder="Email"
        />
      </div>

      <div className="mb-3 text-start position-relative">
        <label className="form-label">Kata Sandi</label>
        <input
          type={showPassword ? 'text' : 'password'}
          className="form-control rounded-4 bg-light border-0 px-3 py-2 pe-5"
          placeholder="Kata Sandi"
        />
      </div>

      <div className="mb-3 text-start position-relative">
        <label className="form-label">Ulangi Kata Sandi</label>
        <input
          type={showRepeatPassword ? 'text' : 'password'}
          className="form-control rounded-4 bg-light border-0 px-3 py-2 pe-5"
          placeholder="Ulangi Kata Sandi"
        />
      </div>

      <button className="btn btn-primary rounded-pill px-4 py-2 mb-3 d-block mx-auto">Daftar</button>

      <hr />
      <p className="small">
        Sudah punya akun?{' '}
        <Link to="/Login" className="text-decoration-none">Masuk disini</Link>
      </p>

      <p className="mt-5 text-muted fst-italic">FindFun - 2025</p>
    </div>
  );
};

export default RegisterForm;
