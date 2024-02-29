import styled from "styled-components";

export const ProfileImgCard = styled.div`
  border: 1px solid white;
  width: max-content;
  padding-top: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
