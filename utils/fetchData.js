import axios from "axios";


export const fetchData = async ({ type, page, genre, rating, startDate, endDate }) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
    };

    const url = new URL(`https://api.themoviedb.org/3/discover/${type}`);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('sort_by', 'popularity.desc'); // Default sorting
    url.searchParams.append('page', page);

    // Filter by Genre
    if (genre && genre !== 'all') {
        url.searchParams.append('with_genres', genre);
    }

    // Filter by Rating
    if (rating) {
        url.searchParams.append('vote_average.gte', rating.min); // Minimum rating
        url.searchParams.append('vote_average.lte', rating.max); // Maximum rating
    }

    // Filter by Release Date
    if (startDate) {
        url.searchParams.append('release_date.gte', startDate); // From this date
    }
    if (endDate) {
        url.searchParams.append('release_date.lte', endDate); // To this date
    }

    try {
        const response = await axios.get(url.toString(), options);
        return response.data.results;
    } catch (error) {
        throw Error(error.message || 'Failed to fetch data');
    }
};
