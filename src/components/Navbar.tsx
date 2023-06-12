import { A } from "@solidjs/router";

const Navbar = () => {
	return (
		<header class="w-full shadow-md">
			<main class="mx-auto flex w-full max-w-5xl justify-between p-4 shadow-sm">
				<h1 class="font-sans text-lg md:text-2xl">Stardew Checklist</h1>
				<nav class="flex items-center gap-6">
					<A href="/" class="nav-link" activeClass="underlined">
						Home
					</A>
				</nav>
			</main>
		</header>
	);
};

export default Navbar;
