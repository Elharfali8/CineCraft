
export const fetchNowPlayingMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      }
    };
  
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const data = await res.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      return [];
    }
  };
  