import React from "react";
import styled from "@emotion/styled";

const TestimonialsContainer = styled.section`
   padding: 3.5vh 0;
   blockquote {
     font-size: calc(1.15rem + 0.15vw);
     font-style: italic;
     width: 720px;
     max-width: 100%;
     margin-bottom: 0.25rem;
   }
    cite {
      display: block;
      opacity: 0.65;
      font-size: calc(1.1rem + 0.15vw);
      margin-bottom: 5vh;
    }
`;

const Testimonials = () => (
    <TestimonialsContainer id="testimonials">
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            Here&apos;s what recruiters had to say about us
        </h2>
        <div className="my-5">
            <blockquote>
                Freshers from Amrita are better than experienced people I have hired from outside.
                8 out of 12 people in the security team are Amrita alumni.
            </blockquote>
            <cite>
                Senior Manager, Product Security,
                VMware
            </cite>
        </div>
        <div className="my-5">
            <blockquote>
                I can vouch for their superior technical skills, dedication and enthusiasm.
                The training they receive is excellent.
            </blockquote>
            <cite>
                Information Security Investigator,
                Cisco
            </cite>
        </div>
        <div className="my-5">
            <blockquote>
                I am very happy with their performance, especially level of understanding in cyber security
            </blockquote>
            <cite>
                Divyanshu Verma, Sr. Manager,
                Intel R&D, Bengaluru
            </cite>
        </div>
    </TestimonialsContainer>
);

export default Testimonials;