import * as fs from "fs";
import * as client from "https";
import { ITEMS } from "../src/constants/items";
import { Item } from "../src/types";

const getDownloadUrlBaseUrl =
	"https://stardewcommunitywiki.com/mediawiki/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=File:";

interface ImageInfoResponse {
	query: {
		pages: { imageinfo: { url: string }[] }[];
	};
}

const downloadImage = async (localPath: string): Promise<string | void> => {
	const imageName = localPath.split("/").slice(-1);

	const downloadUrl = await fetch(getDownloadUrlBaseUrl + imageName)
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
				// Consume response data to free up memory
				res.resume();
				reject(
					new Error(`Request Failed With a Status Code: ${res.statusCode}`)
				);
			}
		});
	});
};

const requiredImages = Object.values(ITEMS).map(
	(item: Item) => item.iconPath ?? item.name.replaceAll(" ", "_")
);

const missingImages = requiredImages
	.map(
		(img) => `public/images${img.startsWith("/") ? img : `/items/${img}.png`}`
	)
	.filter((path) => {
		return !fs.existsSync(path);
	});

const downloadedImages: string[] = [];

for (const image of missingImages) {
	downloadImage(image).then((downloadedImage) => {
		if (downloadedImage) downloadedImages.push(downloadedImage);
	});
}
