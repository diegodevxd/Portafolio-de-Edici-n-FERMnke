# Arreglo de interacción del carrusel Coverflow

## Objetivo

Permitir que el carrusel de videos conserve su animación 3D, desplazamiento con arrastre y navegación con flechas, pero diferencie correctamente un clic de un arrastre en escritorio para que la tarjeta central pueda abrir el reproductor.

## Comportamiento esperado

- El escenario mantiene el cursor `grab` y la animación Coverflow 3D existente.
- El usuario puede mover el carrusel con mouse, touch/pointer y botones de navegación.
- Un desplazamiento pequeño se interpreta como clic.
- Un desplazamiento que supera un umbral pequeño se interpreta como arrastre.
- Al hacer clic en la tarjeta central, se abre el reproductor del video activo.
- Al hacer clic en una tarjeta lateral, esa tarjeta se centra y no se reproduce inmediatamente.
- El arrastre conserva la inercia y el asentamiento animado actuales.
- El comportamiento responsive móvil permanece sin cambios funcionales.

## Diseño técnico

La lógica de pointer events añadirá estado de interacción para registrar la posición inicial y si el puntero superó el umbral de arrastre. El `pointermove` solo actualizará la posición del Coverflow después de cruzar ese umbral. Al finalizar, la posición se asentará únicamente cuando hubo arrastre. El listener de tarjeta ignorará la reproducción cuando el gesto fue un arrastre y continuará usando el índice activo para decidir entre centrar o reproducir.

La modificación se limitará a `creative-marketing-portfolio-main/js/main.js`; no se cambiarán las transformaciones CSS ni el layout visual del carrusel.

## Verificación

- Revisar que un clic sin movimiento en la tarjeta central abra el modal/reproductor.
- Revisar que un clic en una tarjeta lateral la centre.
- Revisar que arrastrar con mouse mueva el Coverflow sin abrir videos al soltar.
- Revisar que las flechas sigan cambiando de tarjeta con la misma animación.
- Revisar que los gestos táctiles y el layout móvil sigan funcionando.
