"use client";

import { useEffect, useState } from "react";
import styles from "../../../styles/Agent.module.css";

export default function AgentDetail() {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const jsonAgent = localStorage.getItem("selectedAgent");
    if (jsonAgent) {
      setAgent(JSON.parse(jsonAgent));
    }
  }, []);

  if (!agent) {
    return <p>Erro ao carregar os dados do agente.</p>;
  }

  return (
    <main
      className={styles.main}
      style={{
        backgroundImage: `url(${agent.background})`,
        backgroundColor: `#${agent.backgroundGradientColors[1]}`,
      }}
    >
      <h1 style={{ color: `#${agent.backgroundGradientColors[2]}` }}>
        Detalhes do Agente
      </h1>
      <div className={styles.container}>
        <div className={styles.agentArea}>
          <img
            className={styles.img}
            src={agent.fullPortraitV2}
            alt={agent.fullPortraitV2}
          />
        </div>
        <div className={styles.descriptions}>
          <h2 className={styles.tittle}>{agent.displayName}</h2>
          <p className={styles.classe}>
            <img
              className={styles.icon}
              src={agent.role.displayIcon}
              alt={agent.role.displayIcon}
            />{" "}
            {agent.role.displayName}
          </p>
          <p className={styles.description}>{agent.description}</p>
          <div className={styles.habilitiesArea}></div>
        </div>
      </div>
    </main>
  );
}
