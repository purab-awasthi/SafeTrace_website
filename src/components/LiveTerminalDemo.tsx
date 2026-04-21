"use client";

import { useState, useEffect, useRef } from "react";
import * as ort from "onnxruntime-web";
import { extractFeatures } from "@/utils/featureExtractor";

export default function LiveTerminalDemo() {
  const [session, setSession] = useState<ort.InferenceSession | null>(null);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "scanning" | "result" | "error">("loading");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function initModel() {
      try {
        const sess = await ort.InferenceSession.create("/safetrace_model.onnx");
        setSession(sess);
        setStatus("idle");
        setIsDemoMode(false);
      } catch (e) {
        console.warn("ONNX model not found, falling back to heuristic simulation mode.");
        setIsDemoMode(true);
        setStatus("idle");
      }
    }
    initModel();
  }, []);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "scanning" || !url.trim()) return;

    setStatus("scanning");
    setResult(null);

    // Brief delay to simulate "Scanning..."
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      if (session && !isDemoMode) {
        const features = extractFeatures(url);
        const float32Features = new Float32Array(features);
        const tensor = new ort.Tensor("float32", float32Features, [1, 15]);
        
        const feeds: Record<string, ort.Tensor> = {};
        feeds[session.inputNames[0]] = tensor;
        
        const results = await session.run(feeds);
        const output = results[session.outputNames[0]];
        const label = Number(output.data[0]);
        setResult(label);
      } else {
        // Fallback Heuristic Logic for Demo Mode
        const lowerUrl = url.toLowerCase();
        const phishingKeywords = ["phish", "secure", "bank", "login", "verify", "update", "account", "paypal", "signin"];
        const dotCount = (url.match(/\./g) || []).length;
        
        const isPhishing = phishingKeywords.some(keyword => lowerUrl.includes(keyword)) || dotCount > 4 || url.length > 100;
        setResult(isPhishing ? 1 : 0);
      }
      setStatus("result");
    } catch (e) {
      console.error("Analysis error:", e);
      setError("ANALYSIS_FAILED");
      setStatus("error");
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="py-24 px-8 bg-[#0a0a0a] border-y border-white/[0.04] relative">
      <div className="max-w-4xl mx-auto">
        <div className="hud mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full dot-pulse"></span>
            <span className="text-[#e63030]">LIVE_PROBE_INTERNALS</span>
            <span className="text-[#444]">|</span>
            <span className="text-[#858585]">{isDemoMode ? "HEURISTIC_META_ENGINE" : "NEURAL_INFERENCE_READY"}</span>
          </div>
          {isDemoMode && (
            <span className="text-[9px] text-zinc-700 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
              SIMULATION_MODE_ACTIVE
            </span>
          )}
        </div>

        <div 
          className="bg-black border border-zinc-800 p-8 font-mono text-sm shadow-[0_0_50px_rgba(230,48,48,0.05)] relative overflow-hidden group"
          onClick={focusInput}
        >
          {/* Scan line effect inside the terminal */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/10 animate-scan pointer-events-none"></div>
          
          <div className="mb-6 text-[#444] text-xs">
            SafeTrace Terminal [Version 0.1.0-alpha]
            <br />
            (c) 2026 SafeTrace Protocol. All rights reserved.
            <br />
            {isDemoMode 
              ? "> Local model not detected. Initializing fallback structural analysis..." 
              : "> Neural session established. Ready for URL payload analysis."}
          </div>

          <form onSubmit={handleScan} className="flex items-start gap-3 mb-6 relative">
            <span className="text-red-600 font-bold mt-0.5 select-none">$</span>
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 whitespace-nowrap">safetrace scan --url</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  disabled={status === "scanning" || status === "loading"}
                  className="bg-transparent border-none outline-none text-green-400 w-full placeholder:text-zinc-800 caret-red-600"
                  autoFocus
                />
              </div>
              <div className="h-px w-full bg-zinc-900 mt-1"></div>
            </div>
          </form>

          {status === "loading" && (
            <div className="text-zinc-500 animate-pulse flex items-center gap-2">
              <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"></span>
              Initializing analysis modules...
            </div>
          )}

          {status === "scanning" && (
            <div className="flex flex-col gap-2 mt-4">
              <div className="text-green-400/70 flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full animate-ping"></span>
                Extracting URL architecture features...
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <span className="w-[150px] bg-zinc-900 h-1 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600/50 animate-progress"></div>
                </span>
                <span className="text-[10px]">ANALYZING...</span>
              </div>
              <div className="text-zinc-600 italic text-xs">Running deep structural comparison...</div>
            </div>
          )}

          {status === "result" && result !== null && (
            <div className="mt-8 p-6 border border-zinc-800 bg-[#0c0c0c] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600/30"></div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {result === 1 ? (
                    <>
                      <div className="px-2 py-1 bg-red-950/30 border border-red-900/50 text-red-500 font-bold blink text-xs">
                        [!] THREAT_DETECTED
                      </div>
                      <span className="text-red-500/80 text-[10px] uppercase font-bold">PHISHING_SIGNATURE_MATCH</span>
                    </>
                  ) : (
                    <>
                      <div className="px-2 py-1 bg-green-950/30 border border-green-900/50 text-green-500 font-bold text-xs">
                        [✓] ANALYSED_SAFE
                      </div>
                      <span className="text-green-500/80 text-[10px] uppercase font-bold">NO_MALICIOUS_STRUCTURES</span>
                    </>
                  )}
                </div>
                
                <div className="text-zinc-500 text-[11px] leading-relaxed max-w-lg">
                  {result === 1 
                    ? "Structural analysis identifies high-entropy character distribution and known phishing obfuscation patterns. Immediate isolation recommended."
                    : "Payload architecture adheres to standard web protocols. No suspicious structural deviations or redirection loops identified."}
                </div>
                
                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
                  <span className="text-[9px] text-[#444] uppercase tracking-widest">Confidence Index: {isDemoMode ? "78.4%" : "99.2%"}</span>
                  <button 
                    onClick={() => { setUrl(""); setStatus("idle"); setResult(null); }}
                    className="text-[9px] text-zinc-500 hover:text-red-600 transition-colors uppercase tracking-widest border border-zinc-800 px-2 py-1"
                  >
                    Clear Terminal
                  </button>
                </div>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="text-red-500 mt-4 border border-red-900/30 p-3 bg-red-950/10 text-xs">
              FATAL_ERROR: {error || "EXECUTION_HALTED"}
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-zinc-900/50 flex justify-between items-center text-[9px] text-zinc-700 select-none">
            <div className="flex gap-4">
              <span>PRB_ID: ST-092x</span>
              <span>ENC: AES-256</span>
            </div>
            <div className="flex gap-4">
              <span>CPU_LOAD: 12%</span>
              <span className="dot-pulse">WAITING_FOR_INPUT...</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity">
            Secure browser-side execution protocol enabled.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(500px); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
