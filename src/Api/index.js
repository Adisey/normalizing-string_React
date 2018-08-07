/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 02.08.2018
 * Time: 1:38
 */

// import axios from "axios";

const MAIN_URL = `http://localhost:9009/api`;


export const api = {
    async fetchStrings() {
        const response = await fetch(MAIN_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        debugger;
        if (response.status !== 200) {
            throw new Error("String not loaded");
        }
        await console.log(`response ->`, response);
        await console.log(`response.json() ->`, response.json());
        const { data: str } = await response.json();
        console.log(`str ->`, str);

        return str;

        // const response = await axios.get (MAIN_URL);
        // if (response.status !== 200) {
        //     console.error (`Error response - `, response);
        //     throw new Error ("String not loaded");
        // }
        // const { data: strings } = await response;
        // // console.log (`strings`, strings);
        // return strings;
    },
    async postStrings(str = [{originalString:'1111111111', processedString: '2222222222'}]) {
        const response = await fetch(MAIN_URL, {
            method:  "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(str),
        });
        if (response.status !== 200) {
            throw new Error("String not saved");
            console.error(`Error ->`, response.data);
        }
        return;
    },
};