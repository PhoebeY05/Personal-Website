import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	setTheme: (t: Theme) => void;
	toggleTheme: () => void;
}

const THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(() => {
		try {
			const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(THEME_KEY) : null;
			if (stored === 'light' || stored === 'dark') return stored;
			const prefersDark =
				typeof window !== 'undefined' &&
				typeof window.matchMedia === 'function' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches;
			return prefersDark ? 'dark' : 'light';
		} catch {
			return 'light';
		}
	});

	useEffect(() => {
		try {
			document.documentElement.classList.toggle('dark', theme === 'dark');
			if (typeof localStorage !== 'undefined') localStorage.setItem(THEME_KEY, theme);
		} catch {
			/* ignore */
		}
	}, [theme]);

	const setTheme = (t: Theme) => setThemeState(t);
	const toggleTheme = () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));

	return React.createElement(ThemeContext.Provider, { value: { theme, setTheme, toggleTheme } }, children);
}

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
