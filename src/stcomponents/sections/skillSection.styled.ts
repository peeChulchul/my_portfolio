import styled from "styled-components";

export const SkillsCardContainer = styled.div`
  display: flex;
  /* grid-template-columns: auto auto; */
  /* grid-gap: 2rem; */
  /* padding: 0 5%; */
  gap: 2rem;
  flex-wrap: wrap;
`;

export const SkillsCard = styled.div`
  width: 200px;
  border: 1px solid #fff;
  padding: 3rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
`;
