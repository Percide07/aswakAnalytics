const magasins = localStorage.getItem("localMagasins") ? JSON.parse(localStorage.getItem("localMagasins")) : [];


export const filterByYear = (array, year, type) => {
    return array.map(el => {
        const data = el.donnees.find(donnee => donnee.annee == year);
        if (data && data[type]) {
            return data[type];
        } else {
            return null; // or handle the case where data or data[type] is not found
        }
    });
}

 



export const filterByLocation = (array,location,_type,_year) => {
   
            if(_year) {
                return array.filter(el => el.location == location).map(el=>el.donnees.find(donnee => donnee.annee == _year)).reduce((acc,el)=>acc+el[type],0)
            } else if (_type) {
                return array.filter(el => el.location == location).map(el=>el.donnees.map(donnee => donnee[_type]).reduce((acc,el)=>acc+el,0)).reduce((acc,el)=>acc+el,0)
            } else {
                return array.filter(el => el.location == location)
            }

            
}

export const filterByNom = (array,nom,type,_year) => {
    if(_year) {
        return array.filter(el => el.nom == nom).map(el=>el.donnees.find(donnee => donnee.annee == _year)).reduce((acc,el)=>acc+el[type],0)
    }
    return array.filter(el => el.nom == nom).map(el=>el.donnees.map(donnee => donnee[type]).reduce((acc,el)=>acc+el,0)).reduce((acc,el)=>acc+el,0)
    
}
