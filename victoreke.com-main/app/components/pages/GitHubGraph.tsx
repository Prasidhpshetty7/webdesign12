"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";

export default function GitHubGraph() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scheme = theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  if (!mounted) {
    return (
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg">
        <div className="h-40 flex items-center justify-center">
          <p className="dark:text-zinc-400 text-zinc-600">Loading GitHub activity...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg">
      <GitHubCalendar
        username="Prasidhpshetty7"
        colorScheme={scheme as "light" | "dark"}
        blockSize={12}
        fontSize={14}
        theme={{
          light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
        }}
      />
    </div>
  );
}
