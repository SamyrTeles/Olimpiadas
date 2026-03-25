const filtraEsporte = (dados, esporte) => {
  switch (esporte) {
    case 1: return dados.filter(reg => reg.Sport == "\"Volleyball\"")
    case 2: return dados.filter(reg => reg.Sport == "\"Taekwondo\"")
    case 3: return dados.filter(reg => reg.Sport == "\"Athletics\"")
    case 4: return dados.filter(reg => reg.Sport == "\"Swimming\"")
    case 5: return dados.filter(reg => reg.Sport == "\"Cycling\"")
    default: return
  }
}

const curiosidade1 = (resultado, esporte) => {

  const calculaMedia = (dados, equipe) => {
    const dadosEquipe = dados.filter(reg => reg.Team == equipe)

    const soma = dadosEquipe.reduce((acc, reg) => acc + parseInt(reg.Age), 0)
    const media = soma/dadosEquipe.length

    const campo1 = document.getElementById("mediaIdadeE1C1")
    const campo2 = document.getElementById("mediaIdadeE2C1")
    const campo3 = document.getElementById("mediaIdadeE3C1")
    const campo4 = document.getElementById("mediaIdadeE4C1")
    const campo5 = document.getElementById("mediaIdadeE5C1")

    switch (esporte) {
      case 1:
        if (dadosEquipe.length == 0) {
          campo1.value = "Sem atletas"
        } else {
          campo1.value = ("" + media.toFixed(0) + " anos")
        }
        break

      case 2:
        if (dadosEquipe.length == 0) {
          campo2.value = "Sem atletas"
        } else {
          campo2.value = ("" + media.toFixed(0) + " anos")
        }
        break

      case 3:
        if (dadosEquipe.length == 0) {
          campo3.value = "Sem atletas"
        } else {
          campo3.value = ("" + media.toFixed(0) + " anos")
        }
        break

      case 4:
        if (dadosEquipe.length == 0) {
          campo4.value = "Sem atletas"
        } else {
          campo4.value = ("" + media.toFixed(0) + " anos")
        }
        break
        
      case 5:
        if (dadosEquipe.length == 0) {
          campo5.value = "Sem atletas"
        } else {
          campo5.value = ("" + media.toFixed(0) + " anos")
        }
        break

      default:
    }
  }

  const dados = filtraEsporte(resultado, esporte)

  switch (esporte) {
    case 1: 
      calculaMedia(dados, document.getElementById("equipeE1C1").value)
      break
    case 2: 
      calculaMedia(dados, document.getElementById("equipeE2C1").value)
      break
    case 3: 
      calculaMedia(dados, document.getElementById("equipeE3C1").value)
      break
    case 4: 
      calculaMedia(dados, document.getElementById("equipeE4C1").value)
      break
    case 5: 
      calculaMedia(dados, document.getElementById("equipeE5C1").value)
      break
    default:
  } 
}

const curiosidade2 = (resultado, esporte) => {
  const calculaProporcao = (dados, equipe) => {
    const dadosEquipe = dados.filter(reg => reg.Team == equipe)
    const homens = dadosEquipe.filter(reg => reg.Sex == '"M"')
    const mulheres = dadosEquipe.filter(reg => reg.Sex == '"F"')

    const proporcaoH = (homens.length/dadosEquipe.length)*100
    const proporcaoM = (mulheres.length/dadosEquipe.length)*100

    const campo1_1 = document.getElementById("proporcaoHE1C2")
    const campo1_2 = document.getElementById("proporcaoME1C2")
    const campo2_1 = document.getElementById("proporcaoHE2C2")
    const campo2_2 = document.getElementById("proporcaoME2C2")
    const campo3_1 = document.getElementById("proporcaoHE3C2")
    const campo3_2 = document.getElementById("proporcaoME3C2")
    const campo4_1 = document.getElementById("proporcaoHE4C2")
    const campo4_2 = document.getElementById("proporcaoME4C2")
    const campo5_1 = document.getElementById("proporcaoHE5C2")
    const campo5_2 = document.getElementById("proporcaoME5C2")

    switch (esporte) {
      case 1:
        if (dadosEquipe.length == 0) {
          campo1_1.value = "Sem atletas"
          campo1_2.value = "Sem atletas"
        } else {
          campo1_1.value = ("" + proporcaoH.toFixed(0) + "%")
          campo1_2.value = ("" + proporcaoM.toFixed(0) + "%")
        }
        break

      case 2:
        if (dadosEquipe.length == 0) {
          campo2_1.value = "Sem atletas"
          campo2_2.value = "Sem atletas"
        } else {
          campo2_1.value = ("" + proporcaoH.toFixed(0) + "%")
          campo2_2.value = ("" + proporcaoM.toFixed(0) + "%")
        }
        break

      case 3:
        if (dadosEquipe.length == 0) {
          campo3_1.value = "Sem atletas"
          campo3_2.value = "Sem atletas"
        } else {
          campo3_1.value = ("" + proporcaoH.toFixed(0) + "%")
          campo3_2.value = ("" + proporcaoM.toFixed(0) + "%")
        }
        break

      case 4:
        if (dadosEquipe.length == 0) {
          campo4_1.value = "Sem atletas"
          campo4_2.value = "Sem atletas"
        } else {
          campo4_1.value = ("" + proporcaoH.toFixed(0) + "%")
          campo4_2.value = ("" + proporcaoM.toFixed(0) + "%")
        }
        break
        
      case 5:
        if (dadosEquipe.length == 0) {
          campo5_1.value = "Sem atletas"
          campo5_2.value = "Sem atletas"
        } else {
          campo5_1.value = ("" + proporcaoH.toFixed(0) + "%")
          campo5_2.value = ("" + proporcaoM.toFixed(0) + "%")
        }
        break

      default:
    }
  }

  const dados = filtraEsporte(resultado, esporte)

  switch (esporte) {
    case 1: 
      calculaProporcao(dados, document.getElementById("equipeE1C2").value)
      break
    case 2: 
      calculaProporcao(dados, document.getElementById("equipeE2C2").value)
      break
    case 3: 
      calculaProporcao(dados, document.getElementById("equipeE3C2").value)
      break
    case 4: 
      calculaProporcao(dados, document.getElementById("equipeE4C2").value)
      break
    case 5: 
      calculaProporcao(dados, document.getElementById("equipeE5C2").value)
      break
    default:
  } 
}

const curiosidade3 = (resultado, esporte) => {
  const calculaQuantidade = (dados, equipe) => {
    const dadosEquipe = dados.filter(reg => reg.Team == equipe)

    const quantidade = dadosEquipe.length

    const campo1 = document.getElementById("quantidadeE1C3")
    const campo2 = document.getElementById("quantidadeE2C3")
    const campo3 = document.getElementById("quantidadeE3C3")
    const campo4 = document.getElementById("quantidadeE4C3")
    const campo5 = document.getElementById("quantidadeE5C3")

    switch (esporte) {
      case 1:
        if (dadosEquipe.length == 0) {
          campo1.value = "Sem atletas"
        } else {
          campo1.value = ("" + quantidade)
        }
        break

      case 2:
        if (dadosEquipe.length == 0) {
          campo2.value = "Sem atletas"
        } else {
          campo2.value = ("" + quantidade)
        }
        break

      case 3:
        if (dadosEquipe.length == 0) {
          campo3.value = "Sem atletas"
        } else {
          campo3.value = ("" + quantidade)
        }
        break

      case 4:
        if (dadosEquipe.length == 0) {
          campo4.value = "Sem atletas"
        } else {
          campo4.value = ("" + quantidade)
        }
        break
        
      case 5:
        if (dadosEquipe.length == 0) {
          campo5.value = "Sem atletas"
        } else {
          campo5.value = ("" + quantidade)
        }
        break

      default:
    }
  }

  const dados = filtraEsporte(resultado, esporte)

  switch (esporte) {
    case 1: 
      calculaQuantidade(dados, document.getElementById("equipeE1C3").value)
      break
    case 2: 
      calculaQuantidade(dados, document.getElementById("equipeE2C3").value)
      break
    case 3: 
      calculaQuantidade(dados, document.getElementById("equipeE3C3").value)
      break
    case 4: 
      calculaQuantidade(dados, document.getElementById("equipeE4C3").value)
      break
    case 5: 
      calculaQuantidade(dados, document.getElementById("equipeE5C3").value)
      break
    default:
  } 
}

const curiosidade4 = (resultado, esporte) => {
  const calculaMedalhas = (dados, equipe) => {
    const dadosEquipe = dados.filter(reg => reg.Team == equipe)

    const medalhas = dadosEquipe.filter(reg => reg.Medal != "NA").length

    const campo1 = document.getElementById("medalhasE1C4")
    const campo2 = document.getElementById("medalhasE2C4")
    const campo3 = document.getElementById("medalhasE3C4")
    const campo4 = document.getElementById("medalhasE4C4")
    const campo5 = document.getElementById("medalhasE5C4")

    switch (esporte) {
      case 1:
        if (dadosEquipe.length == 0) {
          campo1.value = "Sem atletas"
        } else {
          campo1.value = ("" + medalhas)
        }
        break

      case 2:
        if (dadosEquipe.length == 0) {
          campo2.value = "Sem atletas"
        } else {
          campo2.value = ("" + medalhas)
        }
        break

      case 3:
        if (dadosEquipe.length == 0) {
          campo3.value = "Sem atletas"
        } else {
          campo3.value = ("" + medalhas)
        }
        break

      case 4:
        if (dadosEquipe.length == 0) {
          campo4.value = "Sem atletas"
        } else {
          campo4.value = ("" + medalhas)
        }
        break
        
      case 5:
        if (dadosEquipe.length == 0) {
          campo5.value = "Sem atletas"
        } else {
          campo5.value = ("" + medalhas)
        }
        break

      default:
    }
  }

  const dados = filtraEsporte(resultado, esporte)

  switch (esporte) {
    case 1: 
      calculaMedalhas(dados, document.getElementById("equipeE1C4").value)
      break
    case 2: 
      calculaMedalhas(dados, document.getElementById("equipeE2C4").value)
      break
    case 3: 
      calculaMedalhas(dados, document.getElementById("equipeE3C4").value)
      break
    case 4: 
      calculaMedalhas(dados, document.getElementById("equipeE4C4").value)
      break
    case 5: 
      calculaMedalhas(dados, document.getElementById("equipeE5C4").value)
      break
    default:
  } 
}

const curiosidade5 = (resultado, esporte) => {
  const calculaPropMedalhas = (dados, equipe1, equipe2) => {
    const dadosEquipe1 = dados.filter(reg => reg.Team == equipe1)
    const dadosEquipe2 = dados.filter(reg => reg.Team == equipe2)

    const medalhas1 = dadosEquipe1.filter(reg => reg.Medal != "NA")
    const medalhas2 = dadosEquipe2.filter(reg => reg.Medal != "NA")

    const proporcao = medalhas1.length/medalhas2.length

    const campo1 = document.getElementById("propMedalhasE1C5")
    const campo2 = document.getElementById("propMedalhasE2C5")
    const campo3 = document.getElementById("propMedalhasE3C5")
    const campo4 = document.getElementById("propMedalhasE4C5")
    const campo5 = document.getElementById("propMedalhasE5C5")

    switch (esporte) {
      case 1:
        if (dadosEquipe1.length == 0 || dadosEquipe2.length == 0) {
          campo1.value = "Sem atletas"
        } else {
          campo1.value = ("" + proporcao.toFixed(2))
        }
        break

      case 2:
        if (dadosEquipe1.length == 0 || dadosEquipe2.length == 0) {
          campo2.value = "Sem atletas"
        } else {
          campo2.value = ("" + proporcao.toFixed(2))
        }
        break

      case 3:
        if (dadosEquipe1.length == 0 || dadosEquipe2.length == 0) {
          campo3.value = "Sem atletas"
        } else {
          campo3.value = ("" + proporcao.toFixed(2))
        }
        break

      case 4:
        if (dadosEquipe1.length == 0 || dadosEquipe2.length == 0) {
          campo4.value = "Sem atletas"
        } else {
          campo4.value = ("" + proporcao.toFixed(2))
        }
        break
        
      case 5:
        if (dadosEquipe1.length == 0 || dadosEquipe2.length == 0) {
          campo5.value = "Sem atletas"
        } else {
          campo5.value = ("" + proporcao.toFixed(2))
        }
        break

      default:
    }
  }

  const dados = filtraEsporte(resultado, esporte)

  switch (esporte) {
    case 1: 
      calculaPropMedalhas(dados, document.getElementById("equipe1E1C5").value, document.getElementById("equipe2E1C5").value)
      break
    case 2: 
      calculaPropMedalhas(dados, document.getElementById("equipe1E2C5").value, document.getElementById("equipe2E2C5").value)
      break
    case 3: 
      calculaPropMedalhas(dados, document.getElementById("equipe1E3C5").value, document.getElementById("equipe2E3C5").value)
      break
    case 4: 
      calculaPropMedalhas(dados, document.getElementById("equipe1E4C5").value, document.getElementById("equipe2E4C5").value)
      break
    case 5: 
      calculaPropMedalhas(dados, document.getElementById("equipe1E5C5").value, document.getElementById("equipe2E5C5").value)
      break
    default:
  } 
}

const lerArquivoCSV = async (caminhoArquivo) => {
  try {
    // Busca os arquivos e separa cabeçalho e linhas
    const resposta = await fetch(caminhoArquivo)
    const conteudo = await resposta.text()
    const linhasCabecalho = conteudo.split('\n')
    const cabecalho = (linhasCabecalho[0].replace(/"/g, '')).split(',')
    const linhas = linhasCabecalho.slice(1)

    // Utiliza os elementos do cabeçalho e linha como chaves e valores para se criar um registro
    const adicionaDadosAux = (cabecalho) => (linha) => {
      const valores = linha.split(',')
      const registro = cabecalho.reduce((reg, chave, indice) => {
        reg[chave] = valores[indice]
        return reg
      }, {})
      return registro
    }

    const adicionaDados = adicionaDadosAux(cabecalho)

    const dados = linhas.map(linha => adicionaDados(linha))
    const dados2016 = dados.filter(reg => reg.Year == 2016)
    return dados2016

  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

const animacaoAbrir = (esporte) => {
  const esporte1 = document.getElementById('esporte1')
  const esporte2 = document.getElementById('esporte2')
  const esporte3 = document.getElementById('esporte3')
  const esporte4 = document.getElementById('esporte4')
  const esporte5 = document.getElementById('esporte5')
  const esporte1AbrirButton = document.getElementById('esporte1AbrirButton')
  const esporte2AbrirButton = document.getElementById('esporte2AbrirButton')
  const esporte3AbrirButton = document.getElementById('esporte3AbrirButton')
  const esporte4AbrirButton = document.getElementById('esporte4AbrirButton')
  const esporte5AbrirButton = document.getElementById('esporte5AbrirButton')
  const esporte1FecharButton = document.getElementById('esporte1FecharButton')
  const esporte2FecharButton = document.getElementById('esporte2FecharButton')
  const esporte3FecharButton = document.getElementById('esporte3FecharButton')
  const esporte4FecharButton = document.getElementById('esporte4FecharButton')
  const esporte5FecharButton = document.getElementById('esporte5FecharButton')
  const menuAbas1 = document.getElementById('menuAbas1')
  const menuAbas2 = document.getElementById('menuAbas2')
  const menuAbas3 = document.getElementById('menuAbas3')
  const menuAbas4 = document.getElementById('menuAbas4')
  const menuAbas5 = document.getElementById('menuAbas5')

  switch (esporte) {
    case 1:
      esporte1.style.height = '750px'
      esporte1.style.gridColumn = 'span 2'
      esporte2.style.display = 'none'
      esporte3.style.display = 'none'
      esporte4.style.display = 'none'
      esporte5.style.display = 'none'

      menuAbas1.style.display = 'flex'
      esporte1AbrirButton.style.display = 'none'
      esporte1FecharButton.style.display = 'block'
      
      break

    case 2:
      esporte1.style.display = 'none'
      esporte2.style.height = '750px'
      esporte2.style.gridColumn = 'span 2'
      esporte3.style.display = 'none'
      esporte4.style.display = 'none'
      esporte5.style.display = 'none'

      menuAbas2.style.display = 'flex'
      esporte2AbrirButton.style.display = 'none'
      esporte2FecharButton.style.display = 'block'

      break

    case 3:
      esporte1.style.display = 'none'
      esporte2.style.display = 'none'
      esporte3.style.height = '750px'
      esporte3.style.gridColumn = 'span 2'
      esporte4.style.display = 'none'
      esporte5.style.display = 'none'
  
      menuAbas3.style.display = 'flex'
      esporte3AbrirButton.style.display = 'none'
      esporte3FecharButton.style.display = 'block'

      break

    case 4:
      esporte1.style.display = 'none'
      esporte2.style.display = 'none'
      esporte3.style.display = 'none'
      esporte4.style.height = '750px'
      esporte4.style.gridColumn = 'span 2'
      esporte5.style.display = 'none'
  
      menuAbas4.style.display = 'flex'
      esporte4AbrirButton.style.display = 'none'
      esporte4FecharButton.style.display = 'block'

      break

    case 5:
      esporte1.style.display = 'none'
      esporte2.style.display = 'none'
      esporte3.style.display = 'none'
      esporte4.style.display = 'none'
      esporte5.style.height = '750px'
  
      menuAbas5.style.display = 'flex'
      esporte5AbrirButton.style.display = 'none'
      esporte5FecharButton.style.display = 'block'

      break

    default:
  }
}

const animacaoFechar = (esporte) => {
  const esporte1 = document.getElementById('esporte1')
  const esporte2 = document.getElementById('esporte2')
  const esporte3 = document.getElementById('esporte3')
  const esporte4 = document.getElementById('esporte4')
  const esporte5 = document.getElementById('esporte5')
  const esporte1AbrirButton = document.getElementById('esporte1AbrirButton')
  const esporte2AbrirButton = document.getElementById('esporte2AbrirButton')
  const esporte3AbrirButton = document.getElementById('esporte3AbrirButton')
  const esporte4AbrirButton = document.getElementById('esporte4AbrirButton')
  const esporte5AbrirButton = document.getElementById('esporte5AbrirButton')
  const esporte1FecharButton = document.getElementById('esporte1FecharButton')
  const esporte2FecharButton = document.getElementById('esporte2FecharButton')
  const esporte3FecharButton = document.getElementById('esporte3FecharButton')
  const esporte4FecharButton = document.getElementById('esporte4FecharButton')
  const esporte5FecharButton = document.getElementById('esporte5FecharButton')
  const menuAbas1 = document.getElementById('menuAbas1')
  const menuAbas2 = document.getElementById('menuAbas2')
  const menuAbas3 = document.getElementById('menuAbas3')
  const menuAbas4 = document.getElementById('menuAbas4')
  const menuAbas5 = document.getElementById('menuAbas5')

  switch (esporte) {
    case 1:
      esporte1.style.height = '250px'
      esporte1.style.gridColumn = 'span 1'
      esporte2.style.display = 'flex'
      esporte3.style.display = 'flex'
      esporte4.style.display = 'flex'
      esporte5.style.display = 'flex'

      menuAbas1.style.display = 'none'
      esporte1AbrirButton.style.display = 'block'
      esporte1FecharButton.style.display = 'none'

      break

    case 2:
      esporte1.style.display = 'flex'
      esporte2.style.height = '250px'
      esporte2.style.gridColumn = 'span 1'
      esporte3.style.display = 'flex'
      esporte4.style.display = 'flex'
      esporte5.style.display = 'flex'
  
      menuAbas2.style.display = 'none'
      esporte2AbrirButton.style.display = 'block'
      esporte2FecharButton.style.display = 'none'

      break

    case 3:
      esporte1.style.display = 'flex'
      esporte2.style.display = 'flex'
      esporte3.style.height = '250px'
      esporte3.style.gridColumn = 'span 1'
      esporte4.style.display = 'flex'
      esporte5.style.display = 'flex'
  
      menuAbas3.style.display = 'none'
      esporte3AbrirButton.style.display = 'block'
      esporte3FecharButton.style.display = 'none'

      break

    case 4:
      esporte1.style.display = 'flex'
      esporte2.style.display = 'flex'
      esporte3.style.display = 'flex'
      esporte4.style.height = '250px'
      esporte4.style.gridColumn = 'span 1'
      esporte5.style.display = 'flex'
  
      menuAbas4.style.display = 'none'
      esporte4AbrirButton.style.display = 'block'
      esporte4FecharButton.style.display = 'none'
      break

    case 5:
      esporte1.style.display = 'flex'
      esporte2.style.display = 'flex'
      esporte3.style.display = 'flex'
      esporte4.style.display = 'flex'
      esporte5.style.height = '250px'
  
      menuAbas5.style.display = 'none'
      esporte5AbrirButton.style.display = 'block'
      esporte5FecharButton.style.display = 'none'

      break

    default:
  }
}

// Eventos de clique

document.getElementById("1aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 1))
})

document.getElementById("1aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 1))
})

document.getElementById("1aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 1))
})

document.getElementById("1aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 1))
})

document.getElementById("1aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 1))
})

document.getElementById("2aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 2))
})

document.getElementById("2aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 2))
})

document.getElementById("2aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 2))
})

document.getElementById("2aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 2))
})

document.getElementById("2aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 2))
})

document.getElementById("3aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 3))
})

document.getElementById("3aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 3))
})

document.getElementById("3aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 3))
})

document.getElementById("3aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 3))
})

document.getElementById("3aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 3))
})

document.getElementById("4aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 4))
})

document.getElementById("4aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 4))
})

document.getElementById("4aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 4))
})

document.getElementById("4aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 4))
})

document.getElementById("4aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 4))
})

document.getElementById("5aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 5))
})

document.getElementById("5aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 5))
})

document.getElementById("5aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 5))
})

document.getElementById("5aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 5))
})

document.getElementById("5aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 5))
})

document.getElementById("esporte1AbrirButton").addEventListener("click", () => animacaoAbrir(1))
document.getElementById("esporte2AbrirButton").addEventListener("click", () => animacaoAbrir(2))
document.getElementById("esporte3AbrirButton").addEventListener("click", () => animacaoAbrir(3))
document.getElementById("esporte4AbrirButton").addEventListener("click", () => animacaoAbrir(4))
document.getElementById("esporte5AbrirButton").addEventListener("click", () => animacaoAbrir(5))

document.getElementById("esporte1FecharButton").addEventListener("click", () => animacaoFechar(1))
document.getElementById("esporte2FecharButton").addEventListener("click", () => animacaoFechar(2))
document.getElementById("esporte3FecharButton").addEventListener("click", () => animacaoFechar(3))
document.getElementById("esporte4FecharButton").addEventListener("click", () => animacaoFechar(4))
document.getElementById("esporte5FecharButton").addEventListener("click", () => animacaoFechar(5))
