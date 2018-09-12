import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  background-color: #f7f7f7;
  padding-top: 5rem;
  padding-bottom: 4rem;
  h1 {
    margin-bottom: 1em !important;
    color: ${theme.textColorBlack};
  }
  p {
    margin-bottom: 2em !important;
    color: ${theme.textColorBlack};
  }
`;

const Vision = () => (
  <Container className="section">
    <div className="container">
      <div className="content is-size-5">
        <p>
          DexLab is an open source infrastructure with an array of added value
          financial technology services to foster global adoption of
          cryptocurrencies while preserving the original cypherpunk,
          decentralized ethos.
        </p>
        <p>
          We are international group of developers and designers, working to
          accelerate the adoption of the blockchain technology by shipping great
          products.
        </p>
        <h1>Vision</h1>
        <p>
          We want to empower all people in the world with a fairer, more
          inclusive and more independent financial system.
        </p>
        <p>
          We believe no-one should be left behind, regardless of age, gender,
          social status, beliefs or opinions.
        </p>
        <p>
          We imagine a future, in which each individual will have the economic
          freedom he/she deserves. A future with less worry and more financial
          control.
        </p>
        <p>
          To achieve this, we need to make our services 10 times more
          transparent, secure and easier in comparison to how they are today.
        </p>
        <p>
          We need our products to be a joy to use. <br />
          We need to support our users in any language and channel.<br />
          We need to educate a new generation of free citizens and empower them
          to exchange any form of value digitally.
        </p>
        <p>
          We believe in the values of blockchain and decentralisation as the
          base for a more open and just society.
        </p>
      </div>
    </div>
  </Container>
);

export default Vision;
