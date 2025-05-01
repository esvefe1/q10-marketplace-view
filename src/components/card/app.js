'use client'

import { StarIcon } from "../../../public/icons/star"

export default function CardApp({ data }) {
    const {
        name,
        developer,
        description,
        state,
        rating,
        background
    } = data
    return (
        <div className="card-app">
            <div className="card-app-heading">
                <div className="card-app-info">
                    <div
                        className="card-app-logo"
                        style={{
                            backgroundColor: background
                        }}
                    />
                    <div className="card-app-name">
                        <h6>{name}</h6>
                        <p>{developer}</p>
                    </div>
                </div>
                <div className="card-app-rating">
                    <StarIcon /> <span>{rating}</span>
                </div>
            </div>
            <div className="card-app-content">
                <p>{description}</p>
                <div className="card-app-state">
                    {state}
                </div>
            </div>
        </div>
    )
}