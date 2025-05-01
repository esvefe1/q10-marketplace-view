'use client'
import { useState } from "react"
import Categories from "@/components/categories"
import SlickUI from "@/components/slick"
import { APPS } from "@/constants/apps.constants"
import { CATEGORIES } from "@/constants/categories.constants"

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

    const filteredApps = selectedCategory === 'Todas'
        ? APPS
        : APPS.filter(app => app.category === selectedCategory)

    return (
        <>
            <div className="heading">
                <SlickUI />
                <div className="heading-featured">
                    <h4>App de la semana</h4>
                </div>
            </div>

            <Categories
                categories={categories}
                onCategoryClick={handleCategoryClick}
            />

            <div className="list-apps">
                {filteredApps.map((app, index) => (
                    <div key={index} className="app-card">
                        <h3>{app.name}</h3>
                        <p><strong>Desarrollador:</strong> {app.developer}</p>
                        <p>{app.description}</p>
                        <div><strong>Estado:</strong> {app.state}</div>
                        <div><strong>Rating:</strong> {app.rating}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
