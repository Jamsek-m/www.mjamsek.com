function padValue(value: number): string {
    if (value < 10) {
        return `0${value}`;
    }
    return value.toString(10);
}

export function formatDate(date: Date): string {
    return padValue(date.getDate()) + "." +
        padValue(date.getMonth() + 1) + "." +
        date.getFullYear() + " " +
        padValue(date.getHours()) + ":" +
        padValue(date.getMinutes()) + ":" +
        padValue(date.getSeconds());
}
