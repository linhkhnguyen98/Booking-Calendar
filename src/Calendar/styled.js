import styled from "styled-components";

export const Wrapper = styled.div`
width: 99.5%;
height: 100vh;
border: 1px solid;
margin: 5px;
`;

export const CalendarHead = styled.div`
width: 100%;
height: 6.25vh;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1.75rem;
`;

export const SevenColGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(7, 1fr);
height: 27px;
`;

export const HeadDay = styled.span`
text-align: center;
/* justify-content: space-around; */
background: pink;
font-size: 1.25rem;
`;

export const CalendarBody = styled.div`
height: calc(100% - 27px - 60px);
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(5, 1fr);
`;

// color out the today's date
export const StyledDay = styled.span`
    border: 1px solid;
    text-align: right;
    padding: 5px;
    ${({active}) => active && `background: #efb7b2`}; 
`;

//
export const StyledEvent = styled.span`
    display: grid;
    text-align: center;
    background: ${({bgColor}) => bgColor || 'green'};
    color: white;
    padding: 2px 7px;
    border-radius: 8px;
`;

