# PracticaAccesibilidad

Este repositorio contiene el código fuente para la práctica de accesibilidad de la asignatura DIW (Desarrollo de Interfaces Web).

## Descripción

Este proyecto tiene como objetivo aplicar los conocimientos adquiridos sobre accesibilidad web en el desarrollo de una interfaz. Se han implementado diversas técnicas y recomendaciones para garantizar que el sitio web sea usable por la mayor cantidad de personas posible, incluyendo aquellas con discapacidades.

## Estructura del proyecto

La estructura del proyecto es la siguiente:

*   `.github/workflows`: Contiene el workflow de GitHub Actions para la publicación en GitHub Pages.
*   `documentacion/`: Contiene la documentación del proyecto.
*   `web/`: Contiene los archivos web del proyecto.
    *   `html/`: Contiene los archivos HTML.
        *   `contact.html`: Página de contacto.
        *   `course_list.html`: Página con el listado de cursos.
        *   `course.html`: Página de detalle de un curso.
        *   `login.html`: Página de inicio de sesión.
    *   `img/`: Contiene las imágenes del proyecto.
    *   `scripts/`: Contiene los archivos JavaScript.
        *   `app.js`: Archivo principal de JavaScript.
    *   `styles/`: Contiene los archivos CSS.
        *   `styles.css`: Archivo principal de estilos.
*   `index.html`: Página principal del sitio web.
*   `README.md`: Este archivo.

## Tecnologías utilizadas

*   HTML5
*   CSS3
*   Bootstrap 5
*   JavaScript

## Funcionalidades implementadas

*   **Navegación accesible:** Se ha implementado una navegación clara y fácil de usar, con menús desplegables y enlaces descriptivos.
*   **Contenido semántico:** Se han utilizado etiquetas HTML5 semánticas para estructurar el contenido de manera lógica y facilitar la interpretación por parte de los lectores de pantalla.
*   **Imágenes con texto alternativo:** Todas las imágenes incluyen un atributo `alt` con una descripción concisa del contenido visual.
*   **Contraste de color adecuado:** Se han elegido combinaciones de colores que garantizan un contraste suficiente entre el texto y el fondo.
*   **Formularios accesibles:** Los formularios incluyen etiquetas descriptivas y se han implementado validaciones para facilitar la cumplimentación.
*   **Compatibilidad con lectores de pantalla:** Se han utilizado atributos ARIA para mejorar la compatibilidad con lectores de pantalla.
*   **Diseño responsive:** El sitio web se adapta a diferentes tamaños de pantalla, garantizando una experiencia de usuario óptima en dispositivos móviles y de escritorio.

## Instalación

1.  Clonar el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/PracticaAccesibilidad.git
    ```
2.  Abrir el archivo `index.html` en un navegador web.

## Contribución

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna sugerencia, por favor, abre un *issue* o envía un *pull request*.