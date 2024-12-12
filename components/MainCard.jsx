'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export function MainCard({type, id, backdrop_path, title, release_date, vote_average, name, first_air_date}) {
    const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    
    return (
      <Link href={`/${type}/${id}`} className="">
        <Card
          className="h-[300px] relative overflow-hidden shadow-md rounded-lg group"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60"></div>

          {/* Content */}
          <CardContent className="absolute bottom-0 right-0 left-0 bg-[rgba(1,1,1,0.5)]  z-10 p-4 text-white">
                    <CardTitle className="text-lg lg:text-xl font-bold">{title || name}</CardTitle>
                <CardDescription className="text-sm mt-2 text-slate-300">
                {release_date || first_air_date}
                </CardDescription>
          </CardContent>
            <CardFooter className="absolute top-2 right-[-10px]">
              <span className="text-sm bg-green-600 px-2 py-1 rounded-md">{vote_average} / 10</span>
            </CardFooter>
        </Card>
      </Link>
    )
}
