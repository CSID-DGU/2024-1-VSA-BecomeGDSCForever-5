import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function H3(props: FontProps) {
    return (
        <Styled.H3 color={props.color}>{props.text}</Styled.H3>
    )
}