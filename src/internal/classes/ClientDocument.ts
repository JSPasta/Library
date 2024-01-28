import { Document } from './Document';
import type { Client } from './Client';
import type { IClientDocument } from '../interfaces/response/ClientDocument';

export class ClientDocument extends Document implements IClientDocument {
	secret: string;

	public constructor(
		client: Client,
		{ key, secret, data, url, password, expirationTimestamp }: IClientDocument
	) {
		super(client, { key, data, url, password, expirationTimestamp });

		this.secret = secret;
	}
}
