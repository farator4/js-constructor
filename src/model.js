import image from './assets/image.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

const text = `
Крутые видео и уроки по JavaScript тут: <a href="#">Владилен Минин</a> 
`

export const model = [
  new TitleBlock(
    'Конструктор сайтов на чистом JavaScript',
    {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493248)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
      },
    }
  ),
  new ImageBlock(
    image,
    {
      alt: 'Это картинка',
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center',
      },
      imageStyles: {
        width: '500px',
        height: 'auto',
      },
    }
  ),
  new ColumnsBlock(
    [
      'Приложение на чистом JavaScript без использования библиотек',
      'Узнаешь, как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
    ], 
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  new TextBlock(
    text,
    {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold',
      },
    }
  )
]