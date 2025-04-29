import Article from "../_components/Article";
import Container from "../_components/Container";
import Row from "../_components/Row";
import Vacancy from "../_components/dashboard/Vacancy";
import VacancySelected from "../_components/dashboard/VacancySelected";

function Dashboard() {
    return (<>
        <Container className="vacancies-container">
            <Vacancy />
            <Vacancy />
            <Vacancy />
        </Container>

        <VacancySelected />
    </>);
}

export default function DashboardPage() {
    return (
        <Dashboard />
    )
}

