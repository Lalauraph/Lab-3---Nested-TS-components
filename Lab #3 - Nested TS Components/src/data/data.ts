//hacer la estructura o formato de los datos
export interface DataShape {
	id: number;
	name: string;
	image: string;
	age: number;
	gender: string;

	jobDetails: {
		area: string;
		position: string;
		timeInCompany: number;
		experience: number;
	};
}

//exporto los objetos workers, seben seguir la guía de Datashape
export const workers: DataShape[] = [
	{
		id: 1, //number
		name: 'Maria Lopez',
		image:
			'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 32, //number
		gender: 'Female',
		jobDetails: {
			area: 'Sales',
			position: 'Sales Manager',
			timeInCompany: 6, // years-number
			experience: 8, // years-number
		},
	},
	{
		id: 2,
		name: 'Emily Johnson',
		image:
			'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 28,
		gender: 'Female',
		jobDetails: {
			area: 'Human Resources',
			position: 'HR Specialist',
			timeInCompany: 3, // years
			experience: 5, // years
		},
	},
	{
		id: 3,
		name: 'John Smith',
		image:
			'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 35,
		gender: 'Male',
		jobDetails: {
			area: 'Finance',
			position: 'Financial Analyst',
			timeInCompany: 4, // years
			experience: 7, // years
		},
	},
	{
		id: 4,
		name: 'Michael Brown',
		image:
			'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 40,
		gender: 'Male',
		jobDetails: {
			area: 'IT',
			position: 'Software Developer',
			timeInCompany: 8, // years
			experience: 12, // years
		},
	},
	{
		id: 5,
		name: 'Sophia Martinez',
		image:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 27,
		gender: 'Female',
		jobDetails: {
			area: 'Marketing',
			position: 'Marketing Coordinator',
			timeInCompany: 2, // years
			experience: 4, // years
		},
	},
	{
		id: 6,
		name: 'Isabella Garcia',
		image:
			'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 31,
		gender: 'Female',
		jobDetails: {
			area: 'Customer Service',
			position: 'Customer Support Specialist',
			timeInCompany: 4, // years
			experience: 6, // years
		},
	},

	{
		id: 7,
		name: 'William Taylor',
		image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600',
		age: 33,
		gender: 'Male',
		jobDetails: {
			area: 'Operations',
			position: 'Operations Manager',
			timeInCompany: 5, // years
			experience: 9, // years
		},
	},
	{
		id: 8,
		name: 'Ethan Wilson',
		image:
			'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 29,
		gender: 'Male',
		jobDetails: {
			area: 'Research and Development',
			position: 'Research Scientist',
			timeInCompany: 3, // years
			experience: 5, // years
		},
	},
	{
		id: 9,
		name: 'Olivia Anderson',
		image:
			'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 36,
		gender: 'Female',
		jobDetails: {
			area: 'Quality Assurance',
			position: 'QA Analyst',
			timeInCompany: 7, // years
			experience: 10, // years
		},
	},
	{
		id: 10,
		name: 'Emma Brown',
		image:
			'https://images.pexels.com/photos/19130891/pexels-photo-19130891/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 30,
		gender: 'Female',
		jobDetails: {
			area: 'Finance',
			position: 'Financial Advisor',
			timeInCompany: 6, // years
			experience: 8, // years
		},
	},
	{
		id: 11,
		name: 'James Martinez',
		image:
			'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 25,
		gender: 'Male',
		jobDetails: {
			area: 'Sales',
			position: 'Sales Representative',
			timeInCompany: 2, // years
			experience: 3, // years
		},
	},
	{
		id: 12,
		name: 'Alexander Rodriguez',
		image:
			'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 38,
		gender: 'Male',
		jobDetails: {
			area: 'Operations',
			position: 'Operations Analyst',
			timeInCompany: 9, // years
			experience: 11, // years
		},
	},
	{
		id: 13,
		name: 'Ava Wilson',
		image:
			'https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 26,
		gender: 'Female',
		jobDetails: {
			area: 'Marketing',
			position: 'Marketing Manager',
			timeInCompany: 4, // years
			experience: 6, // years
		},
	},
	{
		id: 14,
		name: 'Mia Perez',
		image:
			'https://images.pexels.com/photos/5878568/pexels-photo-5878568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		age: 29,
		gender: 'Female',
		jobDetails: {
			area: 'Human Resources',
			position: 'HR Manager',
			timeInCompany: 5, // years
			experience: 7, // years
		},
	},
	{
		id: 15,
		name: 'Daniel Thompson',
		image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg',
		age: 34,
		gender: 'Male',
		jobDetails: {
			area: 'IT',
			position: 'IT Manager',
			timeInCompany: 7, // years
			experience: 9, // years
		},
	},
];
