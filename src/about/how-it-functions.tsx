import React from "react";
import styled from "@emotion/styled";

const HowItFunctionsContainer = styled.section`
    padding: 3.5vh 0;
`;

const HowItFunctions = () => (
    <HowItFunctionsContainer>
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            How we function?
        </h2>
        <p>
            The team functions as a family, and uses a mentor mentee model wherein senior students train and pass on
            experience & skills they gained to their junior mentees. This happens through out their years at the
            community, and is facilitated through various activities the club organizes & events and contests it
            participates as a team.
        </p>
    </HowItFunctionsContainer>
);

export default HowItFunctions;