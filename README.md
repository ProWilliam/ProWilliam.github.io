# ProWilliam.github.io

This project is a personal website hosted on GitHub Pages. You can visit the site at [ProWilliam.github.io](https://prowilliam.github.io/).

## Description

The project contains a static website designed to display personal information, projects and any other relevant content. It is built with HTML, CSS and JavaScript.

## Project Structure

```plaintext
ProWilliam.github.io/
├── public/
│   ├── 1-image-project1.webp
│   ├── 1-image-project1.webp
│   ├── 1-image-project1.webp
│   ├── favicon.svg
│   └── profile-photo.jpg
├── src/
│   ├── components/
│   │   ├── badge/
│   │   │   ├── Badge.astro
│   │   │   └── Badge.css
│   │   ├── form/
│   │   │   ├── Form.astro
│   │   │   └── FormStyle.css
│   │   ├── header/
│   │   │   ├── Header.astro
│   │   │   └── HeaderStyle.css
│   │   ├── slider/
│   │   │   ├── Slider.astro
│   │   │   └── SliderStyle.css
│   │   ├── socialMedia/
│   │   │   ├── SocialMedia.astro
│   │   │   └── SocialMediaStyle.css
│   │   └── themeMode/
│   │       ├── ThemeMode.astro
│   │       └── ThemeModeStyle.css
│   ├── icons/
│   │   ├── about-me.svg
│   │   ├── close.svg
│   │   ├── code.svg
│   │   ├── github.svg
│   │   ├── hachyderm.svg
│   │   ├── linkedin.svg
│   │   ├── mail.svg
│   │   ├── menu.svg
│   │   ├── message-home.svg
│   │   ├── plug.svg
│   │   └── user-plus.svg
│   ├── layouts
│   │   ├── Layout.asctro
│   │   └── LayoutStyle.css
│   ├── pages
│   │   ├── index.asctro
│   │   └── index.css
│   ├── sections
│   │   ├── about/
│   │   │   ├── About.astro
│   │   │   └── AboutStyle.css
│   │   ├── contact/
│   │   │   ├── Contact.astro
│   │   │   └── ContactStyle.css
│   │   ├── home/
│   │   │   ├── Home.astro
│   │   │   └── HomeStyle.css
│   │   └── projects/
│   │       ├── Project.astro
│   │       └── ProjectStyle.css
│   └── env.d.ts
├── .env
├── .gitignore
├── astro.config.mjs
├── package-lock.json 
├── package.json
├── README.md
└── tsconfig.json
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- Internet connection to access GitHub Pages

## Instructions for Use
1. Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/ProWilliam/ProWilliam.github.io.git
```

2. Open the Project
Navigate to the cloned project folder:
```bash
cd ProWilliam.github.io
```

3. Initialize
Write the following command to initialize it on port 3000 by default:
```bash
npm run dev
```

Contributions
If you wish to contribute to the project, please follow the following steps:

1. Fork the Repository
2. Create a Feature Branch (Feature Branch)
```bash
git checkout -b feature/nueva-caracteristica
```
3. Commit Changes
```bash
git commit -m "feat(<here-your-file-modify>): add new feature"
```
4. Push the Branch
```bash
git push origin feature/<modify-name>
```
5. Open a Pull Request