"use client";

import { useState } from "react";
import Icon from "../shared/Icon";
import TrackingSearch from "../shared/TrackingSearch";

function HomeScreen({
  onTrack,
  onNotify,
}: {
  onTrack: () => void;
  onNotify: (message: string) => void;
}) {
  const [trackingCode, setTrackingCode] = useState("");

  return (
    <div className="home-screen">
      <section className="home-hero">
        <p className="home-date">Quinta-feira, 23 de maio</p>
        <h2>Olá, João</h2>
        <p>Acompanhe tudo o que está chegando até você.</p>
        <TrackingSearch
          onSubmit={() => {
            if (trackingCode.trim()) onTrack();
            else onNotify("Digite o código da sua encomenda");
          }}
          value={trackingCode}
          onChange={setTrackingCode}
        />
      </section>

      <section className="home-section active-delivery-section">
        <div className="home-section-title">
          <div>
            <p className="eyebrow">Agora</p>
            <h3>Entrega ativa</h3>
          </div>
          <button onClick={onTrack}>Ver no mapa</button>
        </div>
        <button className="active-delivery-card" onClick={onTrack}>
          <div className="mini-route" aria-hidden="true">
            <svg viewBox="0 0 120 144" preserveAspectRatio="none">
              <path d="M-8 28C25 42 45 32 68 12M22 150c2-45 27-47 42-78s31-24 65-38" />
              <path className="mini-route-path" d="M27 127c5-27 29-30 36-57s25-27 42-36" />
            </svg>
            <span className="mini-truck"><Icon name="truck" size={17} /></span>
            <span className="mini-home"><Icon name="home" size={12} /></span>
          </div>
          <div className="active-delivery-info">
            <div className="active-delivery-top">
              <span><i /> A caminho</span>
              <small>#TRK-482901</small>
            </div>
            <h4>Chega hoje às 14:40</h4>
            <p>Marcus está a 2 paradas de você</p>
            <div className="home-progress"><span /></div>
            <div className="delivery-destination">
              <Icon name="location" size={15} />
              <span>Avenida dos Carvalhos, 1428</span>
            </div>
          </div>
        </button>
      </section>

      <section className="home-section">
        <div className="home-section-title">
          <div>
            <p className="eyebrow">Acesso rápido</p>
            <h3>O que você precisa?</h3>
          </div>
        </div>
        <div className="quick-grid">
          <button onClick={onTrack}>
            <span className="quick-icon green"><Icon name="location" size={22} /></span>
            <strong>Rastrear</strong>
            <small>Em tempo real</small>
          </button>
          <button onClick={() => onNotify("Você tem 1 encomenda a caminho")}>
            <span className="quick-icon sand"><Icon name="box" size={22} /></span>
            <strong>Encomendas</strong>
            <small>Ver todas</small>
          </button>
          <button onClick={() => onNotify("Nenhum endereço salvo recentemente")}>
            <span className="quick-icon blue"><Icon name="home" size={22} /></span>
            <strong>Endereços</strong>
            <small>Gerenciar</small>
          </button>
        </div>
      </section>

      <section className="home-section recent-section">
        <div className="home-section-title">
          <div>
            <p className="eyebrow">Histórico</p>
            <h3>Entregas recentes</h3>
          </div>
          <button onClick={() => onNotify("Mostrando suas entregas recentes")}>Ver todas</button>
        </div>
        <button className="recent-delivery" onClick={() => onNotify("Entrega #TRK-371625 concluída")}>
          <span className="recent-icon"><Icon name="box" size={21} /></span>
          <span className="recent-copy">
            <strong>#TRK-371625</strong>
            <small>Entregue em 18 de maio</small>
          </span>
          <span className="delivered-label">Entregue</span>
          <Icon name="chevron" size={17} />
        </button>
      </section>
    </div>
  );
}

export default HomeScreen;
