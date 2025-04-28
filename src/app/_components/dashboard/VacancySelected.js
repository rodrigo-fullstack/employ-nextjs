import Image from "next/image"
import Article from "../Article"
import Container from "../Container"
import Row from "../Row"
import Title from "../Title"
import Button from "../Button"

export default function VacancySelected() {
    return (
        <Article className="vacancy-selected-container">
            <Container className="vacancy__info-container">
                <VacancyHeader />
                <VacancyInfoContent />


            </Container>

            <VacancyActions />

            <span className="text vacancy__skills">
                Competências: PHP, Laravel, React, NextJS, MySQL, SPA, Arquitetura MVC, APIs Rest, Testes com PestPHP, Docker
            </span>

            <VacancyDescription />
        </Article >
    )
}


function VacancyHeader() {
    return (
        <Row className="vacancy__info-header">
            <Container className="vacancy__info-logo-container">
                <Image
                    className="vacancy__info-logo"
                    src="./vacancy-logo.svg"
                    alt="Logo da empresa da vaga"
                    width={50}
                    height={50}
                />
            </Container>
            <Container className="vacancy__info-title-container">
                <Title className="vacancy__info-title">
                    Desenvolvedor Fullstack Junior PHP
                </Title>
            </Container>
        </Row>)
}

function VacancyInfoContent() {
    return (

        <Container className="vacancy__info-content">
            <a className="text vacancy__info-company" href="#">Employ - Encontre a vaga e o candidato perfeito.</a>
            <Row className="text vacancy__info-general">
                <span className="text vacancy__info-text vacancy__info-local">Salvador/Bahia</span>

                <span className="text vacancy__info-text vacancy__info-local">R$4000,00</span>

                <span className="text vacancy__info-text vacancy__info-applications">Mais de 25 candidatos</span>

                <span className="text vacancy__info-text vacancy__info-presence">Presencial</span>

                <span className="text vacancy__info-text vacancy__info-contract">CLT</span>

                <span className="text vacancy__info-text vacancy__info-time">Data de Publicação: 28/04/2025</span>

                <span className="text vacancy__info-text vacancy__info-time">Expira em: 28/05/2025</span>
            </Row>
        </Container>
    )
}

function VacancyActions() {
    return (
        <Row className="vacancy__actions">
            <Button className="btn--vacancy vacancy__btn">
                Candidatar-se
            </Button>

            <Row className="vacancy__btn-actions">
                <span className="vacancy__btn-action btn--save">
                    <Image
                        width={32}
                        height={32}
                        src="./bookmark.svg"
                        alt="Botão de salvar: Marcador de livro"
                    />
                </span>

                <span className="vacancy__btn-action btn--share">
                    <Image
                        width={32}
                        height={32}
                        src="./share.svg"
                        alt="Botão de salvar: Marcador de livro"
                    />
                </span>

                <span className="vacancy__btn-action btn--more">
                    <Image
                        width={32}
                        height={32}
                        src="./more.svg"
                        alt="Botão de salvar: Marcador de livro"
                    />
                </span>
            </Row>
        </Row>
    )
}

function VacancyDescription() {
    return (
        <Container className="vacancy__description-container">

            <Title className="vacancy__description-title">
                Sobre a Vaga
            </Title>
            <p class="vacancy__description">Busca-se um desenvolvedor fullstack de PHP que esteja disposto a colaborar em um ambiente ágil de desenvolvimento de software para um website de gerenciamento de vagas e candidaturas.</p>
        </Container>
    )
}