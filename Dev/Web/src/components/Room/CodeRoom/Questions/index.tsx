import React, {useEffect, useState} from "react";
import * as Styled from "./style.ts";
import * as monaco from "monaco-editor";
import Column from "@/components/Common/Column";
import SizedBox from "@/components/Common/SizedBox";
import H1 from "@/components/Common/Font/Heading/H1";
import H3 from "@/components/Common/Font/Heading/H3";
import SvgButton from "@/components/Common/SvgButton";
import BlackDoubleRightArrow from "@/assets/icons/CodeIde/BlackDoubleRightArrow.svg";
import theme from "@/shared/theme.ts";
import CustomMarkdown from "@/components/Common/CustomMarkdown";
import {createDialogue} from "@/apis/dialogue";
import Alert from "@/components/Common/Alert";

interface props {
    editorRef: React.RefObject<monaco.editor.IStandaloneCodeEditor>;
    language: string;
    highlightedText: string | null;
    modeullakId: number;
    storageId: string;
    entireCode: string;
}

export default function Questions(props: props) {
    const [question, setQuestion] = useState("");
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAddQuestion = async () => {
        if (!props.highlightedText || props.highlightedText.trim() === "") {
            setIsAlertOpen(true);
            setAlertMessage("코드를 선택해주세요.");
            return;
        }

        const codeBlock = `\`\`\`${props.language}\n${props.highlightedText}\n\`\`\``;

        try {
            await createDialogue(props.modeullakId, props.storageId, codeBlock, question);

            setIsVisible(false);
            setQuestion("");
        } catch (error) {
            setIsAlertOpen(true);
            setAlertMessage(error.response.data.error.message);
        }
    };

    useEffect(() => {
        if (!props.highlightedText) {
            setQuestion("");
        }
    }, [props.highlightedText]);

    return (
        <Styled.Container isVisible={isVisible}>
            {props.highlightedText && (
                <Styled.QuestionInputContainer>
                    <Column alignItems={"flex-start"}>
                        <SvgButton src={BlackDoubleRightArrow} width={"24px"} height={"24px"}
                                   onClick={() => setIsVisible(false)}/>
                        <SizedBox height={"20px"}/>
                        <H1 text={"질문하기"}/>
                    </Column>
                    <SizedBox width={"auto"} height={"10px"}/>
                    <Styled.MarkdownContainer>
                        <CustomMarkdown shortCode={`\`\`\`${props.language}\n${props.highlightedText}\n\`\`\``}/>
                    </Styled.MarkdownContainer>
                    <Styled.Input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="질문을 입력하세요"
                    />
                    <SizedBox width={"auto"} height={"20px"}/>
                    <Styled.ButtonWrapper>
                        <Styled.Button onClick={handleAddQuestion}>
                            <H3 text={"질문 남기기"} color={theme.colorSystem.white}/>
                        </Styled.Button>
                    </Styled.ButtonWrapper>
                </Styled.QuestionInputContainer>
            )}
            {
                isAlertOpen && (
                    <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
                )
            }
        </Styled.Container>
    );
}
