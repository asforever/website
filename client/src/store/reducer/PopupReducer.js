const PopupReducer = (state, action) => {
    let newState = {};
    newState.type = action.type;
    newState.data = action.data;
    return newState;
};

export default PopupReducer;

