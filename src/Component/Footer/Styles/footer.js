import Style from "styled-components/macro";

export const Container = Style.div`
    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;


@media (max-width: 1000px){
    padding :70px 30px;
}    

`;

export const Row = Style.div`
    display: grid;
    grid-template-columns: repeat(auto-fill ,minmax(178px,1fr));
    grid-gap: 15px;
    
@media (max-width: 1000px){
    grid-template-column: repeat(auto-fill ,minmax(150px,1fr));
    
}    
`;

export const Column = Style.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Title = Style.p`
    color: #757575;
    margin-bottom: 40px;
    font-size: 16px;
`;

export const Link = Style.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;

`;

export const Text = Style.p`
    color: #757575;
    margin-bottom: 40px;
    font-size: 13px;
`;

export const Break = Style.p`
    flex-basis: 100%;
    height: 0;

`;
