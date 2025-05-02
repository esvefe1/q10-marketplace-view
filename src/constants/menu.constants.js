import { CheckIcon } from "../../public/icons/check";
import { GraduationCapIcon } from "../../public/icons/graduation-cap";
import { GridIcon } from "../../public/icons/grid";
import { HomeIcon } from "../../public/icons/home";
import { UsersIcon } from "../../public/icons/users";

export const MENU_ITEMS = [
    {
        name: "Inicio",
        route: "/",
        icon: <HomeIcon />
    },
    {
        name: "Admisión y Matrícula",
        route: "/",
        icon: <CheckIcon />
    },
    {
        name: "Gestión académica",
        route: "/",
        icon: <GraduationCapIcon />
    },
    {
        name: "Docentes",
        route: "/",
        icon: <UsersIcon />
    }
]

export const MARKETPLACE = {
    name: "Marketplace",
    route: "/marketplace",
    icon: <GridIcon />
}