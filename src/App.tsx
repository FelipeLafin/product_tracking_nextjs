"use client";

import { useState } from "react";
import HomeScreen from "./components/screens/HomeScreen";
import AccountScreen from "./components/screens/AccountScreen";
import PackagesScreen from "./components/screens/PackagesScreen";
import DriverScreen from "./components/screens/DriverScreen";
import TrackingScreen from "./components/screens/TrackingScreen";
import BottomNav from "./components/shared/BottomNav";
import TopBar, { type AppTab } from "./components/shared/TopBar";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("Início");
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="Aplicativo de rastreamento de encomendas">
        <TopBar
          activeTab={activeTab}
          onNavigate={setActiveTab}
          onNotify={notify}
        />

        <div className="scroll-area">
          {activeTab === "Início" && (
            <HomeScreen
              onTrack={() => setActiveTab("Rastreio")}
              onNotify={notify}
            />
          )}

          {activeTab === "Conta" && (
            <AccountScreen onNotify={notify} />
          )}

          {activeTab === "Encomendas" && (
            <PackagesScreen
              onTrack={() => setActiveTab("Rastreio")}
              onNotify={notify}
            />
          )}

          {activeTab === "Motorista" && (
            <DriverScreen onNotify={notify} />
          )}

          {activeTab === "Rastreio" && (
            <TrackingScreen
              onNotify={notify}
              onDriver={() => setActiveTab("Motorista")}
            />
          )}
        </div>

        <BottomNav
          activeTab={activeTab}
          onNavigate={setActiveTab}
        />

        {toast && (
          <div className="toast" role="status">
            {toast}
          </div>
        )}
      </section>
    </main>
  );
}
