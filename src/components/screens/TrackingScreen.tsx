"use client";

import { useState } from "react";
import Icon from "../shared/Icon";
import { packageItems } from "../../data/packageItems";

interface TrackingScreenProps {
  onNotify: (message: string) => void;
  onDriver: () => void;
}

export default function TrackingScreen({ onNotify, onDriver }: TrackingScreenProps) {
  const [showItems, setShowItems] = useState(false);

  return (
    <div>
                <section className="map" aria-label="Mapa ao vivo mostrando a localização do caminhão">
                  <svg className="map-lines" viewBox="0 0 430 290" preserveAspectRatio="none" aria-hidden="true">
                    <path className="road road-wide" d="M-20 238C72 190 108 233 185 174S299 70 460 41" />
                    <path className="road" d="M-17 80C82 101 141 101 206 52S350 12 454 3" />
                    <path className="road" d="M54 -10C76 53 82 107 52 173S34 267 50 309" />
                    <path className="road" d="M311 -10C306 64 296 121 341 182S400 241 392 309" />
                    <path className="road road-small" d="M-10 157 88 137l70 21 75-49 77 15 130-54" />
                    <path className="road road-small" d="m115 302 23-80 62-26 73 24 55-45" />
                    <path className="route-shadow" d="M371 49C310 70 288 104 260 144s-59 67-93 76-62 17-105 21" />
                    <path className="route-line" d="M371 49C310 70 288 104 260 144s-59 67-93 76-62 17-105 21" />
                  </svg>
                  <span className="map-label label-one">Beira-Rio</span>
                  <span className="map-label label-two">Parque Norte</span>
                  <div className="destination-pin" aria-label="Destino da entrega">
                    <Icon name="home" size={17} strokeWidth={2.2} />
                  </div>
                  <div className="truck-pin" aria-label="O caminhão está próximo ao Parque Norte">
                    <span className="pulse" />
                    <span className="truck-icon"><Icon name="truck" size={24} strokeWidth={2.1} /></span>
                  </div>
                  <div className="live-pill"><span /> Localização ao vivo</div>
                  <button className="recenter" aria-label="Recentralizar mapa" onClick={() => notify("Mapa centralizado no seu motorista")}>
                    <Icon name="location" size={19} />
                  </button>
                </section>

                <section className="delivery-card">
                  <div className="status-row">
                    <div>
                      <span className="status-chip"><i /> A caminho</span>
                      <p className="status-update">Atualizado agora</p>
                    </div>
                    <div className="eta">
                      <span>Chegada estimada</span>
                      <strong>14:40</strong>
                      <small>25–35 min</small>
                    </div>
                  </div>
                  <div className="progress-track"><span /></div>
                  <div className="progress-labels">
                    <span>Coletado</span>
                    <span>Em trânsito</span>
                    <span>Entregue</span>
                  </div>
                  <div className="next-stop">
                    <span className="next-icon"><Icon name="route" size={20} /></span>
                    <div>
                      <small>Próxima parada</small>
                      <strong>Avenida dos Carvalhos, 1428</strong>
                      <p>2 paradas antes de você</p>
                    </div>
                  </div>
                </section>

                <section className="content-section">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Dentro do caminhão</p>
                      <h2>Sua encomenda</h2>
                    </div>
                    <span className="count-badge">3 itens</span>
                  </div>
                  <button className="package-card" onClick={() => setShowItems(!showItems)} aria-expanded={showItems}>
                    <span className="package-visual"><Icon name="box" size={30} strokeWidth={1.6} /></span>
                    <span className="package-copy">
                      <strong>Box #BX-1038</strong>
                      <small>Caixa média · 4,8 kg</small>
                      <em>Carregada às 11:24</em>
                    </span>
                    <span className={`chevron ${showItems ? "open" : ""}`}><Icon name="chevron" size={19} /></span>
                  </button>
                  {showItems && (
                    <div className="item-list">
                      {packageItems.map((item) => (
                        <div className="item-row" key={item.name}>
                          <span>{item.code}</span>
                          <div><strong>{item.name}</strong><small>{item.detail}</small></div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                <section className="content-section driver-section">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Seu motorista</p>
                      <h2>Conheça o Marcus</h2>
                    </div>
                    <span className="rating">★ 4.9</span>
                  </div>
                  <div className="driver-card">
                    <button className="driver-profile-link" onClick={onDriver}>
                      <div className="driver-photo">
                        <img
                          alt="Marcus Thompson"
                          src="https://images.unsplash.com/photo-1551825687-f9de1603ed8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=180&h=180"
                        />
                      </div>
                      <span className="driver-info">
                        <strong>Marcus Thompson</strong>
                        <span>Ford Transit prata · TX 84K-291</span>
                        <small>Toque para ver o perfil</small>
                      </span>
                    </button>
                    <div className="driver-actions">
                      <button aria-label="Enviar mensagem para Marcus" onClick={() => notify("Iniciando uma mensagem para Marcus")}><Icon name="message" size={20} /></button>
                      <button className="call" aria-label="Ligar para Marcus" onClick={() => notify("Ligando para Marcus…")}><Icon name="call" size={19} /></button>
                    </div>
                  </div>
                </section>
    </div>
  );
}
