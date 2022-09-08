export type Room = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: [] | Array<{ url: string; alt?: string }>;
  facilities: [] | Array<{ code: string; name?: string }>;
};
