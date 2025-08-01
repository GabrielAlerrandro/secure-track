
export interface Vehicle {
  id: string;
  model: string;
  plate: string;
  status: "online" | "offline";
  lastLocation: string;
  isBlocked: boolean;
}

export const mockVehicles: Vehicle[] = [
  {
    id: "1",
    model: "Toyota Corolla",
    plate: "ABC-1234",
    status: "online",
    lastLocation: "Av. Paulista, 1000",
    isBlocked: false,
  },
  {
    id: "2",
    model: "Honda Civic",
    plate: "DEF-5678",
    status: "online",
    lastLocation: "Rua Augusta, 500",
    isBlocked: true,
  },
  {
    id: "3",
    model: "Ford Ranger",
    plate: "GHI-9012",
    status: "offline",
    lastLocation: "Av. Brasil, 2000",
    isBlocked: false,
  },
  {
    id: "4",
    model: "Volkswagen Gol",
    plate: "JKL-3456",
    status: "online",
    lastLocation: "Rua da Consolação, 1500",
    isBlocked: false,
  },
  {
    id: "5",
    model: "Fiat Uno",
    plate: "MNO-7890",
    status: "offline",
    lastLocation: "Av. Santo Amaro, 800",
    isBlocked: true,
  }
];
