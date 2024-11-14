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
            {/* Exibe o status geral do GitHub */}
            <p className="status">Status: {statusData.status.description}</p>
            <p className="updated-at">
              Última atualização: {formatDate(statusData.page.updated_at)}
            </p>

            {/* Exibe os componentes do GitHub, caso existam */}
            <h2>Componentes</h2>
            {statusData.components.length > 0 ? (
              <ul className="components-list">
                {statusData.components.map((component) => (
                  <li
                  key={component.id}
                  className={`component-item ${component.status !== 'operational' ? 'highlight' : ''}`}
                >
                    <p>
                      <strong>{component.name}</strong> 
                    </p>
                    <p><strong><i>Status: {component.status}</i></strong></p>
                    {component.description && <p>Descrição: {component.description}</p>}
                    <p>Última atualização: {formatDate(component.updated_at)}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum componente encontrado.</p>
            )}

            {/* Exibe os incidentes e manutenções, se houver */}
            <h2>Incidentes</h2>
            {statusData.incidents && statusData.incidents.length > 0 ? (
              <ul className="incidents-list">
                {statusData.incidents.map((incident, index) => (
                  <li key={index}>Incidente: {JSON.stringify(incident)}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhum incidente reportado.</p>
            )}

            <h2>Manutenções Programadas</h2>
            {statusData.scheduled_maintenances && statusData.scheduled_maintenances.length > 0 ? (
              <ul className="maintenances-list">
                {statusData.scheduled_maintenances.map((maintenance, index) => (
                  <li key={index}>Manutenção: {JSON.stringify(maintenance)}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma manutenção programada.</p>
            )}
          </>
        ) : (
          !loading && <p className="error">Nenhum status disponível</p>
        )}
      </div>
    );
  };

  export default GitHubStatusApp;
