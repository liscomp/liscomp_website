import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    projetoEspecifico: state => identidade => {
      return state.projetos.find(
        projetos =>
          projetos.title.toLowerCase().replace(/\s/g, "-") === identidade
      );
    },
    artigoEspecifico: state => label => {
      return state.artigos.find(
        artigos =>
          artigos.properties.title.toLowerCase().replace(/\s/g, "-") === label
      );
    },
    noticiaEspecifico: state => label => {
      return state.noticias.find(
        noticias => noticias.title.toLowerCase().replace(/\s/g, "-") === label
      );
    },
    pesquisadoresOrdenados: state => {
      return state.pesquisadores.sort(function(a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    },
    alunosDoutoradoOrdenados: state => {
      return state.alunosDoutorado.sort(function(a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    },
    alunosMestradoOrdenados: state => {
      return state.alunosMestrado.sort(function(a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    },
    alunosInicicaoOrdenados: state => {
      return state.alunosInicicao.sort(function(a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    },
    noticiasOrdenados: state => {
      return state.noticias.sort(function(a, b) {
        if (moment(a.data, "DD/MM/YYYY") > moment(b.data, "DD/MM/YYYY")) {
          return -1;
        }
        if (moment(a.data, "DD/MM/YYYY") < moment(b.data, "DD/MM/YYYY")) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    },
    artigosOrdenados: state => {
      return state.artigos.sort(function(a, b) {
        if (
          moment(a.properties.date, "YYYY-MM-DD") >
          moment(b.properties.date, "YYYY-MM-DD")
        ) {
          return -1;
        }
        if (
          moment(a.properties.date, "YYYY-MM-DD") <
          moment(b.properties.date, "YYYY-MM-DD")
        ) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    },
    artigosAnos: state => year => {
      return state.artigos
        .filter(artigos => artigos.properties.year === year)
        .sort(function(a, b) {
          if (
            moment(a.properties.date, "YYYY-MM-DD") >
            moment(b.properties.date, "YYYY-MM-DD")
          ) {
            return -1;
          }
          if (
            moment(a.properties.date, "YYYY-MM-DD") <
            moment(b.properties.date, "YYYY-MM-DD")
          ) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
    },
    artigosTopico: state => topico => {
      return state.artigos
        .filter(artigos => artigos.properties.topic === topico)
        .sort(function(a, b) {
          if (
            moment(a.properties.date, "YYYY-MM-DD") >
            moment(b.properties.date, "YYYY-MM-DD")
          ) {
            return -1;
          }
          if (
            moment(a.properties.date, "YYYY-MM-DD") <
            moment(b.properties.date, "YYYY-MM-DD")
          ) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
    },
    pegarAnos: state => {
      return new Set(state.artigos.map(artigos => artigos.properties.year));
    },
    pegarTopicos: state => {
      return new Set(state.artigos.map(artigos => artigos.properties.topic));
    }
  },
  actions: {},
  modules: {},
  state: {
    projetos: [
      {
        title:
          "Criação de um Laboratório Móvel Para Realizar Análises Físico-Químicas em Obras de Artes de Museus Brasileiros",
        short_title: "Criação de um Laboratório Móvel",
        foto: "projeto1.png",
        periodo: "2019 - 2022",
        financiadores:
          "Conselho Federal Gestor do Fundo de Defesa dos Direitos Difusos (CFDD)",
        edital: "08000.012661/2019-13",
        autores:
          "Renato Pereira de Freitas, Douglas Santos Rodrigues Ferreira, Andre Rocha Pimenta, Valter de Sousa Felix, Ronaldo Vicente Pereira, Elicardo Alves de Souza Gonçalves",
        resumo:
          "O fomento adquirido neste projeto, será aplicado na implementação de um laboratório móvel, composto por instrumentos de análises físico-químicas, para realizar investigações in situ e não destrutivas em obras de artes, assim como profissionais com expertise, neste campo trabalho. Este laboratório ficará à disposição de museus Brasileiros, para realizar estudos científicos em obras de artes. Os resultados obtidos, na investigação, serão úteis principalmente para o processo de conservação, restauração e catalogação das obras analisadas, além disso, os dados obtidos nas análises farão parte de um banco de dados, que será disponibilizado ao Instituto Brasileiro de Museus (IBRAM), cuja uma das funcionalidades será de comparar os resultados com a de obras de arte de autores Brasileiros suspeita de falsificação, permitindo assim realizar perícias direcionadas."
      },
      {
        title:
          "Construção de um sistema portátil de macro mapeamento elementar por Fluorescência de Raios X para ser aplicado em obras de arte",
        short_title: "Sistema Portátil de Macro Mapeamento",
        foto: "projeto2.png",
        periodo: "2018 - 2021",
        financiadores:
          "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ (FAPERJ); Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro (IFRJ)",
        edital: "Jovem Cientista 2018 (número: E-26/202.672/2018)",
        autores: "Renato Pereira de Freitas, Marcelo Oliveira Pereira, Elicardo Alves de Souza Gonçalves,/ Cristiano Carvalho, Fabricio Silva.",
        resumo:
          "Neste projeto será desenvolvido um sistema portátil de mapeamento macro elementar por Fluorescência de Raios (macro-XRF), para ser empregado no mapeamento elementar 2D, in situ de uma área de aproximadamente 1 x 1 m² de obras de arte de diferentes museus do estado do Rio de Janeiro. Os resultados obtidos por este tipo de técnica são extremamente úteis para avaliar camadas subjacentes de pigmentos em obras de arte. Logo, a partir dos resultados é possível obter informações ocultas acerca da pintura, como modificações feitas pelo próprio artista, sobreposições de pigmentos e restaurações na superfície, fornecendo uma perspectiva única sobre o processo criativo do artista e a história da conservação e restauro da pintura."
      },
      {
        title: "Análise estatística multivariada de dados de XRF obtidos de artefatos arqueológicas utilizando Python",
        short_title: "Análise estatística multivariada de dados de XRF",
        foto: "projeto3.png",
        periodo: "2019 - 2021",
        financiadores: "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ (FAPERJ)",
        edital: "IC- Bolsa de Iniciação Científica- 2019/1 (número: E-26/201.956/2019)",
        autores: "Renato Pereira de Freitas, Douglas Santos Rodrigues Ferreira, Elicardo Alves de Souza Gonçalves, Andre Rocha Pimenta, Bárbara Lorrane Oliveira Gonçalves",
        resumo: "Este projeto, tem como objetivo aplicar códigos computacionais baseados na linguagem Python, para realizar investigações estatísticas multivariadas em dados de XRF obtidos de artefatos arqueológicos. A partir dos códigos, também será possível automatizar os processos de pré-tratamento de dados, reduzindo assim o tempo desta etapa."
      },
      {
        title:
          "Desenvolvimento De Métodos Que Auxiliem A Identificação De Roubos, Furtos E Adulterações De Obras De Arte E Veículos ",
        short_title:
          "Identificação de Roubos, Furtos e Adulterações de Obras de Arte e Veículos",
        foto: "projeto3.png",
        periodo: "2019 - 2021",
        financiadores:
          "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ (FAPERJ)",
        edital:
          "Programa de Apoio a Projetos de Inovação no Campo da Ciência Forense 2018 (número: E-26/290.066/2018)",
        autores:
          "Renato Pereira de Freitas, Valter de Sousa Felix, Marcelo Oliveira Pereira, Ana Luísa de Queiroz Baddini Ramos, Elicardo Alves de Souza Gonçalves, Douglas Santos Rodrigues Ferreira, Andre Rocha Pimenta, Hiram Araujo",
        resumo:
          "O Brasil possui um vasto patrimônio histórico cultural, possuindo obras de artes de pintores famosos mundialmente. Crimes, que envolvem furtos e falsificações de obras de arte aumentou muito nos últimos anos no Brasil, além disso, obras de arte tem sido utilizado, com uma forma de lavagem de dinheiro. Este projeto, que conta com o apoio da FAPERJ, tem como um dos objetivos desenvolver metodologias, que permitam verificar a autenticidade de uma de arte, utilizando dados acerca dos materiais, que foram empregados no processo de criação de uma determinada pintura. As telas estudadas neste projeto serão analisadas por técnicas físico-químicas não destrutivas. Os resultados obtidos neste projeto, auxiliarão as autoridades de segurança pública, na investigação de crimes que envolvem obras de arte. Além de desenvolver metodologias que auxiliarão na perícia de pinturas o projeto também conta, com estudos que auxiliarão em Perícias em Veículos Clonados e Identificação e Mapeamento de Roubos e Furtos."
      }
    ],
    pesquisadores: [
      {
        nome: "Rafael S. Dutra",
        cargo:
          "Professor Associado (D-404) do Instituto Federal do Rio de Janeiro (IFRJ)",
        foto: "RSDutra.png",
        contato: {
          email: "rafael.dutra.@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/1384421730870729"
        },

        educacao: [
          {
            curso: "Doutorado em Física",
            termino: "2011",
            instituicao: "Universidade Federal do Rio de Janeiro",
            sigla: "UFRJ",
            pais: "Brasil"
          },
          {
            curso: "Mestrado em Física",
            termino: "2007",
            instituicao: "Universidade Federal do Rio de Janeiro",
            sigla: "UFRJ",
            pais: "Brasil"
          },

          {
            curso: "Licenciatura em Física",
            termino: "2005",
            instituicao: "Universidade Federal Rural do Rio de Janeiro",
            sigla: "UFRRJ",
            pais: "Brasil"
          }
        ],
        pesquisas: [
          {
            pesquisa: "Teoria das forças de captura em pinças óticas"
          },
          {
            pesquisa:
              "Teoria das forças óticas em diversas condições de contorno"
          },
          { pesquisa: "Teoria da Imagem em sistemas óticos não paraxiais" },
          { pesquisa: "Ensino de física" }
        ]
      },
      {
        nome: "Douglas Santo Rodrigues Ferreira",
        cargo:
          "Professor Associado (D-402) do Instituto Federal do Rio de Janeiro (IFRJ)",
        foto: "Douglas.png",
        contato: {
          email: "douglas.ferreira@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/0015478917428941"
        },
        educacao: [
          {
            curso: "Doutorado em Geofísica",
            termino: "2014",
            instituicao:
              "Observatório Nacional (com período sanduíche em Florida Institute of Technology)",
            sigla: "ON",
            pais: "Brasil"
          },
          {
            curso: "Mestrado em Física",
            termino: "2010",
            instituicao: "Universidade Federal Fluminense",
            sigla: "UFF",
            pais: "Brasil"
          },
          {
            curso: "Graduacão em Física",
            termino: "2004",
            instituicao: "Universidade Federal Fluminense",
            sigla: "UFF",
            pais: "Brasil"
          }
        ],
        pesquisas: [
          { pesquisa: "Redes Complexas" },
          { pesquisa: "Estudos de Sistemas Complexos aplicados à Geofísica" },
          {
            pesquisa:
              "Caracterizações sismológicas utilizando métodos de Física Estatística"
          },
          { pesquisa: "Física Estatística Aplicada à Dinâmica de Crimes" },
          { pesquisa: "Modelagem Computacional para Simulações de Terremotos" },
          { pesquisa: "Sistemas Críticos Auto-organizados" },
          { pesquisa: "Habilidades de programação em C, R e Python" },
          { pesquisa: "Manipulação computacional de redes complexas" },
          {
            pesquisa: "Orientação de Iniciação Científica, Mestrado e Doutorado"
          },
          {
            pesquisa:
              "Coordenador de Pesquisa e Inovação do IFRJ - campus Paracambi"
          }
        ]
      },
      {
        nome: "Leandro de Oliveira Pereira",
        cargo:
          "Professor Associado (D-402) do Instituto Federal do Rio de Janeiro (IFRJ)",
        foto: "folha.png",
        contato: {
          email: "leandro.pereira@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/4961077787876524"
        },
        educacao: [
          {
            curso: "Doutorado em Física",
            termino: "2017",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Mestrado em Engenharia Nuclear (Física Nuclear Aplicada)",
            termino: "2009",
            instituicao: "Universidade Federal do Rio de Janeiro",
            sigla: "UFRJ",
            pais: "Brasil"
          },
          {
            curso: "Graduacão em Física",
            termino: "2006",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          }
        ],
        pesquisas: [
          { pesquisa: "Espectrometria Molecular" },
          { pesquisa: "Técnicas Nucleares" },
          {
            pesquisa:
              "Desenvolvimento de Métodos Matemáticos para Análise de Sistemas Dinâmicos"
          },
          { pesquisa: "Habilidades de programação em C++, Maple e Python" },
          { pesquisa: "Manipulação computacional de redes complexas" },
          { pesquisa: "Orientação de Iniciação Científica e Extensão" }
        ]
      },
      {
        nome: "André Rocha Pimenta",
        cargo:
          "Professor Associado (D-402) do Instituto Federal do Rio de Janeiro (IFRJ)",
        foto: "andre.png",
        contato: {
          email: "andre.pimenta@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/2962103182860488"
        },
        educacao: [
          {
            curso: "Doutorado em Engenharia Mecânica",
            termino: "2016",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Mestrado em Engenharia Mecânica",
            termino: "2009",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Graduacão em Engenharia Mecânica",
            termino: "2006",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Técnico em Mecânica",
            termino: "2000",
            instituicao:
              "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",
            sigla: "CEFET/RJ",
            pais: "Brasil"
          }
        ],
        pesquisas: [
          { pesquisa: "Microscopia ótica e eletrónica" },
          { pesquisa: "Estudos de Análise de Falhas" },
          { pesquisa: "Aços inoxidáveis com ênfase em aços duplex" },
          {
            pesquisa:
              "Análises físico-químicas e microscopia aplicada a arqueometría"
          },
          {
            pesquisa:
              "Experiência em gestão: Coordenador do curso técnico em sistemas a gás 2007-2006; Coordenador do curso técnico em mecânica 2001-2012; Diretor de Administração do Campus Paracambi 2012-2017"
          },
          {
            pesquisa:
              "Coordenação dos projetos com fomento da Petrobras e FAPERJ"
          },
          {
            pesquisa:
              "Prestação de consultorias para empresas na área de microscopia"
          }
        ]
      },
      {
        nome: "Elicardo Alves de Souza Gonçalves",
        cargo: "Professor",
        foto: "elicardo.jpg",
        contato: {
          email: "elicardo.goncalves@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/7653565899894307"
        },
        educacao: [
          {
            curso: "Doutorado em Física",
            termino: "2016",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Mestrado em Engenharia Metalúrgica e de Materiais",
            termino: "2010",
            instituicao: "Universidade Federal do Rio de Janeiro",
            sigla: "UFRJ",
            pais: "Brasil"
          },
          {
            curso: "Especialização em Radiodiagnóstico",
            termino: "2011",
            instituicao: "Instituto Nacional de Câncer",
            sigla: "INCa",
            pais: "Brasil"
          },
          {
            curso: "Graduação em Física",
            termino: "2007",
            instituicao: "Universidade Federal do Rio de Janeiro",
            sigla: "UFRJ",
            pais: "Brasil"
          }
        ],
        pesquisas: [
          { pesquisa: "Instrumentação Nuclear aplicada" },
          {
            pesquisa: "Processamento de imagens e computação gráfica aplicadas"
          },
          {
            pesquisa: "Modelagem computacional e computação numérica aplicadas"
          },
          { pesquisa: "Técnicas de imagem por radiação ionizante" },
          { pesquisa: "Proteção radiológica" }
        ]
      },
      {
        nome: "Valter de Souza Felix",
        cargo: "Pesquisador/Professor",
        foto: "valter.jpg",
        contato: {
          email: "valter.felix@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/6855296784759751"
        },
        educacao: [
          {
            curso: "Doutorado em Engenharia Nuclear",
            termino: "Previsão de termino: Dez 2020",
            instituicao: "Universidade Federal do Rio de Janeiro",
            sigla: "UFRJ",
            pais: "Brasil"
          },
          {
            curso: "Mestrado em Química",
            termino: "2011",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Especialização em Química",
            termino: "2009",
            instituicao: "Universidade do Estado do Rio de Janeiro",
            sigla: "UERJ",
            pais: "Brasil"
          },
          {
            curso: "Bacharel em Química",
            termino: "2005",
            instituicao: "Universidade Federal Fluminense",
            sigla: "UFF",
            pais: "Brasil"
          },
          {
            curso: "Licenciatura em Química",
            termino: "2005",
            instituicao: "Universidade Federal Fluminense",
            sigla: "UFF",
            pais: "Brasil"
          }
        ],
        pesquisas: [
          {
            pesquisa:
              "Espectroscopia Raman e FTIR aplicada a análise de bens Culturias"
          },
          {
            pesquisa:
              "Fluorescência de Raios X aplicada a análise de bens culturais"
          },
          { pesquisa: "Mapeamento por Macro-XRF de bens culturais" },
          {
            pesquisa:
              "Análise Estatística Multi-Variada aplicada ao estudo de bens Culturais"
          }
        ]
      }
    ],
    noticias: [
      {
        title: "Aquele que tem um cabelo maravilhoso",
        foto: "andre.png",
        data: "05/09/2020"
      },
      {
        title: "Aquela que coloca Forrest Gump no chinelo",
        foto: "jrsconceicao.png",
        data: "26/08/2020"
      },
      {
        title: "O homem mais lindo do IFRJ",
        foto: "Douglas.png",
        data: "16/09/2020"
      }
    ],
    alunosDoutorado: [
      {
        nome: "Paulo S. L. de Oliveira Jr.",
        cargo: "Bolsista CNPq",
        foto: "psloliveirajr.png",
        contato: {
          email: "paulo.oliveira@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/9599595617047873"
        },
        faculdade: "Universidade Federal Fluminense"
      }
    ],
    alunosMestrado: [
      {
        nome: "Paulo S. L. de Oliveira Jr.",
        cargo: "Bolsista CNPq",
        foto: "psloliveirajr.png",
        contato: {
          email: "paulo.oliveira@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/9599595617047873"
        },
        faculdade: "Universidade Federal Fluminense"
      }
    ],
    alunosInicicao: [
      {
        nome: "Paulo S. L. de Oliveira Jr.",
        cargo: "Bolsista CNPq",
        foto: "psloliveirajr.png",
        contato: {
          email: "paulo.oliveira@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/9599595617047873"
        },
        faculdade: "Universidade Federal Fluminense"
      },
      {
        nome: "Jennifer R. S. da Conceição",
        cargo: "Bolsista FAPERJ",
        foto: "jrsconceicao.png",
        contato: {
          email: "jennifer.@ifrj.edu.br",
          lattes: "http://lattes.cnpq.br/7344849643725280"
        },
        faculdade: "Universidade Federal Rural do Rio de Janeiro"
      }
    ],
    equipamentos: [
      {
        nome: "Parque Computacional",
        foto: "background-image.svg",
        descricao:
          "1 computador do tipo desktop com configurações de 64Gb de RAM,8Gb de memória de vídeo dedicada, e processadores Intel i9 octa-core 5.0GHz; 1 computador do tipo desktop com configurações de 64Gb de RAM, 2Gb de memória de vídeo dedicada, e processadores Intel i9 octa-core 5.0GHz; 2 computadores do tipo macbook com configurações de 16Gb de RAM, 4Gb de memória de vídeo dedicada, processadores Intel i9 octa-core 2.3GHz; 5 computadores do tipo desktop com configurações de 16Gb de RAM,  2Gb de memória de vídeo dedicada, e processadores Intel i7 quad-core 3.6GHz; 3 computadores do tipo notebook com configurações de 16Gb de RAM,  2Gb de memória de vídeo dedicada, processadores Intel i7 quad-core 2.5GHz; 2 computadores do tipo iMac, Retina 4K, 21.5'', 8Gb de RAM, e processadores Intel i5 dual-core 2.3GHz; 2 computadores do tipo notebook com configurações de 8Gb de RAM, e processadores Intel i3 quad-core 2.5GHz."
      },
      {
        nome: "Equipamento 2",
        foto: "background-image.svg",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum eleifend purus. Mauris volutpat nunc quis eros condimentum, vitae lobortis lacus imperdiet. Maecenas ut quam pulvinar, condimentum dolor sit amet, dignissim velit. Etiam accumsan congue velit, eget rhoncus nibh hendrerit ut. Sed sagittis lectus at felis bibendum tempor. Integer ornare faucibus lacus vitae congue. Donec eget ipsum velit. Etiam vel ante consectetur, vestibulum urna sed, eleifend libero. Proin a imperdiet leo, at rutrum massa."
      }
    ],
    artigos: [
      {
        label: "Ali:20",
        type: "article",
        properties: {
          journal: "J. Opt. Soc. Am. B",
          title:
            "Probing the optical chiral response of single nanoparticles with optical tweezers",
          author:
            "Rfaqat Ali and F. A. Pinheiro and R. S. Dutra and F. S. S. Rosa and P. A. Maia Neto",
          url: "http://josab.osa.org/abstract.cfm?URI=josab-37-9-2796",
          doi: "https://doi.org/10.1364/JOSAB.398934",
          pages: "2796--2803",
          volume: "37",
          date: "2020-09-01",
          year: "2020",
          month: "09",
          day: "01",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We propose an enantioselective scheme to sort homogeneous chiral particles using optical tweezers. For a certain range of material parameters, we show that a highly focused circularly polarized laser beam traps particles of a specific chirality selected by the handedness of the trapping beam. Furthermore, by applying a transverse Stokes drag force that displaces the trapped particle off-axis, we allow for the rotation of the particle center-of-mass around the trapping beam axis. The rotation angle is highly dependent on the handedness of the trapped particle and is easily measurable with standard video-microscopy techniques, allowing for an alternative mechanism for chiral resolution. Our platform not only allows for enantio selection of particles dispersed in solution but also paves the way to characterization of the chiral parameter of individual, homogeneous chiral microspheres using optical tweezing."
        }
      },
      {
        label: "Dias2019",
        type: "article",
        properties: {
          journal: "Physica A: Statistical Mechanics and its Applications",
          issn: "0378-4371",
          title:
            "Analysis of temporal and spatial distributions between earthquakes in the region of California through Non-Extensive Statistical Mechanics and its limits of validity",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0378437119308568",
          volume: "529",
          author:
            "Dias, Vitor H.A. and Papa, Andrés R.R. and Ferreira, Douglas S.R.",
          pages: "121471",
          date: "2019-09-01",
          year: "2019",
          month: "9",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this work we study the influence of considering partial sets of earthquakes data has on the temporal and spatial probability distributions of earthquakes, using data from the California region between 2003 and 2016, with different thresholds for magnitude and depth of hypocenters. For this we have considered sequences of earthquakes where we have ``jump'', or pulled, a given fixed number of actually sequential earthquakes. Through the concepts of Non-Extensive Statistical Mechanics for the time interval between earthquakes, we have found that the increase of the jump between earthquakes forming the sequence, affects the non-extensive characteristic of the system in the temporal probability distribution, denoted by a change in the value of the entropic index q, for relatively small jump sizes. However, for the distance between earthquakes, we observe that the increase of jumps lets untouched the non-extensive characteristic of the system, keeping the entropic index values q approximately constant. This analysis allows not just to show the robustness of the Non-Extensive Statistical Mechanics treatments for the study of earthquakes, but also their limits of applicability with respect to jumps or data loss. At the same time, it is a very useful test for memory effects and long-range interactions."
        }
      },
      {
        label: "Ferreira2020",
        type: "article",
        properties: {
          journal: "Physica A: Statistical Mechanics and its Applications",
          issn: "0378-4371",
          title:
            "Long-range correlation studies in deep earthquakes global series",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0378437120305999",
          volume: "560",
          author:
            "Ferreira, Douglas S.R. and Ribeiro, Jennifer and Oliveira, Paulo S.L. and Pimenta, André R. and Freitas, Renato P. and Papa, Andrés R.R.",
          pages: "125146",
          date: "2020-12-15",
          year: "2020",
          month: "12",
          day: "15",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In the present paper we have conducted studies on seismological properties using worldwide data of deep earthquakes (depth larger than 70 km), considering events with magnitude greater than or equal to 4.5. This work is an extension of a previous study using a similar approach, for shallow events. We have addressed the problem under the perspective of complex networks, using a time window model to build the networks for deep earthquakes. These networks present scale-free and small-world features, contributing to strengthen the use of the time window model to construct epicenters networks. The results for deep events were analyzed using Nonextensive Statistical Mechanics and they corroborate with those found for the shallow ones, since the connectivity distribution for deep earthquakes also follows a q-exponential distribution and the scaling behavior is present. Our findings reinforce the idea of long-range correlations between earthquakes and the criticality of the seismological system."
        }
      },
      {
        label: "Ferreira2018",
        type: "article",
        properties: {
          journal: "EPL (Europhysics Letters)",
          issn: "0295-5075",
          number: "5",
          publisher: "IOP Publishing",
          title:
            "Towards evidence of long-range correlations in shallow seismic activities",
          url: "https://iopscience.iop.org/article/10.1209/0295-5075/121/58003",
          volume: "121",
          author:
            "Ferreira, Douglas and Ribeiro, Jennifer and Papa, Andrés and Menezes, Ronaldo",
          pages: "58003",
          date: "2018-03-01",
          year: "2018",
          month: "3",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this work, we introduce a new methodology to construct a network of epicenters that avoids problems found in well-established methodologies when they are applied to global catalogs of earthquakes located in shallow zones. The new methodology involves essentially the introduction of a time window which works as a temporal filter. Our approach is more generic and for small regions the results coincide with previous findings. The network constructed with that model has small-world properties and the distribution of node connectivity follows a non-traditional function, namely a q-exponential, where scale-free properties are present. The vertices with larger connectivity in the network correspond to the areas with very intense seismic activities in the period considered. These new results strengthen the hypothesis of long spatial and temporal correlations between earthquakes."
        }
      },
      {
        label: "Ferreira2015",
        type: "article",
        properties: {
          journal: "Physics Letters A",
          issn: "0375-9601",
          number: "7",
          title:
            "On the agreement between small-world-like OFC model and real earthquakes",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0375960114012432",
          volume: "379",
          author:
            "Ferreira, Douglas S.R. and Papa, Andrés R.R. and Menezes, Ronaldo",
          pages: "669--675",
          date: "2015-03-20",
          year: "2015",
          month: "3",
          day: "20",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this article we implemented simulations of the OFC model for earthquakes for two different topologies: regular and small-world, where in the latter the links are randomly rewired with probability p. In both topologies, we have studied the distribution of time intervals between consecutive earthquakes and the border effects present in each one. In addition, we also have characterized the influence that the probability p produces in certain characteristics of the lattice and in the intensity of border effects. From the two topologies, networks of consecutive epicenters were constructed, that allowed us to analyze the distribution of connectivities of each one. In our results distributions arise belonging to a family of non-traditional distributions functions, which agrees with previous studies using data from actual earthquakes. Our results reinforce the idea that the Earth is in a critical self-organized state and furthermore point towards temporal and spatial correlations between earthquakes in different places."
        }
      },
      {
        label: "Ferreira2014",
        type: "article",
        properties: {
          journal: "Physica A: Statistical Mechanics and its Applications",
          issn: "0378-4371",
          title: "Small world picture of worldwide seismic events",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0378437114003355",
          volume: "408",
          author:
            "Ferreira, Douglas S.R. and Papa, Andrés R.R. and Menezes, Ronaldo",
          pages: "170--180",
          date: "2014-08-15",
          year: "2014",
          month: "8",
          day: "15",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "The understanding of long-distance relations between seismic activities has for long been of interest to seismologists and geologists. In this paper we have used data from the worldwide earthquake catalog for the period between 1972 and 2011 to generate a network of sites around the world for earthquakes with magnitude m≥4.5 in the Richter scale. After the network construction, we have analyzed the results under two viewpoints. First, in contrast to previous works, which have considered just small areas, we showed that the best fitting for networks of seismic events is not a pure power law, but a power law with exponential cutoff; we also have found that the global network presents small-world properties. Second, we have found that the time intervals between successive earthquakes have a cumulative probability distribution well fitted by nontraditional functional forms. The implications of our results are significant because they seem to indicate that seisms around the world are not independent. In this paper we provide evidence to support this argument."
        }
      },
      {
        label: "10.1007/978-3-319-05401-8_10",
        type: "article",
        properties: {
          journal: "Complex Networks V",
          isbn: "978-3-319-05401-8",
          publisher: "Springer International Publishing",
          address: "Cham",
          title: "The Small World of Seismic Events",
          url: "https://link.springer.com/chapter/10.1007/978-3-319-05401-8_10",
          volume: "549",
          author:
            "Ferreira, Douglas S. R. and Papa, Andrés R. R. and Menezes, Ronaldo",
          editor:
            "Contucci, Pierluigi and Menezes, Ronaldo and Omicini, Andrea and Poncela-Casasnovas, Julia",
          pages: "97--105",
          date: "2016-11-25",
          year: "2016",
          month: "11",
          day: "25",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "The understanding of long-distance relations between seismic activities has for long been of interest to seismologists and geologists. In this paper we have used data from the world-wide earthquake catalog for the period between 1972 and 2011, to generate a network of sites around the world for earthquakes with magnitude m{\thinspace}≥{\thinspace}4.5 on the Richter scale. After the network construction, we have analyzed the results under two viewpoints. Firstly, in contrast to previous works, which have considered just small areas, we showed that the best fitting for networks of seismic events is not a pure power law, but a power law with an exponential cutoff. We also have found that the global network presents small-world properties. The implications of our results are discussed."
        }
      },
      {
        label: "Santo2013",
        type: "article",
        properties: {
          journal:
            "Brazilian Journal of Geophysics; v. 31, n. 3 (2013)DO - 10.22564/rbgf.v31i3.319",
          title:
            "A STATISTICAL STUDY OF EARTH'S MAGNETIC FIELD REVERSALS SEQUENCES",
          url:
            "https://www.sbgf.org.br/revista/index.php/rbgf/article/view/319",
          author:
            "Santo, Marco Aurélio do Espírito and Ferreira, Douglas Santos Rodrigues and da Ponte Neto, Cosme Ferreira and Papa, Andrés Reinaldo Rodriguez",
          pages: "533--540",
          date: "2013-09-01",
          year: "2013",
          month: "9",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "This paper presents an analysis of the distribution of periods between consecutive reversals of the Earth's magnetic ﬁeld through a non-parametric statistics. The study analyzes whether data in different periods of reversal belong to the same distribution, the distribution type and whether the polarity states are equivalent. This analysis was performed for periods from 0 to 40 Ma, 40 to 80 Ma and 120 to 160 Ma. It was found that the data from the three periods show identical statistical characteristics which leads to the symmetry between the states of polarity and to a distribution compatible with a power law, which shows the possibility of a critical phenomenon acting on the geodynamo. The fact that the data obey a power law distribution prompted a comparison with synthetic data generated using two models based on criticality of reversals (one of them self-organized). These simple models reproduce some features of reversals as its temporal evolution and distribution of polarity intervals, and show a similarity with paleomagnetic data.   Keywords : geomagnetic reversals, power law, self-organized criticality."
        }
      },
      {
        label: "Barbosa2013",
        type: "article",
        properties: {
          journal: "Physica A: Statistical Mechanics and its Applications",
          issn: "0378-4371",
          number: "24",
          title:
            "Statistical analysis of geomagnetic field reversals and their consequences",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0378437113007541",
          volume: "392",
          author:
            "Barbosa, Cleiton S. and Ferreira, Douglas S.R. and do Espírito Santo, Marco A. and Papa, Andrés R.R.",
          pages: "6554--6560",
          date: "2013-12-15",
          year: "2013",
          month: "12",
          day: "15",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this paper we focus on the statistical distribution of time intervals between geomagnetic reversals. Recently the Tsallis distribution was pointed out as a possible alternative to previous proposals. We have performed statistical tests to further prove this and find the parameters of the Tsallis distribution that better fit the data. Additionally we have analyzed the correlation of time intervals between consecutive reversals to show the presence of memory effects on the mechanism that generates them, as could be expected for some Tsallis systems."
        }
      },
      {
        label: "Felix2018",
        type: "article",
        properties: {
          journal: "Radiation Physics and Chemistry",
          issn: "0969-806X",
          title: "Analysis of a European cupboard by XRF, Raman and FT-IR",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0969806X18301877",
          volume: "151",
          author:
            "Felix, Valter S. and Mello, Ulisses L. and Pereira, Marcelo O. and Oliveira, Ana L. and Ferreira, Douglas S. and Carvalho, Cristiano S. and Silva, Fabricio L. and Pimenta, André R. and Diniz, Marilia Garcia and Freitas, Renato P.",
          pages: "198--204",
          date: "2018-10-01",
          year: "2018",
          month: "10",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this paper, a European black Japanned piece of furniture (dated to approximately 1860) was analyzed by XRF, Raman spectroscopy and FT-IR techniques. The analyses detected pigments such as vermilion/cinnabar [HgS], Massicot [PbO], lamp black [C] and green earth [K[(Al,FeIII),(FeII,Mg)](AlSi3,Si4)O10(OH)2], which were possibly dissolved in gum arabic. The analyses also determined that the metallic ornaments consist of a brass alloy with traces of gold and that gold was also used in some golden regions of the polychrome. The results obtained assisted restorers in choosing suitable intervening procedures and contributed to a better understanding of the cupboard manufacturing process."
        }
      },
      {
        label: "Ribeiro2016",
        type: "article",
        properties: {
          journal: "Vibrational Spectroscopy",
          issn: "0924-2031",
          title:
            "Analysis by raman spectroscopy and XRF of glass beads from excavations in the harbor area of rio de janeiro, Brazil",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0924203116302727",
          volume: "87",
          author:
            "Ribeiro, I. M. N. and Freitas, R. P. and Calza, C. and Oliveira, A. L. C. and Felix, V. S. and Ferreira, D. S. and Batista, R. T. and Gonçalves, E. A. S. and Pereira, M. O. and Brito, P. C. L. and Lima, T. A. and Pimenta, A. R. and Anjos, M. J. and Lopes, R. T.",
          pages: "111--115",
          date: "2016-11-01",
          year: "2016",
          month: "11",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this paper, nine beads from excavations in the Valongo Wharf, located in the harbor area of Rio de Janeiro, Brazil that were utilized as ornaments by Africans and Afrodescendants during the 19th century were analyzed by Raman and X-Ray Fluorescence (XRF) spectroscopy. All samples in the analysis showed Raman spectra with two bands of maximum intensity around 1000 and 500cm−1 related to the maximum stretching ($\nu$max) and bending mode ($delta$), respectively, of the tetrahedral network of the SiO4 present in the glass matrix. However, there is variation in the intensity and position of the bands that are directly associated with the burning process and the raw material utilized in the manufacture of the beads. Based on the polymerization index (Ip=A500/AU000), it is possible to relate these two parameters. By establishing a correlation among the Ip and the $\nu$max band, the beads were classified into groups. The results reveal that the beads' base paste exhibits differences, allowing their classification into groups according to the manufacturing process. Based on the combination of the elemental characterization and Raman spectroscopy results, it was also possible to conclude that European and Asian countries are the possible origins of the beads."
        }
      },
      {
        label: "daConceiçãoLuiz2019",
        type: "article",
        properties: {
          journal: "Revista Brasileira de Ciências da Saúde",
          title:
            "Uso de Fluorescência de Raios X (XRF) para fins de comparação entre a composição elementar da barba de timão [Stryphnodendron adstringens (Mart.) Coville] com outras pomadas cicatrizantes",
          url:
            "https://periodicos.ufpb.br/index.php/rbcs/article/view/37537-p7",
          volume: "23",
          author:
            "da Conceição Luiz, Leandro and Batista, Rafaela Tavares and da Silva, Deborah Demarque Martins and Rezende, Juliana Fernandes and de Jesus, Lays Cordeiro and de Faria, Marcela da Silva Teodoro and de Freitas, Renato Pereira and de Souza Felix, Valter",
          pages: "173--178",
          date: "2019-07-05",
          year: "2019",
          month: "7",
          day: "5",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Introdução: A Barba de timão é uma planta de origem do cerrado brasileiro, que vem sendo estudada por suas propriedades medicinais, tais como: antibacteriana, cicatrizante, coagulante sanguíneo, dentre outras. A cicatrização é um processo pelo qual o organismo tende a reparar uma lesão ou perda de tecido. Objetivo: Este trabalho compara a composição química da barba de timão com algumas pomadas cicatrizantes de origem farmacêuticas já presentes e disponíveis no mercado. Assim, pode-se relacionar a propriedade cicatrizante desta planta por meio de seus componentes químicos. Materiais e Métodos: Para realizar tal comparação, foi utilizada com amostra a planta barba de timão comercializada em mercados especializados e as pomadas, sulfato de neomicina e a sulfadiazina de prata. Para a análise multielementar, foi utilizada a espectroscopia por fluorescência de raios X (XRF). Com o espectro fornecido pela XRF foi possível comparar os elementos químicos das amostras. Conclusão: O espectro mostrou que a barba de timão tem propriedades químicas semelhantes, assemelhando-se com os componentes químicos encontrados na amostra de sulfato de neomicina, adicionada de três compostos químicos, K, Ca e Br, que também são importantes no processo de cicatrização. Ao comparar com a sulfadiazina de prata, o único elemento que se difere do fitoterápico, além do três já citados, é a Ag.Descritores: Barba de Timão. Cicatrização Pomada. Fármaco. Fluorescência de Raios X."
        }
      },
      {
        label: "Felix2020",
        type: "article",
        properties: {
          journal: "Applied Radiation and Isotopes",
          issn: "0969-8043",
          title:
            "Analysis of silver coins from colonial Brazil by hand held XRF and micro-XRF",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0969804320305558",
          author:
            "Felix, Valter S. and Pereira, Marcelo O. and Freitas, Renato P. and Aranha, PaulaJ.M. and Henrique, PedroC.S. and Anjos, Marcelino J. and Lopes, Ricardo T.",
          pages: "109409",
          date: "2020-09-06",
          year: "2020",
          month: "9",
          day: "6",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this work, 960 réis coins from the period when Brazil was a colony of Portugal were analyzed using the x-ray fluorescence (XRF) spectrometry. The history of these coins, dated between the end of the 17th century and the beginning of the 19th century, had a great influence on the immigration of the Portuguese Prince Regent D. João to Brazil, who arrived in 1808. Bearing in mind the need to expand the timid Brazilian monetary system, the Portuguese crown decided to collect Spanish silver pesos of 8 reales, recoined with a value of 960 réis. The recoinage procedure was carried out using a stamp; therefore, in many cases, it is possible to check the base currency. In this work, were investigated 17 samples of 960 réis coins by XRF, in which the base coin was 8 reales manufactured with raw materials from Mexican mines. In addition to characterizing the elemental composition of the coins, the XRF data were evaluated using multivariate statistical method of Robust Principal Component Analysis (ROBPCA), which was used to classify the coins based on their elemental composition. However, with XRF, elementary information is obtained for a depth of only a few micrometers. One of the essential issues in Ag--Cu metal alloys is the Ag enrichment, which can cause changes to the elemental composition of the surface. Therefore, initially, a study was carried out to verify whether the surface compositions of the coins were altered by the Ag enrichment."
        }
      },
      {
        label: "Dutra2020a",
        type: "article",
        properties: {
          journal: "Revista Brasileira de Ensino de Física",
          issn: "1806-1117",
          publisher: "scielo",
          title:
            "Efeitos do vento solar na magnetosfera terrestre: uma abordagem didática dos cinturões de Van Allen",
          url:
            "http://www.scielo.br/scielo.php?script=sci_arttext&pid=S1806-11172020000100425&nrm=iso",
          volume: "42",
          author:
            "Dutra, R. S. and Ferreira, D. S. R. and Gonçalves, A. S. M. and Carvalho, G. M.",
          date: "2020-01-24",
          year: "2020",
          month: "1",
          day: "24",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Neste trabalho realizamos uma abordagem didática de aspectos relacionados ao geomagnetismo e como esses aspectos podem ser influenciados pela ação do vento solar. A carência de textos didáticos que promovam explicaç{~o}es em termos de conceitos de física básica foi a principal motivação para esse trabalho. Iniciamos com uma discussão histórica sobre o estudo do magnetismo que culminou na conhecida teoria do dínamo para explicar a origem do campo magnético terrestre, na qual mostramos a possiblidade de abordar este assunto em cursos de eletricidade e magnetismo. Apresentamos também dois cenários para a magnetosfera terrestre, com o intuito de modelar a interação do vento solar com a magnetosfera, em que representamos tal interação por meio da superposição dos campos de dois dipolos magnéticos. A seguir mostramos a possiblidade de discutir o movimento das cargas provenientes do vento solar ao redor da Terra, na região da magnetosfera, utilizando a segunda lei de Newton e a força de Lorentz, discutindo assim a formação de anéis de cargas em movimento e dos cintur{~o}es de Van Allen. Finalmente apresentamos um simples argumento, baseado no modelo apresentado, para a deformação da magnetosfera, para explicar a limitação na quantidade de anéis e cintur{~o}es que envolvem o nosso planeta."
        }
      },
      {
        label: "Ali2020",
        type: "article",
        properties: {
          journal: "Nanoscale",
          doi: "https://doi.org/10.1039/C9NR09736H",
          issn: "2040-3364",
          number: "8",
          publisher: "The Royal Society of Chemistry",
          title:
            "Enantioselective manipulation of single chiral nanoparticles using optical tweezers",
          url: "https://doi.org/10.1039/C9NR09736H",
          volume: "12",
          author:
            "Ali, Rfaqat and Pinheiro, Felipe A. and Dutra, Rafael S. and Rosa, Felipe S. S. and Maia Neto, Paulo A.",
          pages: "5031--5037",
          date: "2020-02-11",
          year: "2020",
          month: "2",
          day: "11",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We put forward an enantioselective method for chiral nanoparticles using optical tweezers. We demonstrate that the optical trapping force in a typical, realistic optical tweezing setup with circularly-polarized trapping beams is sensitive to the chirality of core--shell nanoparticles, allowing for efficient enantioselection. It turns out that the handedness of the trapped particles can be selected by choosing the appropriate circular polarization of the trapping beam. The chirality of each individual trapped nanoparticle can be characterized by measuring the rotation of the equilibrium position under the effect of a transverse Stokes drag force. We show that the chirality of the shell gives rise to an additional twist, leading to a strong enhancement of the optical torque driving the rotation. Both methods are shown to be robust against variations of size and material parameters, demonstrating that they are particularly useful in (but not restricted to) several situations of practical interest in chiral plasmonics, where enantioselection and characterization of single chiral nanoparticles, each and every one with its unique handedness and optical properties, are in order. In particular, our method could be employed to unveil the chiral response arising from disorder in individual plasmonic raspberries, synthesized by close-packing a large number of metallic nanospheres around a dielectric core."
        }
      },
      {
        label: "Lima2020",
        type: "article",
        properties: {
          journal: "Physics Education",
          doi: "10.1088/1361-6552/ab921a",
          issn: "0031-9120",
          number: "4",
          publisher: "IOP Publishing",
          title: "Studying the Oobleck with video-analysis",
          url: "https://doi.org/10.1088/1361-6552/ab921a",
          volume: "55",
          author: "Lima, E. A. and Dutra, R. S. and Souza, P. V. S.",
          pages: "045021",
          date: "2020-06-08",
          year: "2020",
          month: "6",
          day: "8",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We propose a semiquantitative experiment that associates video-analysis and ordinary procedures of experimental physics whose objective is to investigate the dual character of Oobleck, a mixture of cornstarch in water, which appears thicker or thinner depending on how it is physically manipulated. The results are presented and interpreted taking into account a macroscopic model present in the literature. The experiment is easily replicable in the most diverse school realities and it may be useful do discuss many fundamental physics concepts."
        }
      },
      {
        label: "Diniz2019",
        type: "article",
        properties: {
          journal: "Optics Express",
          number: "5",
          publisher: "OSA",
          title: "Negative optical torque on a microsphere in optical tweezers",
          url: "http://www.opticsexpress.org/abstract.cfm?URI=oe-27-5-5905",
          volume: "27",
          author:
            "Diniz, K. and Dutra, R. S. and Pires, L. B. and Viana, N. B. and Nussenzveig, H. M. and Maia Neto, P. A.",
          pages: "5905--5917",
          date: "2019-03-04",
          year: "2019",
          month: "3",
          day: "4",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We show that the optical force field in optical tweezers with elliptically polarized beams has the opposite handedness for a wide range of particle sizes and for the most common configurations. Our method is based on the direct observation of the particle equilibrium position under the effect of a transverse Stokes drag force, and its rotation around the optical axis by the mechanical effect of the optical torque. We find overall agreement with theory, with no fitting, provided that astigmatism, which is characterized separately, is included in the theoretical description. Our work opens the way for characterization of the trapping parameters, such as the microsphere complex refractive index and the astigmatism of the optical system, from measurements of the microsphere rotation angle."
        }
      },
      {
        label: "Pereira2020",
        type: "article",
        properties: {
          journal: "Radiation Physics and Chemistry",
          issn: "0969-806X",
          title:
            "Dose distribution in boron neutron capture therapy for the treatment of brain cancer",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0969806X19303561",
          volume: "168",
          author:
            "Pereira, Leandro O. and Freitas, Renato P. and Ferreira, Douglas S. and Felix, Valter S. and Gonçalves, Elicardo A.S. and Pimenta, André R. and de Sousa Dutra, Rafael and Xavier da Silva, Ademir",
          pages: "108611",
          date: "2020-03-01",
          year: "2020",
          month: "3",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "This work presents a study of the influence of the field size of an epithermal neutron beam on the dose distribution in treatments with boron neutron capture therapy using an anthropomorphic voxel-based simulator. To calculate the doses in the tissues and organs of the head, the Monte Carlo N-Particle radiation transport code is used. The results suggest the possibility of using a beam of 6 cm in diameter for the treatment of tumours in the frontal lobe and parietal regions. With a beam of 10 cm in diameter, we could treat tumours located in the frontal lobe, parietal lobe and thalamus. The work also shows that the contribution of the secondary components (gamma rays, fast and thermal neutrons) in the calculation of the total dose can result in up to 15% of the dose in the tumour tissue, 68% of the dose in the healthy brain tissue and 87% of the dose in the non-cephalic regions."
        }
      },
      {
        label: "Dutra2020b",
        type: "article",
        properties: {
          journal: "Revista Brasileira de Ensino de Física",
          issn: "1806-9126",
          publisher: "scielo",
          title:
            "Oscilador forçado por um pente de Dirac: uma aplicação da transformada de Fourier-Mellin",
          volume: "41",
          author:
            "Dutra, Rafael de Sousa and Ribeiro, Laercio Costa and Porto, Claudio Maia",
          date: "2020-06-30",
          year: "2020",
          month: "6",
          day: "30",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Neste trabalho exploramos a técnica da transformada de Laplace inversa, conhecida como transformada de Fourier-Mellin, para solucionar, de forma direta e rigorosa, o problema de um sistema que oscila sob a ação de uma força externa periódica. Também propomos um modelo em que essa força externa é descrita por uma sucessão de deltas de Dirac, uma estrutura conhecida na literatura como pente de Dirac. Esse modelo é adequado para descrever o problema clássico de uma criança sendo impulsionada em um balanço, usualmente descrito em termos de uma força externa senoidal. Indicamos nosso modelo de oscilador forçado como mais realista na descrição desse tipo de problema por considerar a atuação da força externa apenas no intervalo que corresponde ao tempo de contato entre a criança e o agente externo que realiza a força, intervalo esse que tende a zero. O principal resultado deste trabalho foi obtido no regime de ressonância, no qual a potência média transferida ao sistema apresentou uma série de picos, associados aos múltiplos inteiros da frequência natural de oscilação, diferente do que ocorre no caso ordinário, em que a força externa é descrita por uma função trigonométrica."
        }
      },
      {
        label: "Dutra2018",
        type: "article",
        properties: {
          journal: "Revista Brasileira de Ensino de Física",
          issn: "1806-1117",
          publisher: "scielo",
          title:
            "Uma aplicação da dinâmica de uma partícula em uma trajetória predeterminada: o problema do iglu elipsoidal",
          volume: "41",
          author: "Dutra, R. S. and Ribeiro, L. C. and Porto, C. M.",
          date: "2018-10-18",
          year: "2018",
          month: "10",
          day: "18",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Neste trabalho o problema clássico de uma partícula que descreve um arco de círculo ao deslizar pela superfície polida de um iglu esférico é estendido para o caso de um iglu elipsoidal. Neste caso, a altura na qual a partícula perde contato com a superfície do iglu passa a obedecer a uma equação cúbica com coeficientes que dependem dos parâmetros que determinam a trajetória elíptica. A solução analítica dessa equação é então obtida a partir do método de Cardano-Tartaglia."
        }
      },
      {
        label: "10.1103/PhysRevA.98.053804",
        type: "article",
        properties: {
          journal: "Physical Review A",
          doi: "https://doi.org/10.1103/PhysRevA.98.053804",
          number: "5",
          publisher: "American Physical Society",
          title:
            "Optimizing optical tweezing with directional scattering in composite microspheres DA",
          url: "https://doi.org/10.1103/PhysRevA.98.053804",
          volume: "98",
          author:
            "Ali, R. and Pinheiro, F. A. and Rosa, F. S. S. and Dutra, R. S. and Neto, P. A. Maia",
          pages: "053804",
          date: "2018-11-05",
          year: "2018",
          month: "11",
          day: "05",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We demonstrate that achieving zero backward scattering (ZBS), i.e., the first Kerker condition, allows for optical tweezing of high-index microspheres, which cannot be trapped using standard techniques. For this purpose, we propose an alternative material platform based on composite metamaterials. By tuning the volume filling fraction of inclusions and the microsphere radius, stable trapping can be achieved provided that ZBS is combined with the condition for destructive interference between the fields reflected at the external and internal interfaces of the microsphere when located at the focal point. By using the Mie-Debye-spherical aberration theory, we also show that the ZBS condition is even more useful in realistic, standard optical tweezer setups, in which spherical aberration is unavoidable due to refraction at the interface between the glass slide and the water-filled sample. Altogether, our findings not only pave the way for possible new trapping designs and applications but also unveil the role of backscattering in the physics of optical tweezers."
        }
      },
      {
        label: "Dutra2017",
        type: "incollection",
        properties: {
          journal: "",
          isbn: "978-1-4939-6421-5",
          publisher: "Springer New York",
          address: "New York, NY",
          title:
            "Exact Theory of Optical Tweezers and Its Application to Absolute Calibration",
          url: "https://link.springer.com/protocol/10.1007/978-1-4939-6421-5_2",
          author:
            "Dutra, Rafael S. and Viana, Nathan B. and Neto, Paulo A. Maia and Nussenzveig, H. Moysés",
          editor: "Gennerich, Arne",
          pages: "25--39",
          date: "2016-11-15",
          year: "2016",
          month: "11",
          day: "15",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Optical tweezers have become a powerful tool for basic and applied research in cell biology. Here, we describe an experimentally verified theory for the trapping forces generated by optical tweezers based on first principles that allows absolute calibration. For pedagogical reasons, the steps that led to the development of the theory over the past 15 years are outlined. The results are applicable to a broad range of microsphere radii, from the Rayleigh regime to the ray optics one, for different polarizations and trapping heights, including all commonly employed parameter domains. Protocols for implementing absolute calibration are given, explaining how to measure all required experimental parameters, and including a link to an applet for stiffness calculations."
        }
      },
      {
        label: "10.1103/PhysRevA.94.053848",
        type: "article",
        properties: {
          journal: "Physical Review A",
          doi: "10.1103/PhysRevA.94.053848",
          number: "5",
          publisher: "American Physical Society",
          title: "Theory of optical-tweezers forces near a plane interface",
          url: "https://doi.org/10.1103/PhysRevA.94.053848",
          volume: "94",
          author:
            "Dutra, R. S. and Neto, P. A. Maia and Nussenzveig, H. M. and Flyvbjerg, H.",
          pages: "053848",
          date: "2016-11-28",
          year: "2016",
          month: "11",
          day: "28",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Optical-tweezers experiments in molecular and cell biology often take place near the surface of the microscope slide that defines the bottom of the sample chamber. There, as elsewhere, force measurements require force-calibrated tweezers. In bulk, one can calculate the tweezers force from first principles, as recently demonstrated. Near the surface of the microscope slide, this absolute calibration method fails because it does not account for reverberations from the slide of the laser beam scattered by the trapped microsphere. Nor does it account for evanescent waves arising from total internal reflection of wide-angle components of the strongly focused beam. In the present work we account for both of these phenomena. We employ Weyl's angular spectrum representation of spherical waves in terms of real and complex rays and derive a fast-converging recursive series of multiple reflections that describes the reverberations, including also evanescent waves. Numerical simulations for typical setup parameters evaluate these effects on the optical force and trap stiffness, with emphasis on axial trapping. Results are in good agreement with available experimental data. Thus, absolute calibration now applies to all situations encountered in practice."
        }
      },
      {
        label: "Dutra2016",
        type: "inproceedings",
        properties: {
          journal: "",
          series: "Proc.SPIE",
          doi: "10.1117/12.2230139",
          title: "Absolute calibration of optical tweezers: the MDSA+ theory",
          url: "https://doi.org/10.1117/12.2230139",
          volume: "9922",
          author:
            "Dutra, R. S. and Viana, N. B. and Neto, P. A. Maia and Nussenzveig, H. M.",
          date: "2016-09-16",
          year: "2016",
          month: "9",
          day: "16",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "In this paper will be reported the principal results about absolute calibration of optical tweezers that we have published at reference."
        }
      },
      {
        label: "10.1103/PhysRevA.90.013825",
        type: "article",
        properties: {
          journal: "Physical Review A",
          number: "1",
          publisher: "American Physical Society",
          title: "Absolute calibration of forces in optical tweezers",
          url: "https://link.aps.org/doi/10.1103/PhysRevA.90.013825",
          volume: "90",
          author:
            "Dutra, R. S. and Viana, N. B. and Maia Neto, P. A. and Nussenzveig, H. M.",
          pages: "013825",
          date: "2014-07-21",
          year: "2014",
          month: "7",
          day: "21",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Optical tweezers are highly versatile laser traps for neutral microparticles, with fundamental applications in physics and in single molecule cell biology. Force measurements are performed by converting the stiffness response to displacement of trapped transparent microspheres, employed as force transducers. Usually, calibration is indirect, by comparison with fluid drag forces. This can lead to discrepancies by sizable factors. Progress achieved in a program aiming at absolute calibration, conducted over the past 15 years, is briefly reviewed. Here we overcome its last major obstacle, a theoretical overestimation of the peak stiffness, within the most employed range for applications, and we perform experimental validation. The discrepancy is traced to the effect of primary aberrations of the optical system, which are now included in the theory. All required experimental parameters are readily accessible. Astigmatism, the dominant effect, is measured by analyzing reflected images of the focused laser spot, adapting frequently employed video microscopy techniques. Combined with interface spherical aberration, it reveals a previously unknown window of instability for trapping. Comparison with experimental data leads to an overall agreement within error bars, with no fitting, for a broad range of microsphere radii, from the Rayleigh regime to the ray optics one, for different polarizations and trapping heights, including all commonly employed parameter domains. Besides signaling full first-principles theoretical understanding of optical tweezers operation, the results may lead to improved instrument design and control over experiments, as well as to an extended domain of applicability, allowing reliable force measurements, in principle, from femtonewtons to nanonewtons."
        }
      },
      {
        label: "Dutra2012a",
        type: "inproceedings",
        properties: {
          series: "OSA Technical Digest (online)",
          journal: "Frontiers in Optics 2012/Laser Science XXVIII",
          publisher: "Optical Society of America",
          address: "Rochester, New York",
          title:
            "Absolute calibration of optical tweezers: astigmatism effects",
          url:
            "http://www.osapublishing.org/abstract.cfm?URI=FiO-2012-FTu3A.34",
          author:
            "Dutra, R. S. and Viana, N. B. and Neto, P.A. Maia and Nussenzveig, H. M.",
          pages: "FTu3A.34",
          date: "2012-10-14",
          year: "2012",
          month: "10",
          day: "14",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We extend [1] a previous proposal for absolute calibration of optical tweezers by including optical setup aberrations into the first-principles theory, with no fitting parameters. Astigmatism, the dominant term, is determined from images of the focused laser spot. Correcting it can substantially increase stiffness. Comparison with experimental results yields agreement within error bars for a broad range of bead sizes and trap heights, as well as different polarizations. Absolute calibration is established as a reliable and practical method for applications and design of optical tweezers systems."
        }
      },
      {
        label: "Dutra2012b",
        type: "article",
        properties: {
          journal: "Applied Physics Letters",
          doi: "10.1063/1.3699273",
          issn: "0003-6951",
          number: "13",
          publisher: "American Institute of Physics",
          title:
            "Absolute calibration of optical tweezers including aberrations",
          url: "https://doi.org/10.1063/1.3699273",
          volume: "100",
          author:
            "Dutra, R. S. and Viana, N. B. and Maia Neto, P. A. and Nussenzveig, H. M.",
          pages: "131115",
          date: "2012-03-26",
          year: "2012",
          month: "3",
          day: "26",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "ABSTRACT We extend a previous proposal for absolute calibration of optical tweezers by including optical setup aberrations into the first-principles theory, with no fitting parameters. Astigmatism, the dominant term, is determined from images of the focused laser spot. Correcting it can substantially increase stiffness. Comparison with experimental results yields agreement within error bars for a broad range of bead sizes and trap heights, as well as different polarizations. Absolute calibration is established as a reliable and practical method for applications and design of optical tweezers systems."
        }
      },
      {
        label: "Dutra2007",
        type: "article",
        properties: {
          journal: "Journal of Optics A: Pure and Applied Optics",
          issn: "1464-4258",
          number: "8",
          publisher: "IOP Publishing",
          title: "Polarization effects in optical tweezers",
          url:
            "https://iopscience.iop.org/article/10.1088/1464-4258/9/8/S15/meta",
          volume: "9",
          author:
            "Dutra, R. S. and Viana, N. B. and Neto, P. A. Maia and Nussenzveig, H. M.",
          pages: "S221--S227",
          date: "2007-07-24",
          year: "2007",
          month: "7",
          day: "24",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "We extend the MDSA (Mie--Debye spherical aberration) theory of trapping forces in optical tweezers, previously developed for circularly polarized trapping beams, to linear polarization. Although it does not significantly affect the trap stiffness, linear polarization may introduce a strong axial asymmetry of the optical forces near the edge of a trapped microsphere, arising from Mie resonance effects."
        }
      },
      {
        label: "Lacerda2015",
        type: "article",
        properties: {
          journal: "American journal of dentistry",
          issn: "0894-8275",
          number: "6",
          language: "eng",
          title:
            "Evaluation of two disinfection/sterilization methods on silicon rubber-based composite finishing instruments",
          url: "http://europepmc.org/abstract/MED/26846039",
          volume: "28",
          author:
            "Lacerda, Vánia A. and Pereira, Leandro O. and Hirata JUNIOR, Raphael and Perez, Cesar R.",
          pages: "337--341",
          date: "2015-12-01",
          year: "2015",
          month: "12",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "To evaluate the effectiveness of disinfection/sterilization methods and their effects on polishing capacity, micomorphology, and composition of two different composite fiishing and polishing instruments.Two brands of finishing and polishing instruments (Jiffy and Optimize), were analyzed. For the antimicrobial test, 60 points (30 of each brand) were used for polishing composite restorations and submitted to three different groups of disinfection/sterilization methods: none (control), autoclaving, and immersion in peracetic acid for 60 minutes. The in vitro tests were performed to evaluate the polishing performance on resin composite disks (Amelogen) using a 3D scanner (Talyscan) and to evaluate the effects on the points' surface composition (XRF) and micromorphology (MEV) after completing a polishing and sterilizing routine five times.Both sterilization/disinfection methods were efficient against oral cultivable organisms and no deleterious modification was observed to point surface"
        }
      },
      {
        label: "Gonçalves2017a",
        type: "article",
        properties: {
          journal: "X-Ray Spectrometry",
          doi: "10.1002/xrs.2759",
          issn: "0049-8246",
          number: "5",
          publisher: "John Wiley & Sons, Ltd",
          title:
            "Visualization method for radiographic films through silver intensity mapping using X-ray fluorescence",
          url: "https://doi.org/10.1002/xrs.2759",
          volume: "46",
          author:
            "Gonçalves, E. A. S. and Oliveira, D. F. and Anjos, M. J. and Assis, J. T. and Oliveira, L. F. and Lopes, R. T.",
          pages: "361--366",
          date: "2017-09-01",
          year: "2017",
          month: "9",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Radiographic films have a large range of applications. In many of these applications, the behavior of characteristic curves is very important for assessing the image quality and radiography setup. Radiographic film digitization and visualization are always performed by light transmission, and the characteristic curve is known as a behavior of optical density as a function of the radiation exposure. Because optical density is a function of metallic silver generated by chemical development in silver halides, when an image is visualized by light transmission, a silver amount map is indirectly seen. However, this measurement is limited by the optical instrument, and a very weak light signal cannot be distinguished from background light or background noise. In this way, highly exposed films can contain areas with different silver concentrations, but this cannot be seen because the optical density measurement is limited. One of the ways through which it is possible to overcome such limitation is to use a different method for ascertaining the quantity of silver remaining on the developed films, and one of the quantitative techniques that suit this purpose is X-ray fluorescence (XRF). The purpose of this paper is applying ?-XRF so as to obtain a point-by-point silver intensity map to detect objects with low optical contrast on conventional radiographic films. The results of this work have shown a higher linear range in measurement using XRF, and as consequence, small objects and details in low-contrast or overexposed radiographic images could be visualized by the silver mapping technique, and the same results could not be achieved using light transmission methods. A first approach about spatial resolution and contrast was made showing strong and weak points of this way to scan radiographic films. Copyright ? 2017 John Wiley {&} Sons, Ltd."
        }
      },
      {
        label: "Gonçalves2017b",
        type: "article",
        properties: {
          journal: "X-Ray Spectrometry",
          doi: "10.1002/xrs.2759",
          issn: "0049-8246",
          number: "5",
          publisher: "John Wiley & Sons, Ltd",
          title:
            "Visualization method for radiographic films through silver intensity mapping using X-ray fluorescence",
          url: "https://doi.org/10.1002/xrs.2759",
          volume: "46",
          author:
            "Gonçalves, E. A. S. and Oliveira, D. F. and Anjos, M. J. and Assis, J. T. and Oliveira, L. F. and Lopes, R. T.",
          pages: "361--366",
          date: "2017-09-01",
          year: "2017",
          month: "9",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Radiographic films have a large range of applications. In many of these applications, the behavior of characteristic curves is very important for assessing the image quality and radiography setup. Radiographic film digitization and visualization are always performed by light transmission, and the characteristic curve is known as a behavior of optical density as a function of the radiation exposure. Because optical density is a function of metallic silver generated by chemical development in silver halides, when an image is visualized by light transmission, a silver amount map is indirectly seen. However, this measurement is limited by the optical instrument, and a very weak light signal cannot be distinguished from background light or background noise. In this way, highly exposed films can contain areas with different silver concentrations, but this cannot be seen because the optical density measurement is limited. One of the ways through which it is possible to overcome such limitation is to use a different method for ascertaining the quantity of silver remaining on the developed films, and one of the quantitative techniques that suit this purpose is X-ray fluorescence (XRF). The purpose of this paper is applying ?-XRF so as to obtain a point-by-point silver intensity map to detect objects with low optical contrast on conventional radiographic films. The results of this work have shown a higher linear range in measurement using XRF, and as consequence, small objects and details in low-contrast or overexposed radiographic images could be visualized by the silver mapping technique, and the same results could not be achieved using light transmission methods. A first approach about spatial resolution and contrast was made showing strong and weak points of this way to scan radiographic films."
        }
      },
      {
        label: "Gonçalves2017c",
        type: "article",
        properties: {
          journal: "Journal of Physics: Conference Series",
          doi: "10.1088/1742-6596/975/1/012037",
          issn: "1742-6588",
          publisher: "IOP Publishing",
          title:
            "Sensitometric curve of radiographic films by X-ray fluorescence",
          url: "https://doi.org/10.1088/1742-6596/975/1/012037",
          volume: "975",
          author:
            "Gonçalves, E. A. S. and Oliveira, D. F. and Anjos, M. J. and Oliveira, L. F. and Lopes, R. T.",
          pages: "012037",
          date: "2017-11-29",
          year: "2017",
          month: "11",
          day: "29",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "Radiographic film exposure is traditionally measured by the transmittance of a beam of light through the film. There are many mathematical and computational models to characterize the curve behaviour and its properties, but almost none of them considers the limitations caused by the equipment used. As long as exposure in film increases, light intensity measured after the film decreases in a way that from a certain exposure, light couldn't be distinguished from any kind of noise. This work aims to propose x-ray fluorescence as a solution for better measure high exposed films and show how it could be modelled mathematically."
        }
      },
      {
        label: "Gonçalves2019",
        type: "article",
        properties: {
          journal: "",
          issn: "2319-0612",
          number: "2A",
          note: "RADIATION PROTECTION AND DOSIMETRY",
          address: "Brazil",
          title:
            "Interpolation methods for creating a scatter radiation exposure map",
          url: "http://inis.iaea.org/search/search.aspx?orig_q=RN:49023332",
          volume: "7",
          author:
            "Gonçalves, Elicardo A. de S. and Gomes, Celio S. and Lopes, Ricardo T. and Oliveira, Luis F. de and Anjos, Marcelino J. dos and Oliveira, Davi F.",
          date: "2017-10-27",
          year: "2017",
          month: "10",
          day: "27",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "A well know way for best understanding of radiation scattering and radiation exposure rate during a procedure using ionizing radiation is to map exposure over the space around the source and sample. This map is done measuring exposure in points regularly spaced, it means, measurement will be placed in localization chosen by increasing a regular steps from a starting point, along the x, y and z axes or, in more efficient way, radial and angular coordinates. However, it is not always possible to maintain the accuracy of the steps throughout the entire space, or there will be regions of difficult access where the regularity of the steps will be impaired. In this work we use a high energy radiation source to simulate a common radiography setup and construct its exposure map. The arrangement of the points and the interpolation were used considering polar coordinates. Then with the same data, an interpolation using the Delaunay triangulation was made. The results show the advantages and disadvantages of each other besides the high coherence for the same data. To simulate the impossibility of regular points, the same procedures were performed in the absence of any point and compared. The results show a lower total variation when the map is calculated by triangulation. The computational and graphic treatment was performed with GNU OCTAVE software and its image processing package. The data were acquired from a bunker where a 6MeV betatron was used as a primary source. A well know way for best understanding of radiation scattering and radiation exposure rate during a procedure using ionizing radiation is to map exposure over the space around the source and sample. This map is done measuring exposure in points regularly spaced, it means, measurement will be placed in localization chosen by increasing a regular steps from a starting point, along the x, y and z axes or, in more efficient way, radial and angular coordinates. However, it is not always possible to maintain the accuracy of the steps throughout the entire space, or there will be regions of difficult access where the regularity of the steps will be impaired. In this work we use a high energy radiation source to simulate a common radiography setup and construct its exposure map. The arrangement of the points and the interpolation were used considering polar coordinates. Then with the same data, an interpolation using the Delaunay triangulation was made. The results show the advantages and disadvantages of each other besides the high coherence for the same data. To simulate the impossibility of regular points, the same procedures were performed in the absence of any point and compared. The results show a lower total variation when the map is calculated by triangulation. The computational and graphic treatment was performed with GNU OCTAVE software and its image processing package. The data were acquired from a bunker where a 6MeV betatron was used as a primary source."
        }
      },
      {
        label: "TourinhoCampos2020",
        type: "article",
        properties: {
          journal: "Radiation Physics and Chemistry",
          issn: "0969-806X",
          title:
            "Computed tomography x-ray characterization: A Monte Carlo study",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0969806X18313252",
          volume: "167",
          author:
            "Tourinho Campos, Luciana and Machado de Jesus, Fillipe and Alves de Souza Gonçalves, Elicardo and Alexandre Gonçalves Magalhães, Luís",
          pages: "108359",
          date: "2020-02-01",
          year: "2020",
          month: "2",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "The Monte Carlo method is a powerful tool for investigating the characteristics of x-ray beams in diagnostic radiology. An accurate CT MC simulation typically requires a detailed description of the scanner under investigation, including specifications of the photon energy spectrum, the bowtie and inherent filtration design, and the geometry of the scanner (focal spot to isocenter distance, fan angle). Modern CT dosimetry is substantially informed by data produced using Monte Carlo radiation transport techniques. In order to achieve desired levels of accuracy, methods require a good model of the x-ray spectrum used. It has been shown that x-ray spectrum modeling can produce adequate spectra if both the tube potential and the HVL of the x-ray beam are known [1]. Therefore, for accurate CT dosimetry, characterization of the HVL of the CT scanner is necessary. In this work the Phillps® provided the spectrum of Brilliance 64 scanner. The purpose of this work is evaluating all data send by the manufacturer in the way to obtain a spectrum that can be used in Monte Carlo simulations to estimate organ dose or other dosimetric quantities. The EGSnrc MC code was used to evaluate the HVL obtained with the spectrum provided by the manufacturer. The cavity code was used for these simulations and variance reduction techniques were used. The HVL of our MC models were benchmarked against experimental data. The authors found that the HVL of the MC simulations agreed well with the manufacturer-specified data within 1--5% on average for the scanner. This study may be useful to establish a patient-specific dosimetry for the Phillips Brilliance 64 CT systems."
        }
      },
      {
        label: "Sanches2020",
        type: "article",
        properties: {
          journal: "Radiation Physics and Chemistry",
          issn: "0969-806X",
          title:
            "Characterization of a sacred statuette replica of 'Nossa Senhora da Conceição Aparecida' using X-ray spectrometry techniques",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0969806X18314506",
          volume: "167",
          author:
            "Sanches, Francis A.C.R. de A. and Nardes, Raysa C. and Filho, Hamilton S.G. and dos Santos, Ramon S. and de Araújo, Olga M.O. and Machado, Alessandra Silveira and Calgam, Teresa and Bueno, Regina and Canellas, Catarine and Gonçalves, Elicardo A.S. and Assis, Joaquim T. and de Freitas, Renato P. and de Oliveira, Davi F. and Lopes, Ricardo T. and dos Anjos, Marcelino J.",
          pages: "108266",
          date: "2020-02-01",
          year: "2020",
          month: "2",
          day: "1",
          topic: "SemTopico",
          foto: "background-image.svg",
          abstract:
            "The pigments characterization in artwork and cultural heritage is important since it allows to reveal many information like the period characteristics in which the object was made, its provenance and its manufacturing technique. Furthermore, it can support in the identification of forgeries and in the evaluation of conservation and restoration interventions. In this work, it was used XRF, $mu$XRF, XRD and Raman spectroscopy techniques in the characterization of a statuette of the ``Nossa Senhora da Conceição Aparecida''. The X-ray fluorescence analysis were performed in 66 points distributed throughout the piece, like in the wood structure, in the ground layer and on the pigment layer. In addition, elemental mapping was performed using the X-ray micro fluorescence ($mu$XRF) technique in a small fragment, containing both the pigment and the ground layer. The X-ray diffraction analyzes were performed on the ground layer material and the Raman spectroscopy was performed in order to improve the evaluation of the data and assist in the characterization of the ground and the pigment layers. The results show that the major elements in the pigment were Fe and Mn, indicating that it's probably the Burnt Sienna pigment. The XRD and Raman analysis show that the substrate layer was made by calcium carbonate (calcite) and a binder material (probably rabbit glue)."
        }
      }
    ],
    livros: [
      {
        label: "978-613-9-63169-8",
        type: "book",
        properties: {
          journal: "",
          edition: "1",
          publisher: "NEA",
          title: "Simulação e tratamento de sinais sonoros usando Octave",
          url:
            "https://www.amazon.com/Simula%C3%A7%C3%A3o-tratamento-sinais-sonoros-usando/dp/6139631696",
          volume: "1",
          author:
            "Goncalves, Elicardo A.S. and Lima, Rudi G.C. and Profilo, Fabricio and de Souza, Lucas and Martins, Miguel and Rodrigues, Caio",
          pages: "100",
          date: "2018-06-18",
          year: "2018",
          month: "6",
          day: "18",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "978-602-2-09273-9",
        type: "book",
        properties: {
          journal: "",
          edition: "1",
          publisher: "LAP Academic Publishing",
          title:
            "Digitizing Radiographic Films Through X-Ray Fluorescence Mapping",
          url:
            "https://www.amazon.com/Digitizing-Radiographic-Through-Fluorescence-Mapping/dp/6202092734",
          volume: "1",
          author:
            "de S. Gonçalves, Elicardo A. and OLIVEIRA, D. F. and OLIVEIRA, L. F. and ASSIS, J. T. and ANJOS, M. J. and Lopes, R. T",
          pages: "64",
          date: "2017-12-14",
          year: "2017",
          month: "12",
          day: "14",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      }
    ]
  }
});
