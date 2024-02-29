import styled from "styled-components";
import { PaddingContainer } from "./containers";

interface IHeading {
  $align?: "center" | "left" | "right";
  size: "h1" | "h2" | "h3" | "h4";
}

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 2rem;
`;

export const Heading = styled(PaddingContainer)<IHeading>`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ $align }) => $align};
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "4.5rem";

      case "h2":
        return "3rem";

      case "h3":
        return "2rem";

      case "h4":
        return "1.5rem";

      default:
        return;
    }
  }};
`;
