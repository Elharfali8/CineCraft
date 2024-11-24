import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoIosTv } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";


export const navLinks = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        icon: <FaHome />
    },
    {
        id: 2,
        title: 'Movies',
        path: '/movie',
        icon: <MdLocalMovies />
    },
    {
        id: 3,
        title: 'TV Shows',
        path: '/tv',
        icon: <IoIosTv />
    },
    {
        id: 4,
        title: 'More',
        icon: <CgMoreO />,
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