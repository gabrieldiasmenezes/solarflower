'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Contato.module.css'; // Crie um arquivo de CSS para estilizar

type ContatoData = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export default function Contato() {
  const [formData, setFormData] = useState<ContatoData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [error, setError] = useState<string | null>(null); // Estado de erro
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validação básica dos campos
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      setError('Telefone inválido. Use apenas números com 11 dígitos.');
      return;
    }

    // Envio da mensagem
    const contatoData = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      mensagem: formData.mensagem,
    };

    setLoading(true);

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contatoData),
      });

      if (response.ok) {
        router.push('/sucesso'); // Página de sucesso após o envio
      } else {
        const errorData = await response.json();
        setError(`Erro: ${errorData.message || 'Tente novamente mais tarde.'}`);
        setLoading(false);
      }
    } catch (error) {
      setError('Erro ao enviar a mensagem. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.formContainer}>
        <h3 className={styles.title}>Entre em Contato</h3>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
            />
            <label className={styles.label}>Nome</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.inputGroup}>
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
          <div className={styles.inputGroup}>
            <textarea
              className={styles.textarea}
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              required
            />
            <label className={styles.label}>Mensagem</label>
          </div>
          <div className={styles.submitButton}>
            <button type="submit" className={styles.button}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>

        {/* Exibe a mensagem de erro se existir */}
        {error && <p className={styles.errorText}>{error}</p>}
      </section>
      {/* Imagem para a tela de fundo da primeira parte */}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
