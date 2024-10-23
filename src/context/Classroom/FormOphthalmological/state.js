import { useEffect } from "react"
import fetchOneRegistration from "../../../controller/registration/fetchOneRegistration"
import { useState } from "react"
import { useParams } from "react-router-dom";
import updateStudent from "../../../controller/registration/updateRegistration";


const FormRegistrationState = () => {

  const { idRegistration } = useParams()

  const [oneRegistration, setOneRegistration] = useState();

  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    fetchOneRegistration(idRegistration)
      .then((testDataList) => {
        setOneRegistration(testDataList)
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })
  }, [idRegistration])


  const handleUpdate = (values) => {
    updateStudent(idRegistration, {...values, points: points()})
  }

  const initialValues = {
    name: oneRegistration ? oneRegistration.object.name : "",
    cpf: oneRegistration ? oneRegistration.object.cpf : "",
    zone: oneRegistration?.object?.zone ? oneRegistration.object.zone : "",
    sex: oneRegistration ? oneRegistration.object.sex : "",
    colorRace: oneRegistration?.object?.colorRace ? oneRegistration.object.colorRace : "",
    birthday: oneRegistration ? oneRegistration.object.birthday : "",
    dataTriagem: oneRegistration?.object?.dataTriagem ? oneRegistration.object.dataTriagem : null,
    observation: oneRegistration?.object?.observation ? oneRegistration.object.observation : "",
    filhossintomas: {
      dificuldadeQuadro: oneRegistration?.object.filhossintomas?.dificuldadeQuadro,
      dificuldadeLivro: oneRegistration?.object.filhossintomas?.dificuldadeLivro,
      olhoTortoConstante: oneRegistration?.object.filhossintomas?.olhoTortoConstante,
      olhoTortoMomentos: oneRegistration?.object.filhossintomas?.olhoTortoMomentos,
      rostoApertaOlhos: oneRegistration?.object.filhossintomas?.rostoApertaOlhos,
      tremorOlhos: oneRegistration?.object.filhossintomas?.tremorOlhos,
      manchaBrancaPupila: oneRegistration?.object.filhossintomas?.manchaBrancaPupila,
      nenhumaOpcao: oneRegistration?.object.filhossintomas?.nenhumaOpcao,
    },
    filhoOculos: oneRegistration?.object.filhoOculos ?? '',
    doencasNosOlhos: {
      olhoPreguicoso: oneRegistration?.object.doencasNosOlhos?.olhoPreguicoso,
      olhoTorto: oneRegistration?.object.doencasNosOlhos?.olhoTorto,
      catarataInfancia: oneRegistration?.object.doencasNosOlhos?.catarataInfancia,
      glaucomaCongenito: oneRegistration?.object.doencasNosOlhos?.glaucomaCongenito,
      tumorOlhos: oneRegistration?.object.doencasNosOlhos?.tumorOlhos,
      ceratoconeTransplante: oneRegistration?.object.doencasNosOlhos?.ceratoconeTransplante,
      palpebraCaida: oneRegistration?.object.doencasNosOlhos?.palpebraCaida,
      nenhumaOpcao: oneRegistration?.object.doencasNosOlhos?.nenhumaOpcao,
    },
    doencas: {
      prematuridade: oneRegistration?.object.doencas.prematuridade,
      sindromeDown: oneRegistration?.object.doencas.sindromeDown,
      paralisiaTumorCerebral: oneRegistration?.object.doencas?.paralisiaTumorCerebral,
      outrasSindromesGeneticas: oneRegistration?.object.doencas?.outrasSindromesGeneticas,
      diabetes: oneRegistration?.object.doencas?.diabetes,
      artriteArtrose: oneRegistration?.object.doencas?.artriteArtrose,
      alergiasCorticoides: oneRegistration?.object.doencas?.alergiasCorticoides,
      nenhumaOpcao: oneRegistration?.object.doencas?.nenhumaOpcao,
    },
    doencasFamiliares: {
      miopiaAmbosPais: oneRegistration?.object.doencasFamiliares?.miopiaAmbosPais,
      miopiaUmPai: oneRegistration?.object.doencasFamiliares?.miopiaUmPai,
      hipermetropiaAstigmatismo: oneRegistration?.object.doencasFamiliares?.hipermetropiaAstigmatismo,
      estrabismo: oneRegistration?.object.doencasFamiliares?.estrabismo,
      catarataGlaucoma: oneRegistration?.object.doencasFamiliares?.catarataGlaucoma,
      olhoPreguicoso: oneRegistration?.object.doencasFamiliares?.olhoPreguicoso,
      tumorOlho: oneRegistration?.object.doencasFamiliares?.tumorOlho,
      nenhumaOpcao: oneRegistration?.object.doencasFamiliares?.nenhumaOpcao ?? false,
    },
    horasUsoAparelhosEletronicos: oneRegistration?.object.horasUsoAparelhosEletronicos ?? "",
    horasAtividadesAoArLivre: oneRegistration?.object.horasAtividadesAoArLivre ?? "",
    acuidadeTriagemDireito: oneRegistration?.object.acuidadeTriagemDireito ?? "",
    acuidadeTriagemEsquerdo: oneRegistration?.object.acuidadeTriagemEsquerdo ?? "",
    testCover: oneRegistration?.object.testCover ?? "",
    testMovimentoOcular: oneRegistration?.object.testMovimentoOcular ?? "",
    testManchaBranca: oneRegistration?.object.testManchaBranca ?? "",
    nomeMedico: oneRegistration?.object.nomeMedico ?? "",
    crmMedico: oneRegistration?.object.crmMedico ?? "",
    dataConsulta: oneRegistration?.object.dataConsulta ?? "",
    jaRealizouConsultaAntes: oneRegistration?.object.jaRealizouConsultaAntes ?? false,
    refracaoEsfericoOlhoDireito: oneRegistration?.object.refracaoEsfericoOlhoDireito ?? "",
    refracaoCilindricoOlhoDireito: oneRegistration?.object.refracaoCilindricoOlhoDireito ?? "",
    refracaoEixoOlhoDireito: oneRegistration?.object.refracaoEixoOlhoDireito ?? "",
    refracaoEquivalenteEsfericoOlhoDireito: oneRegistration?.object.refracaoEquivalenteEsfericoOlhoDireito ?? "",
    refracaoDpOlhoDireito: oneRegistration?.object.refracaoDpOlhoDireito ?? "",
    refracaoEsfericoOlhoEsquerdo: oneRegistration?.object.refracaoEsfericoOlhoEsquerdo ?? "",
    refracaoCilindricoOlhoEsquerdo: oneRegistration?.object.refracaoCilindricoOlhoEsquerdo ?? "",
    refracaoEixoOlhoEsquerdo: oneRegistration?.object.refracaoEixoOlhoEsquerdo ?? "",
    refracaoEquivalenteEsfericoOlhoEsquerdo: oneRegistration?.object.refracaoEquivalenteEsfericoOlhoEsquerdo ?? "",
    refracaoDpOlhoEsquerdo: oneRegistration?.object.refracaoDpOlhoEsquerdo ?? "",
    observacoesSpotVision: {
      miopiaOd: oneRegistration?.object.observacoesSpotVision?.miopiaOd ?? false,
      miopiaOs: oneRegistration?.object.observacoesSpotVision?.miopiaOs ?? false,
      astigmatismoOd: oneRegistration?.object.observacoesSpotVision?.astigmatismoOd ?? false,
      astigmatismoOs: oneRegistration?.object.observacoesSpotVision?.astigmatismoOs ?? false,
      hipermetropiaOd: oneRegistration?.object.observacoesSpotVision?.hipermetropiaOd ?? false,
      hipermetropiaOs: oneRegistration?.object.observacoesSpotVision?.hipermetropiaOs ?? false,
      estrabismoOd: oneRegistration?.object.observacoesSpotVision?.estrabismoOd ?? false,
      estrabismoOs: oneRegistration?.object.observacoesSpotVision?.estrabismoOs ?? false,
      anisometropia: oneRegistration?.object.observacoesSpotVision?.anisometropia ?? false,
      anisocoria: oneRegistration?.object.observacoesSpotVision?.anisocoria ?? false,
    },
    anamnese: oneRegistration?.object.anamnese ?? "",
    refracaoEstaticaEsfericoOlhoDireito: oneRegistration?.object.refracaoEstaticaEsfericoOlhoDireito ?? "",
    refracaoEstaticaCilindricoOlhoDireito: oneRegistration?.object.refracaoEstaticaCilindricoOlhoDireito ?? "",
    refracaoEstaticaEixoOlhoDireito: oneRegistration?.object.refracaoEstaticaEixoOlhoDireito ?? "",
    refracaoEstaticaAcuidadeVisualOlhoDireito: oneRegistration?.object.refracaoEstaticaAcuidadeVisualOlhoDireito ?? "",
    refracaoEstaticaEsfericoOlhoEsquerdo: oneRegistration?.object.refracaoEstaticaEsfericoOlhoEsquerdo ?? "",
    refracaoEstaticaCilindricoOlhoEsquerdo: oneRegistration?.object.refracaoEstaticaCilindricoOlhoEsquerdo ?? "",
    refracaoEstaticaEixoOlhoEsquerdo: oneRegistration?.object.refracaoEstaticaEixoOlhoEsquerdo ?? "",
    refracaoEstaticaAcuidadeVisualOlhoEsquerdo: oneRegistration?.object.refracaoEstaticaAcuidadeVisualOlhoEsquerdo ?? "",
    biomicroscopiaOd: oneRegistration?.object.biomicroscopiaOd ?? "",
    biomicroscopiaOs: oneRegistration?.object.biomicroscopiaOs ?? "",
    fundoscopiaOd: oneRegistration?.object.fundoscopiaOd ?? "",
    fundoscopiaOs: oneRegistration?.object.fundoscopiaOs ?? "",
    motilidadeOcular: oneRegistration?.object.motilidadeOcular ?? "",
    diagnostico: oneRegistration?.object.diagnostico ?? "",
    conduta: oneRegistration?.object.conduta ?? "",
    precisaOculos: oneRegistration?.object.precisaOculos ?? "",
    acompanhamento: {
      ambliopia: oneRegistration?.object.acompanhamento?.ambliopia ?? false,
      retinoblastoma: oneRegistration?.object.acompanhamento?.retinoblastoma ?? false,
      catarataCongenita: oneRegistration?.object.acompanhamento?.catarataCongenita ?? false,
      obstrucaoViasLacrimais: oneRegistration?.object.acompanhamento?.obstrucaoViasLacrimais ?? false,
      estrabismo: oneRegistration?.object.acompanhamento?.estrabismo ?? false,
      glaucomaCongenito: oneRegistration?.object.acompanhamento?.glaucomaCongenito ?? false,
      uveites: oneRegistration?.object.acompanhamento?.uveites ?? false,
      nistagmo: oneRegistration?.object.acompanhamento?.nistagmo ?? false,
      miopiaProgressiva: oneRegistration?.object.acompanhamento?.miopiaProgressiva ?? false,
      ectasiasCornea: oneRegistration?.object.acompanhamento?.ectasiasCornea ?? false,
      alergiasConjuntivitesCalazio: oneRegistration?.object.acompanhamento?.alergiasConjuntivitesCalazio ?? false,
      baixaVisaoCentral: oneRegistration?.object.acompanhamento?.baixaVisaoCentral ?? false,
    },
    proximaConsulta: oneRegistration?.object.proximaConsulta ?? "",
    observationConsulta: oneRegistration?.object.observationConsulta ?? "",

    receitaAntigaEsfericoOlhoDireito: oneRegistration?.object.receitaEsfericoOlhoDireito ?? "",
    receitaAntigaCilindricoOlhoDireito: oneRegistration?.object.receitaCilindricoOlhoDireito ?? "",
    receitaAntigaEixoOlhoDireito: oneRegistration?.object.receitaEixoOlhoDireito ?? "",
    receitaAntigaDpOlhoDireito: oneRegistration?.object.receitaDpOlhoDireito ?? "",
    receitaAntigaEsfericoOlhoEsquerdo: oneRegistration?.object.receitaEsfericoOlhoEsquerdo ?? "",
    receitaAntigaCilindricoOlhoEsquerdo: oneRegistration?.object.receitaCilindricoOlhoEsquerdo ?? "",
    receitaAntigaEixoOlhoEsquerdo: oneRegistration?.object.receitaEixoOlhoEsquerdo ?? "",
    receitaAntigaDpOlhoEsquerdo: oneRegistration?.object.receitaDpOlhoEsquerdo ?? "",

    receitaEsfericoOlhoDireito: oneRegistration?.object.receitaEsfericoOlhoDireito ?? "",
    receitaCilindricoOlhoDireito: oneRegistration?.object.receitaCilindricoOlhoDireito ?? "",
    receitaEixoOlhoDireito: oneRegistration?.object.receitaEixoOlhoDireito ?? "",
    receitaDpOlhoDireito: oneRegistration?.object.receitaDpOlhoDireito ?? "",
    receitaEsfericoOlhoEsquerdo: oneRegistration?.object.receitaEsfericoOlhoEsquerdo ?? "",
    receitaCilindricoOlhoEsquerdo: oneRegistration?.object.receitaCilindricoOlhoEsquerdo ?? "",
    receitaEixoOlhoEsquerdo: oneRegistration?.object.receitaEixoOlhoEsquerdo ?? "",
    receitaDpOlhoEsquerdo: oneRegistration?.object.receitaDpOlhoEsquerdo ?? "",
    dataEntregaOculos: oneRegistration?.object?.dataEntregaOculos ? oneRegistration.object.dataEntregaOculos : null,
    responsavelEntregaOculos: oneRegistration?.object.responsavelEntregaOculos ?? "",

    triagemCompleted: oneRegistration?.object.triagemCompleted ?? false,
    consultaCompleted: oneRegistration?.object.consultaCompleted ?? false,
    receitaOculosCompleted: oneRegistration?.object.receitaCompleted ?? false,
    entregaOculosCompleted: oneRegistration?.object.entregaOculosCompleted ?? false,
    questionarioPaisCompleted: oneRegistration?.object.questionarioPaisCompleted ?? false,
    permission: oneRegistration?.object.permission ?? false,

  };


  const points = () => {
    var count = 0;

    if (oneRegistration) {
      if (oneRegistration.object.filhoOculos === "1") {
        count++;
      }
      if ((oneRegistration.object.filhossintomas.dificuldadeQuadro && oneRegistration.object.filhossintomas.olhoTortoMomentos) ||
        (oneRegistration.object.filhossintomas.dificuldadeLivro && oneRegistration.object.filhossintomas.olhoTortoMomentos) ||
        (oneRegistration.object.filhossintomas.dificuldadeQuadro && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
        (oneRegistration.object.filhossintomas.dificuldadeLivro && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
        oneRegistration.object.filhossintomas.olhoTortoConstante ||
        (oneRegistration.object.filhossintomas.olhoTortoMomentos && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
        oneRegistration.object.filhossintomas.tremorOlhos ||
        oneRegistration.object.filhossintomas.manchaBrancaPupila) {
        count++;
      }
      if (
        oneRegistration.object.doencasNosOlhos.olhoPreguicoso ||
        oneRegistration.object.doencasNosOlhos.olhoTorto ||
        oneRegistration.object.doencasNosOlhos.catarataInfancia ||
        oneRegistration.object.doencasNosOlhos.glaucomaCongenito ||
        oneRegistration.object.doencasNosOlhos.tumorOlhos ||
        oneRegistration.object.doencasNosOlhos.ceratoconeTransplante ||
        oneRegistration.object.doencasNosOlhos.palpebraCaida
      ) {
        count++;
      }
      if (
        oneRegistration.object.doencasFamiliares.miopiaAmbosPais ||
        oneRegistration.object.doencasFamiliares.miopiaUmPai ||
        oneRegistration.object.doencasFamiliares.hipermetropiaAstigmatismo ||
        oneRegistration.object.doencasFamiliares.estrabismo ||
        oneRegistration.object.doencasFamiliares.catarataGlaucoma ||
        oneRegistration.object.doencasFamiliares.olhoPreguicoso ||
        oneRegistration.object.doencasFamiliares.tumorOlho
      ) {
        count++;
      }
      if (
        oneRegistration.object.doencas?.prematuridade ||
        oneRegistration.object.doencas?.sindromeDown ||
        oneRegistration.object.doencas?.paralisiaTumorCerebral ||
        oneRegistration.object.doencas?.outrasSindromesGeneticas ||
        oneRegistration.object.doencas?.diabetes ||
        oneRegistration.object.doencas?.artriteArtrose ||
        oneRegistration.object.doencas?.alergiasCorticoides
      ) {
        count++;
      }
      if (
        oneRegistration.object.horasUsoAparelhosEletronicos === 4 ||
        oneRegistration.object.horasUsoAparelhosEletronicos === 5
      ) {
        count++;
      }
      if (oneRegistration.object.horasAtividadesAoArLivre === 1 || oneRegistration.object.horasAtividadesAoArLivre === 2) {
        count++;
      }
      if (oneRegistration.object.testCover === "1") {
        count++;
      }
      if (oneRegistration.object.testMovimentoOcular === "1") {
        count++;
      }
      if (oneRegistration.object.testManchaBranca === "1") {
        count++;
      }
      if (
        oneRegistration.object.acuidadeTriagemEsquerdo === "1" ||
        oneRegistration.object.acuidadeTriagemEsquerdo === "2" ||
        oneRegistration.object.acuidadeTriagemEsquerdo === "3" ||
        oneRegistration.object.acuidadeTriagemEsquerdo === "4" ||
        oneRegistration.object.acuidadeTriagemEsquerdo === "5" ||
        oneRegistration.object.acuidadeTriagemEsquerdo === "6" ||
        oneRegistration.object.acuidadeTriagemEsquerdo === "7"
      ) {
        count = count + 5;
      }
      if (
        oneRegistration.object.acuidadeTriagemEsquerdo === "8"
      ) {
        count = count + 2;
      }
      if (
        oneRegistration.object.acuidadeTriagemEsquerdo === "nenhum"
      ) {
        count = count + 2;
      }
      if (
        oneRegistration.object.acuidadeTriagemDireito === "1" ||
        oneRegistration.object.acuidadeTriagemDireito === "2" ||
        oneRegistration.object.acuidadeTriagemDireito === "3" ||
        oneRegistration.object.acuidadeTriagemDireito === "4" ||
        oneRegistration.object.acuidadeTriagemDireito === "5" ||
        oneRegistration.object.acuidadeTriagemDireito === "6" ||
        oneRegistration.object.acuidadeTriagemDireito === "7"
      ) {
        count = count + 5;
      }
      if (
        oneRegistration.object.acuidadeTriagemDireito === "8"
      ) {
        count = count + 2;
      }
      if (
        oneRegistration.object.acuidadeTriagemDireito === "nenhum"
      ) {
        count = count + 2;
      }
    }

    return count;
  }

  

  return {
    initialValues, oneRegistration, handleUpdate, points,activeIndex, setActiveIndex
  }
}

export default FormRegistrationState;