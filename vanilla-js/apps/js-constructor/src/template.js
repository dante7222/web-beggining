import {column, row} from "./utils";

function title(block) {
    const tag = block.options.tag;

    return row(column(`
        <${tag}>${block.value}</${tag}>      
    `), block.options.styles)
}

function text(block) {
    return row(column(`
          <p>${block.value}</p>
    `), block.options.styles)
}

function textColumns(block) {
    const html = block.value.map(item => column(item))
    return row(html.join(''), block.options.styles)
}

function img(block) {
    const {alt, styles, imageStyles} = block.options
    const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}">`
    return row(html, styles)
}

export const templates = {title, text, textColumns, img}
