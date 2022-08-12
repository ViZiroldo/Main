export interface TorneioModel {
  id: number;
  nomeTorneio: string;
  ativo: boolean;
  premiacao: number;
  totalParticipantes: number;
  dataInicio: Date;
  dataFim: Date;
  dataCadastro: Date;
  dataAlteracao: Date;
  userId: string;
  totalGrupo: number;
}
