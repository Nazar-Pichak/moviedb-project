import React from 'react';
import { movieService } from "@/services/api.service";

const Page = async () => {
    const allGenres = await movieService.allGenres();

    return (
        <div>
            {
                allGenres.map((genre) => (
                    <div key={genre.id}>{genre.name}</div>
                ))
            }
        </div>
    );
};

export default Page;
