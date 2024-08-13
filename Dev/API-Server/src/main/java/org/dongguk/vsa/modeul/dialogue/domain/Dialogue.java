package org.dongguk.vsa.modeul.dialogue.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.keyword.domain.Keyword;
import org.dongguk.vsa.modeul.modeullak.domain.Modeullak;
import org.dongguk.vsa.modeul.user.domain.User;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "dialogues")
public class Dialogue {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Information Attribute ---------------------- */
    /* -------------------------------------------- */
    @Column(name = "question", length = 3000, nullable = false)
    private String question;

    @Column(name = "asked_at", nullable = false)
    private LocalDateTime askedAt;

    @Column(name = "answer", length = 3000)
    private String answer;

    @Column(name = "is_answered_by_llm")
    private Boolean isAnsweredByLlm;

    @Column(name = "replied_at")
    private LocalDateTime repliedAt;

    /* -------------------------------------------- */
    /* Many To One Mapping ------------------------ */
    /* -------------------------------------------- */
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name ="user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "modeullak_id", nullable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "keyword_id", nullable = false)
    private Keyword keyword;


    @Builder
    public Dialogue(String question, User user, Modeullak modeullak, Keyword keyWord) {
        this.question = question;
        this.user = user;
        this.modeullak = modeullak;
        this.keyword = keyWord;
        this.askedAt = LocalDateTime.now();

        user.addDialogues(this);
        modeullak.addDialogues(this);
        keyWord.addDialogues(this);
    }

    public void updateAnswer(String answer, Boolean isAnsweredByLlm) {
        this.answer = answer;
        this.isAnsweredByLlm = isAnsweredByLlm;
        this.repliedAt = LocalDateTime.now();
    }
}
