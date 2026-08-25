# Nuevos videos y optimización móvil del Coverflow

## Objetivo

Agregar al inicio del portafolio los cuatro videos nuevos de Drive y mejorar la experiencia móvil del carrusel y del reproductor para que el slide activo quede centrado y el modal use el espacio disponible del teléfono.

## Videos nuevos

Se incorporarán al inicio de `portfolioVideos`:

- Anuncio Publicitario Carlotas — vertical, categoría comercial/institucional.
- 4bienmancos M18 V1 — vertical, categoría reels.
- 4bienmancos M17 V3 — vertical, categoría reels.
- 4bienmancos M8 V2 — vertical, categoría reels.

Se conservarán los videos existentes y sus IDs de Drive. M8 tendrá un fallback visual porque su miniatura actual aparece negra en Drive.

## Optimización móvil

- El track del Coverflow tendrá una caja de referencia explícitamente centrada en el stage en pantallas pequeñas.
- Las tarjetas móviles usarán un ancho calculado desde el viewport, con márgenes y transformaciones coherentes para que la tarjeta activa no quede desplazada lateralmente.
- El stage recortará únicamente el desbordamiento visual lateral necesario, manteniendo arrastre y flechas.
- El modal móvil usará `100dvh`, padding reducido y un contenedor de video limitado por el alto disponible después del encabezado y controles.
- Los videos verticales conservarán su proporción 9:16 sin exceder la pantalla; los horizontales se limitarán al ancho y alto disponibles.
- Escritorio y la animación Coverflow 3D existente permanecerán sin cambios visuales intencionales.

## Verificación

- Los cuatro videos nuevos aparecen antes de los existentes en “Todos”.
- Los filtros Reels y Comerciales muestran los videos nuevos en sus categorías.
- En móvil, la tarjeta activa se alinea con el centro de la pantalla después de cargar, arrastrar y usar flechas.
- El reproductor vertical cabe completo o se limita correctamente dentro del viewport, sin desplazamiento horizontal.
- El reproductor horizontal también conserva proporción y controles accesibles.
- El JavaScript mantiene sintaxis válida y no hay errores de whitespace en el diff.
