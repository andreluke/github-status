interface Status {
  indicator: string;
  description: string;
}

interface Page {
  id: string;
  name: string;
  url: string;
  time_zone: string;
  updated_at: string;
}

interface Component {
  id: string;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
  position: number;
  description: string | null;
  showcase: boolean;
  start_date: string | null;
  group_id: string | null;
  page_id: string;
  group: boolean;
  only_show_if_degraded: boolean;
}

export interface GitHubStatusResponse {
  page: Page;
  components: Component[];
  incidents: unknown[] | null; // Pode ser null ou um array de incidentes, se você souber a estrutura, substitua "any"
  scheduled_maintenances: unknown[] | null; // Se necessário, modifique para permitir null também
  status: Status;
}