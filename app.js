const express = require('express')
const cors = require('cors')

const app = express();
app.listen('3000');
app.use(express.json());
app.use(cors())

app.get('/treino', (req, res) => {
  res.send('Rodando!')
})

app.route('/treino/pernas').get((req, res) => {
  const treinoPernas = [
    {
      id: 1,
      exercicioName: "Cadeira extensora",
      quantidadeSeries: 4,
    },
    {
      id: 2,
      exercicioName: "Legpress",
      quantidadeSeries: 4,
    },
    {
      id: 3,
      exercicioName: "Búlgaro",
      quantidadeSeries: 4,
    },
    {
      id: 4,
      exercicioName: "Mesa Flexora",
      quantidadeSeries: 4,
    },
    {
      id: 5,
      exercicioName: "Panturrilha no Smith",
      quantidadeSeries: 7,
    }
  ];
  res.json(treinoPernas);
});

app.route('/treino/peito').get( (req, res) => {
  const treinoPeito = [
    {
      id: 6,
      exercicioName: "Supino inclinado - Barra",
      quantidadeSeries: 4,
    },
    {
      id: 7,
      exercicioName: "Supino inclinado - Halter",
      quantidadeSeries: 4,
    },
    {
      id: 8,
      exercicioName: "Supino sentado - Máquina",
      quantidadeSeries: 4,
    },
    
  ]
  res.json(treinoPeito);
});

app.route('/treino/ombro').get((req, res) => {
  const treinoOmbro = [
    {
      id: 9,
      exercicioName: "Desenvolvimento (Pegada neutra) - Máquina ",
      quantidadeSeries: 4,
    },
    {
      id: 10,
      exercicioName: "Elevação lateral - Halter",
      quantidadeSeries: 4,
    },
  ]
  res.json(treinoOmbro);
});

app.route('/treino/triceps').get((req, res) => {
const treinoTriceps = [
  {
    id: 11,
    exercicioName: "Tríceps (Pegada reta) - Polia",
    quantidadeSeries: 4,
  },
  {
    id:12,
    exercicioName:"Tríceps - Corda",
    quantidadeSeries: 4,
  },

]
res.json(treinoTriceps);
});

app.route('/treino/costas').get((req, res) => {
  const treinoCostas = [
    {
      id:13,
      exercicioName: "Puxada (Pegada aberta) - Frontal",
      quantidadeSeries: 4,
    },
    {
      id:14,
      exercicioName: "Remada curvada (Pegada supinada)- Barra W",
      quantidadeSeries:4,
    },
    {
      id:15,
      exercicioName: "Crucifixo Invertido - Polia",
      quantidadeSeries: 4,
    },
    {
      id:16,
      exercicioName: "Remada Unilateral (Serrote)",
      quantidadeSeries:4,
    },
  ]
  res.json(treinoCostas);
});

app.route('/treino/biceps').get ((req, res) => {
  const treinoBiceps = [
    {
      id: 17,
      exercicioName:"Rosca (Barra) - Polia",
      quantidadeSeries: 4,
    },
    {
      id:18,
      exercicioName: "Rosca (Barra) - Pegada invertida",
      quantidadeSeries: 4,
    },
  ]
})
