'use client'
import Link from 'next/link'
import styles from './Login.module.css'
import {  useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginA() {
  // Estados para armazenar os dados do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Função para lidar com a mudança de valores de e-mail e senha
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    }
  };

  // Função para validar e enviar o formulário
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Impede o comportamento padrão de envio de formulário

    // Validação dos campos de e-mail e senha
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Validação simples para e-mail (verifica se tem '@' e '.')
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Por favor, insira um e-mail válido');
      return;
    }

    // Verifique a senha - exemplo de uma senha mínima de 6 caracteres
    if (senha.length < 6) {
      setError('A senha precisa ter no mínimo 6 caracteres');
      return;
    }

    // Se a validação passar, redireciona para a página do usuário
    router.push('Agendamentos');
  };

  return (
    <>
      <section className={styles.boxForm}>
        <Link href={'/'} className={styles.Menu}>
          Menu Principal
        </Link>
        <section className={styles.background}>
          <h3 className={styles.titulo}>Formulario de Login</h3>
          <form onSubmit={handleLoginSubmit} className={styles.formulario}>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <label className={styles.label} htmlFor="email">
                Email
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="password"
                name="senha"
                value={senha}
                onChange={handleInputChange}
                maxLength={6}
              />
              <label className={styles.label} htmlFor="senha">
                Senha
              </label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>Login</button>
            </div>
            <p className={styles.cad}>
              Não tem uma <Link className={styles.link} href={'Cadastro'}>conta</Link>
            </p>
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
