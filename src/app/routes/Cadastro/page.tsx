'use client'
import Link from 'next/link'
import styles from './Cadastro.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Definição dos tipos
type FormData = {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  estado: string;
  senha: string;
  error: string;
  loading: boolean;
};

export default function Cadastro() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    cidade: '',
    estado: '',
    senha: '',
    error: '',
    loading: false,
  });

  const router = useRouter();


  // Função para buscar o endereço com base no CEP
  // Função para buscar o endereço com base no CEP
const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setFormData((prevState) => ({
    ...prevState,
    cep: value,
    rua: '', // Limpa os campos de endereço enquanto digita
    cidade: '',
    estado: '',
    error: '', // Limpa o erro caso esteja presente
  }));

  // Verificar se o CEP tem 8 caracteres antes de tentar buscar
  if (value.length === 9) {
    setFormData((prevState) => ({ ...prevState, loading: true }));
    try {
      const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
      const data = await response.json();

      if (data.erro) {
        setFormData((prevState) => ({
          ...prevState,
          error: 'CEP não encontrado',
          loading: false,
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          rua: data.logradouro,
          cidade: data.localidade,
          estado: data.uf,
          loading: false,
        }));
      }
    } catch {
      setFormData((prevState) => ({
        ...prevState,
        error: 'Erro ao buscar o CEP',
        loading: false,
      }));
    }
  } else {
    // Se o CEP não tem 8 caracteres, limpar os dados de endereço
    setFormData((prevState) => ({
      ...prevState,
      rua: '',
      cidade: '',
      estado: '',
    }));
  }
};


  // Função para validar o formulário antes de enviar
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validação dos campos obrigatórios
    if (!formData.nome || !formData.email || !formData.telefone || !formData.cep || !formData.rua || !formData.cidade || !formData.estado || !formData.senha) {
      setFormData({ ...formData, error: 'Por favor, preencha todos os campos' });
      return;
    }

    // Validação de senha (deve ter exatamente 6 caracteres)
    if (formData.senha.length !== 6) {
      setFormData({ ...formData, error: 'A senha deve ter exatamente 6 caracteres' });
      return;
    }

    // Se a validação passar, redireciona para a página do usuário
    router.push('Usuario');
  };

  return (
    <>
      <section className={styles.boxForm}>
        <Link href={'/'} className={styles.Menu}>
          Menu Principal
        </Link>
        <section className={styles.background}>
          <h3 className={styles.titulo}>Formulario de Cadastro</h3>
          <form className={styles.formulario} onSubmit={handleFormSubmit}>
           
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
              />
              <label className={styles.label}>Nome</label>
            </div>
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
              <input
                className={styles.input}
                type="text"
                maxLength={9}
                value={formData.cep}
                onChange={handleCepChange}  // Permite digitação e chama a função handleCepChange
                required
              />
              <label className={styles.label}>CEP</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.rua}
                readOnly
              />
              <label className={styles.label}>Rua</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.cidade}
                readOnly
              />
              <label className={styles.label}>Cidade</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.estado}
                readOnly
              />
              <label className={styles.label}>Estado</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="password"
                value={formData.senha}
                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                maxLength={6}
                required
              />
              <label className={styles.label}>Senha</label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>Mandar Cadastro</button>
            </div>
          </form>
          {formData.loading && <p>Carregando...</p>}
          {formData.error && <p style={{ color: 'red' }}>{formData.error}</p>}
        </section>
      </section>
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
