export interface Movie {
	title: string;
	originalTitle: string;
	year: string;
	releaseDate: string;
	directors: { name: string; id: string; }[];
	writers: { name: string; id: string; }[];
	runtime: string;
	urlPoster: string;
	countries: string[];
	languages: string[];
	genres: string[];
	plot: string;
	simplePlot: string;
	idIMDB: string;
	urlIMDB: string;
	rating: string;
	metascore?: string;
	rated: string;
	votes: string;
	type: string;
	ranking: number;
}
