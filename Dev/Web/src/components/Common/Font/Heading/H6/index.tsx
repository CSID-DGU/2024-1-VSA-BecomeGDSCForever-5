import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function H6(props: FontProps) {
    return (
        <Styled.H6 color={props.color}>{props.text}</Styled.H6>
    )
}