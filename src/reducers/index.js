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

        const newArray = chartElemetns.filter(e => e.id !== action.payload.id
        )
        return newArray
    }
    else return chartElemetns;
}

const numOfElementsInChart = (numberOfElemets = 0, action) => {
    if (action.type === 'ADD_TO_CHART') {

        return numberOfElemets + 1;
    }
    else return numberOfElemets;
}

export default combineReducers(
    {
        chartElements: chartReducer,
        numOfElementsInChart
    }
)
