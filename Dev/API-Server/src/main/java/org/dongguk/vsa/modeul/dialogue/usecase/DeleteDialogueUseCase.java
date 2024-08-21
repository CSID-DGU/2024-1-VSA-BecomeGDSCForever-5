package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;

import java.util.UUID;

@UseCase
public interface DeleteDialogueUseCase {

    /**
     * 대화 삭제하기
     * @param dialogueId dialogue ID
     * @param accountId 계정 ID
     */
    void execute(
            Long dialogueId,
            UUID accountId
    );
}
