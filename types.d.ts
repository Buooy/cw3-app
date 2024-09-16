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

type PoapEvent = {
  id: number;
  fancy_id: string;
  name: string;
  description: string;
  city: string;
  country: string;
  event_url: string;
  image_url: string;
  animation_url: string;
  year: number;
  start_date: string;
  end_date: string;
  expiry_date: string;
  from_admin: boolean;
  virtual_event: boolean;
  event_template_id: number;
  private_event: boolean;
};
