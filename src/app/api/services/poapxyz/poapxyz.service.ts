/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';

import config from '~/config/config';

import getAccessToken from './getAccessToken';

class PoapXyzService {
  private accessToken: string;

  private apiBaseUrl = 'https://api.poap.tech';

  constructor() {
    this.accessToken = getAccessToken().access_token as string;
  }

  async get({ path }: { path: string }) {
    const response = await fetch(`${this.apiBaseUrl}/${path}`, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
        'X-API-KEY': `${config.poapApiKey}`,
      },
    });
    return response.json();
  }

  async post({ path, body }: { path: string; body: Record<string, any> }) {
    const response = await fetch(`${this.apiBaseUrl}/${path}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
        'X-API-KEY': `${config.poapApiKey}`,
      },
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async getClaimQrCode({ hash }: { hash: string }) {
    return this.get({
      path: `actions/claim-qr?qr_hash=${hash}`,
    });
  }

  async getUserPoapByEvent({
    address,
    eventId,
  }: {
    address: `0x${string}`;
    eventId: string;
  }) {
    if (!ethers.utils.isAddress(address)) {
      throw new Error('Invalid address');
    }

    return this.get({
      path: `actions/scan/${address}/${eventId}`,
    });
  }

  async mintToWallet({
    address,
    website,
  }: {
    address: `0x${string}`;
    website: string;
  }) {
    if (!ethers.utils.isAddress(address)) {
      throw new Error('Invalid address');
    }

    return this.post({
      path: 'actions/mint',
      body: {
        address,
        website,
      },
    });
  }

  async getUserPoaps({
    address,
  }: {
    address: `0x${string}`;
  }): Promise<PoapData[]> {
    if (!ethers.utils.isAddress(address)) {
      throw new Error('Invalid address');
    }

    return this.get({
      path: `actions/scan/${address}`,
    });
  }
}

export default new PoapXyzService();
