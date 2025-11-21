import type { JSX, ReactNode } from 'react';
import LiquidEther from './LiquidEther';

export default function Background({ children }: { children?: ReactNode }): JSX.Element {
	return (
		<div className="relative w-full min-h-screen flex justify-center items-start overflow-hidden">
			<div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
				<LiquidEther
					colors={['var(--accent)', 'var(--react-accent)', 'var(--secondary)']}
					mouseForce={20}
					cursorSize={100}
					isViscous={false}
					viscous={30}
					iterationsViscous={32}
					iterationsPoisson={32}
					resolution={0.5}
					isBounce={false}
					autoDemo={true}
					autoSpeed={0.5}
					autoIntensity={2.2}
					takeoverDuration={0.25}
					autoResumeDelay={3000}
					autoRampDuration={0.6}
				/>
			</div>
			{children}
		</div>
	);
}
