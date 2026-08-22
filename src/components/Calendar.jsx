import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
} from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("devdashboard-events");
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState("");

  useEffect(() => {
    localStorage.setItem("devdashboard-events", JSON.stringify(events));
  }, [events]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const formatDateKey = (day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const addEvent = () => {
    if (!eventText.trim() || !selectedDate) return;

    setEvents((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), eventText.trim()],
    }));

    setEventText("");
    setSelectedDate(null);
  };

  const deleteEvent = (dateKey, index) => {
    setEvents((prev) => {
      const updatedEvents = {
        ...prev,
        [dateKey]: prev[dateKey].filter((_, i) => i !== index),
      };

      if (updatedEvents[dateKey].length === 0) {
        delete updatedEvents[dateKey];
      }

      return updatedEvents;
    });
  };

  const isToday = (day) => {
    const today = new Date();

    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  const calendarDays = [];

  // Empty spaces before the first day
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Calendar
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Plan your coding sessions, deadlines and tasks.
          </p>
        </div>

        <button
          onClick={goToToday}
          className="self-start sm:self-auto px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition"
        >
          Today
        </button>
      </div>

      {/* Calendar Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden w-full">
        {/* Month Navigation */}
        <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-lg hover:bg-gray-100 transition shrink-0"
          >
            <ChevronLeft size={20} />
          </button>

          <h3 className="text-base sm:text-lg font-semibold text-center">
            {monthName} {year}
          </h3>

          <button
            onClick={goToNextMonth}
            className="p-2 rounded-lg hover:bg-gray-100 transition shrink-0"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day) => (
              <div
                key={day}
                className="py-2 sm:py-3 text-center text-[10px] sm:text-xs md:text-sm font-medium text-gray-500"
              >
                <span className="sm:hidden">{day.charAt(0)}</span>
                <span className="hidden sm:inline">{day}</span>
              </div>
            )
          )}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, index) => {
            if (!day) {
              return (
                <div
                  key={index}
                  className="min-h-16 sm:min-h-24 md:min-h-28 border-r border-b border-gray-100 bg-gray-50/50"
                />
              );
            }

            const dateKey = formatDateKey(day);
            const dayEvents = events[dateKey] || [];

            return (
              <div
                key={day}
                onClick={() => setSelectedDate(dateKey)}
                className="min-h-16 sm:min-h-24 md:min-h-28 border-r border-b border-gray-100 p-1 sm:p-2 cursor-pointer hover:bg-gray-50 transition overflow-hidden"
              >
                {/* Day Number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 text-xs sm:text-sm rounded-full ${
                      isToday(day)
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {day}
                  </span>

                  {dayEvents.length > 0 && (
                    <span className="text-[9px] sm:text-xs text-gray-400">
                      {dayEvents.length}
                    </span>
                  )}
                </div>

                {/* Events */}
                <div className="mt-1 sm:mt-2 space-y-1">
                  {dayEvents.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      onClick={(e) => e.stopPropagation()}
                      className="group flex items-center justify-between gap-1 bg-blue-50 text-blue-700 text-[9px] sm:text-xs px-1 sm:px-2 py-1 rounded-md min-w-0"
                    >
                      <span className="truncate">{event}</span>

                      <button
                        onClick={() =>
                          deleteEvent(dateKey, eventIndex)
                        }
                        className="hidden group-hover:block shrink-0 text-blue-500 hover:text-red-500"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Event Modal */}
      {selectedDate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4"
          onClick={() => setSelectedDate(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-xl shadow-xl p-4 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Add Event
            </h3>

            <p className="text-sm text-gray-500 mt-1 mb-4">
              {selectedDate}
            </p>

            <input
              type="text"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addEvent();
              }}
              autoFocus
              placeholder="e.g. Finish React project"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setSelectedDate(null)}
                className="px-3 sm:px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={addEvent}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                <Plus size={16} />
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;