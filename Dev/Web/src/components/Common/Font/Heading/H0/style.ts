import styled from "styled-components";
import theme from "@/shared/theme.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export const H0 = styled.div<FontProps>`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.h0.fontSize};
    font-weight: ${theme.fontSystem.h0.fontWeight};
    line-height: ${theme.fontSystem.h0.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
    white-space: pre-wrap;
`;