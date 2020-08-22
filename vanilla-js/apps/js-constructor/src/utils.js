export function row(content, styles) {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function column(content, styles) {
    return `<div class="col-sm" style="${styles}">${content}</div>`
}
