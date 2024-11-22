'use client'
import styles from './Usuario.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Usuario() {
  const router = useRouter();

  // Função de logout
  const handleLogout = () => {
    // Limpar dados do usuário armazenados (exemplo com localStorage)
    localStorage.removeItem('userEmail'); // Remove o email do usuário
    localStorage.removeItem('userToken');  // Se houver token de autenticação
    localStorage.removeItem('userData');   // Se houver dados adicionais do usuário

    // Redirecionar para a página principal
    router.push('/'); // A página principal é geralmente a rota '/'
  };

  return (
    <>
      {/* Menu mobile */}
      <Link href={'/'} className={styles.SolarPower2}>SolarFlower</Link>
      <Link href={'/'} className={styles.Logout} onClick={handleLogout}>Logout</Link>
      <Link href={'Agendamentos'} className={styles.Agenda}>Agendar serviço</Link>
      
      {/* Textos na primeira parte da página principal */}
      <section className={styles.pt1}>
        <h1 className={styles.titulo1}>Bem-Vindo à sua página de usuário</h1>
      </section>
      
      {/* Imagem para a tela de fundo da primeira parte */}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bg4.jfif" alt="bg1" />
      
      {/* Box com depoimentos (se necessário, adicione conteúdo aqui) */}
    </>
  );
}
