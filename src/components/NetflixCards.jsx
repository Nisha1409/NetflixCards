import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";

export const NetflixCards = () => {
    // const name = "Name changed"
    return (
        <ul className="grid grid-three-col">
            {seriesData.map((series) => <SeriesCard key={series.id} series={series} />
            )}
        </ul>)

};


