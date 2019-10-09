import ActionType from "./ActionType";

export const Test = ({id}) => ({
    type: ActionType.TEST,
    id: id,
});
