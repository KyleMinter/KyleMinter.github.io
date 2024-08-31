import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BioPageContent from './bio_page/BioPageContent';
import PortfolioTabs from './portfolio_page/PortfolioTabs';
import PageFooter from './footers/PageFooter';

function App() {
  return (
    <div className="App bg-primary">

      <div id="bio_page">
        <Container fluid className="min-vh-100 d-flex flex-column px-0 bg-dark text-light">
            <Row className="flex-grow-1">
                <Col className="align-self-center">
                    <BioPageContent/>
                </Col>
            </Row>

            <PageFooter icon={"bi bi-chevron-bar-down"} text={"View Portfolio Below"} link={"#portfolio_tabs"} />
        </Container>
      </div>

      <div id="portfolio_tabs" className="p-5">
        <PortfolioTabs/>
        <PageFooter icon={"bi bi-chevron-bar-up"} text={"Back to the top"} link={"#bio_page"} />
      </div>
    </div>
  );
}

export default App;
