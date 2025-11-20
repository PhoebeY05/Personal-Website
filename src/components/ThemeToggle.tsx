import React from 'react';
import { useTheme } from '../contexts/useTheme';

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			aria-label="Toggle theme"
			onClick={toggleTheme}
			style={{
				position: 'absolute',
				right: 16,
				top: 16,
				padding: '0.5rem',
				borderRadius: 6,
				border: 'none',
				background: 'transparent',
				color: 'var(--text)',
				cursor: 'pointer',
			}}
		>
			{theme === 'light' ? '🌙' : '☀️'}
		</button>
	);
};

export default ThemeToggle;
