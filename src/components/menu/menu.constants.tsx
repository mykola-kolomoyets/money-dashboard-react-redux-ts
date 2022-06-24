import { MenuItem } from "../../utils/types";

import ProfileIcon from "./../../icons/Profile";
import DashboardIcon from "../../icons/Dashboard";
import TablesIcon from "../../icons/Tables";

const menuItems: MenuItem[] = [
	{
		label: "Profile",
		to: "/profile",
		Icon: ProfileIcon
	},
	{
		label: "Dashboard",
		to: "/",
		Icon: DashboardIcon
	},
	{
		label: "Tables",
		to: "/table",
		Icon: TablesIcon
	}
];

export { menuItems };
