'use client';
import Link from 'next/link';
import styles from './Ag.module.css';
import { useState, useEffect } from 'react';

export default function Agendamentos() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [error, setError] = useState('');
  const [agendamentos, setAgendamentos] = useState<{
    data: string, hora: string, id: number;
  }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(''); // Definir o estado para email

  useEffect(() => {
    // Verificar se o código está sendo executado no lado do cliente
    if (typeof window !== 'undefined') {
      // Recuperar o email e os agendamentos do localStorage no cliente
      const userEmail = localStorage.getItem('userEmail');
      setEmail(userEmail);
      
      const storedAgendamentos = localStorage.getItem('agendamentos');
      if (storedAgendamentos) {
        setAgendamentos(JSON.parse(storedAgendamentos));
      }
    }
  }, []);

  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const isValidTime = (time: string): boolean => {
    const [hours, minutes] = time.split(':').map(Number);
    return (
      (hours > 7 || (hours === 7 && minutes >= 0)) &&
      (hours < 17 || (hours === 17 && minutes <= 30))
    );
  };

  const isValidDate = (date: string): boolean => {
    const [year, month, day] = date.split('-').map(Number);
    const currentYear = new Date().getFullYear();

    if (year !== currentYear) return false;
    if (month < 1 || month > 12) return false;

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day > 0 && day <= daysInMonth[month - 1];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'data') {
      setData(value);
    } else if (name === 'hora') {
      setHora(value);
    }
  };

  const handleAgendamentoSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!data || !hora) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!isValidDate(data)) {
      setError('Data inválida. Verifique se a data é válida para o mês e ano atual.');
      return;
    }

    if (!isValidTime(hora)) {
      setError('Horário indisponível. Agendamentos são permitidos entre 07h00 e 17h30.');
      return;
    }

    const novoAgendamento = {
      data,
      hora,
      id: editIndex !== null ? agendamentos[editIndex].id : new Date().getTime(), // Usar timestamp como ID
    };

    if (editIndex !== null) {
      // Atualizar o agendamento existente
      const updatedAgendamentos = [...agendamentos];
      updatedAgendamentos[editIndex] = novoAgendamento;
      setAgendamentos(updatedAgendamentos);
      setEditIndex(null);
      alert('Agendamento atualizado com sucesso!');
    } else {
      // Adicionar o novo agendamento
      setAgendamentos([...agendamentos, novoAgendamento]);
      alert('Agendamento salvo com sucesso!');
    }

    // Salvar no localStorage
    localStorage.setItem('agendamentos', JSON.stringify([...agendamentos, novoAgendamento]));

    // Limpa os campos e erro
    setData('');
    setHora('');
    setError('');
  };

  const handleEdit = (index: number) => {
    const agendamento = agendamentos[index];
    setData(agendamento.data);
    setHora(agendamento.hora);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const confirmed = confirm('Tem certeza de que deseja deletar este agendamento?');
    if (confirmed) {
      const updatedAgendamentos = agendamentos.filter((_, i) => i !== index);
      setAgendamentos(updatedAgendamentos);

      // Atualizar o localStorage
      localStorage.setItem('agendamentos', JSON.stringify(updatedAgendamentos));
      alert('Agendamento removido com sucesso!');
    }
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
                type="email"
                name="email"
                value={email || ''}
                readOnly
              />
              <label className={styles.label} htmlFor="email">
                Email
              </label>
            </div>
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
              <button type="submit" className={styles.button}>
                {editIndex !== null ? 'Atualizar' : 'Agendar'}
              </button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </section>

      {agendamentos.length > 0 && (
        <section className={styles.historico}>
          <h4>Histórico de Agendamentos:</h4>
          <div className={styles.agendamentosContainer}>
            {agendamentos.map((agendamento, index) => (
              <div key={agendamento.id} className={styles.agendamentoBox}>
                <p><strong>Data:</strong> {agendamento.data}</p>
                <p><strong>Hora:</strong> {agendamento.hora}</p>
                <div className={styles.actions}>
                  <button
                    onClick={() => handleEdit(index)}
                    className={styles.editButton}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className={styles.deleteButton}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
    </>
  );
}
