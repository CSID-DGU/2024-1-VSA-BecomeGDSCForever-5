import * as Styled from './style';
import SizedBox from "@/components/Common/SizedBox";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import Column from "@/components/Common/Column";
import {useModeullakOverviews} from "@/hooks/modeullak/useModeullakOverviews.ts";
import ModeullakOverviewHeader from "@/components/ModeullakOverview/ModeullakOverviewHeader";
import ModeullakOverviewItem from "@/components/ModeullakOverview/ModeullakOverviewItem";
import ModeullakOverviewEmpty from "@/components/ModeullakOverview/ModeullakOverviewEmpty";

export default function ModeullakOverview() {
    const calendarState = useSelector((state: RootState) => state.calendarState);
    const modeullakOverviews = useModeullakOverviews(calendarState.selectedDate);

    return (
        <Styled.Container>
            <Column>
                <ModeullakOverviewHeader/>
                <SizedBox height={"20px"}/>
                {
                    modeullakOverviews.modeullaks.length === 0 ? (
                        <ModeullakOverviewEmpty/>
                    ) : (
                        modeullakOverviews.modeullaks.map((modeullakOverview, index) => {
                            if (index === 0) {
                                return <ModeullakOverviewItem key={index} isFirst={true}
                                                              modeullakOverview={modeullakOverview}/>;
                            } else if (index === modeullakOverviews.modeullaks.length - 1) {
                                return <ModeullakOverviewItem key={index} isLast={true}
                                                              modeullakOverview={modeullakOverview}/>;
                            } else {
                                return <ModeullakOverviewItem key={index}
                                                              modeullakOverview={modeullakOverview}/>;
                            }
                        })
                    )
                }
            </Column>
        </Styled.Container>
    );
}