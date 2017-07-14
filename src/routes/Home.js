import React from 'react';
import {connect} from 'react-redux';
import DonutChart from "../components/donutMorrisChart";
import BarChart from "../components/rubixBarChart";
import * as actions from "../redux/actions";

import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
    Button
} from '@sketchpixy/rubix';

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            melhoresLivros: {
                primeiro: "Harry Podre",
                segundo: "IT",
                terceiro: "Fodase"
            },
            nome: ["Gustavo", "Leonardo", "Diego", "Junior", "Edvaldo", "Elaine", "Paulo"]
        }
    }


    a() {
        this.setState({
            melhoresLivros: {
                ...this.state.melhoresLivros,
                terceiro: "Fodase2"
            },
            nome: [...this.state.nome.concat("Nichollas")]
        });
    }

    c() {
        let t = this.state.nome;
        t.push("Nichollas");
        this.setState({
            melhoresLivros: {
                terceiro: "Fodase2"
            },
            nome:t
        });
    }

    componentDidMount() {
        this.props.fetchDataDonut('http://localhost:3000/donutMorrisChart');
        this.props.fetchDataRubixBar('http://localhost:3000/rubixBarChart');
    }


    render() {
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <h6>{
                                        this.state.nome
                                    }
                                    </h6>
                                    <ul>
                                        <li>
                                            {this.state.melhoresLivros.primeiro}
                                        </li>
                                        <li>
                                            {this.state.melhoresLivros.terceiro}
                                        </li>
                                    </ul>


                                </Col>
                            </Row>
                            <Button onClick={this.a.bind(this)} bsStyle="primary">CERTO</Button>
                            <Button onClick={this.c.bind(this)} bsStyle="danger">ERRADO</Button>
                            <Row>
                                <Col xs={6}>
                                    <DonutChart
                                    id="chart-actvations"
                                    colors={['#56CBF9', '#00A7E1', '#23C9FF']}
                                    data={this.props.donutChartMorris.data}
                                    formatterReturn='Ativações'
                                    onClick={() => this.props.updateBar(this.props.rubixBarChart.data)}
                                    />

                                </Col>
                                <Col xs={6}>
                                    <BarChart
                                    tooltipColor="#EAF2EF"
                                    serieName="Origem"
                                    serieColor="#00A7E1"
                                    id="origin-actvations"
                                    height={250}
                                    subTitle="Neste Mês"
                                    data={this.props.rubixBarChart.data}
                                    />

                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        donutChartMorris: state.donutChartMorris,
        rubixBarChart: state.rubixBarChart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataDonut: (API_URL) => {
            dispatch(actions.fetchDataDonut(API_URL));
        },
        fetchDataRubixBar: (API_URL) => {
            dispatch(actions.fetchDataRubixBar(API_URL));
        },
        updateBar :(lista) =>
    {
        dispatch(actions.alteraOsDados(lista));
    }
    }
}

const TutorialContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default TutorialContainer;
