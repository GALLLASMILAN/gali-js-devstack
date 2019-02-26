interface IRootState {
    userId : string;
    showCompletedOnly : boolean;
    todoTypes : string[];
    iconGrid : string[][];
    linkedEmail : {
        body: string,
        to: string[]
    }
}

type DeepReadonly<T> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>
}
type IReadOnlyState = DeepReadonly<IRootState>;

let state : IReadOnlyState;
    state.showCompletedOnly = true;
    state.userId = "newId";
    state.todoTypes = [];
    state.todoTypes[0] = "diff type";
    state.linkedEmail.body = "hi";
    state.linkedEmail.to.push("john@gmail.com");
    state.linkedEmail.to = state.linkedEmail.to.map(toItem => toItem.toUpperCase())