import { A } from "@solidjs/router";

const Navbar = () => {
	return (
		<header class="w-full bg-[rgba(21,71,148,0.8)] shadow-sm">
			<main class="mx-auto flex w-full max-w-5xl justify-between p-4 shadow-sm">
				<nav class="flex items-center gap-6 font-display text-xl text-white">
					<A
						href="/"
						class="hover:text-yellow-300"
						activeClass="text-yellow-200"
						end
					>
						Bundles
					</A>
					<A
						href="/checklist"
						class="hover:text-yellow-300"
						activeClass="text-yellow-200"
					>
						Checklist
					</A>
				</nav>
			</main>
		</header>
	);
};

export default Navbar;
