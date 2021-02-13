import styled from "styled-components";
import footer_img from '../IMG/footer.jpg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  background: rgba(111,47,65,0.83) ;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 15px;
`;

export const Row = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
 
 @media(max-width: 800px){
  flex-direction: column;
 }
`;

export const Col_3 = styled.div`
 margin-top: 1rem;
 color: #fff;
 width: 25%;
`;

export const Title = styled.h3`
 margin-bottom: 5px;
`

export const Ul = styled.ul`
 
`

export const NavLink = styled(Link)`
 text-decoration: none;
 color: #fff;
 font-size: 13px;
`

// Copyright

export const Copyright = styled.div`
 width: 100%;
 background: #693b52;
 display: flex;
 align-items: center;
 padding: 0.5rem 0;
 justify-content: center;
`

export const CopyText = styled.p`
 text-align: center;
 font-size: 14px;
 font-weight: bold;
 color: #fff;
`
