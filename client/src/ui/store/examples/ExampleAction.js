import {ExampleActionType} from "./ExampleActionType";

const RunExampleAction = ({id, canvas}) => ({
    type: ExampleActionType.RUN_EXAMPLE,
    id: id,
    canvas: canvas,
});

export {RunExampleAction};