import './styles/main.css'
import {model} from "./model";
import {templates} from "./template";

const site = document.querySelector('#site')

model.forEach(block => {
    const generate = templates[block.type]
    if (generate !== null) {
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    }
})
