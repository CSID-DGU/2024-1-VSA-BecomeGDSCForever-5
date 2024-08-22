export interface ModeullakDialogueTemporarySummaryState {
    id: number;
    keywordName: string;
    questionContent: string;
    updatedAt: string;
    isQuestion: boolean;
}

export interface ModeullakDialogueTemporarySummaryJson {
    id: number;
    keyword_name: string;
    question_content: string;
    updated_at: string;
    is_question: boolean;
}

export function copyWith(
    state: ModeullakDialogueTemporarySummaryState,
    override: Partial<ModeullakDialogueTemporarySummaryState>
): ModeullakDialogueTemporarySummaryState {
    return {
        id: override.id ?? state.id,
        keywordName: override.keywordName ?? state.keywordName,
        questionContent: override.questionContent ?? state.questionContent,
        updatedAt: override.updatedAt ?? state.updatedAt,
        isQuestion: override.isQuestion ?? state.isQuestion,
    }
}

export function fromJson(json: ModeullakDialogueTemporarySummaryJson): ModeullakDialogueTemporarySummaryState {
    return {
        id: json.id,
        keywordName: json.keyword_name,
        questionContent: json.question_content,
        updatedAt: json.updated_at,
        isQuestion: json.is_question,
    }
}