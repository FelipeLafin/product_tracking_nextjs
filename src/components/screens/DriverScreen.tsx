"use client";

import Icon from "../shared/Icon";

function DriverScreen({ onNotify }: { onNotify: (message: string) => void }) {
  return (
    <div className="driver-profile-screen">
      <section className="driver-profile-hero">
        <div className="driver-profile-photo">
          <img
            alt="Marcus Thompson, motorista responsável pela entrega"
            src="https://images.unsplash.com/photo-1551825687-f9de1603ed8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=600&h=600"
          />
          <span aria-label="Motorista online" />
        </div>
        <div className="verified-driver"><span>✓</span> Motorista verificado</div>
        <h2>Marcus Thompson</h2>
        <p>Motorista Sênior · Entregas urbanas</p>
        <div className="driver-profile-actions">
          <button onClick={() => onNotify("Iniciando uma mensagem para Marcus")}><Icon name="message" size={19} />Mensagem</button>
          <button className="primary" onClick={() => onNotify("Ligando para Marcus…")}><Icon name="call" size={18} />Ligar</button>
        </div>
      </section>

      <section className="driver-metrics" aria-label="Indicadores do motorista">
        <div><strong>1.284</strong><span>Entregas</span></div>
        <i />
        <div><strong>4,9 <b>★</b></strong><span>Avaliação</span></div>
        <i />
        <div><strong>4 anos</strong><span>Na empresa</span></div>
      </section>

      <section className="driver-detail-section">
        <div className="driver-section-title">
          <p className="eyebrow">Sobre o motorista</p>
          <h3>Experiência e confiança</h3>
        </div>
        <div className="driver-about-card">
          <p>Marcus faz parte da nossa equipe desde 2020 e é especialista em entregas seguras na região central. É reconhecido pela pontualidade e pelo cuidado com cada encomenda.</p>
          <div className="driver-badges">
            <span><Icon name="clock" size={16} />98% pontual</span>
            <span><Icon name="box" size={16} />Manuseio cuidadoso</span>
          </div>
        </div>
      </section>

      <section className="driver-detail-section">
        <div className="driver-section-title">
          <p className="eyebrow">Veículo atual</p>
          <h3>Identificação da entrega</h3>
        </div>
        <div className="vehicle-detail-card">
          <span className="vehicle-icon"><Icon name="truck" size={29} /></span>
          <div>
            <strong>Ford Transit</strong>
            <p>Prata · Placa TX 84K-291</p>
            <small><i /> Veículo verificado</small>
          </div>
        </div>
      </section>

      <section className="driver-detail-section feedback-section">
        <div className="driver-section-title feedback-title">
          <div>
            <p className="eyebrow">Avaliações recentes</p>
            <h3>O que os clientes dizem</h3>
          </div>
          <span>4,9 ★</span>
        </div>
        <div className="feedback-card">
          <div className="feedback-top">
            <span className="feedback-avatar">AM</span>
            <div><strong>Ana Martins</strong><small>Há 2 dias</small></div>
            <span className="feedback-stars">★★★★★</span>
          </div>
          <p>Entrega muito cuidadosa e antes do prazo. Motorista educado e atencioso.</p>
        </div>
      </section>
    </div>
  );
}

export default DriverScreen;
