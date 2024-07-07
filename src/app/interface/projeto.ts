export interface Projeto {
  projeto_id: number| null;
  projeto_descricao: string;
 // projeto_data_inicio: string;
 //projeto_data_fim: string;
  projeto_orcamento: number;
  projeto_status?: number;
  empresa_id: number;

}
