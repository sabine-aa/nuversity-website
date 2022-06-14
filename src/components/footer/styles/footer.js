import styled from 'styled-components'


export const Container = styled.div`
padding:40px 120px;
background:#741327;
`


export const Wrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
max-width:10000px;
margin:0 auto;
margin-right:0px;
`


export const Column = styled.div`
display:flex;
flex-direction:column;
text-align: left;
margin-right:-10px;
`


export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
grid-gap:10px;

@media (max-width:1000px){
    grid-template-columns:repeat(auto-fill, minmax(200px,1fr));
}
`


export const Link = styled.div`
color:#fff;
margin-bottom:20px;
font-size:14px;
text-decoration:none;
cursor: pointer;

&:hover{
    color:#ff9c00;
    transition: 200ms eaase-in;
}
`


export const Title = styled.div`
font-size: 13px;
color:#fff;
margin-right:80px;
margin-bottom:20px;
font-weight:bold;
`