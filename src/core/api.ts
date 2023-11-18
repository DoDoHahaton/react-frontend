import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


// GET
export async function GET(url: string) {
	try {
		const response = await axios.get(url)
			.then(response => {
				// handle
			})
	} catch (error) {
		console.log(error)
	}
}

// POST
export async function POST(url: string, data: object) {}
