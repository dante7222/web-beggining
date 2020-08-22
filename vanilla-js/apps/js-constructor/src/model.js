export const model = [
    {
        type: 'title', value: 'Test Title', options: {
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
    }
]
