export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly nib: string; // This only read property
  readonly npwp: string; // This only read property
}
