import { MenuItem } from "../../utils/types";

import ProfileIcon from "./../../icons/Profile";
import DashboardIcon from "../../icons/Dashboard";

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
  }
];

export { menuItems };
