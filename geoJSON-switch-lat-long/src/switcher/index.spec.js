import { textSync } from 'figlet';
import { geoSwitch } from '.';

describe('geoSwitch', () => {
    test('should make the switch between two values', () => {
        const mockLocation = [5, 6]
        expect(geoSwitch(mockLocation)).toStrictEqual([6, 5])
    })
    test('should throw when input does not respect expected schema', () => {
        const mockLocations = {
            empty: [],
            one: [1],
            tooMuch: [1,2,3]
        };

        expect(() => {geoSwitch(mockLocations.empty)}).toThrow()
        expect(() => {geoSwitch(mockLocations.one)}).toThrow()
        expect(() => {geoSwitch(mockLocations.tooMuch)}).toThrow()
    })
})