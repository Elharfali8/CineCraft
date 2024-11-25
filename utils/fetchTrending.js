
export const fetchTrending = async ({type}) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      }
    };
  
    try {
      const res = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, options);
      const data = await res.json();
      return data.results || [];
    } catch (error) {
      console.error(`Error fetching trending ${type}:`, error);
      return [];
    }
  };
  