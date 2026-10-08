import Icon, { type IconName } from "./Icon";
import type { AppTab } from "./TopBar";

const tabs: Array<{ label: Exclude<AppTab, "Motorista">; icon: IconName }> = [
  { label: "Início", icon: "home" },
  { label: "Rastreio", icon: "location" },
  { label: "Encomendas", icon: "box" },
  { label: "Conta", icon: "user" },
];

interface BottomNavProps {
  activeTab: AppTab;
  onNavigate: (tab: AppTab) => void;
}

export default function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {tabs.map((tab) => (
        <button
          className={activeTab === tab.label || (activeTab === "Motorista" && tab.label === "Rastreio") ? "active" : ""}
          key={tab.label}
          onClick={() => onNavigate(tab.label)}
        >
          <Icon name={tab.icon} size={21} />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
