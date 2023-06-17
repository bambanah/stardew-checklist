import * as fs from "fs";
import * as client from "https";
import { ITEMS } from "../src/constants/items";
import { Item } from "../src/types";

interface ImageInfoResponse {
	query: {
		pages: { imageinfo: { url: string }[] }[];
	};
}
const downloadImage = async (localPath: string): Promise<string | void> => {
	const imageName = localPath.split("/").slice(-1);

	const downloadUrl = await fetch(
		`https://stardewcommunitywiki.com/mediawiki/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=File:${imageName}`
	)
		.then((res) => res.json())
		.then((res: ImageInfoResponse) => {
			return Object.values(res["query"]["pages"])[0]["imageinfo"][0]["url"];
		})
		.catch(() => {
			console.error("Couldn't find download link for:", imageName);
		});

	if (!downloadUrl) return;

	return new Promise((resolve, reject) => {
		client.get(downloadUrl, (res) => {
			if (res.statusCode === 200) {
				res
					.pipe(fs.createWriteStream(localPath))
					.on("error", reject)
					.once("close", () => {
						console.log("Downloaded:", localPath);
						resolve(localPath);
					});
			} else {
				res.resume();
				reject(
					new Error(`Request Failed With a Status Code: ${res.statusCode}`)
				);
			}
		});
	});
};

const missingImages = Object.values(ITEMS)
	.map((item: Item) => item.iconPath ?? item.name.replaceAll(" ", "_"))
	.map(
		(imageName) =>
			`public/images${
				imageName.startsWith("/") ? imageName : `/items/${imageName}.png`
			}`
	)
	.filter((imagePath) => {
		return !fs.existsSync(imagePath);
	});

for (const image of missingImages) {
	downloadImage(image);
}
