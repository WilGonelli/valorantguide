"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAgents } from "@/services/Api";
import styles from "../../../styles/Home.module.css";

export default function HomePage() {
  const router = useRouter();
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAgents();
      setAgents(data);
    }
    fetchData();
  }, []);

  function handleClick(agent) {
    localStorage.setItem("selectedAgent", JSON.stringify(agent));
    router.push("/agent");
  }

  return (
    <main className={styles.body}>
      <h1 className={styles.tittle}>Guia de Agentes</h1>
      <div className={styles.container}>
        {agents.map(
          (agent, index) =>
            agent.isPlayableCharacter && (
              <div
                key={index}
                className={styles.containerAgent}
                onClick={() => handleClick(agent)}
              >
                <p
                  className={styles.name}
                  style={{ color: `#${agent.backgroundGradientColors[1]}` }}
                >
                  {agent.displayName}
                </p>
                <img
                  className={styles.img}
                  src={agent.displayIcon}
                  alt={agent.displayName}
                />
              </div>
            )
        )}
      </div>
    </main>
  );
}
