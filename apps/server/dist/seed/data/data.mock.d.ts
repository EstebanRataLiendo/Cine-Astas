export declare const mockData: {
    hall: {
        name: string;
        capacity: number;
    }[];
    seat: {
        number: number;
        row: string;
    }[];
    movie: ({
        title: string;
        year: number;
        genre: string;
        language: string;
        duration: number;
        imageUrl: string;
        trailerUrl: string;
        description: string;
        classification: string;
        format: string[];
        releaseDate: string;
    } | {
        title: string;
        year: number;
        genre: string;
        language: string;
        duration: number;
        classification: string;
        releaseDate: string;
        imageUrl: string;
        trailerUrl?: undefined;
        description?: undefined;
        format?: undefined;
    })[];
    screening: {
        schedule: Date;
        price: number;
    }[];
    booking: {
        userId: string;
    }[];
};
