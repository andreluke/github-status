import useGithubStatus from '../hooks/useGithubStatus';
import './GithubStatus.css';

const GitHubStatusApp = () => {
  const { fetchStatus, loading, statusData } = useGithubStatus();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR'); 
  };

  return (
    <div className="container">
      <h1>Status do GitHub</h1>
      <button onClick={fetchStatus} disabled={loading}>
        {loading ? 'Carregando...' : 'Obter Status'}
      </button>

      {statusData ? (
        <>
          <p className="status">Status: {statusData.status.description}</p>
          <p className="updated-at">Última atualização: {formatDate(statusData.page.updated_at)}</p>
        </>
      ) : (
        !loading && <p className="error">Nenhum status disponível</p>
      )}
    </div>
  );
};

export default GitHubStatusApp;
