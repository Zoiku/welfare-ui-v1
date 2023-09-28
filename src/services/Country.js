import axios from "axios";

export const getCountries = async () => {
    const url = "https://restcountries.com/v2/all";
    try {
        return (await axios.get(url)).data.map(country => {
            return {
                name: country.name,
                flag: country.flag,
                callingCode: country.callingCodes[0]
            };
        });
    } catch (error) {
        return [];
    }

}