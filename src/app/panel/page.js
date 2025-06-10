'use client';
import { useEffect, useState } from "react";

export default function PanelPage() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    fetch("/api/track-click")
      .then(res => res.json())
      .then(data => setClicks(data));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Panel de clicks</h1>
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr><th>#</th><th>Fingerprint</th><th>Fecha/Hora</th></tr>
        </thead>
        <tbody>
          {clicks.map((c, i) => (
            <tr key={i}><td>{i + 1}</td><td>{c.fingerprint}</td><td>{new Date(c.time).toLocaleString()}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
