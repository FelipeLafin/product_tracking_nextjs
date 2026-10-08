import Icon, { type IconName } from "./Icon";

export type AppTab = "Início" | "Rastreio" | "Encomendas" | "Conta" | "Motorista";

interface TopBarProps {
  activeTab: AppTab;
  onNavigate: (tab: AppTab) => void;
  onNotify: (message: string) => void;
}

export default function TopBar({ activeTab, onNavigate, onNotify }: TopBarProps) {
  return (
    <header className={`topbar ${activeTab === "Início" ? "home-topbar" : ""}`}>
      {activeTab === "Início" ? (
        <h1 className="brand-mark">
          Panvel <span>Localiza</span>
        </h1>
      ) : (
        <button
          className="icon-button"
          aria-label="Voltar"
          onClick={() =>
            onNavigate(activeTab === "Motorista" ? "Rastreio" : "Início")
          }
        >
          <Icon name="arrow" size={22} />
        </button>
      )}

      <div>
        {activeTab === "Início" ? (
          <h1 className="brand-name">Início</h1>
        ) : activeTab === "Conta" ? (
          <>
            <p className="eyebrow">Perfil</p>
            <h1>Minha conta</h1>
          </>
        ) : activeTab === "Encomendas" ? (
          <>
            <p className="eyebrow">Visão geral</p>
            <h1>Minhas encomendas</h1>
          </>
        ) : activeTab === "Motorista" ? (
          <>
            <p className="eyebrow">Sua entrega</p>
            <h1>Perfil do motorista</h1>
          </>
        ) : (
          <>
            <p className="eyebrow">Encomenda</p>
            <h1>#TRK-482901</h1>
          </>
        )}
      </div>

      <button
        className="avatar"
        aria-label="Abrir perfil"
        onClick={() => onNotify("Perfil aberto")}
      >
        <span>JD</span>
        <i />
      </button>
    </header>
  );
}
