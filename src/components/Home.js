import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        decription="Order Online For Touchless Delivery"
      />
      <Section
        title="Model Y"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        decription="Order Online For Touchless Delivery"
      />
      <Section
        title="Model 3"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        decription="Order Online For Touchless Delivery"
      />
      <Section
        title="Model X"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        decription="Order Online For Touchless Delivery"
      />

      <Section
        title="Lowest Cost Solar Panels in Americor"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        decription="Money-Back guarantee"
      />

      <Section
        title="Solar for New Roofs"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        decription="Money-Back guarantee"
      />

      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        decription="Accessories for u guy"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
