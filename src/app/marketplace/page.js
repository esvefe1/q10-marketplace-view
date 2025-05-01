'use client'
import { useState } from "react"
import Categories from "@/components/categories"
import SlickUI from "@/components/slick"
import { APPS } from "@/constants/apps.constants"
import { CATEGORIES } from "@/constants/categories.constants"
import CardApp from "@/components/card/app"

export default function Page() {
    const [categories, setCategories] = useState(CATEGORIES)
    const [selectedCategory, setSelectedCategory] = useState('Todas')

    const handleCategoryClick = (name) => {
        setSelectedCategory(name)
        const updated = categories.map(cat => ({
            ...cat,
            active: cat.name === name
        }))
        setCategories(updated)
    }

    const featuredApp = APPS.find(app => app.featured)
    const filteredApps = selectedCategory === 'Todas'
        ? APPS
        : APPS.filter(app => app.category === selectedCategory)

    return (
        <>
            <div className="heading">
                <SlickUI />
                <div className="heading-featured">
                    <h4>App de la semana</h4>
                    {featuredApp && (
                        <CardApp
                            data={featuredApp}
                        />
                    )}
                </div>
            </div>

            <Categories
                categories={categories}
                onCategoryClick={handleCategoryClick}
            />

            <div className="list-apps">
                {filteredApps.map((app, index) => (
                    <CardApp
                        key={index}
                        data={app}
                    />
                ))}
            </div>
        </>
    )
}
