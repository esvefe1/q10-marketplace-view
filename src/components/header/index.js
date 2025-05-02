'use client'
import Image from "next/image"
import Logo from "/public/images/logo.png"
import Photo from "/public/images/photo.png"
import { SearchIcon } from "../../../public/icons/search"
import { ChevronDownIcon } from "../../../public/icons/chevron-down"

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Image
                    src={Logo}
                    alt="Logo"
                />
                <div className="header-logo-business">
                    Marketplace
                </div>
            </div>
            <div className="header-search">
                <div className="header-search-input">
                    <SearchIcon />
                    <input placeholder="Pregunta a Q10 IA o Busca aplicaciones..." />
                </div>
            </div>
            <div className="header-user">
                <Image
                    src={Photo}
                    alt="Fotografía"
                    className="header-user-photo"
                />
                <div className="header-user-data">
                    <h6>Estiven</h6>
                    <p>Súperadmin</p>
                </div>
                <ChevronDownIcon />
            </div>
        </header>
    )
}