import { useEffect } from "react"
import fetchOneRegistration from "../../../controller/registration/fetchOneRegistration"
import { useState } from "react"
import { useParams } from "react-router-dom";
import updateStudent from "../../../controller/registration/updateRegistration";


const FormRegistrationState = () => {

  const { idRegistration } = useParams()






  const [oneRegistration, setOneRegistration] = useState();

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
    updateStudent(idRegistration, values)
  }

  const initialValues = {
    name: oneRegistration ? oneRegistration.object.name : "",
    cpf: oneRegistration ? oneRegistration.object.cpf : "",
    sex: oneRegistration ? oneRegistration.object.sex : "",
    birthday: oneRegistration ? oneRegistration.object.birthday : "",
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
      nenhumaOpcao: oneRegistration?.object.doencasFamiliares?.nenhumaOpcao,
    },
    horasUsoAparelhosEletronicos: oneRegistration?.object.horasUsoAparelhosEletronicos ?? "",
    horasAtividadesAoArLivre: oneRegistration?.object.horasAtividadesAoArLivre ?? "",
    acuidadeTriagemDireito: oneRegistration?.object.acuidadeTriagemDireito ?? "",
    acuidadeTriagemEsquerdo: oneRegistration?.object.acuidadeTriagemEsquerdo ?? "",
    testCover: oneRegistration?.object.testCover ?? "",
    testMovimentoOcular: oneRegistration?.object.testMovimentoOcular ?? "",
    testManchaBranca: oneRegistration?.object.testManchaBranca ?? ""
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
    initialValues, oneRegistration, handleUpdate, points
  }
}

export default FormRegistrationState;