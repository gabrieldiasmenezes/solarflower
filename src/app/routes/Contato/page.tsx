'use client';
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!formData.email || !formData.telefone || !formData.comentario) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Mensagem de sucesso
    alert('Sua mensagem foi enviada com sucesso!');

    // Resetar os campos do formulário
    setFormData({
      email: '',
      telefone: '',
      comentario: '',
    });
    setError(null);
  };

  return (
    <>
      <section className={styles.boxForm}>
        <Link href={'/'} className={styles.Menu}>
          Menu Principal
        </Link>
        <section className={styles.background}>
          <h3 className={styles.titulo}>Formulário de Contato</h3>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label className={styles.label}>Email</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                maxLength={11}
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
              />
              <label className={styles.label}>Telefone</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.inputC}
                type="text"
                name="comentario"
                value={formData.comentario}
                onChange={handleInputChange}
                required
              />
              <label className={styles.label}>Comentário</label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>
                Mandar Contato
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
