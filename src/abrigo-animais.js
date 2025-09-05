class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const regras = {
      Rex: ["RATO", "BOLA"],
      Mimi: ["BOLA", "LASER"],
      Fofo: ["BOLA", "RATO", "LASER"],
      Zero: ["RATO", "BOLA"],
      Bola: ["CAIXA", "NOVELO"],
      Bebe: ["LASER", "RATO", "BOLA"],
      Loco: ["SKATE", "RATO"]
    };

    const lista = [];

    
    const brinquedos1 = brinquedosPessoa1.split(",").map(b => b.trim());
    const brinquedos2 = brinquedosPessoa2.split(",").map(b => b.trim());

    if (new Set(brinquedos1).size !== brinquedos1.length ||
        new Set(brinquedos2).size !== brinquedos2.length) {
      return { erro: "Brinquedo inválido", lista: null };
    }

    const animais = ordemAnimais.split(",").map(a => a.trim());

    if (new Set(animais).size !== animais.length) {
      return { erro: "Animal inválido", lista: null };
    }

    
    for (const animal of animais) {
      if (!regras[animal]) {
        return { erro: "Animal inválido", lista: null };
      }
    }

    
    let adotadosP1 = 0;
    let adotadosP2 = 0;

    
    function contemOrdem(brinquedosPessoa, favoritos) {
      let i = 0;
      for (const b of brinquedosPessoa) {
        if (b === favoritos[i]) i++;
        if (i === favoritos.length) return true;
      }
      return false;
    }

        for (const animal of animais) {
      const favoritos = regras[animal];

      let p1 = contemOrdem(brinquedos1, favoritos);
      let p2 = contemOrdem(brinquedos2, favoritos);

      // regra especial Loco (jabuti)
      if (animal === "Loco") {
        p1 = brinquedos1.includes("SKATE") && brinquedos1.includes("RATO");
        p2 = brinquedos2.includes("SKATE") && brinquedos2.includes("RATO");
        if (!(lista.some(l => l.includes("pessoa")))) {
          p1 = p2 = false;
        }
      }

      let adotado = "abrigo";

      if (p1 && !p2 && adotadosP1 < 3) {
        adotado = "pessoa 1";
        adotadosP1++;
      } else if (p2 && !p1 && adotadosP2 < 3) {
        adotado = "pessoa 2";
        adotadosP2++;
      } else if (p1 && p2) {
        if (["Mimi", "Fofo", "Zero"].includes(animal)) {
          adotado = "abrigo";
        }
      }

      lista.push(`${animal} - ${adotado}`);
    }

    // ✅ Corrigir ordem para alfabética
    lista.sort((a, b) => {
      const nomeA = a.split(" - ")[0];
      const nomeB = b.split(" - ")[0];
      return nomeA.localeCompare(nomeB);
    });

    return { erro: null, lista };

  }
}

export { AbrigoAnimais as AbrigoAnimais };

