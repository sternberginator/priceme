const data = require('../data/example.json');

export const priceCalculator = ({
    commodity,
    tons,
    pricePerTon,
}: {
    commodity: string,
    tons: number,
    pricePerTon: number,
}) => {
    return data.filter((d) => d.COMMODITY_NAME === commodity).map((d) => {
        const fixedOverhead = Number(d.FIXED_OVERHEAD);
        const adjustedPricePerTon = pricePerTon + Number(d.VAR_OVERHEAD);
        return {
            countryCode: d.COUNTRY,
            pricePerTon: adjustedPricePerTon,
            fixedOverhead,
            totalCost: adjustedPricePerTon * tons + fixedOverhead,
        };
    });
};
