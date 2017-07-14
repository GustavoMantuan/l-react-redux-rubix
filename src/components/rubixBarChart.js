/**
 * Created by gusta on 7/13/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

class RubixBarChart extends React.PureComponent {


    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //   this.mountChart();
    // }

    componentDidUpdate(prevProps, prevState, prevContext) {
        this.mountChart();
    }


    mountChart(){
        let chart = new Rubix(`#${this.props.id}`, {
            height: this.props.height,
            title: this.props.title,
            subtitle: this.props.subTitle,
            titleColor: this.props.titleColor,
            subtitleColor: this.props.subtitleColor,
            axis: {
                x: {
                    // label:'teste',
                    type: 'ordinal',
                },
                y: {
                    //label:'est22',
                    type: 'linear',
                    tickFormat: 'd'
                }
            },
            tooltip: {
                color: this.props.tooltipColor,
                format: {
                    y: '.0f'
                }
            },

            grouped: true,
            show_markers: true
        });

        let bar = chart.column_series({
            name: this.props.serieName,
            color: this.props.serieColor
        });
        bar.addData(this.props.data);

    }

    render() {
        return (
            <div className="container-chart-js">
                <div id={this.props.id}/>
            </div>
        );
    }
}

RubixBarChart.propTypes = {
    id: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    serieName: PropTypes.string.isRequired,
    serieColor: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    titleColor: PropTypes.string,
    subtitleColor: PropTypes.string,
    tooltipColor: PropTypes.string

}

export default RubixBarChart

