export interface UploadIPFSResult {
	IpfsHash: string;
	PinSize: number;
	Timestamp: string;
	isDuplicate: boolean;
}

export interface UploadIPFS<T> {
	IpfsHash: string;
	data: T;
}
