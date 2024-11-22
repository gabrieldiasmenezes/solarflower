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
  cpf: string;
  cep: string;
  rua: string;
  cidade: string;
  estado: string;
  senha: string;
};

export default function Cadastro() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    cep: '',
    rua: '',
    cidade: '',
    estado: '',
    senha: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // Função para formatar o CEP com hífen
  const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // Formatar o CEP com hífen
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5, 8); // Formata o CEP com hífen
    }

    setFormData((prevState) => ({
      ...prevState,
      cep: value,
      rua: '',
      cidade: '',
      estado: '',
    }));

    // Validar CEP (9 caracteres, com ou sem hífen)
    if (value.length === 9) {
      setLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError('CEP não encontrado');
          setLoading(false);
        } else {
          setFormData((prevState) => ({
            ...prevState,
            rua: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,
          }));
          setLoading(false);
        }
      } catch {
        setError('Erro ao buscar o CEP');
        setLoading(false);
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        rua: '',
        cidade: '',
        estado: '',
      }));
    }
  };

  // Função para validar e enviar os dados
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validação dos campos obrigatórios
    if (
      !formData.nome ||
      !formData.email ||
      !formData.telefone ||
      !formData.cpf ||
      !formData.cep ||
      !formData.rua ||
      !formData.cidade ||
      !formData.estado ||
      !formData.senha
    ) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Validação de CPF (11 dígitos)
    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(formData.cpf)) {
      setError('CPF inválido. Use apenas números com 11 dígitos.');
      return;
    }

    // Validação de Telefone (11 dígitos)
    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      setError('Telefone inválido. Use apenas números com 11 dígitos.');
      return;
    }

    // Validação de CEP (9 caracteres, com ou sem hífen)
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(formData.cep)) {
      setError('CEP inválido. Use o formato 12345-678.');
      return;
    }

    // Validação de Senha (9 caracteres)
    if (formData.senha.length !== 9) {
      setError('A senha deve ter exatamente 9 caracteres.');
      return;
    }

    // Preparando dados para envio no formato correto da API
    const userData = {
      nome: formData.nome,
      documento: formData.cpf,  // "documento" é equivalente ao CPF
      email: formData.email,
      telefone: formData.telefone,
      cep: formData.cep.replace("-", ""),  // Remover o hífen do CEP para envio
      rua: formData.rua,
      cidade: formData.cidade,
      estado: formData.estado,
      senha: formData.senha,
    };

    setLoading(true);

    try {
      // Enviando os dados para a API
      const response = await fetch('/api/GlobalSolution/api/usuarios/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        router.push('Usuario'); // Redireciona para a página do usuário
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
                maxLength={11}
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                required
              />
              <label className={styles.label}>CPF</label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="text"
                maxLength={9}
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
                maxLength={9}
                required
              />
              <label className={styles.label}>Senha</label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>
                {loading ? 'Carregando...' : 'Mandar Cadastro'}
              </button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </section>
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
