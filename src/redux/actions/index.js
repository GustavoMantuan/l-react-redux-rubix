import fetchDataDonut from "./donutMorrisChart"
import fetchDataRubixBar from "./rubixBarChart"

module.exports = {
    ...fetchDataDonut,
    ...fetchDataRubixBar
};
