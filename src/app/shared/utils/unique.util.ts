
// Concat time and random to create a unique identifier
export const getUniqueString = ()=>{
    return Math.random().toString(36) + (new Date()).getTime().toString();
}
