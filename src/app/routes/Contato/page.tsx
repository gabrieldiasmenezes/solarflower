'use client'
import Link from 'next/link'
import styles from './Contato.module.css'
import { useState } from 'react';

type FormData = {
  selectedOption: string;
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  estado: string;
  comentario: string;
};

export default function Contato() {
  // Definindo os campos do formulário como um único objeto
  const [formData, setFormData] = useState<FormData>({
    selectedOption: '',
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    cidade: '',
    estado: '',
    comentario: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Ajuste para permitir que o erro seja nulo

  // Função para lidar com a mudança de seleção no "Eu sou"
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, selectedOption: event.target.value });
  };

  // Função para lidar com as mudanças nos campos de input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para buscar o endereço com base no CEP
  const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, cep: value });

    if (value.length === 8) { // Verifica se o CEP tem 8 dígitos
      setLoading(true);
      setError(null); // Limpa o erro antes de uma nova busca
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError('CEP não encontrado');
          setFormData({ ...formData, rua: '', cidade: '', estado: '' });
        } else {
          setFormData({
            ...formData,
            rua: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,
          });
        }
      } catch (err) {
        setError('Erro ao buscar o CEP');
      } finally {
        setLoading(false);
      }
    } else {
      // Reseta os campos relacionados ao endereço se o CEP não for válido
      setFormData({ ...formData, rua: '', cidade: '', estado: '' });
    }
  };

  // Função para enviar o formulário
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Impede o comportamento padrão de envio de formulário

    // Validação de todos os campos
    if (
      !formData.selectedOption ||
      !formData.cep ||
      !formData.rua ||
      !formData.cidade ||
      !formData.estado ||
      !formData.comentario ||
      !formData.nome ||
      !formData.email ||
      !formData.telefone
    ) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Exibe o alert de sucesso
    alert('Sua mensagem foi enviada com sucesso!');

    // Limpa os campos do formulário
    setFormData({
      selectedOption: '',
      nome: '',
      email: '',
      telefone: '',
      cep: '',
      rua: '',
      cidade: '',
      estado: '',
      comentario: '',
    });
    setError(null); // Limpa qualquer mensagem de erro após o envio
  };

  return (
    <>
      <section className={styles.boxForm}>
        <Link href={'/'} className={styles.Menu}>
          Menu Principal
        </Link>
        <section className={styles.background}>
          <h3 className={styles.titulo}>Formulario de Contato</h3>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className={styles.linhas}>
              <select
                className={styles.input}
                value={formData.selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Eu sou</option>
                <option value="cliente_comercial">Cliente Comercial</option>
                <option value="cliente_residencial">Cliente Residencial</option>
              </select>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
              <label className={styles.label} htmlFor="">
                {formData.selectedOption === 'cliente_comercial' ? 'Nome Comercial' : 'Nome'}
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label className={styles.label} htmlFor="">
                {formData.selectedOption === 'cliente_comercial' ? 'Email Comercial' : 'Email'}
              </label>
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
              <label className={styles.label} htmlFor="">
                Telefone
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                maxLength={8}
                name="cep"
                value={formData.cep}
                onChange={handleCepChange}
                required
              />
              <label className={styles.label} htmlFor="">
                CEP
              </label>
            </div>
            <div className={styles.linhas}>
              <input className={styles.input} type="text" name="rua" value={formData.rua} readOnly />
              <label className={styles.label} htmlFor="">
                Rua
              </label>
            </div>
            <div className={styles.linhas}>
              <input className={styles.input} type="text" name="cidade" value={formData.cidade} readOnly />
              <label className={styles.label} htmlFor="">
                Cidade
              </label>
            </div>
            <div className={styles.linhas}>
              <input className={styles.input} type="text" name="estado" value={formData.estado} readOnly />
              <label className={styles.label} htmlFor="">
                Estado
              </label>
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
              <label className={styles.label} htmlFor="">
                Comentário
              </label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>Mandar Contato</button>
            </div>
          </form>
          {loading && <p>Carregando...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </section>
    </>
  );
}
