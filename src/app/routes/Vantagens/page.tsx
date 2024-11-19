'use client'
import Link from "next/link"
import { useState } from "react"
import styles from './Vantagens.module.css'
import WatsonChat from './WatsonChat'
export default function Vantagens(){
    const [menu,setMenu]=useState(false)
    const mostra=()=>{setMenu(true)}
    const fecha=()=>{setMenu(false)}
    return(
        <>
        <WatsonChat/>
            {/* Menu mobile */}
            {menu && (
        <section className={`${styles.MenuM} ${styles.mostrar}`}>
        <button className={styles.Fechar} onClick={fecha}>x</button>
        <Link href={"https://github.com/gabrieldiasmenezes/solarflower"} className={styles.githubG}><img className={styles.githubG} src="/github.jfif" alt="GitHub"  /></Link>
        <Link href={"Login"} className={styles.loginL}>Login</Link>
        <Link href={"Produtos"} className={styles.linkL}>Produtos</Link>
        <Link href={"ET"} className={styles.linkL2}>Especificações Técnicas</Link>
            <Link href={"Vantagens"} className={styles.linkL2}>Vantagens</Link>
        <Link href={"Depoimentos"} className={styles.linkL}>Depoimentos</Link>
        <Link href={"Integrantes"} className={styles.linkL}>Integrantes</Link>
        <Link href={"Contato"} className={styles.linkL}>Contato</Link>
        </section> 
        )}
        <Link href={'/'} className={styles.SolarPower2}>SolarFlower</Link>
        <ul onClick={mostra} className={styles.Menu}>
            <li>_____</li>
            <li>_____</li>
            <li>_____</li>
        </ul>
        {/* Menu para desktop e tablet */}
        <header className={styles.cabecalho}>
        <Link href={'/'} className={styles.SolarPower}>SolarFlower</Link>
        <ul className={styles.Link}>
            <Link href={"Produtos"} className={styles.link}>Produtos</Link>
            <Link href={"Depoimentos"} className={styles.link}>Depoimentos</Link>
            <Link href={"Integrantes"} className={styles.link}>Integrantes</Link>
            <Link href={"Contato"} className={styles.link}>Contato</Link>
        </ul>
        
        <Link href={"Login"} className={styles.login}>Login</Link>
        <Link href={"https://github.com/gabrieldiasmenezes/solarflower"} className={styles.github}><img src="/github.jfif" alt="GitHub"  /></Link>
        </header>
        <header className={styles.cabecalho2}>
        <ul className={styles.Link2}>
            <Link href={"ET"} className={styles.link2}>Especificações Técnicas</Link>
            <Link href={"Vantagens"} className={styles.link2}>Vantagens</Link>
        </ul>
        </header>
        {/*Box com as especificações técnicas de cada um dos modelos */}
        <section className={styles.boxET}>
        {/*Box com as especificações técnicas Solar Power + */}
            <section className={styles.ETP}>
                <h1 className={styles.SP}>Solar Power</h1>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Planejamento e Instalação</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Entregue como um sistema completo e tudo em um</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Vem pré-montado e pode ser instalado entre 4 a 5 horas</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Cabo CA único para conexão residencial</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Pode ser realocado ao mudar de casa</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Revendável a qualquer momento</li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Eficiência</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>A ventilação aberta proporciona resfriamento, resultando em maior produção</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Quando os painéis são dobrados, escovas integradas varrem sedimentos e detritos</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Os painéis solares seguem o sol de forma autônoma durante todo o dia para produção máxima de energia, gerando até 40% mais energia</li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Estética</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Declaração icônica e bela em prol das energias renováveis</li>
                        <li className={styles.borda}></li>
                        <li className={styles.itemV}>Design escultural e atemporal</li>
                        <li className={styles.borda}></li>
                        <li className={styles.itemV}>Inspirador, opções de cores disponíveis</li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Segurança</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>O monitoramento constante detecta ventos fortes, os painéis fecham imediatamente em posição de segurança e se limpam automaticamente após uma tempestade</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Smartflower estará seguro em caso de incêndio em casa</li>
                    </ul>
                </section>       
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Requisitos</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>As opções de localização são vastas</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Pode ser facilmente instalado em terrenos alugados ou próprios</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Permissões locais necessárias</li>
                    </ul>
                </section>       
            </section>
            <h1 className={styles.X}>X</h1>
            {/*Box com as especificações técnicas Solar Power Minun*/}
            <section className={styles.ETP}>
                <h1 className={styles.SP}>Painel Solar Tradicional</h1>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Planejamento e Instalação</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Entregue em vários componentes e etapas de instalação que exigem montagem em campo</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Pode levar um mês ou mais</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Requer cabeamento especial instalado na casa</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Fixado permanentemente ao telhado com muitas penetrações, possivelmente impactando a integridade do telhado</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Componente inseparável da casa, precisa ser removido para refazer o telhado</li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Eficiência</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>A acumulação de calor pode resultar em perda de rendimento de até 5-10%</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Sedimentos acumulados (poeira, folhas, neve, gelo, etc.) resultam em perda de rendimento de até 5%</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Os raios solares ficam no ângulo ideal apenas por um curto período de tempo, resultando em produção limitada de energia</li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Estética</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Presença dominante e desajeitada</li>
                        <li className={styles.borda}></li>
                        <li className={styles.itemV}>Altera a aparência da casa ou dos arredores</li>
                        <li className={styles.borda}></li>
                        <li className={styles.itemV}>Inspirador, opções de cores disponíveis</li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Segurança</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Painéis de telhado podem criar riscos em caso de incêndio em casa</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Exposto aos elementos do clima e danos causados ​​por tempestades</li>
                    </ul>
                </section>       
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Requisitos</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Requer superfície de telhado, integridade estrutural adequada, declive de telhado elegível com orientação adequada ao sol</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Deve possuir propriedade para ser instalado no telhado</li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Permissões locais necessárias</li>
                    </ul>
                </section>       
            </section>
        </section>
        <section className={styles.degrade}></section>
        {/*Box de Informacão sobre agendamento */}
        <section className={styles.box4}>
      <h1 className={styles.titulo6}>Reserve o seu Hoje</h1>
      <section className={styles.agenda}>
        <section className={styles.agenda1}>
          <h1 className={styles.tituloA}>Escolha o seu Modelo</h1>
          <p className={styles.textoA}>Escolha o modelo do seu solar flower</p>
        </section>
        <section className={styles.agenda1}>
          <h1 className={styles.tituloA}>Agende sua visita</h1>
          <p className={styles.textoA}>escolha a data e horário para a visita técnica</p>
        </section>
        <section className={styles.agenda1}>
          <h1 className={styles.tituloA}>Fique atento(a)</h1>
          <p className={styles.textoA}>enviaremos um email com todas as informações nescessárias</p>
        </section>
      </section>
      <section className={styles.bt3}>
        <p className={styles.bt4}>Reserve pelo chat !!</p>
      </section>
    </section>
    {/*Rodapé*/}
    <footer className={styles.Rodape}>
      <h1 className={styles.titulo7}>Solar Power</h1>
      <ul className={styles.LinkR}>
        <h2 className={styles.tituloR}>Links Rápidos</h2>
        <Link className={styles.linkR} href={'/'}>Home</Link>
        <Link className={styles.linkR} href={'Produtos'}>Produto</Link>
        <Link className={styles.linkR} href={'Depoimentos'}>Depoimento</Link>
        <Link className={styles.linkR} href={'Integrantes'}>Integrantes</Link>
        <Link className={styles.linkR} href={'Contato'}>Contato</Link>
      </ul>
      <ul className={styles.LinkR}>
        <h2 className={styles.tituloR}>Produtos</h2>
        <Link className={styles.linkR} href={'Produtos'}>Visão Geral</Link>
        <Link className={styles.linkR} href={'ET'}>Especificações Técnicas</Link>
        <Link className={styles.linkR} href={'Vantagens'}>Vantagens</Link>
      </ul>
      <ul className={styles.LinkR}>
        <h2 className={styles.tituloR}>Empresa</h2>
        <Link className={styles.linkR} href={'Integrantes'}>Integrantes</Link>
        <Link className={styles.linkR} href={'Contato'}>Contato</Link>
      </ul>
    </footer>
        </>
    )
}