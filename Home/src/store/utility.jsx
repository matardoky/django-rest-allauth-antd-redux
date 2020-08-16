export const UpdateObject = (oldObject, UpdatePropreties) => {
    return {
        ...oldObject, 
        ...UpdatePropreties
    }
}