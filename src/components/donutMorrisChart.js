/**
 * Created by gusta on 7/13/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

class DonutChart extends React.PureComponent {

    constructor(props) {
        super(props);

    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        this.mountChart();
    }


    corrigiRenderizacaoDoGrafico() {
        Morris.Donut.prototype.resizeHandler = function () {
            this.timeoutId = null;
            if (this.el && this.el.width() > 0 && this.el.height() > 0) {
                this.raphael.setSize(this.el.width(), this.el.height());
                return this.redraw();
            }
            else return null;
        };
        Morris.Donut.prototype.setData = function (data) {
            let row;
            this.data = data;
            this.values = (function () {
                let _i, _len, _ref, _results;
                _ref = this.data;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    row = _ref[_i];
                    _results.push(parseFloat(row.value));
                }
                return _results;
            }).call(this);
            if (this.el && this.el.width() > 0 && this.el.height() > 0) {
                return this.redraw();
            }
            else return null;
        };

        Morris.Donut.prototype.setLabels = function(label1, label2) {
            let inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
            inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
            maxWidth = 1.8 * inner;
            maxHeightTop = inner / 2;
            maxHeightBottom = inner / 3;
            this.text1.attr({
                text: label1,
                transform: ''
            });
            text1bbox = this.text1.getBBox();
            text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
            if (isNaN(text1scale) || text1scale === "-Infinity") {
                text1scale = "0.0";
            }
            this.text1.attr({
                transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
            });
            this.text2.attr({
                text: label2,
                transform: ''
            });
            text2bbox = this.text2.getBBox();
            text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
            if (isNaN(text2scale) || text2scale === "-Infinity") {
                text2scale = "0.0";
            }
            let t = {
                transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
            };
            return this.text2.attr(t);
        };
    }

    mountChart() {
        let configGraph = {
            element: this.props.id,
            data: this.props.data,
            formatter: (y) => {
                return `${y} ${this.props.formatterReturn}`
            },
            resize: true,
        }
        if (this.props.colors) {
            configGraph.colors = this.props.colors;
        }

        if (this.props.onClick === undefined) {
            Morris.Donut(configGraph);
        } else {
            Morris.Donut(configGraph).on('click', this.props.onClick);
        }
        this.corrigiRenderizacaoDoGrafico();
    }



    render() {
        return (
            <div className="container-chart-js">
                <div id={this.props.id} className="chart-container" style={{cursor: 'pointer'}}/>
            </div>
        );
    }

}

DonutChart.defaultProps = {
    id: null,
    formatterReturn: '%',
    onClick: undefined,
    colors: []
};

DonutChart.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick : PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string)
};

export default DonutChart
