import { BadgeProps } from "components/badge";

import CalendarWeekIcon from "icons/CalendarWeek";
import CalendarMonthIcon from "icons/CalendarMonth";
import { useWindowSize } from "utils/hooks/useWindowSize";

const useDashboard = () => {
    const { width } = useWindowSize();

    const mockBadgesData: BadgeProps[] = [
        {
            amount: 123.56,
            label: "Покупок за тиждень",
            color: "rgba(154, 204, 255, 0.6)",
            Icon: CalendarWeekIcon
        },
        {
            amount: 123.56,
            label: "Покупок за місяць",
            color: "rgba(250, 177, 160, 0.6)",
            Icon: CalendarMonthIcon
        }
    ];

    return {
        width,
        userName: "Mykola",
        badgesData: mockBadgesData
    };
};

export default useDashboard;