export type PackageStatus = "A caminho" | "Preparando" | "Entregue";

export const deliveries: Array<{
  id: string;
  title: string;
  description: string;
  status: PackageStatus;
  date: string;
  accent: string;
}> = [
  {
    id: "#TRK-482901",
    title: "Fones, tênis e organizador",
    description: "3 itens · Caixa média",
    status: "A caminho",
    date: "Chega hoje, 14:40",
    accent: "green",
  },
  {
    id: "#TRK-593104",
    title: "Cafeteira compacta",
    description: "1 item · Caixa grande",
    status: "Preparando",
    date: "Previsão: 25 de maio",
    accent: "sand",
  },
  {
    id: "#TRK-371625",
    title: "Luminária de mesa",
    description: "1 item · Caixa pequena",
    status: "Entregue",
    date: "Entregue em 18 de maio",
    accent: "gray",
  },
  {
    id: "#TRK-209477",
    title: "Kit de cuidados pessoais",
    description: "4 itens · Caixa média",
    status: "Entregue",
    date: "Entregue em 03 de maio",
    accent: "gray",
  },
];
