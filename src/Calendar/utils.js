import { DAYS} from "./const";

export const range = (end) => {
    const {result} = Array.from({length:end}).reduce(
        ({result, current}) => ({
            result: [...result, current],
            current: current + 1
        }),
        {result: [], current: 1}
    );
    return result;
};
/* 
    Return the days of the specific month
    For example: getDaysInMonth(1, 2024) would return 31, 
    indicating that January 2024 has 31 days.
*/
export const getDaysInMonth = (month, year) => {

    return new Date(year, month + 1, 0).getDate();
};

/* 
    Returns an array of the days of the week, 
    starting from a given day, sorted in chronological order.
*/
export const getSortedDays = (month, year) => {
    const dayIndex = new Date(year, month, 1).getDay();
    return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)]
};

export const getDateObj = (day, month, year) => {
    return new Date(year, month, day);
};

// highlight today's date
export const areDatesTheSame =  (first, second) => {
    return (
        first.getFullYear() === second.getFullYear() && 
        first.getMonth() === second.getMonth() && 
        first.getDate() === second.getDate()
    );
};

export const getRandomDarkerColor = () => {
    let color  = "#";
    for(let i = 0; i < 6; i++){
        color += Math.floor(Math.random() * 10)
    }
    return color;
};
