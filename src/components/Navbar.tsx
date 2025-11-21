// Modified from example in
// Flowbite website (https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars)

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { useTheme } from '../contexts/useTheme';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { NavLink } from 'react-router-dom';

const navigation = [
	{ name: 'About Me', href: '' },
	{ name: 'Projects', href: 'projects' },
	{ name: 'Experience', href: 'experience' },
	{ name: 'Competitions', href: 'competitions' },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	// const { theme, toggleTheme } = useTheme();
	return (
		<Disclosure
			as="nav"
			className="relative bg-brand-accent dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-brand-bg"
		>
			{/* make this wrapper full width so navbar is full-bleed (no large centered margins) */}
			<div className="w-full px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button*/}
						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-brand-text hover:bg-brand-bg hover:text-brand-text focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-open:hidden" />
							<XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-open:block" />
						</DisclosureButton>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className={({ isActive }: { isActive: boolean }) =>
											classNames(
												isActive
													? 'bg-brand-card text-brand-text'
													: 'text-brand-text hover:bg-brand-card hover:text-brand-muted',
												'rounded-md px-3 py-2 text-sm font-medium'
											)
										}
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</div>

					{/* right-side controls: keep in flow (not absolute) so toggle aligns properly */}
					<div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<AnimatedThemeToggler />
					</div>
				</div>
			</div>

			<DisclosurePanel className="sm:hidden">
				<div className="grid grid-cols-2 grid-rows-2 gap-2 px-2 pt-2 pb-3">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as={NavLink}
							to={item.href}
							className={({ isActive }: { isActive: boolean }) =>
								classNames(
									isActive
										? 'bg-brand-card text-brand-text'
										: 'text-brand-text hover:bg-brand-card hover:text-brand-muted',
									'rounded-md px-3 py-2 text-sm font-medium text-center'
								)
							}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}
