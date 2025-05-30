const geradorDeTagsDeIdentificacao = (nomePet) => {
  return nomePet.toLocaleUpperCase();
};

const verificarSePodeSerAdotado = (idade, porte) => {
  if (idade === 1 && porte === "M") {
    return true;
  } else {
    return false;
  }
};

const calcularConsumoDeRacao = (nome, idade, peso) => {
  let consumoDiario;

  return (consumoDiario = peso * 300);
};
const decidirTipoDeAtividadePorPorte = (porte) => {
  let atividade;

  switch (porte) {
    case "pequeno":
      atividade = "brincar dentro de casa";
      break;
    case "medio":
      atividade = "caminhada no quateirao";
      break;
    case "grande":
      atividade = "correr no parque";
      break;
    default:
      atividade = "porte inválido";
      break;
  }
  return atividade;
};

async function buscarDadoAsync() {
  const dogName = "Pipoca";
  return dogName;
}
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};
