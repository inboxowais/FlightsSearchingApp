export const SET_SOURCE = "SET_SOURCE"
export const SET_DESTINATION = "SET_DESTINATION"
export const SET_PICK_DATE = "SET_PICK_DATE"
export const SET_DROP_DATE = "SET_DROP_DATE"
export const SET_ADULTS = "SET_ADULTS"
export const SET_CHILDREN = "SET_CHILDREN"
export const SET_INFANTS = "SET_INFANT"
export const SET_CLASS = "SET_CLASS"


export function setSoure(data) {
    return {
        type: SET_SOURCE,
        data
    }
}

export function setDestination(data) {
    return {
        type: SET_DESTINATION,
        data
    }
}

export function setPickDate(data) {
    return {
        type: SET_PICK_DATE,
        data
    }
}

export function setDropDate(data) {
    return {
        type: SET_DROP_DATE,
        data
    }
}

export function setClass(data) {
   return {
       type : SET_CLASS,
       data
    }
}
export function setAdults(data) {
    return {
        type: SET_ADULTS,
        data
    }
}

export function setChildren(data) {
    return {
        type: SET_CHILDREN,
        data
    }
}

export function setInfants(data) {
    return {
        type: SET_INFANTS,
        data
    }
}