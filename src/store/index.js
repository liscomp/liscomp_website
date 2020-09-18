import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projetos: [
      {
        nome: "Projeto1",
        id: "projeto1",
        foto: "projeto1.png",
        abstract: "abstract",
        descricao: "Descricao"
      },
      {
        nome: "Projeto2",
        id: "projeto2",
        foto: "projeto2.png",
        abstract: "abstract",
        descricao: "Descricao"
      },
      {
        nome: "Projeto3",
        id: "projeto3",
        foto: "projeto3.png",
        abstract: "abstract",
        descricao: "Descricao"
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
        titulo: "Aquele que tem um cabelo maravilhoso",
        foto: "andre.png",
        data: "05/09/2020"
      },
      {
        titulo: "Aquela que coloca Forrest Gump no chinelo",
        foto: "jrsconceicao.png",
        data: "26/08/2020"
      },
      {
        titulo: "O homem mais lindo do IFRJ",
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
        nome: "Equipamento",
        foto: "equipamento.png",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum eleifend purus. Mauris volutpat nunc quis eros condimentum, vitae lobortis lacus imperdiet. Maecenas ut quam pulvinar, condimentum dolor sit amet, dignissim velit. Etiam accumsan congue velit, eget rhoncus nibh hendrerit ut. Sed sagittis lectus at felis bibendum tempor. Integer ornare faucibus lacus vitae congue. Donec eget ipsum velit. Etiam vel ante consectetur, vestibulum urna sed, eleifend libero. Proin a imperdiet leo, at rutrum massa."
      },
      {
        nome: "Equipamento",
        foto: "equipamento.png",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum eleifend purus. Mauris volutpat nunc quis eros condimentum, vitae lobortis lacus imperdiet. Maecenas ut quam pulvinar, condimentum dolor sit amet, dignissim velit. Etiam accumsan congue velit, eget rhoncus nibh hendrerit ut. Sed sagittis lectus at felis bibendum tempor. Integer ornare faucibus lacus vitae congue. Donec eget ipsum velit. Etiam vel ante consectetur, vestibulum urna sed, eleifend libero. Proin a imperdiet leo, at rutrum massa."
      }
    ],
    artigos: [
      {
        label: "FERREIRA2020125146",
        type: "article",
        properties: {
          journal: "Physica A: Statistical Mechanics and its Applications",
          doi: "https://doi.org/10.1016/j.physa.2020.125146",
          issn: "0378-4371",
          title:
            "Long-range correlation studies in deep earthquakes global series",
          url:
            "http://www.sciencedirect.com/science/article/pii/S0378437120305999",
          volume: "560",
          author:
            "Douglas S. R. Ferreira, Jennifer Ribeiro, Paulo S. L. Oliveira, André R. Pimenta, Renato P. Freitas, Andrés R. R. Papa",
          pages: "125146",
          date: "15 December 2020",
          year: "2020",
          topic: "Terremoto",
          foto: "background-image.svg",
          abstract:
            "In the present paper we have conducted studies on seismological properties using worldwide data of deep earthquakes (depth larger than 70 km), considering events with magnitude greater than or equal to 4.5. This work is an extension of a previous study using a similar approach, for shallow events. We have addressed the problem under the perspective of complex networks, using a time window model to build the networks for deep earthquakes. These networks present scale-free and small-world features, contributing to strengthen the use of the time window model to construct epicenters networks. The results for deep events were analyzed using Nonextensive Statistical Mechanics and they corroborate with those found for the shallow ones, since the connectivity distribution for deep earthquakes also follows a q-exponential distribution and the scaling behavior is present. Our findings reinforce the idea of long-range correlations between earthquakes and the criticality of the seismological system."
        }
      },
      {
        label: "ferreira2018towards",
        type: "article",
        properties: {
          journal: "EPL (Europhysics Letters)",
          number: "5",
          publisher: "IOP Publishing",
          title:
            "Towards evidence of long-range correlations in shallow seismic activities",
          volume: "121",
          author:
            "Ferreira, Douglas and Ribeiro, Jennifer and Papa, Andrés and Menezes, Ronaldo",
          pages: "58003",
          date: "2018",
          year: "2018",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "pimenta2020finite",
        type: "article",
        properties: {
          journal: "Journal of Failure Analysis and Prevention",
          publisher: "Springer",
          title: "Finite Element Analysis of a Mechanical Fuse Failure",
          author:
            "Pimenta, AR and Tavares, SSM and Diniz, MG and Roco, RAA and Oliveira, MJ and Galiza, JAG and Gomes, AV and Ferreira, DSR and Freitas, RP",
          pages: "1--6",
          date: "2020",
          year: "2020",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "pereira2020dose",
        type: "article",
        properties: {
          journal: "Radiation Physics and Chemistry",
          publisher: "Elsevier",
          title:
            "Dose distribution in boron neutron capture therapy for the treatment of brain cancer",
          volume: "168",
          author:
            "Pereira, Leandro O and Freitas, Renato P and Ferreira, Douglas S and Felix, Valter S and Gonçalves, Elicardo AS and Pimenta, André R and de Sousa Dutra, Rafael and da Silva, Ademir Xavier",
          pages: "108611",
          date: "2020",
          year: "2020",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "freitas2019micro",
        type: "article",
        properties: {
          journal: "Microchemical Journal",
          publisher: "Elsevier",
          title: "Micro-XRF analysis of a Brazilian polychrome sculpture",
          volume: "149",
          author:
            "Freitas, Renato P and Felix, Valter S and Pereira, Marcelo O and Santos, Ramon S and Oliveira, Ana L and Gonçalves, Elicardo AS and Ferreira, Douglas S and Pimenta, André R and Pereira, Leandro O and Anjos, Marcelino J",
          pages: "104020",
          date: "2019",
          year: "2019",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "dias2019analysis",
        type: "article",
        properties: {
          journal: "Physica A: Statistical Mechanics and its Applications",
          publisher: "Elsevier",
          title:
            "Analysis of temporal and spatial distributions between earthquakes in the region of California through Non-Extensive Statistical Mechanics and its limits of validity",
          volume: "529",
          author: "Dias, Vitor HA and Papa, Andrés RR and Ferreira, Douglas SR",
          pages: "121471",
          date: "2019",
          year: "2019",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "felix2018analysis",
        type: "article",
        properties: {
          journal: "Radiation Physics and Chemistry",
          publisher: "Elsevier",
          title: "Analysis of a European cupboard by XRF, Raman and FT-IR",
          volume: "151",
          author:
            "Felix, Valter S and Mello, Ulisses L and Pereira, Marcelo O and Oliveira, Ana L and Ferreira, Douglas S and Carvalho, Cristiano S and Silva, Fabricio L and Pimenta, André R and Diniz, Marilia Garcia and Freitas, Renato P",
          pages: "198--204",
          date: "2018",
          year: "2018",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      },
      {
        label: "ribeiro2016analysis",
        type: "article",
        properties: {
          journal: "Vibrational Spectroscopy",
          publisher: "Elsevier",
          title:
            "Analysis by raman spectroscopy and XRF of glass beads from excavations in the harbor area of rio de janeiro, Brazil",
          volume: "87",
          author:
            "Ribeiro, IMN and Freitas, RP and Calza, C and Oliveira, ALC and Felix, VS and Ferreira, DS and Batista, RT and Goncalves, EAS and Pereira, MO and Brito, PCL and others",
          pages: "111--115",
          date: "2016",
          year: "2016",
          topic: "SemTopico",
          foto: "background-image.svg"
        }
      }
    ]
  },
  getters: {
    projetoEspecifico: state => identidade => {
      return state.projetos.find(projetos => projetos.id === identidade);
    },
    artigoEspecifico: state => label => {
      return state.artigos.find(
        artigos =>
          artigos.properties.title.toLowerCase().replace(/\s/g, "-") === label
      );
    },
    noticiaEspecifico: state => label => {
      return state.noticias.find(
        noticias => noticias.titulo.toLowerCase().replace(/\s/g, "-") === label
      );
    },
    noticiasOrdenados: state => {
      return state.noticias.sort(function(a, b) {
        if (moment(a.data, "DD MM YYYY") > moment(b.data, "DD MM YYYY")) {
          return -1;
        }
        if (moment(a.data, "DD MM YYYY") < moment(b.data, "DD MM YYYY")) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
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
    artigosOrdenados: state => {
      return state.artigos.sort(function(a, b) {
        if (a.properties.year > b.properties.year) {
          return -1;
        }
        if (a.properties.year < b.properties.year) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    },
    artigosAnos: state => year => {
      return state.artigos.filter(artigos => artigos.properties.year === year);
    },
    artigosTopico: state => topico => {
      return state.artigos.filter(
        artigos => artigos.properties.topic === topico
      );
    },
    pegarAnos: state => {
      return new Set(state.artigos.map(artigos => artigos.properties.year));
    },
    pegarTopicos: state => {
      return new Set(state.artigos.map(artigos => artigos.properties.topic));
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
