
import styled from "styled-components";

export const SeriesCard = ({ series }) => {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = series;
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "rgb(69, 178, 78)" : "rgb(231, 225, 60)"}`,
        color: "white",
    }


    const ratingClass = rating >= 8.5 ? "good" : "average";

    return (
        <li className="card">
            <div >
                <img src={img_url} alt={name} width="70%" height="50%" />
            </div>
            <div className="card-content">
                <h2>Name: {name}</h2>
                <h3>Rating:
                    <span className={`ratings ${ratingClass}`}>
                        {rating}</span>
                </h3>
                <p className="text-3xl font-bold underline">Summary: {description}</p>
                <p>Genre: {genre.join(",")}</p>
                <p>Cast: {cast.join(",")}</p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    )
}
