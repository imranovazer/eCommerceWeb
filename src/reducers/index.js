import { combineReducers } from "redux";


const chartReducer = (chartElemetns = [], action) => {
    if (action.type === 'ADD_TO_CHART') {
        const checkArray = chartElemetns.filter(e => e.id === action.payload.id
        )
        if (checkArray.length === 0) {
            return [...chartElemetns, action.payload];
        }
        else if (checkArray.length >= 1) {
            const index = chartElemetns.map((e, i) => {
                if (e.id === checkArray[0].id) { return i };

            })
            const newar = chartElemetns;
            newar[index].number = newar[index].number + 1
            return newar;

        }
        else return chartElemetns

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
