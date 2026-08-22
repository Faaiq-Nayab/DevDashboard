import React from "react";

function StatsCard({ icon, title, value, subtitle, iconBg }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center gap-5 hover:shadow-md transition-all duration-300">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-gray-500 text-sm font-medium select-none">{title}</h3>

        <h1 className="text-4xl font-bold text-gray-900 select-none">{value}</h1>

        <p className="text-gray-400 text-sm mt-1 select-none">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatsCard;