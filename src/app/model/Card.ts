export interface Card {
id?: number;
 name?: string;
  manaCost?: string;
  convertedManaCost?: number;
  colors?: string;
  type?: string[];
  text?: string;
  power?: string;
  toughness?: string;
  imageUrl?: string | ArrayBuffer | null;
}
