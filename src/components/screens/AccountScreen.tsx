"use client";

import { useState } from "react";
import Icon, { type IconName } from "../shared/Icon";

function AccountScreen({ onNotify }: { onNotify: (message: string) => void }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const accountItems = [
    { icon: "user" as IconName, label: "Dados pessoais", detail: "Nome, telefone e e-mail" },
    { icon: "home" as IconName, label: "Meus endereços", detail: "2 endereços salvos" },
    { icon: "box" as IconName, label: "Preferências de entrega", detail: "Instruções e local seguro" },
  ];

  return (
    <div className="account-screen">
      <section className="profile-hero">
        <div className="profile-avatar">
          <span>JD</span>
          <button aria-label="Alterar foto do perfil" onClick={() => onNotify("Opção para alterar foto aberta")}>+</button>
        </div>
        <h2>João da Silva</h2>
        <p>joao.silva@email.com</p>
        <span className="member-badge">Cliente desde 2022</span>
      </section>

      <section className="account-stats" aria-label="Resumo da conta">
        <div><strong>24</strong><span>Entregas</span></div>
        <i />
        <div><strong>2</strong><span>A caminho</span></div>
        <i />
        <div><strong>4,9</strong><span>Avaliação</span></div>
      </section>

      <section className="account-group">
        <p className="eyebrow">Minha conta</p>
        <div className="settings-card">
          {accountItems.map((item) => (
            <button key={item.label} onClick={() => onNotify(`${item.label} aberto`)}>
              <span className="settings-icon"><Icon name={item.icon} size={19} /></span>
              <span className="settings-copy"><strong>{item.label}</strong><small>{item.detail}</small></span>
              <Icon name="chevron" size={18} />
            </button>
          ))}
        </div>
      </section>

      <section className="account-group">
        <p className="eyebrow">Preferências</p>
        <div className="settings-card">
          <div className="toggle-row">
            <span className="settings-icon"><Icon name="message" size={19} /></span>
            <span className="settings-copy"><strong>Notificações</strong><small>Atualizações sobre suas entregas</small></span>
            <button
              aria-checked={notificationsEnabled}
              aria-label="Ativar ou desativar notificações"
              className={`switch ${notificationsEnabled ? "on" : ""}`}
              onClick={() => {
                setNotificationsEnabled(!notificationsEnabled);
                onNotify(notificationsEnabled ? "Notificações desativadas" : "Notificações ativadas");
              }}
              role="switch"
            >
              <span />
            </button>
          </div>
          <button onClick={() => onNotify("Configurações de privacidade abertas")}>
            <span className="settings-icon"><Icon name="user" size={19} /></span>
            <span className="settings-copy"><strong>Privacidade e segurança</strong><small>Senha e proteção da conta</small></span>
            <Icon name="chevron" size={18} />
          </button>
        </div>
      </section>

      <section className="account-group">
        <p className="eyebrow">Ajuda</p>
        <div className="settings-card">
          <button onClick={() => onNotify("Central de ajuda aberta")}>
            <span className="settings-icon"><Icon name="message" size={19} /></span>
            <span className="settings-copy"><strong>Central de ajuda</strong><small>Fale com a nossa equipe</small></span>
            <Icon name="chevron" size={18} />
          </button>
        </div>
        <button className="logout-button" onClick={() => onNotify("Sessão encerrada com segurança")}>Sair da conta</button>
        <p className="app-version">Rota versão 1.0.0</p>
      </section>
    </div>
  );
}

export default AccountScreen;
