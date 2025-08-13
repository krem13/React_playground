export interface TruckCardProps {
  page: string;
  id: string;
  name: string | "";
  type: string | "";
  startPrice: string | "";
  currency: string | "";
  pictureUrl: string | "";
  logoUrl: string | "";
  specifications: {
    energySource: string | "";
    gvwrMin: string | "";
    gvwrMax: string | "";
    payloadMin: string | "";
    payloadMax: string | "";
    capacityMin: string | "";
    capacityMax: string | "";
  };
  timestamp: string | "";
}
