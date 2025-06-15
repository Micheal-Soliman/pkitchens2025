# Home Kitchen Landing Page

A modern, responsive landing page for a home kitchen design service, built with Vue 3, Vite, and Tailwind CSS. Features scroll animations using AOS and a customer gallery with `vue-easy-lightbox`.

## Live Preview

Explore the live demo of the project:

👉 [**Live Demo**](https://home-kitchen-landing.netlify.app/)

### Components Overview:

- **`NavBar.vue`**: The main navigation bar at the top of the page.
- **`HeroSection.vue`**: The prominent hero area, likely containing the main title and background image.
- **`DiscoverSection.vue`**: A section highlighting discovery or features.
- **`TestimonialSection.vue`**: Displays customer testimonials.
- **`CustomerGallery.vue`**: Showcases a gallery of customer kitchens, possibly utilizing `vue-easy-lightbox`.
- **`Footer.vue`**: The page footer.

## Fonts Used

The project uses custom web fonts, defined in `src/assets/fonts/style.css` and sourced from `.woff` files within the `src/assets/fonts/` directory:

- `Helvetica`
- `Helvetica-Bold`
- `Roboto`

## Technologies

- **Vue 3**: Progressive JavaScript framework.
- **Vite**: Next-generation frontend tooling for fast development.
- **Tailwindv4 CSS**: Utility-first CSS framework for rapid UI development.
- **AOS (Animate On Scroll)**: For scroll-triggered animations.
- **Vue Easy Lightbox**: For image gallery functionality.
- **Prettier**: Code formatter.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
