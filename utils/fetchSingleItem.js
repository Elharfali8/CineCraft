
export const fetchSingleItem = async ({type, id}) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      }
    };
  
    try {
      const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options);
      const data = await res.json();
      return data || [];
    } catch (error) {
      console.error('Error fetching :', error);
      return [];
    }
  };
  