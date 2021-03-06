import style from "styled-components";
import { Link } from "react-router-dom";
export const Container = style.div`
    display:flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgb(0 0 0 / 75%);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;

`;
export const Base = style.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%


`;
export const Error = style.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;



`;
export const Title = style.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px

`;
export const Text = style.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500px;

`;
export const Textsmall = style.p`
    margin-top: 10px;
    color: #8c8c8c;
    font-size: 13px;
    line-height: normal;
    

`;
export const NavLink = style(Link)`
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        
    }
`;
export const Input = style.input`
    background : #333 ;
    border-radius : 4px ;
    border : 0 ;
    color : white ;
    height : 50px ;
    line-height : 50px ;
    padding : 5px 20px ;
    margin-bottom : 20px ;


    &:last-of-type {
    margin-bottom : 30px ;
}

`;
export const Submit = style.button`
    background : #e50914 ;
    border-radius : 4px ;
    font-size : 16px ;
    font-weight : bold ;
    margin : 24px 0 12px ;
    padding : 16px ;
    border : 0 ;
    color : white ;
    cursor : pointer ;


    &:disabled {
    opacity : 0.5 ;
    }

`;
