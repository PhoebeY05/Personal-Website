import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<main className="relative min-h-screen text-brand-text p-6 md:p-12 z-10 grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-indigo-accent">404</p>
				<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-brand-text sm:text-7xl">
					Page not found
				</h1>
				<p className="mt-6 text-lg font-medium text-pretty text-brand-text sm:text-xl/8">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						to="/"
						className="rounded-md bg-brand-accent px-3.5 py-2.5 text-sm font-semibold text-brand-text shadow-xs hover:bg-brand-bg hover:outline-brand-react hover:outline-2"
					>
						Go back home
					</Link>
					<Link
						to="/projects"
						className="text-sm font-semibold text-brand-text rounded-md px-3.5 py-2.5 outline-brand-accent outline-2 hover:bg-brand-react hover:outline-0"
					>
						See All Projects <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</div>
		</main>
	);
}
