import { useState } from "react";
import GreetingSlider from "../components/projectcard";
import AppShell from "../components/navbar"; 
import { DesignerSection } from "../sections/about";

export default function HomeWithGreeting() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-900 shadow-lg relative overflow-hidden">
      {!showMain && <GreetingSlider onFinish={() => setShowMain(true)} />}
      {showMain && (
        <>
          <AppShell />
          <DesignerSection />
        </>
      )}
    </div>
  );
}
