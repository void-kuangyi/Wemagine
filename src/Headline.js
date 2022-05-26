import React from "react";
import styled from "styled-components";

const HeadText = styled.div`
font-size: 48px;
font-weight: 600;
text-align: center;
margin-bottom: 32px;
`

const StyledButton = styled.button`
padding: 12px 24px;
border-radius: 8px;
background-color: #D40F92;
border: none;
color: white;
font-weight: 600;
`

const StyledHeadline = styled.div`
padding: 100px;
text-align:center;
`
const StyledSecondaryHeadline = styled.div`
display: flex;
margin-top: 160px;
padding: 100px;
`;

const StyledText = styled.div`
display:flex;
flex-direction:column;
flex-basis: 1;
justify-content: flex-start;
text-decoration: none;
margin-left: 32px;
padding: 48px;
`

const StyledImage = styled.rect`
width: 592px;
    background-color: #F3F4F6;
    flex-basis: 1;
`

const Headline = () => (
    <div>
    <StyledHeadline>
        <HeadText>
            Dynamic office art display powered by OpenAI
        </HeadText>
        <StyledButton>
            Get Started Now
        </StyledButton>
        </StyledHeadline>
        <StyledSecondaryHeadline>
            <StyledImage />
            <StyledText>
                <h1>Co-create your office artwork</h1>
                <p>Instead of having a static image in the office, we reimagine the future of the office decorative art. We offer dynamic art display powered by OpenAI. The art becomes a co-creation space for your employees. </p>
                <p><b>Get Started</b></p>
            </StyledText>
        </StyledSecondaryHeadline>
        </div>
)

export default Headline;