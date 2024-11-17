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
    cnpjCpfError: '',
    error: '',
    loading: false,
  });

  const router = useRouter();

  // Função para lidar com a mudança de seleção no "Eu sou"
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      selectedOption: event.target.value, // Atualiza o valor corretamente
      documento: '', // Resetar o campo de documento sempre que a opção mudar
      cnpjCpfError: '', // Resetar erro de CNPJ/CPF
    });
  };

  // Função para buscar o endereço com base no CEP
  const handleCepChange = async (event: { target: { value: any; }; }) => {
    const { value } = event.target;
    setFormData({ ...formData, cep: value });

    if (value.length === 8) { // Verifica se o CEP tem 8 dígitos
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
      } catch (error) {
        setFormData({ ...formData, error: 'Erro ao buscar o CEP' });
      } finally {
        setFormData({ ...formData, loading: false });
      }
    } else {
      // Reseta os campos relacionados ao endereço se o CEP não for válido
      setFormData({ ...formData, rua: '', cidade: '', estado: '' });
    }
  };

  // Função para validar o formulário antes de enviar
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Evita o comportamento padrão de envio de formulário

    // Validação básica de todos os campos
    if (!formData.nome || !formData.email || !formData.telefone || !formData.cep || !formData.rua || !formData.cidade || !formData.estado) {
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
          <form action="#" className={styles.formulario} onSubmit={handleFormSubmit}>
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
              <label className={styles.label} htmlFor="">
                Tipo de Cliente
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
              <label className={styles.label} htmlFor="">
                Nome
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.documento}
                onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                maxLength={formData.selectedOption === 'cliente_comercial' ? 14 : 11}
              />
              <label className={styles.label} htmlFor="">
                {formData.selectedOption === 'cliente_comercial' ? 'CNPJ' : 'CPF'}
              </label>
              {formData.cnpjCpfError && <p style={{ color: 'red' }}>{formData.cnpjCpfError}</p>}
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <label className={styles.label} htmlFor="">
                Email
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                maxLength={11}
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
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
                value={formData.cep}
                onChange={handleCepChange}
              />
              <label className={styles.label} htmlFor="">
                CEP
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.rua}
                readOnly
              />
              <label className={styles.label} htmlFor="">
                Rua
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.cidade}
                readOnly
              />
              <label className={styles.label} htmlFor="">
                Cidade
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                value={formData.estado}
                readOnly
              />
              <label className={styles.label} htmlFor="">
                Estado
              </label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>Mandar Cadastro</button>
            </div>
          </form>
          {formData.loading && <p>Carregando...</p>}
          {formData.error && <p style={{ color: 'red' }}>{formData.error}</p>}
        </section>
      </section>
      {/* Imagem para a tela de fundo da primeira parte */}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
