# Lark & Lens - Photography Website (React)

Lark & Lens is a photography website built with React and Tailwind CSS. It allows users to view a gallery, filter featured photographers, apply as a photographer, and book sessions.


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Features

- View photography gallery
- Filter photographers by niche or location
- Photographer application form
- Client booking form
- Lightbox for viewing images
- Light/dark mode toggle

## Tech Stack

- React
- React Router
- Tailwind CSS
- JavaScript

## Getting Started

1. Clone the repository:
git clone https://github.com/Yma-hope/Capstone-react.git
cd Capstone-react

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

4. Build for production:
npm run build

## Folder Structure

src/
├── assets/         # Images and icons
├── components/     # Reusable UI components
├── pages/          # Main page components
├── data/           # Static data (e.g., photographers)
├── theme/          # (Optional) Theme context
├── App.jsx
├── main.jsx
└── index.css

## License

MIT License
