import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(params) {
		super(params)
		this.setTitle('Dashboard')
	}

	async getHtml() {
		return `
            <h1>Miło Cię widzieć</h1>
            <p>
                Zapraszamy serdecznie na nasze spersonalizowane terapie, gdzie każdy znajdzie coś dla siebie. 
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `
	}
}
