import { useEffect } from "react"
import fetchOneRegistration from "../../../controller/registration/fetchOneRegistration"
import { useState } from "react"
import { useParams } from "react-router-dom";


const FormRegistrationState = () => {
  
  const { idRegistration } = useParams()

  const [initialValues, setInitialValues] = useState({});
  
  const [oneRegistration, setOneRegistration] = useState();

  useEffect(() => {
    fetchOneRegistration(idRegistration)
      .then((testDataList) => {
        setOneRegistration(testDataList)
        setOneRegistration(testDataList)
        setInitialValues({
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
            sindromeDown: oneRegistration?.object.doencasNosOlhos.sindromeDown,
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
          acuidadeTriagem: oneRegistration?.object.acuidadeTriagem ?? "",
          testCover: oneRegistration?.object.testCover ?? "",
          testMovimentoOcular: oneRegistration?.object.testMovimentoOcular ?? "",
          testManchaBranca: oneRegistration?.object.testManchaBranca ?? ""
        })
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })
  }, [idRegistration, oneRegistration])


  const updateInitialValues = (fieldName, newValue) => {
    setInitialValues((prevInitialValues) => ({
      ...prevInitialValues,
      [fieldName]: newValue,
    }));
  };

  console.log(initialValues)

  return {
    initialValues, oneRegistration, updateInitialValues
  }
}

export default FormRegistrationState;