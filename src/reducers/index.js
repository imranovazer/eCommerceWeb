import { combineReducers } from "redux";


const chartReducer = (chartElemetns = [], action) => {
    if (action.type === 'ADD_TO_CHART') {
        var isExist = false;
        chartElemetns.forEach(e => {

            if (e.id === action.payload.id) {
                isExist = true;
            }
        });
        if (!isExist) {
            return [...chartElemetns, action.payload]
        }
        else if (isExist) {
            var newArray = chartElemetns;
            return newArray.map(e => e.id === action.payload.id ? { ...e, number: e.number + 1 } : e);
        }

    }
    else if (action.type = "DELETE_FROM_CHAR") {

        var number = 0;
        chartElemetns.forEach(e => {

            if (e.id === action.payload) {
                number = e.number;
            }
        });
        if (number === 1) {
            return chartElemetns.filter(e => e.id !== action.payload)
        }
        else if (number > 1) {

            return chartElemetns.map(e => e.id === action.payload ? { ...e, number: e.number - 1 } : e);
        }
        else {
            return chartElemetns
        }
    }
    else return chartElemetns;
}

const numOfElementsInChart = (numberOfElemets = 0, action) => {
    if (action.type === 'ADD_TO_CHART') {

        return numberOfElemets + 1;
    }
    else if (action.type === 'DELETE_FROM_CHAR') {
        return numberOfElemets - 1;
    }
    else return numberOfElemets;
}

export default combineReducers(
    {
        chartElements: chartReducer,
        numOfElementsInChart
    }
)
