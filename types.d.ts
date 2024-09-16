type PoapData = {
  event: {
    id: number;
    name: string;
    image_url: string;
    year: number;
    start_date: string;
    end_date: string;
    expiry_date: string;
  };
  tokenId: string;
  chain: string;
  statusCode?: number;
};
