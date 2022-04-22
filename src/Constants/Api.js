


export const GET = async (url) => {


	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}
	)
		.then(res => res.json())
		.then(res => res)
		.catch(e => res)

}
