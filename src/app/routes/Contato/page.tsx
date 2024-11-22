'use client'
import Link from 'next/link';
import styles from './Contato.module.css';
import { useState } from 'react';

type FormData = {
  email: string;
  telefone: string;
  comentario: string;
};

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    telefone: '',
    comentario: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.email || !formData.telefone || !formData.comentario) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      setError('Telefone inválido. Use apenas números com 11 dígitos.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/GlobalSolution/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ email: '', telefone: '', comentario: '' });
      } else {
        const errorData = await response.json();
        setError(`Erro: ${errorData.message || 'Tente novamente mais tarde.'}`);
        setLoading(false);
      }
    } catch (error) {
      setError('Erro ao enviar os dados. Tente novamente.');
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
          <h3 className={styles.titulo}>Formulário de Contato</h3>
          <form onSubmit={handleFormSubmit} className={styles.formulario}>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <label className={styles.label}>Email</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                maxLength={11}
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                required
              />
              <label className={styles.label}>Telefone</label>
            </div>
            <div className={styles.linhas}>
              <textarea
                className={styles.input}
                value={formData.comentario}
                onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                required
              />
              <label className={styles.label}>Comentário</label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
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
