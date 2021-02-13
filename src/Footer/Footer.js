import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Col_3,
  Title,
  NavLink,
  Ul,
  Copyright,
  CopyText
} from "./FooterElements";
import { title, navData } from "./FooterNavData";
import { FaCheck } from "react-icons/fa";
import Follow from './Follow';
import Bank_Apps from './Payments';

const Footer = () => {
 const date = new Date().getFullYear()

  return (
    <Wrapper>
      <Container>
        <Row>
          { title.map((data, indx) => {
            return (
              <Col_3 key={indx}>
                <Title>{ data.title }</Title>
                <Ul>
                  { navData.map((data, indx) => {
                    return (
                      <li key={indx}>
                        <FaCheck style={{ marginRight: "5px", fontSize: '12px' }} />
                        <NavLink to="/"> { data.item } </NavLink>
                      </li>
                    );
                  })}
                </Ul>
              </Col_3>
            );
          })}
        </Row>

        {/* Follow us */}
        <Follow />

        { /* Bank and apps */ }
        <Bank_Apps />
      </Container>
      { /* Copyright  */ }
      <Copyright>
        <CopyText>Copyright © {new Date().getFullYear()}, HM WEDDINGS. All Rights Reserved</CopyText>
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
