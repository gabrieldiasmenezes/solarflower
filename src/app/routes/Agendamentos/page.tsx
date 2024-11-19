'use client'
import Link from 'next/link'
import styles from './Ag.module.css'
import { useState } from 'react';

export default function Agendamentos() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [error, setError] = useState('');
  const [agendamentos, setAgendamentos] = useState<{ data: string, hora: string }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

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

    const novoAgendamento = { data, hora };

    if (editIndex !== null) {
      const updatedAgendamentos = [...agendamentos];
      updatedAgendamentos[editIndex] = novoAgendamento;
      setAgendamentos(updatedAgendamentos);
      setEditIndex(null);
      alert('Agendamento atualizado com sucesso!');
    } else {
      setAgendamentos([...agendamentos, novoAgendamento]);
      alert('Agendamento salvo com sucesso!');
    }

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
      alert('Agendamento encerrado!');
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
              <div key={index} className={styles.agendamentoBox}>
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
