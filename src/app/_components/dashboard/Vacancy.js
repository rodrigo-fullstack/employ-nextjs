import Image from "next/image";
import Article from "../Article";
import Container from "../Container";
import Row from "../Row";
import Title from "../Title";
import Button from "../Button";
import styles from "./Vacancy.module.css";

export default function Vacancy() {
    return (
        <Article className={`vacancy vacancies-container__element ${styles["vacancy"]}`}>
            <Container className={`vacancy__info-container ${styles["vacancy__info-container"]}`}>
                <VacancyHeader />
                <VacancyInfoContent />
            </Container>

            <VacancyActions />

            <span className={`text vacancy__skills ${styles["vacancy__skills"]}`}>
                Competências: PHP, Laravel, React, NextJS, MySQL, SPA, Arquitetura MVC, APIs Rest, Testes com PestPHP, Docker
            </span>

            <VacancyDescription />
        </Article>
    );
}

function VacancyHeader() {
    return (
        <Row className={`vacancy__info-header ${styles["vacancy__info-header"]}`}>
            <Container className={`vacancy__info-logo-container ${styles["vacancy__info-logo-container"]}`}>
                <Image
                    className={`vacancy__info-logo ${styles["vacancy__info-logo"]}`}
                    src="./vacancy-logo.svg"
                    alt="Logo da empresa da vaga"
                    width={50}
                    height={50}
                />
            </Container>
            <Container className={`vacancy__info-title-container ${styles["vacancy__info-title-container"]}`}>
                <Title className={`vacancy__info-title ${styles["vacancy__info-title"]}`}>
                    Desenvolvedor Fullstack Junior PHP
                </Title>
            </Container>
        </Row>
    );
}

function VacancyInfoContent() {
    return (
        <Container className={`vacancy__info-content ${styles["vacancy__info-content"]}`}>
            <a className={`text vacancy__info-company ${styles["vacancy__info-company"]}`} href="#">
                Employ - Encontre a vaga e o candidato perfeito.
            </a>
            <Row className={`text vacancy__info-general ${styles["vacancy__info-general"]}`}>
                <span className={`text vacancy__info-text vacancy__info-local ${styles["vacancy__info-text"]}`}>
                    Salvador/Bahia
                </span>
                <span className={`text vacancy__info-text vacancy__info-local ${styles["vacancy__info-text"]}`}>
                    R$4000,00
                </span>
                <span className={`text vacancy__info-text vacancy__info-applications ${styles["vacancy__info-text"]}`}>
                    Mais de 25 candidatos
                </span>
                <span className={`text vacancy__info-text vacancy__info-presence ${styles["vacancy__info-text"]}`}>
                    Presencial
                </span>
                <span className={`text vacancy__info-text vacancy__info-contract ${styles["vacancy__info-text"]}`}>
                    CLT
                </span>
                <span className={`text vacancy__info-text vacancy__info-time ${styles["vacancy__info-text"]}`}>
                    Data de Publicação: 28/04/2025
                </span>
                <span className={`text vacancy__info-text vacancy__info-time ${styles["vacancy__info-text"]}`}>
                    Expira em: 28/05/2025
                </span>
            </Row>
        </Container>
    );
}

function VacancyActions() {
    return (
        <Row className={`vacancy__actions ${styles["vacancy__actions"]}`}>
            <Button className={`btn--vacancy vacancy__btn ${styles["vacancy__btn"]}`}>
                Candidatar-se
            </Button>

            <Row className={`vacancy__btn-actions ${styles["vacancy__btn-actions"]}`}>
                <span className={`vacancy__btn-action btn--save ${styles["vacancy__btn-action"]}`}>
                    <Image
                        width={32}
                        height={32}
                        src="./bookmark.svg"
                        alt="Botão de salvar: Marcador de livro"
                    />
                </span>
                <span className={`vacancy__btn-action btn--share ${styles["vacancy__btn-action"]}`}>
                    <Image
                        width={32}
                        height={32}
                        src="./share.svg"
                        alt="Botão de salvar: Marcador de livro"
                    />
                </span>
                <span className={`vacancy__btn-action btn--more ${styles["vacancy__btn-action"]}`}>
                    <Image
                        width={32}
                        height={32}
                        src="./more.svg"
                        alt="Botão de salvar: Marcador de livro"
                    />
                </span>
            </Row>
        </Row>
    );
}

function VacancyDescription() {
    return (
        <Container className={`vacancy__description ${styles["vacancy__description"]}`}>
            Busca-se um desenvolvedor fullstack de PHP que esteja disposto a colaborar em um ambiente ágil de desenvolvimento de software para um website de gerenciamento de vagas e candidaturas.
        </Container>
    );
}