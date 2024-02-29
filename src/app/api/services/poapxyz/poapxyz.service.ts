import { ethers } from 'ethers';

import config from '~/config/config';

import getAccessToken from './getAccessToken';

class PoapXyzService {
  private accessToken: string;

  private apiBaseUrl = 'https://api.poap.tech';

  constructor() {
    this.accessToken = getAccessToken().access_token as string;
  }

  async getClaimQrCode({ hash }: { hash: string }) {
    const response = await fetch(
      `${this.apiBaseUrl}/actions/claim-qr?qr_hash=${hash}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'X-API-KEY': `${config.poapApiKey}`,
        },
      }
    );

    return response.json();
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

    const response = await fetch(
      `${this.apiBaseUrl}/actions/scan/${address}/${eventId}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
          'X-API-KEY': `${config.poapApiKey}`,
        },
      }
    );
    return response.json();
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

    const response = await fetch(`${this.apiBaseUrl}/website/claim`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
        'X-API-KEY': `${config.poapApiKey}`,
      },
      body: JSON.stringify({
        address,
        website,
      }),
    });

    return response.json();
  }
}

export default new PoapXyzService();
