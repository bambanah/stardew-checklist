import Navbar from "@/components/navbar";
import { RouteSectionProps } from "@solidjs/router";

interface Props extends RouteSectionProps {
	title?: string;
}

const Layout = (props: Props) => (
	<>
		<Navbar />
		<main class="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center pb-4 sm:p-4">
			{props.children}
		</main>
	</>
);

export default Layout;
