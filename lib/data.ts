import { PinataSDK } from 'pinata';

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.NEXT_PUBLIC_PINATA_GATEWAY,
});

export const getDataFromIpfs = async (ipfsHash: string) => {
	const file = await pinata.gateways.get(ipfsHash);
	return file.data as JSON;
};
