'use client'
import Link from 'next/link'
import styles from './Login.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    }
  };

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Por favor, insira um e-mail válido');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/GlobalSolution/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('userEmail', userData.email); // Salva o email no localStorage
        router.push('Usuario'); // Redireciona para a página de agendamentos
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao fazer login. Tente novamente.');
      }
    } catch {
      setError('Erro ao se conectar ao servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.boxForm}>
        <Link href={'/'} className={styles.Menu}>
          Menu Principal
        </Link>
        <section className={styles.background}>
          <h3 className={styles.titulo}>Login</h3>
          <form onSubmit={handleLoginSubmit} className={styles.formulario}>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <label className={styles.label}>Email</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="password"
                name="senha"
                value={senha}
                onChange={handleInputChange}
              />
              <label className={styles.label}>Senha</label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Carregando...' : 'Entrar'}
              </button>
            </div>
              <p className={styles.cad}>Não tem uma <Link href={'Cadastro'} className={styles.link}>conta</Link>?</p>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </section>

      

      {/* Imagem para a tela de fundo da primeira parte */}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
