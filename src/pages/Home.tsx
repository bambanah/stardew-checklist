import RoomSection from "@/components/RoomSection";
import Button from "@/components/atoms/Button";
import Display from "@/components/atoms/Display";
import SeasonIcon from "@/components/atoms/SeasonIcon";
import { ROOMS } from "@/constants/rooms";
import { SEASONS } from "@/constants/seasons";
import Layout from "@/layouts/Layout";
import { settingsStore } from "@/store/settings-store";
import { RoomName, Season } from "@/types";
import classNames from "classnames";
import { For, Show } from "solid-js";

export default function Home() {
	const [settings, setSettings] = settingsStore;

	const setActiveSeason = (season?: Season) => {
		setSettings({ ...settings, filterSeason: season });
	};

	return (
		<Layout>
			<div class="mx-auto py-8 text-center">
				<Display
					size="xl"
					class="text-stone-100 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
				>
					Bundle Checklist
				</Display>
			</div>
			<div class="flex flex-col gap-4 md:gap-4">
				<div class="border-menu bundle-background flex flex-col items-center gap-3 p-3">
					<div class="flex w-full flex-wrap justify-center gap-2 md:gap-4">
						<For each={SEASONS}>
							{(season) => (
								<Button
									onClick={() =>
										settings.filterSeason === season
											? setActiveSeason()
											: setActiveSeason(season)
									}
									class={classNames([
										settings.filterSeason &&
											settings.filterSeason !== season &&
											"opacity-50",
									])}
								>
									<SeasonIcon season={season} />
									<span class="hidden sm:inline">
										{season.charAt(0).toUpperCase() + season.slice(1)}
									</span>
								</Button>
							)}
						</For>
						<Button
							class={classNames([
								"mx-8",
								!settings.filterSeasonExclusive && "opacity-60",
							])}
							onClick={() =>
								setSettings({
									...settings,
									filterSeasonExclusive: settings.filterSeasonExclusive
										? undefined
										: true,
								})
							}
						>
							Exclusive
						</Button>
					</div>
					<Show when={settings.filterSeason}>
						<p class="font-display md:text-xl">
							Displaying items
							{settings.filterSeasonExclusive && (
								<span class="text-pink-500"> only</span>
							)}{" "}
							found in {settings.filterSeason}
						</p>
					</Show>
				</div>
				<For each={Object.entries(ROOMS)}>
					{([id, room]) => (
						<RoomSection room={{ ...room, id: id as RoomName }} />
					)}
				</For>
			</div>
		</Layout>
	);
}
