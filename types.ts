
export enum Tag {
  FUNNY = 'Funny',
  FAITH = 'Faith',
  HOLIDAY = 'Holiday',
  RETRO = 'Retro',
  COZY = 'Cozy',
}

export interface Shirt {
  id: number;
  name: string;
  caption: string;
  imageUrl: string;
  etsyUrl: string;
  tags: Tag[];
}