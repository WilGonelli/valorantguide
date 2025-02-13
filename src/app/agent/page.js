"use client";

import { useEffect, useState } from "react";
import styles from "../../../styles/Agent.module.css";

export default function AgentDetail() {
  const [agent, setAgent] = useState(null);
  const [descript, setDescript] = useState("");
  const [nameAbilit, setNameAbilit] = useState("");
  const [click, setClick] = useState();

  useEffect(() => {
    const jsonAgent = localStorage.getItem("selectedAgent");
    if (jsonAgent) {
      setAgent(JSON.parse(jsonAgent));
    }
  }, []);

  if (!agent) {
    return <p>Erro ao carregar os dados do agente.</p>;
  }

  function handleDescript(name, descript, index) {
    setDescript(descript);
    setNameAbilit(name);
    setClick(index);
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
        <div>
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
          <h3 className={styles.subTittle}>Habilidades</h3>
          <div className={styles.habilitiesArea}>
            {agent.abilities.map((ability, index) => {
              return (
                <button
                  key={index}
                  className={`${styles.abilityIcon} ${
                    click === index ? styles.clicked : ""
                  }`}
                  style={{
                    backgroundImage: `url(${ability.displayIcon})`,
                    backgroundColor: `#${agent.backgroundGradientColors[2]}`,
                  }}
                  onClick={() =>
                    handleDescript(
                      ability.displayName,
                      ability.description,
                      index
                    )
                  }
                >
                  {index === 4 && !ability.displayIcon
                    ? "Habilidade passiva"
                    : ""}
                </button>
              );
            })}
          </div>
          <h3 className={styles.abilityTitlle}>{nameAbilit}</h3>
          <p className={styles.description2}>{descript}</p>
        </div>
      </div>
    </main>
  );
}
