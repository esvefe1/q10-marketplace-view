'use client'

import clsx from "clsx"

export default function Categories({ categories, onCategoryClick }) {
    return (
        <div className="categories">
            {categories.map((category, index) => {
                const { name, active } = category
                return (
                    <div
                        className={clsx(
                            'category-item',
                            active && 'category-item-active'
                        )}
                        key={`category-${index}`}
                        onClick={() => onCategoryClick(name)}
                    >
                        {name}
                    </div>
                )
            })}
        </div>
    )
}