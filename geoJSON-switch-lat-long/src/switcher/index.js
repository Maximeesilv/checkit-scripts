import { geoSwitchValidator } from "./validator"

/**
 * Will switch the values of the first index and last one
 * to match lat/lon or lon/lat
 * @param {Array} geoJson - [lat, lon]
 * @returns {Array} - [lon, lat]
 */
export function geoSwitch(geoJson = null) {
    const {error, value} = geoSwitchValidator.validate(geoJson)
    if(error) throw new Error(`GeoJson given not valid: ${value}`)
    return [geoJson[1], geoJson[0]]
}

