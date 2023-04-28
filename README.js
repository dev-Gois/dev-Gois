class Matheus {
  constructor() {
    this.nome = "Matheus Alves Gois";
    this.idade = 18;
    this.nacionalidade = "Brasileiro";
    this.idiomas = {
      nativo: 'Português',
      aprendendo: 'Inglês'
    };
  }

  contato() {
    return {
      discord: "goiiss#0001",
      linkedin: "https://www.linkedin.com/in/matheus-gois-37659526b/",
      email: "mattheusgoiis@gmail.com"
    };
  }

  formacao() {
    return {
      ensinoMedio: {
        instituicao: "Adriano Nobre",
        periodo: "2020-2022",
        curso: "Técnico em Informática"
      },
      ensinoSuperior: {
        instituicao: "UFC - Universidade Federal do Ceará",
        semestre: "1º Semestre",
        curso: "Análise e Desenvolvimento de Sistemas"
      }
    };
  }

  coding() {
    return {
      linguagens: ['Python', 'JavaScript', 'Ruby', 'PHP', 'SQL'],
      frameworks: ['Ruby on Rails', 'React'],
      ide: ['Visual Studio Code', 'pyCharm'],
      bancoDados: ['PostgresSQL', 'MySQL']
    };
  }

  experienciaProfissional() {
    return {
      primeiroEmprego: {
        nomeEmpresa: "Digital Informática",
        cargo: "Designer Gráfico",
        periodo: "Agosto - 2022 à Março - 2023"
      }
    };
  } 
}

const matheus = new Matheus();
