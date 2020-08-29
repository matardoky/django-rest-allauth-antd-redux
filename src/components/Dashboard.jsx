import React from 'react' 
import { Row, Col} from 'antd'
import {Link} from 'react-router-dom'


class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="section-parameters">
                <Row gutter={[16, 24]} className="row-parameters">
                    <Col className="gutter-row" span={8}>
                        <Link to='/lieu-de-consultation'>
                          <h4>Lieu de consultation</h4>
                          <p>Gérez les informations du lieu de consultation</p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link to='/'>
                           <h4>Agenda</h4>
                           <p>Paramétrez les caractéristiques de vos agendas </p>
                        </Link>
                    </Col>
               

                    <Col className="gutter-row" span={8}>
                        <Link  to='/'>
                            <h4>RDV Internet</h4>
                            <p>Activez en un clic la réservation en ligne</p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link to='/' >
                            <h4>Statistiques</h4>
                            <p>Consultez les principales statistiques des RDV</p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link  to='/'>
                            <h4>Remplacants</h4>
                            <p>Gérez la liste de vos remplacents ou collaborateurs</p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link to='/'>
                            <h4>Autres rubriques</h4>
                            <p>Accédez aux paramétres avancés</p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link to='/' >
                            <h4>Consignes patient</h4>
                            <p>Informez les patients aux momentx clés de la prise de RDV et des rappels </p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link to='/'>
                            <h4>Motif de consultation</h4>
                            <p>Personnalisez les motifs de consultation pour tous vos agendas</p>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link to='/users'>
                            <h4>Utilisateurs</h4>
                            <p>Créez des utilisateurs er gérez leurs niveaux d'accées à vos agendas</p>
                        </Link>
                    </Col>
                 
                   
                </Row>
                </div>

            </React.Fragment>
        )

    }
    
}

export default Dashboard