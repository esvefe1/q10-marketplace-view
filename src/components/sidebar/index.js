'use client'

import { MARKETPLACE, MENU_ITEMS } from "@/constants/menu.constants"
import MenuItem from "../menu-item"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-top">
                {MENU_ITEMS.map((menu, index) => (
                    <MenuItem
                        data={menu}
                        key={`menu-${index}`}
                    />
                ))}
            </div>
            <div className="sidebar-bottom">
                <MenuItem
                    data={MARKETPLACE}
                />
            </div>
        </div>
    )
}