import HudOverlay from "@/components/HudOverlay";
import HeroSection from "@/components/Hero";
import LiveTerminalDemo from "@/components/LiveTerminalDemo";
import ThreatProfile from "@/components/Description";
import EvidenceFiles from "@/components/ExecutionProtocol";
import ExecutionLog from "@/components/InteractiveDemo";
import ContactFooter from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HudOverlay />
      <HeroSection />
      <LiveTerminalDemo />
      <ThreatProfile />
      <EvidenceFiles />
      <ExecutionLog />
      <ContactFooter />
    </>
  );
}
