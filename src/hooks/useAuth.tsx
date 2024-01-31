import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigation = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  async function login() {
    const res = await fetch('http://localhost:3000/users').then((res) =>
      res.json(),
    );

    const user = res.find(
      (user: { email: string }) => user.email === form.email,
    );
    const validatePassword = form.password.split('').reverse().join('');

    if (!form.email) {
      setError('Email is required');
    } else if (!user) {
      setError('Email not found');
    } else if (!form.password) {
      setError('Password is required');
    } else if (validatePassword.length < 8) {
      setError('Password must be at least 8 characters');
    } else if (user.password !== form.password) {
      setError('Incorrect password');
    } else if (user.role === 'admin') {
      localStorage.setItem('role', user.role);
      navigation('/');
    } else {
      localStorage.setItem('role', user.role);
      navigation('/tickets');
    }
  }

  function logout() {
    localStorage.removeItem('role');
    navigation('/auth/signin');
  }
  return { login, setForm, form, error, logout };
}

export default useAuth;
