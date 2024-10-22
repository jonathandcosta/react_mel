import * as enums from '../utils/enums/Detalhes';

class Detalhe {
  titulo: string;
  prioridade: enums.Prioridade;
  status: enums.Status;
  descricao: string;
  id: number;

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number,
  ) {
    this.titulo = titulo;
    this.prioridade = prioridade;
    this.status = status;
    this.descricao = descricao;
    this.id = id;
  }
}

export default Detalhe;
