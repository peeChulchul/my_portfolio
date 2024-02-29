import styled from "styled-components";

interface IPaddingContainer {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

interface IFlexContainer {
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  $align?: "flex-start" | "flex-end" | "center";
  direction?: "row" | "column";
  gap?: string;
  $fullwidthchild?: boolean;
}

interface IIconContainer {
  size: string;
  color: "white" | "blue";
}

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const PaddingContainer = styled.div<IPaddingContainer>`
  padding-top: ${({ $top }) => $top};
  padding-bottom: ${({ $bottom }) => $bottom};
  padding-left: ${({ $left }) => $left};
  padding-right: ${({ $right }) => $right};
`;

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ $align }) => $align};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};

  & > div {
    flex: ${({ $fullwidthchild }) => $fullwidthchild && 1};
  }
`;

export const IconContainer = styled.div<IIconContainer>`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ theme, color }) => {
    switch (color) {
      case "white":
        return theme.colors.white;

      case "blue":
        return theme.colors.secondary;

      default:
        return;
    }
  }};
`;
