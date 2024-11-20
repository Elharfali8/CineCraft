export const navLinks = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Movies',
        path: '/movie'
    },
    {
        id: 3,
        title: 'TV Shows',
        path: '/tv'
    },
    {
        id: 4,
        title: 'More',
        children: [
            {
                id: 1,
                title: 'trending',
                path: '/trending'
            },
            {
                id: 2,
                title: 'popular',
                path: '/popular'
            },
            {
                id: 3,
                title: 'favorite',
                path: '/favorite'
            }
        ]
    },
]

export const image = 'https://image.tmdb.org/t/p/original'