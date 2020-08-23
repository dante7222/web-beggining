import img from "./assets/fox.jpg"

import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Single page', {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),
    new ImageBlock(img, {
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }),
    new TextColumnsBlock([
        'First column',
        'Second column',
        'Third column'
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
    new TextBlock('just new block', {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    })
]
