import styled from 'styled-components';

export const Button = styled.div`
   position: fixed; 
   opacity:0.6;
   background-color: transparent;
   width: 100%;
   left: 94%;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: hsl(22, 28%, 45%);
   fg-color:transparent;
   transition: color 0.5s, font-size 0.5s, opacity 0.5s ;
   :hover{
      color:hsl(22, 28%, 29%);
      font-size: 3.4rem;
      opacity:0.8;
   }
`
