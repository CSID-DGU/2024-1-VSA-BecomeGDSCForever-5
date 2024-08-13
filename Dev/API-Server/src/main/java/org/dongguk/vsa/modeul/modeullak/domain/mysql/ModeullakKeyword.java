package org.dongguk.vsa.modeul.modeullak.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(
        name = "modeullak_keywords",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "modeullak_keyword_unique",
                        columnNames = {"modeullak_id", "keyword_id"}
                )
        }
)
public class ModeullakKeyword {
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
    @Column(name = "content", length = 20, nullable = false)
    private String content;

    /* -------------------------------------------- */
    /* Many To One Mapping ------------------------ */
    /* -------------------------------------------- */
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "modeullak_id", nullable = false, updatable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "keyword_id", nullable = false, updatable = false)
    private Keyword keyword;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public ModeullakKeyword(String content, Modeullak modeullak, Keyword keyword) {
        this.content = content;
        this.modeullak = modeullak;
        this.keyword = keyword;
    }

}
