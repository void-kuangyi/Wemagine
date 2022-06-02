import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

async function getIpClient(buttonid) {
  try {
    await axios.get('https://api.ipify.org?format=json').then(response => tracking(response.data.ip, buttonid));



  } catch (error) {
    tracking("iperror", buttonid);
    console.error(error);
  }
}



function tracking(ip, buttonid) {

  let body = {
    ip: ip,
    buttonid: buttonid,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  axios
    .post("https://api.niekmuijs.nl/create", body)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
}



const StyledDivider = styled.hr`
  border-top: 1px solid #d1d5db;
  margin-top: 45px;
  margin-bottom: 20px;
`;

const StyledPlans = styled.div`
  padding-top: 63px;
  padding-left: 103px;
  padding-right: 192px;
  padding-bottom: 113px;
  background-color: #f3f4f6;
`;

const StyledPlan = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: flex-start;
  min-height: 200px;
`;

const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #d40f92;
  border: none;
  color: white;
  height: 48px;
`;

const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const Plan = () => (
  <StyledPlans id="prices">
    <h1>Find a plan that works for you</h1>
    <StyledDivider />
    <StyledPlan>
      <h3>Starter</h3>
      <StyledFeature>
        <p>Wemagine kit software</p>
      </StyledFeature>
      <h1>€79/month</h1>
      <StyledButton onClick={() => getIpClient(1)}>
        <b>
          Get Started <span>&#8594;</span>{" "}
        </b>
      </StyledButton>
    </StyledPlan>
    <StyledDivider />
    <StyledPlan>
      <h3>Standard</h3>
      <StyledFeature>
        <p>Wemagine kit software</p>
        <p>24/7 customer support</p>
        <p>Customised business theme arts</p>
      </StyledFeature>
      <h1>€129/month</h1>
      <StyledButton onClick={() => getIpClient(2)}>
        <b>
          Get Started <span>&#8594;</span>{" "}
        </b>
      </StyledButton>
    </StyledPlan>
    <StyledDivider />
    <StyledPlan>
      <h3>Premium</h3>
      <StyledFeature>
        <p>Wemagine kit software</p>
        <p>24/7 customer support</p>
        <p>Customised business theme arts</p>
        <p>High resolution TV provided</p>
        <p>Effortless installation</p>
      </StyledFeature>
      <h1>€199/month</h1>
      <StyledButton onClick={() => getIpClient(3)}>
        <b>
          Get Started <span>&#8594;</span>{" "}
        </b>
      </StyledButton>
    </StyledPlan>
  </StyledPlans>
);

export default Plan;
