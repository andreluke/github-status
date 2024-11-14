import { GitHubStatusResponse } from "../types/IGithub";

// Função separada para encapsular a chamada do fetch
export const fetchData = async (url: string): Promise<GitHubStatusResponse> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Função para buscar o status do GitHub
export const fetchGitHubStatus = async (fetchFunction = fetchData): Promise<GitHubStatusResponse> => {
  try {
    const data: GitHubStatusResponse = await fetchFunction('https://www.githubstatus.com/api/v2/status.json');
    console.log(data);  // Para depuração, pode ser removido depois
    return data;
  } catch (error) {
    console.error('Erro ao obter status do GitHub', error);
    throw new Error('Erro ao buscar status');
  }
};
