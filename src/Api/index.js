const MAIN_URL = `http://localhost:9009/api`;

export const api = {
    async fetchStrings() {
        const response = await fetch (MAIN_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status !== 200) {
            console.error (`Error response - `, response);
            throw new Error ("String not loaded");
        }
        return await response.json ().then ((stings) => stings);
    },
    async postStrings(str = [{ originalString: '1111111111', processedString: '2222222222' }]) {
        const response = await fetch (MAIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify (str),
        });
        if (response.status !== 200) {
            throw new Error ("String not saved");
        }
    },
};