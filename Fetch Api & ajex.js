// const url = 'https://api.adviceslip.com/advice';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '49f3191cc2msh1eaf1656ad39b1dp1f3448jsnda66afe58cdb',
// 		'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
// 	}
// };
async function getData () {
	
	try {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		const result = await data.slip.advice;
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

getData();