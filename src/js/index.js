import { statisticsFunctions } from "../libs/statistics.js";
import { filterByYear,filterByLocation,filterByNom } from "../libs/filter.js";
const magasins = localStorage.getItem("localMagasins") ? JSON.parse(localStorage.getItem("localMagasins")) : []
const params = new URLSearchParams(window.location.search);
const type = params.get("type") ? params.get("type") : "CA";
const annee = params.get("annee") ?  parseInt(params.get("annee")) : "2022"

console.log(type,annee)
const selectedMonthInput = document.getElementById("selectedMonth")
selectedMonthInput.addEventListener("change",(e)=>{
    const selectedYear = String(e.target.value).split("-")[0]
    window.location.href= `index.html?type=${type}&annee=${selectedYear}`;
})


// const globalCA = magasins.map(mag=>mag.donnees.find(donnee=>donnee.annee == "2022").CA).reduce((acc,el)=>acc+el,0)
// console.log(globalCA)
// const globalEffectifs = magasins.map(mag=>mag.donnees.find(donnee=>donnee.annee == "2022").effectifs).reduce((acc,el)=>acc+el,0)
// console.log(globalEffectifs)
// const globalSurface = magasins.map(mag=>mag.donnees.find(donnee=>donnee.annee = "2022").surface).reduce((acc,el)=>acc+el,0)
// console.log(globalSurface)



const CAFilteredMagasinsByYear = filterByYear(magasins,annee,type)
console.log(CAFilteredMagasinsByYear)


const magasinLocations = Array.from(new Set(magasins.map(magasin => magasin.location)))
const magasinNoms = Array.from(new Set(magasins.map(magasin => magasin.nom)))

const CAFilteredMagasinsByLocation = magasinLocations.map(location =>filterByLocation(magasins,location,type))
const CaFilteredMagasinsByNom = magasinNoms.map(nom =>filterByNom(magasins,nom,type))

const BestNomByYearOutput = magasinNoms.map(nom => {return {nom:nom,ca:filterByNom(magasins,nom,type)}}).find(el=>el.ca== statisticsFunctions.getMax(CaFilteredMagasinsByNom))
const BestLocationByYearOutput = magasinLocations.map(location => {return {location:location,ca:filterByLocation(magasins,location,type)}}).find(el=>el.ca== statisticsFunctions.getMax(CAFilteredMagasinsByLocation))
//Charts
const CANomChart = document.getElementById('CANom').getContext('2d');
const CANom = new Chart(CANomChart, {
    type: 'bar',
    data: {
        labels: magasinNoms,
        datasets: [{
            label: 'CA x nom de Magasin',
            data: CaFilteredMagasinsByNom,
            backgroundColor: [
                '#6818A5',
            ],
        }],
    },
    options: {
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8 
                    },
                    maxRotation: 45, 
                    autoSkip: false 
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        }
    }
});

const CALocationChart = document.getElementById('CALocation').getContext('2d');
const CALocation = new Chart(CALocationChart, {
    type: 'bar',
    data : {
        labels: magasinLocations,
        datasets: [{
            label: 'CA x location de Magasin',
            data: CAFilteredMagasinsByLocation,
            backgroundColor: [
                '#6818A5',
              
            ],
          
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8 
                    },
                    maxRotation: 45, 
                    autoSkip: false 
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        }
    }
});
const CAMoyenChart = document.getElementById("CAMoyen")
const CAMoyen = new Chart(CAMoyenChart,{
    type: 'doughnut',
  data: {
    labels: [
      'Total Annee',
      'Moyen',
      'Max'
    ],
    datasets: [{
      label: 'Taux',
      data: [statisticsFunctions.getTotal(CAFilteredMagasinsByYear),statisticsFunctions.getMean(CAFilteredMagasinsByYear),statisticsFunctions.getMax(CAFilteredMagasinsByYear)],
      backgroundColor: [
        '#6818A5',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    aspectRatio: 3, 
    plugins: {
        
        legend: {
            position: 'left'
        }
    }
}

})
const CAStatsChart = document.getElementById("CAStats")
const CAStats = new Chart(CAStatsChart,{
    type: 'polarArea',
    data: {
        labels: [
          'Moyen',
          'Max',
          'Min',
          'Mode',
          'Median',
        ],
        datasets: [{
          label: 'Distribution',
          data: [statisticsFunctions.getMean(CAFilteredMagasinsByYear),statisticsFunctions.getMax(CAFilteredMagasinsByYear),statisticsFunctions.getMin(CAFilteredMagasinsByYear),statisticsFunctions.getMode(CAFilteredMagasinsByYear),statisticsFunctions.getMedian(CAFilteredMagasinsByYear)],
          backgroundColor: [
            '#6818A5',
            '#008000',
            'rgb(54, 162, 235)',
            'rgb(75, 192, 192)',
            'rgb(201, 203, 207)',
          ]
        }]
      },
      options: {
        aspectRatio: 3,     
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

})


const variationOutput = document.getElementById("variation")
variationOutput.innerHTML = statisticsFunctions.getVariation(CAFilteredMagasinsByYear)
const standardDeviationOutput = document.getElementById("standardDeviation")
standardDeviationOutput.innerHTML = statisticsFunctions.getStandardDeviation(CAFilteredMagasinsByYear)
const bestNomOutput = document.getElementById("bestNom")
bestNomOutput.innerHTML = BestNomByYearOutput.nom
const bestLocationOutput = document.getElementById("bestLocation")
bestLocationOutput.innerHTML = BestLocationByYearOutput.location


