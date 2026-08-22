import React from "react";
import {
    TrendingUp,
    TrendingDown,
    CheckCircle2,
    Clock3,
    FolderKanban,
    Target,
} from "lucide-react";

const Analytics = () => {
    const weeklyData = [
        { day: "Mon", hours: 4 },
        { day: "Tue", hours: 6 },
        { day: "Wed", hours: 3 },
        { day: "Thu", hours: 7 },
        { day: "Fri", hours: 5 },
        { day: "Sat", hours: 8 },
        { day: "Sun", hours: 4 },
    ];

    const maxHours = Math.max(...weeklyData.map((item) => item.hours));
    const totalHours = weeklyData.reduce((total, item) => total + item.hours, 0);
    const averageHours = totalHours / weeklyData.length;

    const skills = [
        { name: "React", progress: 82 },
        { name: "JavaScript", progress: 76 },
        { name: "Tailwind CSS", progress: 88 },
        { name: "Node.js", progress: 61 },
        { name: "Git & GitHub", progress: 70 },
    ];

    const projects = [
        { name: "DevDashboard", progress: 85 },
        { name: "Weather App", progress: 72 },
        { name: "Spotify Clone", progress: 54 },
        { name: "Portfolio", progress: 91 },
    ];

    return (
        <div className="p-4 space-y-4">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-semibold text-slate-800">
                    Analytics
                </h1>

                <p className="text-sm text-slate-500 mt-0.5">
                    Track your development progress and productivity.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Completed Tasks */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-green-50 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>

                        <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                            <TrendingUp className="w-3.5 h-3.5" />
                            12%
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                        Completed Tasks
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
                        48
                    </h2>
                </div>

                {/* Coding Hours */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Clock3 className="w-5 h-5 text-blue-600" />
                        </div>

                        <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                            <TrendingUp className="w-3.5 h-3.5" />
                            8%
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                        Coding Hours
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
                        {totalHours}h
                    </h2>
                </div>

                {/* Active Projects */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <FolderKanban className="w-5 h-5 text-purple-600" />
                        </div>

                        <span className="text-xs font-medium text-slate-400">
                            This month
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                        Active Projects
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
                        6
                    </h2>
                </div>

                {/* Productivity */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-orange-50 rounded-lg">
                            <Target className="w-5 h-5 text-orange-600" />
                        </div>

                        <span className="flex items-center gap-1 text-xs font-medium text-red-500">
                            <TrendingDown className="w-3.5 h-3.5" />
                            3%
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                        Productivity
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
                        82%
                    </h2>
                </div>
            </div>

            {/* Main Analytics */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {/* Weekly Activity */}
                <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="font-semibold text-slate-800">
                                    Weekly Activity
                                </h2>

                                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-semibold">
                                    THIS WEEK
                                </span>
                            </div>

                            <p className="text-sm text-slate-500 mt-1">
                                Your coding activity over the last 7 days
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-xl font-bold text-slate-800">
                                {totalHours}h
                            </p>

                            <p className="text-xs text-green-600 font-medium">
                                +8.4% this week
                            </p>
                        </div>
                    </div>

                    {/* Weekly Activity Chart */}
                    <div className="mt-6">
                        <div className="relative h-64">
                            {/* Y-Axis */}
                            <div className="absolute left-0 top-0 bottom-7 w-8 flex flex-col justify-between text-[11px] text-slate-400">
                                <span>8h</span>
                                <span>6h</span>
                                <span>4h</span>
                                <span>2h</span>
                                <span>0h</span>
                            </div>

                            {/* Chart Area */}
                            <div className="absolute left-10 right-0 top-0 bottom-7">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="border-t border-slate-100 w-full" />
                                    <div className="border-t border-slate-100 w-full" />
                                    <div className="border-t border-slate-100 w-full" />
                                    <div className="border-t border-slate-100 w-full" />
                                    <div className="border-t border-slate-200 w-full" />
                                </div>

                                {/* Average Line */}
                                <div
                                    className="absolute left-0 right-0 border-t border-dashed border-slate-300"
                                    style={{
                                        bottom: `${(averageHours / maxHours) * 100}%`,
                                    }}
                                >
                                    <span className="absolute right-0 -top-5 text-[10px] font-medium text-slate-400 bg-white pl-2">
                                        Avg. {averageHours.toFixed(1)}h
                                    </span>
                                </div>

                                {/* Bars */}
                                <div className="relative h-full flex items-end justify-between gap-2 sm:gap-4">
                                    {weeklyData.map((item) => {
                                        const height = `${(item.hours / maxHours) * 100}%`;
                                        const isHighest = item.hours === maxHours;

                                        return (
                                            <div
                                                key={item.day}
                                                className="group relative flex-1 h-full flex flex-col justify-end items-center"
                                            >
                                                {/* Hours Label */}
                                                <div
                                                    className={`absolute z-10 text-xs font-semibold text-slate-600 transition-all duration-200 group-hover:-translate-y-1 ${isHighest
                                                            ? "text-blue-600"
                                                            : ""
                                                        }`}
                                                    style={{
                                                        bottom: `calc(${height} + 8px)`,
                                                    }}
                                                >
                                                    {item.hours}h
                                                </div>

                                                {/* Bar */}
                                                <div className="relative w-full h-full flex items-end justify-center">
                                                    <div className="absolute inset-x-0 bottom-0 top-0 rounded-lg bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                                                    <div
                                                        className={`relative z-10 w-full max-w-12 rounded-t-lg cursor-pointer transition-all duration-300 ease-out ${isHighest
                                                                ? "bg-gradient-to-t from-blue-600 to-blue-400 shadow-sm shadow-blue-200"
                                                                : "bg-gradient-to-t from-blue-500 to-blue-400"
                                                            } group-hover:from-blue-600 group-hover:to-blue-500 group-hover:shadow-md group-hover:shadow-blue-100`}
                                                        style={{
                                                            height,
                                                        }}
                                                    >
                                                        {/* Shine */}
                                                        <div className="absolute inset-x-0 top-0 h-1 rounded-full bg-white/30" />

                                                        {/* Tooltip */}
                                                        <div className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-[11px] font-medium text-white opacity-0 scale-95 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
                                                            <div className="font-semibold">
                                                                {item.hours} hours
                                                            </div>

                                                            <div className="text-slate-400 mt-0.5">
                                                                {item.day} activity
                                                            </div>

                                                            <div className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Day */}
                                                <span
                                                    className={`absolute -bottom-6 text-xs font-medium transition-colors ${isHighest
                                                            ? "text-blue-600"
                                                            : "text-slate-400 group-hover:text-slate-600"
                                                        }`}
                                                >
                                                    {item.day}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Chart Footer */}
                        <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-100 pt-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />

                                <span className="text-xs text-slate-500">
                                    Coding activity
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-1.5">
                                    <span className="font-semibold text-slate-700">
                                        {totalHours}h
                                    </span>

                                    <span className="text-slate-400">
                                        this week
                                    </span>
                                </div>

                                <div className="h-3 w-px bg-slate-200" />

                                <div className="flex items-center gap-1.5">
                                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />

                                    <span className="font-medium text-green-600">
                                        8.4%
                                    </span>

                                    <span className="text-slate-400">
                                        vs last week
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Progress */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="font-semibold text-slate-800">
                                Skills Progress
                            </h2>

                            <p className="text-sm text-slate-500 mt-0.5">
                                Your current development skills
                            </p>
                        </div>

                        <span className="text-xs font-medium text-slate-400">
                            5 skills
                        </span>
                    </div>

                    <div className="space-y-5 mt-6">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-sm font-medium text-slate-700">
                                        {skill.name}
                                    </span>

                                    <span className="text-xs text-slate-500">
                                        {skill.progress}%
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${skill.progress}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Project Completion */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-5">
                        <div>
                            <h2 className="font-semibold text-slate-800">
                                Project Completion
                            </h2>

                            <p className="text-sm text-slate-500 mt-0.5">
                                Progress across your active projects
                            </p>
                        </div>

                        <span className="text-xs font-medium text-slate-400">
                            4 projects
                        </span>
                    </div>

                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div key={project.name}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-sm font-medium text-slate-700">
                                        {project.name}
                                    </span>

                                    <span className="text-xs text-slate-500">
                                        {project.progress}%
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${project.progress}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Productivity Summary */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="mb-5">
                        <h2 className="font-semibold text-slate-800">
                            Productivity Summary
                        </h2>

                        <p className="text-sm text-slate-500 mt-0.5">
                            Your performance this week
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 rounded-lg p-3">
                            <p className="text-xs text-slate-500">
                                Tasks Completed
                            </p>

                            <p className="text-xl font-bold text-slate-800 mt-1">
                                24
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-3">
                            <p className="text-xs text-slate-500">
                                Tasks Remaining
                            </p>

                            <p className="text-xl font-bold text-slate-800 mt-1">
                                11
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-3">
                            <p className="text-xs text-slate-500">
                                Avg. Daily Hours
                            </p>

                            <p className="text-xl font-bold text-slate-800 mt-1">
                                {averageHours.toFixed(1)}h
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-3">
                            <p className="text-xs text-slate-500">
                                Current Streak
                            </p>

                            <p className="text-xl font-bold text-slate-800 mt-1">
                                7 days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;