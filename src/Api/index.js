/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 02.08.2018
 * Time: 1:38
 */

import axios from "axios";

const MAIN_URL = `http://localhost:9009/api`;


export const api = {
    async fetchStrings() {
        const response = await axios.get (MAIN_URL);
        if (response.status !== 200) {
            console.error (`Error response - `, response);
            throw new Error ("String Where not loaded");
        }
        const { data: strings } = await response;
        // console.log (`strings`, strings);
        return strings;
    },
};