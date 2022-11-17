export const addToChart = (product) => {
    return {
        type: 'ADD_TO_CHART',
        payload: product
    };
};
export const deleteFromChart = (id) => {
    return {
        type: 'DELETE_FROM_CHART',
        payload: id
    };
};