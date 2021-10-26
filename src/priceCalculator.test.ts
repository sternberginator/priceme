import { priceCalculator } from '../build/priceCalculator';

describe('priceCalculator', () => {
    describe('given a commodity with existing price data', () => {
        it('should return price information', () => {
            const res = priceCalculator({
                commodity: 'orange',
                tons: 10,
                pricePerTon: 10,
            });
            expect(res[0]).toEqual({
                countryCode: 'IN',
                pricePerTon: 11,
                fixedOverhead: 25,
                totalCost: 135,
            });
            expect(res[1]).toEqual({
                countryCode: 'FR',
                pricePerTon: 11.5,
                fixedOverhead: 15,
                totalCost: 130,
            });
        });
    });
});
