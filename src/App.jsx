import React, { useState } from "react";

export default function NomigateApp() {
  const [email, setEmail] = useState("");
  const [log, setLog] = useState([]);

  const sendEmailWithPDF = () => {
    const message = `Correo enviado a ${email}`;
    setLog(prev => [...prev, { message, timestamp: new Date().toLocaleString() }]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Nomigate</h1>
      <input
        type="email"
        placeholder="Correo del empleado"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={sendEmailWithPDF}>Enviar correo</button>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry.timestamp}: {entry.message}</li>
        ))}
      </ul>
    </div>
  );
}
