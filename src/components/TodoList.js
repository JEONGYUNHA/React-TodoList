import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from '../components/TodoContext';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

// 할 일에 대한 정보가 들어있는 todos 배열을 내장 함수 map을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링
function TodoList(){

    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;