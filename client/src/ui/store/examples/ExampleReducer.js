import {ExampleActionType} from "./ExampleActionType";
import {cmdMgr} from "../state";
import RunExampleCmd from "../../../app/cmd/RunExampleCmd";

const ExampleReducer = (state = {}, action) => {
    if (ExampleActionType.RUN_EXAMPLE === action.type) {
        cmdMgr.exec(new RunExampleCmd(action.id, action.canvas));
        return state;
    }
    return state;

};

export default ExampleReducer;

