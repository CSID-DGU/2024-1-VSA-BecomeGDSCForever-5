import React from "react";
import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import Logo from "@/assets/icons/Logo/HomeLogo.svg";
import FilledLeaf from "@/assets/icons/FilledLeaf.svg"
import ProfileImage from "@/components/Common/ProfileImage";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import H3 from "@/components/Common/Font/Heading/H3";
import JoinStateTag from "@/components/NavBar/JoinStateTag";
import {useParticipatedModeullak} from "@/hooks/useParticipatedModeullak.ts";

const NavBar: React.FC = () => {

    const participatedModeullak = useParticipatedModeullak();

    const onLogoClick = (): void => {
        alert("logo clicked!");
    }

    const onProfileCLick = (): void => {
        alert("profile clicked!");
    }

    return (
        <Styled.NavBarContainer>
            <Styled.NavBarLeftSection>
                <ProfileImage src={Logo} alt="Logo" onClick={onLogoClick} width={"195px"} height={"80px"}/>
                <Styled.NavMenuButton>
                    <ProfileImage src={FilledLeaf} width={"28px"} height={"28px"}/>
                    <H3 text={"모들락"} color={theme.colorSystem.secondary["700"]}/>
                </Styled.NavMenuButton>
            </Styled.NavBarLeftSection>
            <Styled.NavBarRightSection>
                {participatedModeullak.modeullak_id !== null ?
                    <JoinStateTag text={`${participatedModeullak.modeullak_title} 참여 중`}
                                  id={participatedModeullak.modeullak_id}/> : null
                }
                <ProfileImage src={DefaultProfile} onClick={onProfileCLick} width={"58.667px"} height={"58.667px"}/>
            </Styled.NavBarRightSection>
        </Styled.NavBarContainer>
    );
};

export default NavBar;
