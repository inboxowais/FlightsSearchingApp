export const GET_ALL_AIRPORTS = "GET_ALL_AIRPORTS";
export const GET_ALL_AIRPORTS_SUCCESS = "GET_ALL_AIRPORTS_SUCCESS";
export const GET_ALL_AIRPORTS_ERROR = "GET_ALL_AIRPORTS_ERROR";

export function getAirPorts() {
    return {
        type : GET_ALL_AIRPORTS,
        url :  'v1/flights/airports/fetch?codes=BOM,DEL,BKK,BLR,PNQ,HYD,CCU,MAA,GOI,DXB,SIN,KTM,AUH,SHJ,NYC,LON,HKG,SFO,LHR,CDG',
    }
}
