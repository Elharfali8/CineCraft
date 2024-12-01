
export const fetchGenres = async ({type}) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      }
    };
  
    try {
      const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options);
      const data = await res.json();
      return data.genres || [];
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      return [];
    }
  };
  