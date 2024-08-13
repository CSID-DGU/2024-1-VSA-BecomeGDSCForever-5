package org.dongguk.vsa.modeul.tag.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.modeullak.domain.ModeullakTag;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "tags")
public class Tag {

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
    @Column(name = "name", length = 32, nullable = false)
    private String name;

    @Column(name="created_at", nullable = false)
    private LocalDateTime createdAt;

    /* -------------------------------------------- */
    /* One To Many Mapping ------------------------ */
    /* -------------------------------------------- */
    @OneToMany(mappedBy = "tag", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ModeullakTag> modeullakTags = new ArrayList<>();

    @Builder
    public Tag(String name) {
        this.name = name;
        this.createdAt = LocalDateTime.now();
    }

    public void addModuellakTags(ModeullakTag modeullakTag) {
        this.modeullakTags.add(modeullakTag);
    }
}
