import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BaseSkeloton({ type, count }) {
	const iterate = (number) => {
		let value = "";
		let items = "";
		for (let i = 0; i < number; i++) {
			items = (value += i).split("");
		}
		return items;
	};
	let counts = iterate(count);

	return (
		<>
			{type == "video" ? (
				<div className='skeltonClass'>
					{counts.map((item, i) => {
						return (
							<SkeletonTheme key={i} baseColor='lightgrey' highlightColor='#fff'>
								<div className='video'>
									<div className='video__wrapper'>
										<div>
											<Skeleton width='290px' height='200px' />
										</div>
										<div className='lower-content'>
											<div className='logo'>
												<Skeleton circle={true} width='50px' height='50px' />
											</div>
											<div className='title'>
												<h4>
													<Skeleton />
												</h4>
												<span>
													<Skeleton width='150px' />
												</span>
											</div>
										</div>
									</div>
								</div>
							</SkeletonTheme>
						);
					})}
				</div>
			) : (
				""
			)}
		</>
	);
}
