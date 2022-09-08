export type Hotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: [] | Array<{ code: string; name?: string }>;
  telephone: string;
  email: string;
  images: [] | Array<{ url: string; alt?: string }>;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    latitude?: number;
    longitude?: number;
    timezone: string;
  };
};
