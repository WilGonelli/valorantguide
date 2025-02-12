export async function getAgents() {
  try {
    const response = await fetch(
      "https://valorant-api.com/v1/agents?language=pt-BR"
    );
    if (!response) {
      throw new Error("erro");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return [];
  }
}
