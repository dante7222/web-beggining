import {column, row} from "./utils";

function title(block) {
    return row(column(`
        <h1>${block.value}</h1>      
    `),block.options.styles)
}

function text(block) {
    return row(column(`
          <p>${block.value}</p>
    `),block.options.styles)
}

function textColumns(block) {
    const html = block.value.map(item => column(item))
    return row(html.join(''),block.options.styles)
}

export const templates = {title, text, textColumns}
