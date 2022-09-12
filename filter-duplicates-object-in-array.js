// filter out duplicates objects
const uniqueGenre = [...movieRes.data.genres, ...tvRes.data.genres].filter(
	(genre, index) => {
		//genre = {id: 1, name: "Action"} , index = 0
		//genre = {id: 1, name: "Action"} , index = 1 *here
		const _genre = JSON.stringify(genre);

		const findDuplicates = () => {
			return (
				index ===
				[...movieRes.data.genres, ...tvRes.data.genres].findIndex((obj) => {
					// obj = {id: 1, name: "Action"} (first iteration) *here
					// obj = {id: 1, name: "Action"} (second iteration)

					return JSON.stringify(obj) === _genre;
				})
				// on second filter() iteration is on index = 1, otherwise in findIndex() it found its obj in index = 0
				// then it returns index = 0, which is not equal to 1, so it returns false
			);
		};

		return findDuplicates();
		// so in it will filter out object that false condition from findDuplicates()
	},
);
