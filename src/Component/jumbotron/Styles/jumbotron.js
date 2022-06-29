import style from "styled-components/macro";

export const Item = style.div`
    display:flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;        

`;

export const Inner = style.div`
    align-item:center;
    display:flex;
    flex-direction:${({ direction }) => direction} ;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;
    align-items: center;

@media (max-width: 1000px){
    flex-direction: column
}
`;

export const Pane = style.div`
    width:50%;

@media (max-width: 1000px){
    width: 100%;
    paddig: 0 45px;
    text-align: center;
}
`;

export const Title = style.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;


@media (max-width: 600px){
    font-size: 35px;
}
`;

export const SubTitle = style.h2`
    font-size: 26px;
    font-weight: normal;
    color: #aeaeae;
@media (max-width: 600px){
        font-size: 18px;
}
`;

export const Image = style.img`

max-width: 100%;
height: auto;

`;
