import styles from './Profile.css';
//lista de los atributos que recibe el componente
export enum Attribute {
	'uid' = 'uid',
	'name' = 'name',
	'image' = 'image',
	'age' = 'age',
	'gender' = 'gender',
	'area' = 'area',
	'position' = 'position',
	'timeincompany' = 'timeincompany',
	'experience' = 'experience',
}

//propiedades de los atributos, son opcinales, por eso ?
class Profile extends HTMLElement {
	uid?: number;
	name?: string;
	image?: string;
	age?: number;
	gender?: string;
	area?: string;
	position?: string;
	timeInCompany?: number;
	experience?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//atributos que quiero obeservar ya que cambian, son todos, escicucha los cambios y reacciona
	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			uid: null,
			name: null,
			image: null,
			age: null,
			gender: null,
			area: null,
			position: null,
			timeincompany: null,
			experience: null,
		};
		return Object.keys(attrs);
	}

	//cuando el atributo cambia
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		//si el atributo cambia convierte el valor que recibe al tipo que le corresponde
		switch (propName) {
			case Attribute.uid: //debe ser numero, convierto su valor a numero, sino es indefinido
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.age:
				this.age = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.timeincompany:
				this.timeInCompany = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.experience:
				this.experience = newValue ? Number(newValue) : undefined;
				break;
			//los otro atributos son strings entonces no se debe asignar
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	//generar el contendio html
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<section class="workers-container">
					<div class="workers-profile">
						<h1>Name: ${this.name}</h1>
						<p>id: ${this.uid}</p>
						<img src="${this.image}" alt="Profile picture">
						<h2>Age: ${this.age}</h2>
						<h2>Gender: ${this.gender}</h2>
						<h2>Area: ${this.area}</h2>
						<h2>Position: ${this.position}</h2>
						<h2>Time In Company: ${this.timeInCompany}</h2>
						<h2>Experience: ${this.experience}</h2>
					</div>
				</section>
			`;
		}
		//añadir los estilos
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

//exporto clase profile
export default Profile;
//registro el componente como etiqueta html
customElements.define('my-profile', Profile);
