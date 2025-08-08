🎁 Amigo Secreto
Una aplicación web interactiva para organizar sorteos de "Amigo Secreto" de forma sencilla y divertida.
Permite ingresar nombres, validarlos y seleccionar aleatoriamente a un amigo secreto mostrando el resultado en pantalla.

🧠 Funcionalidades
Agregar participantes a una lista de forma dinámica.

Validación de datos: no se permiten nombres vacíos ni con números.

Evita duplicados: no permite repetir un nombre ya registrado (ignora diferencias de mayúsculas y acentos).

Visualización clara de la lista de participantes agregados.

Sorteo aleatorio para elegir al amigo secreto.

Interfaz limpia con botones intuitivos.

🚀 Tecnologías utilizadas
HTML5 – Estructura de la interfaz y contenido.

JavaScript (Vanilla) – Lógica de validación, gestión de lista y sorteo aleatorio.

CSS3 – Estilos personalizados (archivo style.css externo).

Google Fonts – Tipografía moderna y legible.

📂 Estructura del proyecto
bash
Copiar
Editar
/amigo-secreto/
│
├── index.html         # Página principal con la interfaz
├── app.js             # Lógica del sorteo y validaciones
├── style.css          # Estilos personalizados
└── assets/            # Recursos gráficos (imágenes e íconos)
    ├── amigo-secreto.png
    └── play_circle_outline.png
📦 Cómo usar
Descarga o clona este repositorio en tu equipo.

Abre el archivo index.html en tu navegador.

Ingresa el nombre de un participante en el campo de texto y pulsa "Añadir".

Repite hasta completar la lista de todos los amigos que participarán.

Pulsa el botón "Sortear amigo" para obtener un nombre elegido al azar.

¡Disfruta el juego! 🎉

⚠️ Validaciones
❌ Nombres vacíos o con números no se permiten.

❌ No se permite agregar el mismo nombre dos veces (aunque sea con mayúsculas o tildes diferentes).

✅ Se puede agregar cualquier texto que cumpla con las reglas anteriores.

💡 Posibles mejoras
Asignar un amigo secreto único para cada participante evitando repeticiones.

Añadir animaciones o efectos de sonido en el sorteo.

Implementar la opción de guardar y exportar el resultado por correo o PDF.

Crear un modo de juego en línea para que los participantes puedan ingresar sus nombres de forma remota.

