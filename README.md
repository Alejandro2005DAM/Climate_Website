<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Climate Website — README</title>
</head>
<body>
  <header>
    <h1>Climate Website</h1>
    <p>Buscador del clima en el mundo — interfaz ligera en HTML, CSS y JavaScript.</p>
  </header>

  <main>
    <section>
      <h2>Descripción</h2>
      <p>Proyecto front-end que permite buscar el estado del tiempo de ciudades en todo el mundo. La aplicación consume una API de clima (por ejemplo, OpenWeatherMap) desde JavaScript y muestra información como temperatura, descripción del tiempo, icono representativo, humedad y velocidad del viento.</p>
    </section>
  <section>
      <h2>Características principales</h2>
      <ul>
        <li>Búsqueda de ciudades por nombre.</li>
        <li>Resultados claros con iconografía y valores relevantes (temperatura, humedad, viento).</li>
        <li>Interfaz responsiva y accesible, lista para servir como página estática.</li>
        <li>Fácil configuración de la API key.</li>
      </ul>
    </section>

 <section>
      <h2>Tecnologías utilizadas</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
      </ul>
    </section>
        <section>
      <h2>Instalación y ejecución</h2>
      <ol>
        <li>Clona este repositorio:
          <pre><code>git clone https://github.com/Alejandro2005DAM/Climate_Website.git</code></pre>
        </li>
        <li>Entra en la carpeta del proyecto:
          <pre><code>cd Climate_Website</code></pre>
        </li>
        <li>Abre <code>index.html</code> en tu navegador o sirve el directorio con un servidor estático (recomendado):</li>
      </ol>
      <pre><code># Con Python 3
python -m http.server 8000

# Con Node.js (serve instalado globalmente)
npx serve .
</code></pre>
    </section>

python -m http.server 8000

# Con Node.js (serve instalado globalmente)
npx serve .
</code></pre>
    </section>
  <section>
      <h2>Configuración de la API</h2>
      <p>La aplicación requiere una API de clima. Un ejemplo común es <strong>OpenWeatherMap</strong>. Obtén tu API key en el servicio que elijas y configúrala en el proyecto. Opciones comunes:</p>
      <ul>
        <li>Crear un archivo <code>config.js</code> en la raíz del proyecto con el contenido:</li>
      </ul>
      <pre><code>/* config.js */
const API_KEY = 'TU_API_KEY_AQUI';
</code></pre>
    
const API_KEY = 'TU_API_KEY_AQUI';
</code></pre>
      <p>Evita subir tu API key pública a repositorios públicos; para producción usa variables de entorno o un backend que oculte la key.</p>
    </section>
<section>
      <h2>Uso</h2>
      <p>En la página principal, escribe el nombre de la ciudad y pulsa el botón de búsqueda o la tecla Enter. La aplicación mostrará los datos disponibles. Si implementas geolocalización, un botón de "Mi ubicación" puede mostrar el clima local.</p>
    </section>
      <section>
      <h2>Buenas prácticas y notas</h2>
      <ul>
        <li>Mantén la API key fuera del repositorio público (usa <code>.gitignore</code> para archivos de configuración).</li>
        <li>Comprueba límites de la API y maneja errores de red o respuestas vacías en la UI.</li>
        <li>Asegura accesibilidad: etiquetas ARIA, contrastes y navegación por teclado.</li>
      </ul>
    </section>
 <section>
      <h2>Contribuir</h2>
      <ol>
        <li>Haz fork del proyecto.</li>
        <li>Crea una rama descriptiva: <code>git checkout -b feature/nombre</code>.</li>
        <li>Haz commits claros y abre un Pull Request describiendo los cambios.</li>
      </ol>
    </section>
    
 <section>
      <h2>Licencia</h2>
      <p>Este proyecto puede liberarse bajo la licencia que prefieras (por ejemplo, MIT). Añade un archivo <code>LICENSE</code> con la licencia escogida.</p>
    </section>
 <section>
      <h2>Contacto</h2>
      <p>Autor / Mantenedor: Alejandro2005DAM</p>
    </section>
   
  </main>

  <footer>
    <p>Última actualización: 2026-01-16</p>
  </footer>
</body>
</html>
