'use client';

import { useTheme } from 'next-themes';
import clsx from 'clsx';

interface ThemeSwitchProps {
	className?: string;
}

const ThemeToggle = ({ className }: ThemeSwitchProps) => {
	const { theme, setTheme, resolvedTheme } = useTheme();

	const isDark = theme === 'dark' || resolvedTheme === 'dark';

	return (
		<button
			aria-label="Toggle Dark Mode"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className={clsx(
				'p-1 rounded-full border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 transition-colors',
				className,
			)}
		>
			{isDark ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="size-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="size-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;
