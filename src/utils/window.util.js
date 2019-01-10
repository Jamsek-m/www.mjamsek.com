
export const callWindow = (func) => {
    if (typeof window !== "undefined") {
        func();
    }
};
