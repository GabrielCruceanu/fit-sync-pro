export type County = {
  name: string;
  cities: string[];
};

export type Country = {
  name: string;
  counties: County[];
};
export type City = {
  country: string;
  geonameid: number;
  name: string;
  county: string;
};
