"use client";

import { useState } from "react";
import Icon from "../shared/Icon";
import { deliveries, type PackageStatus } from "../../data/deliveries";

function PackagesScreen({
  onTrack,
  onNotify,
}: {
  onTrack: () => void;
  onNotify: (message: string) => void;
}) {
  const [filter, setFilter] = useState<"Todas" | PackageStatus>("Todas");
  const filters: Array<"Todas" | PackageStatus> = ["Todas", "A caminho", "Preparando", "Entregue"];
  const visibleDeliveries = filter === "Todas"
    ? deliveries
    : deliveries.filter((delivery) => delivery.status === filter);

  return (
    <div className="packages-screen">
      <section className="packages-summary">
        <div>
          <span className="summary-icon"><Icon name="truck" size={21} /></span>
          <strong>1</strong>
          <small>A caminho</small>
        </div>
        <div>
          <span className="summary-icon sand"><Icon name="clock" size={21} /></span>
          <strong>1</strong>
          <small>Preparando</small>
        </div>
        <div>
          <span className="summary-icon gray"><Icon name="box" size={21} /></span>
          <strong>24</strong>
          <small>Entregues</small>
        </div>
      </section>

      <div className="package-filters" aria-label="Filtrar encomendas">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            key={item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="packages-list">
        <div className="packages-list-heading">
          <div>
            <p className="eyebrow">Suas entregas</p>
            <h2>{filter === "Todas" ? "Todas as encomendas" : filter}</h2>
          </div>
          <span>{visibleDeliveries.length} {visibleDeliveries.length === 1 ? "encomenda" : "encomendas"}</span>
        </div>

        <div className="delivery-list">
          {visibleDeliveries.map((delivery) => (
            <article className={`delivery-list-card ${delivery.status === "A caminho" ? "featured" : ""}`} key={delivery.id}>
              <div className={`delivery-box-visual ${delivery.accent}`}>
                <Icon name="box" size={27} />
                <span>{delivery.description.split(" ")[0]}</span>
              </div>
              <div className="delivery-list-copy">
                <div className="delivery-id-row">
                  <small>{delivery.id}</small>
                  <span className={`package-status ${delivery.accent}`}><i />{delivery.status}</span>
                </div>
                <h3>{delivery.title}</h3>
                <p>{delivery.description}</p>
                <div className="delivery-date"><Icon name={delivery.status === "A caminho" ? "clock" : "location"} size={14} />{delivery.date}</div>
                {delivery.status === "A caminho" && (
                  <>
                    <div className="package-route-progress"><span /></div>
                    <div className="package-card-actions">
                      <button onClick={onTrack}>Acompanhar entrega</button>
                      <button aria-label="Mais informações" onClick={() => onNotify("Detalhes da encomenda abertos")}><Icon name="chevron" size={17} /></button>
                    </div>
                  </>
                )}
                {delivery.status !== "A caminho" && (
                  <button
                    className="details-link"
                    onClick={() => onNotify(`Detalhes da encomenda ${delivery.id} abertos`)}
                  >
                    Ver detalhes <Icon name="chevron" size={15} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PackagesScreen;
