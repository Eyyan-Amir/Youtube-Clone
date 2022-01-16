import React, { useState, useEffect } from "react";
import BaseSkeloton from "./base/BaseSkeloton";
import { UserConsumer } from "./userContext";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Video() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [totalResult, setTotalResult] = useState(0);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4ce6fff0da52d2214a794776a6bba549&page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results);
				setLoading(false);
				setTotalResult(data.total_results);
			});
	}, []);

	useEffect(() => fetchData(), []);
	const fetchData = () => {
		setPage(page + 1);
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4ce6fff0da52d2214a794776a6bba549&page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(movies.concat(data.results));
				setLoading(false);
				setTotalResult(data.total_results);
			});
	};

	let classes = [
		{
			title: {
				fontSize: "12px",
				color: "red",
			},
		},
	];
	return (
		<>
			{loading && <BaseSkeloton type='video' count={8} />}
			<UserConsumer>
				{(showSideBar) => (
					<InfiniteScroll
						dataLength={movies.length}
						next={fetchData}
						hasMore={movies.length !== totalResult}
						loader={<BaseSkeloton type='video' count={8} />}
					>
						<div className={`grid ${showSideBar ? "open" : ""}`}>
							{movies.map((item, i) => (
								<div className='video' key={item.id}>
									<div className='image'>
										<img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt='' className='img-fluid' />
									</div>
									<div className='lower-content'>
										<div className='logo'>
											<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='' />
										</div>
										<div className='title'>
											<h4>{item.title}</h4>
											<span>
												{item.popularity} views - {item.release_date} Ago
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</InfiniteScroll>
				)}
			</UserConsumer>
		</>
	);
}
