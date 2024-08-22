import * as Styled from './style';
import ModeullakCalendar from "@/components/Calendar";
import ModeullakOverview from "../../components/ModeullakOverview";
import SizedBox from "@/components/Common/SizedBox";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import Search from "@/components/Search";
import NavBar from "@/components/NavBar";
import Row from "@/components/Common/Row";
import KeywordModal from "@/components/ModeullakDetail/KeywordModal";
import ModeullakDetail from "@/components/ModeullakDetail";

export default function Home() {

    /* --------------------------------------------------------------------------- */
    /* Global Modal State -------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const isOpen = useSelector((state: RootState) => state.answerModalState.isOpen);
    const keywordModalState = useSelector((state: RootState) => state.keywordModalState);

    return (
        <Styled.Container>
            <NavBar/>
            <SizedBox height={"40px"}/>
            <Search/>
            <SizedBox height={"40px"}/>
            <Row justifyContent={"center"}>
                {isOpen ? <ModeullakDetail/> : <ModeullakCalendar/>}
                <SizedBox width={"64px"}/>
                <ModeullakOverview/>
            </Row>
            {
                keywordModalState.isOpen && <KeywordModal/>
            }
        </Styled.Container>
    )
}