import React, {useContext, useReducer, createContext, useRef} from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 실행하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: false
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    }
];

function todoReducer(state, action) {
    switch (action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                    todo.id == action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        // context 변경 사항을 자손들에게 제공할 수 있다. 
        // Provider의 Value는 하위의 모든 consumer에서 사용할 수 있으며,
        // Provider 하위의 모든 Consumer는 Provider의 value가 변경 될 때마다 재렌더링 된다.
        <TodoStateContext.Provider value={state}> 
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}