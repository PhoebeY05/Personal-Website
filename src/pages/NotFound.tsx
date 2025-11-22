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
					<a
						href="#"
						className="rounded-md bg-brand-accent px-3.5 py-2.5 text-sm font-semibold text-brand-text shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>
						Go back home
					</a>
					<a href="#" className="text-sm font-semibold text-brand-text">
						Contact Me <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
		</main>
	);
}
