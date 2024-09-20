//importar la forma del objeto DataShape: define la estructura de los datos de los trabajadores
//importar el componente MyProfile para crear las cajas individuales
//importo los atributos que debe tener MyProfile
import { DataShape, workers } from './data/data';
import './components/indexPadre';
import MyProfile, { Attribute } from './components/Profile/Profile';

//para filtrar solo id pares: funcion filterPar: erifica si el id es divisible por 2 y
// retorna true si lo es, y false si no lo es.
const filterPar = (user: DataShape) => {
	//Solo imprime el id de cada trabajador que se está evaluando
	console.log(user.id);
	return user.id % 2 == 0;
};

//hacer arreglo vacio profiles que va almacenar a los componentes myprofile
class AppContainer extends HTMLElement {
	profiles: MyProfile[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//filtrar trabajadores con la funcion que hice arriba, luego recorre estos trabajadores filtrados
		workers.filter(filterPar).forEach((user) => {
			const profileCard = this.ownerDocument.createElement('my-profile') as MyProfile;
			//asigno los datos del trabajador a los atributos del componente myprofile
			profileCard.setAttribute(Attribute.uid, String(user.id));
			profileCard.setAttribute(Attribute.name, user.name);
			profileCard.setAttribute(Attribute.image, user.image);
			profileCard.setAttribute(Attribute.age, String(user.age));
			profileCard.setAttribute(Attribute.gender, user.gender);
			profileCard.setAttribute(Attribute.area, user.jobDetails.area);
			profileCard.setAttribute(Attribute.position, user.jobDetails.position);
			profileCard.setAttribute(Attribute.timeincompany, String(user.jobDetails.timeInCompany));
			profileCard.setAttribute(Attribute.experience, String(user.jobDetails.experience));
			//añado todo al arreglo vacio de arriba
			this.profiles.push(profileCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	//recorrer arreglo y agregar cada componente al dom para poderlo ver
	render() {
		if (this.shadowRoot) {
			this.profiles.forEach((profile) => {
				this.shadowRoot?.appendChild(profile);
			});
		}
	}
}

//componente app container para poder usarlo como etiqueta html
customElements.define('app-container', AppContainer);
