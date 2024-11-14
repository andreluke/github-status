import { useState } from 'react';
import { fetchGitHubStatus } from '../services/api';
import { GitHubStatusResponse } from '../types/IGithub';

export const useGithubStatus = () => {
  const [statusData, setStatusData] = useState<GitHubStatusResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const status = await fetchGitHubStatus();
      setStatusData(status); // Atualizando o estado com os dados obtidos
    } catch (error) {
      console.error('Erro ao obter status do GitHub', error);
    }
    setLoading(false);
  };

  return { statusData, loading, fetchStatus };
};

export default useGithubStatus;
