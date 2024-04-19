const magasins = localStorage.getItem("localMagasins") ? JSON.parse(localStorage.getItem("localMagasins")) : [];


export const filterByYear = (array,year,type) => {
    switch(type) {
        case 'CA':
            return array.map(el => el.donnees.find(donnee => donnee.annee == year).CA)
        break;
        case 'effectifs':
            array.map(el => el.donnees.find(donnee => donnee.annee == year).effectifs)
        break;
        case 'surface':
            array.map(el => el.donnees.find(donnee => donnee.annee == year).surface)
        break;
    }

}

export const filterByLocation = (array,location,type,_year) => {
   
            if(_year) {
                return array.filter(el => el.location == location).map(el=>el.donnees.find(donnee => donnee.annee == _year)).reduce((acc,el)=>acc+el[type],0)
            }
            return array.filter(el => el.location == location).map(el=>el.donnees.map(donnee => donnee[type]).reduce((acc,el)=>acc+el,0)).reduce((acc,el)=>acc+el,0)
}

export const filterByNom = (array,nom,type,_year) => {
    if(_year) {
        return array.filter(el => el.nom == nom).map(el=>el.donnees.find(donnee => donnee.annee == _year)).reduce((acc,el)=>acc+el[type],0)
    }
    return array.filter(el => el.nom == nom).map(el=>el.donnees.map(donnee => donnee[type]).reduce((acc,el)=>acc+el,0)).reduce((acc,el)=>acc+el,0)
    
}