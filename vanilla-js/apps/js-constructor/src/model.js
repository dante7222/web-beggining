import img from "./assets/fox.jpg"

console.log(img)
export const model = [
    {
        type: 'title', value: 'Test Title', options: {
            tag: 'h2',
            styles: 'background: darkred; color: black; text-align:center;'
        }
    },
    {
        type: 'text',
        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error expedita hic itaque\n' +
            '                    maiores minus nulla numquam perferendis placeat sapiente!',
        options: {
            styles: 'background: darkblue; color: yellow; text-align:center;'
        }
    },
    {
        type: 'textColumns', value: [
            '1 text',
            '2 text',
            '3 text',
        ],
        options: {
            styles: 'padding: 1rem;'
        }
    },
    {
        type: 'img', value: img, options: {
            styles: 'padding:2 rem 0; display:flex; justify-content: center;',
            alt: 'my image',
            imageStyles: 'width:500px; height:auto;'
        }
    }
]
