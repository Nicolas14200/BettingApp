import cc from "currency-codes";

export class currencyCode {
        getCurrencyByCountry(country: string) {
            const countryCurrency = cc.country(country);
            return countryCurrency[0].code;
        }
}