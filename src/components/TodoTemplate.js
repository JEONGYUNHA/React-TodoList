import React from 'react';
import styled from 'styled-components';

// TodoList의 Layout을 설정하는 컴포넌트
const TodoTemplateBlock = styled.div` 
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

    /* 위치를 페이지 중앙에 설정*/
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column; /*위에서 아래로 정렬*/
`;

function TodoTemplate({children}){
    console.log(children[0]);
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate