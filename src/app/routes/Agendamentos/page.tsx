'use client'
import Link from 'next/link'
import styles from './Ag.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Agendamentos() {
  // Estados para armazenar os dados do formulário e o histórico de agendamentos
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [error, setError] = useState('');
  const [agendamentos, setAgendamentos] = useState<{ data: string, hora: string }[]>([]);

  // Função para lidar com a mudança de valores de data e hora
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'data') {
      setData(value);
    } else if (name === 'hora') {
      setHora(value);
    }
  };

  // Função para validar e enviar o formulário
  const handleAgendamentoSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Impede o comportamento padrão de envio de formulário

    // Validação dos campos de data e hora
    if (!data || !hora) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Adiciona o agendamento ao histórico
    const novoAgendamento = { data, hora };
    setAgendamentos([...agendamentos, novoAgendamento]);

    // Limpa os campos após o envio
    setData('');
    setHora('');

    // Mostra o alerta com a confirmação
    alert('Agendamento salvo com sucesso!');

    // Limpa o erro, caso haja
    setError('');
  };

  return (
    <>
      <section className={styles.boxForm}>
        <Link href={'/'} className={styles.Menu}>
          Menu Principal
        </Link>
        <section className={styles.background}>
          <h3 className={styles.titulo}>Agendamentos</h3>
          <form onSubmit={handleAgendamentoSubmit} className={styles.formulario}>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="date"
                name="data"
                value={data}
                onChange={handleInputChange}
              />
              <label className={styles.label} htmlFor="data">
                Data
              </label>
            </div>
            <div className={styles.linhas}>
              <input
                className={styles.input}
                type="time"
                name="hora"
                value={hora}
                onChange={handleInputChange}
              />
              <label className={styles.label} htmlFor="hora">
                Hora
              </label>
            </div>
            <div className={styles.botao}>
              <button type="submit" className={styles.button}>Agendar</button>
            </div>
            <p className={styles.cad}>
              Já tem um <Link className={styles.link} href={'Cadastro'}>cadastro</Link>?
            </p>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </section>

      {/* Histórico de agendamentos */}
      {agendamentos.length > 0 && (
        <section className={styles.historico}>
          <h4>Histórico de Agendamentos:</h4>
          <div className={styles.agendamentosContainer}>
            {agendamentos.map((agendamento, index) => (
              <div key={index} className={styles.agendamentoBox}>
                <p><strong>Data:</strong> {agendamento.data}</p>
                <p><strong>Hora:</strong> {agendamento.hora}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Imagem para a tela de fundo da primeira parte */}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
