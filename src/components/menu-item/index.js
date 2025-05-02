'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx" // opción recomendada para manejar clases condicionales

export default function MenuItem({ data }) {
    const pathname = usePathname()
    const { icon, name, route } = data
    const isActive = pathname === route

    return (
        <Link
            href={route}
            className={clsx("menu-item", { "menu-item-active": isActive })}
        >
            {icon}
            {name}
        </Link>
    )
}
