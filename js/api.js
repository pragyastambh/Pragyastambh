/*
=========================================
Pragyastambh ERP API
Version : 1.0
=========================================
*/

async function api(action, data = {}) {

    try {

        const params = new URLSearchParams();

        params.append("action", action);

        for (const key in data) {

            if (data.hasOwnProperty(key)) {

                params.append(key, data[key]);

            }

        }

        const url = CONFIG.API_URL + "?" + params.toString();

        console.log("API Request :", url);

        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        });

        if (!response.ok) {

            throw new Error("HTTP Error : " + response.status);

        }

        const result = await response.json();

        console.log("API Response :", result);

        return result;

    }

    catch (error) {

        console.error("API Error :", error);

        return {

            success: false,

            message: error.message

        };

    }

}
