/** @jsx jsx */
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunfactData } from "@/data";
import { jsx } from "@emotion/react";

import {
  funfact,
  singleFunfact
} from "../assets/styles/FunfactOne.styles";

import {
  commonSection
} from "../assets/styles/layout.styles";

const FunfactOne = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section css={[funfact,commonSection]}>
      <Container>
        <Row>
          {FunfactData.map(({ title, countNumber }, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <div css={singleFunfact} className="text-center">
                <h1>
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? countNumber : 0} />
                  </VisibilitySensor>
                </h1>
                <h3>{title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunfactOne;
