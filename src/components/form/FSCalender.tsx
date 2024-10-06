/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useController, Control } from "react-hook-form";

type FSCalendarProps = {
  name: string;
  control: Control<any>;
  label?: string;
  availableDates?: string[]; // Array of available dates in 'YYYY-MM-DD' format
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

const FSCalendar = ({
  name,
  control,
  label,
  availableDates = [], // Default to an empty array if not provided
  setSelectedDate,
}: FSCalendarProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get the previous and next months
  const handlePrevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  const handleNextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );

  // Generate days for the calendar
  const generateCalendarDays = () => {
    const days = [];

    // Get the first and last day of the month in Bangladesh timezone
    const startOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    // Convert dates to Bangladesh timezone
    const bangladeshOffset = 6 * 60; // Bangladesh is UTC+6
    const bangladeshStartOfMonth = new Date(
      startOfMonth.getTime() + bangladeshOffset * 60 * 1000
    );
    const bangladeshEndOfMonth = new Date(
      endOfMonth.getTime() + bangladeshOffset * 60 * 1000
    );

    const startDayOfWeek = bangladeshStartOfMonth.getDay();
    const totalDays = bangladeshEndOfMonth.getDate();

    // Fill in the empty days before the first of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null); // Empty cells for days from the previous month
    }

    // Fill in the actual days of the month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(
        bangladeshStartOfMonth.getFullYear(),
        bangladeshStartOfMonth.getMonth(),
        i+1
      );
      const dateString = date.toISOString().split("T")[0];
      days.push({
        dateString,
        day: i,
        available: availableDates.includes(dateString),
      });
    }
    // console.log(days);
    return days;
  };

  // Handle date selection
  const handleDateSelect = (dateString: string) => {
    setSelectedDate(dateString);
    onChange(dateString); // Set the selected date value in the form
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="text-gray-700 font-medium mb-2">{label}</label>
      )}
      <div className="flex justify-between mb-4">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-2 bg-gray-200 rounded"
        >
          Previous
        </button>
        <span className="font-bold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Days of the week */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {generateCalendarDays().map((dayObj, index) =>
          dayObj ? (
            <button
              type="button"
              key={index}
              className={`p-2 rounded-md ${
                dayObj.available
                  ? "bg-green-200 hover:bg-green-300" // Available dates
                  : "bg-gray-100 cursor-not-allowed" // Unavailable dates
              } ${
                value === dayObj.dateString ? "bg-green-400 text-white" : ""
              }`} // Highlight selected date
              disabled={!dayObj.available}
              onClick={() => handleDateSelect(dayObj.dateString)}
            >
              {dayObj.day}
            </button>
          ) : (
            <div key={index} className="p-2"></div> // Empty cells for previous month
          )
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
    </div>
  );
};

export default FSCalendar;
