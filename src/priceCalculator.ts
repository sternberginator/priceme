const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, '../data/example.json'));
const data = JSON.parse(raw);

interface UserInput {
    commodity: string,
    tons: number,
    pricePerTon: number,
};
interface ComputedCountryPrice {
    countryCode: string,
    pricePerTon: number,
    fixedOverhead: number,
    totalCost: number,
};

export const priceCalculator = ({
    commodity,
    tons,
    pricePerTon,
}: UserInput): ComputedCountryPrice[] => {
    const res = data.filter((d) => d.COMMODITY_NAME === commodity).map((d) => {
        const fixedOverhead = Number(d.FIXED_OVERHEAD);
        const adjustedPricePerTon = pricePerTon + Number(d.VAR_OVERHEAD);
        return {
            countryCode: d.COUNTRY,
            pricePerTon: adjustedPricePerTon,
            fixedOverhead,
            totalCost: adjustedPricePerTon * tons + fixedOverhead,
        };
    });
    res.sort((a, b) => b.totalCost - a.totalCost);
    return res;
};
