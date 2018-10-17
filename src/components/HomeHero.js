import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Modal from './Modal';
import lang from '../utils/lang';

const Container = styled.section`
  background-color: #78b4e5;
  .title {
    font-weight: ${theme.fontMedium};
    padding-bottom: 3%;
  }
  .subtitle {
    font-weight: ${theme.fontRegular};
  }
  h1 {
    font-size: 2.4rem;
  }
  .columns {
    margin-top: -4.5%;
  }
`;

const Wrapper = styled.div`
  padding-top: 12%;
`;

class HomeHero extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
      platform: '',
    };
  }

  handleClick(e) {
    const { platform } = e.target.dataset;
    console.log(platform);
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked,
      platform,
    });
  }

  render() {
    const { isClicked, platform } = this.state;

    return (
      <React.Fragment>
        <Container className="section">
          <div className="container">
            <Modal
              isClicked={isClicked}
              platform={platform}
              handleClick={this.handleClick}
            />

            <div className="columns">
              <Wrapper className="column is-half">
                <h1 className="title has-text-white has-text-centered-mobile">
                  {lang.heroTitle}
                </h1>
                <h2 className="subtitle is-size-5 has-text-white has-text-weight-light">
                  {lang.heroSubTitle}
                </h2>
              </Wrapper>
              <div className="column">
                <img src="/images/devices.png" alt="devices" />
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeHero;
