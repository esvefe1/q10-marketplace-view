'use client'

export default function CardBanner({ data }) {
    const { background, title, description } = data
    return (
        <div
            className="slick-banner-item"
            style={{
                backgroundColor: `${background}`
            }}
        >
            {title && (
                <h2>{title}</h2>
            )}
            {description && (
                <p>{description}</p>
            )}
        </div>
    )
}