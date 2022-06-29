import style from "styled-components/macro";

export const Container = style.div`
    display: flex;
    justify-content:  center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

 @media (max-width:1000px){
    flex-direction: column;
    align-items: center;
 }   

`;
export const Input = style.input`
    max-width: 450px;
    width: 100%;
    padding: 10px;
    height: 68px;
    box-sizing: border-box
`;
export const Button = style.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    cursor: pointer;
  &:hover{
    background: #f40612;
  }  
  img{
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width:24px;
@media (max-width: 1000px){
    width:16px;
    height: 15px
} 
}       
@media (max-width: 1000px){
    height: 60px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;

}

 
`;
export const Text = style.p`
    color: white;
    font-size: 19px;
    
 @media (max-width: 1000px){
    font-size: 16px;
    line-height: 22px;
 }   
`;
