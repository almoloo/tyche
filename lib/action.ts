'use server';

import { UploadIPFS, UploadIPFSResult } from './definitions';

export const uploadDataToIPFS = async (
	data: object,
	fileName: string
): Promise<UploadIPFS<typeof data>> => {
	const opt = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.PINATA_JWT}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			pinataOptions: {
				cidVersion: 1,
				groupId: 'tyche',
			},
			pinataMetadata: {
				name: `${fileName}.json`,
			},
			pinataContent: data,
		}),
	};

	const response = await fetch(
		'https://api.pinata.cloud/pinning/pinJSONToIPFS',
		opt
	);
	if (!response.ok) {
		throw new Error('Failed to upload data to IPFS');
	}
	const result: UploadIPFSResult = await response.json();
	return {
		IpfsHash: result.IpfsHash,
		data,
	};
};

export const generateRandomIndex = (length: number) => {
	const from = 0;
	const to = length - 1;
	const random = Math.floor(Math.random() * (to - from + 1) + from);
	return random;
};
