import { useState } from "react";

import { menuItems } from "./menu.constants";

const useMenu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(1);


    const onMenuItemClick = (index: number) => {
        setActiveMenuItem(index);
    }

    return {
        activeMenuItem,
        onMenuItemClick,
        menuItems
    };
};

export default useMenu;