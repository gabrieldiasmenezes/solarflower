'use client'
import Link from 'next/link'
import styles from './Cadastro.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Definição dos tipos
type FormData = {
  selectedOption: string;
  nome: string;
  documento: string;
  email: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  estado: string;
  senha: string;
  cnpjCpfError: string;
  error: string;
  loading: boolean;
};

export default function Cadastro() {
  // Estados para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    selectedOption: '',
    nome: '',
    documento: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    cidade: '',
    estado: '',
    senha: '',
    cnpjCpfError: '',
    error: '',
    loading: false,
  });

  const router = useRouter();

  // Função para lidar com a mudança de seleção no "Eu sou"
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      selectedOption: event.target.value,
      documento: '',
      cnpjCpfError: '',
    });
  };

  // Função para buscar o endereço com base no CEP
  const handleCepChange = async (event: { target: { value: string } }) => {
    const { value } = event.target;
    setFormData({ ...formData, cep: value });

    if (value.length === 8) {
      setFormData({ ...formData, loading: true, error: '' });
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();

        if (data.erro) {
          setFormData({ ...formData, error: 'CEP não encontrado' });
        } else {
          setFormData({
            ...formData,
            rua: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,
          });
        }
      } catch {
        setFormData({ ...formData, error: 'Erro ao buscar o CEP' });
      } finally {
        setFormData({ ...formData, loading: false });
      }
    } else {
      setFormData({ ...formData, rua: '', cidade: '', estado: '' });
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

    // Validação de CPF/CNPJ
    if (formData.selectedOption === 'cliente_comercial' && formData.documento.length !== 14) {
      setFormData({ ...formData, cnpjCpfError: 'CNPJ inválido' });
      return;
    }

    if (formData.selectedOption === 'cliente_residencial' && formData.documento.length !== 11) {
      setFormData({ ...formData, cnpjCpfError: 'CPF inválido' });
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
              <select
                className={styles.input}
                value={formData.selectedOption}
                onChange={handleSelectChange}
                required
              >
                <option value="">Eu sou</option>
                <option value="cliente_comercial">Cliente Comercial</option>
                <option value="cliente_residencial">Cliente Residencial</option>
              </select>
              <label className={styles.label}>Tipo de Cliente</label>
            </div>
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
                type="text"
                value={formData.documento}
                onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                maxLength={formData.selectedOption === 'cliente_comercial' ? 14 : 11}
                required
              />
              <label className={styles.label}>{formData.selectedOption === 'cliente_comercial' ? 'CNPJ' : 'CPF'}</label>
              {formData.cnpjCpfError && <p style={{ color: 'red' }}>{formData.cnpjCpfError}</p>}
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
                maxLength={8}
                value={formData.cep}
                onChange={handleCepChange}
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
