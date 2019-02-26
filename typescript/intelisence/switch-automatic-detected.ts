interface Action {
    type : string;
}

class Add implements Action {
    readonly type = "Add";
    constructor(public payload : string) {}
}

class RemoveAll implements Action {
    readonly type = "Remove All";
}

export type TodoActions = Add | RemoveAll;

interface ITodoState {
    todos : string[];
}

/**
 * @description díky konstrukci switch typescript automaticky detekuje o jaký object je jedná
 * Pak automaticky napovídá proměnné zvoleného objectu
 * @param {TodoActions} action
 * @param {ITodoState} [state={
 *     todos: []
 * }]
 * @returns {ITodoState}
 */
function todoReducer(action : TodoActions, state : ITodoState = {
    todos: []
}) : ITodoState {
    switch(action.type) {
        case "Add":
            {
                // automaticky detekuje, že je akce instance třídy ADD
                return {
                    todos: [
                        ...state.todos,
                        action.payload
                    ]
                };
            }
        case "Remove All":
            {
                // automaticky detekuje, že je akce instance třídy RemoveAll
                return {todos: []};
            }
        default:
            {
                const x: never  = action;
            }
    }
    return state;
}