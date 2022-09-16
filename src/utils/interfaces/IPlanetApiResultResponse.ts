export interface IPlanetResult {
  name: string;
  gravity: string;
  rotation_period: string;
  diameter: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: Date;
  edited: Date;
  url: string;
  residents?: string[] | [] | null;
  films?: string[][] | null;
}
