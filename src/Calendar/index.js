import { CalendarHead, HeadDay, SevenColGrid, CalendarBody, StyledDay, Wrapper, StyledEvent,  } from "./styled";
import { DAYS, MONTHS} from "./const";
import { areDatesTheSame, getDaysInMonth, getSortedDays, range, getDateObj, getRandomDarkerColor } from "./utils";
import {useState} from 'react';

// dynamic of the calendar
export const Calendar = ({startingDate, eventsArr, addEvent}) => {
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
    const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);

    // increment month or year and prevent the month goes out of bound
    const nextMonth = () => {
        if (currentMonth < 11){
            setCurrentMonth(prev => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
    }
    // decrement month or year and prevent the month goes out of bound
    const prevMonth = () => {
        if (currentMonth > 0){
            setCurrentMonth(prev => prev - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    }

    const onAddEvent = (date) => {
        addEvent(date, getRandomDarkerColor());
    }

    return (
    <Wrapper>
        <CalendarHead>
            <ion-icon 
                onClick={prevMonth} 
                name="caret-back-circle-outline"
            ></ion-icon>
            <p>{MONTHS[currentMonth]} {currentYear}</p>
            <ion-icon 
                onClick={nextMonth} 
                name="caret-forward-circle-outline"
            ></ion-icon>
        </CalendarHead>
        <SevenColGrid>
            {getSortedDays(currentMonth, currentYear).map((day) => (
                <HeadDay>{day}</HeadDay>
            ))}
        </SevenColGrid>
        <CalendarBody>
            {range(getDaysInMonth(currentMonth, currentYear)).map((day) => (
                <StyledDay 
                onClick={() => 
                    onAddEvent(getDateObj(day, currentMonth, currentYear))
                }
                    active={areDatesTheSame(
                    new Date(), 
                    getDateObj(day, currentMonth, currentYear)
                )}
                >
                    <p>{day}</p>

                    {eventsArr.map(
                        (ev) => 
                            areDatesTheSame(
                                getDateObj(day, currentMonth, currentYear), 
                                ev.date
                            ) && <StyledEvent bgColor={ev?.color}>{ev.title}</StyledEvent>
                    )}
                </StyledDay>
            ))}
        </CalendarBody>
    </Wrapper>
    );
};