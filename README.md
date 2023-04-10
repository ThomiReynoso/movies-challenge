# Code challenge Movies & TV Shows

Este challenge representa una app donde se obtiene un listado de Movies y TV Shows inicialmente, donde se puede visualizar uno u otro listado con un boton. Luego, se puede acceder al detalle de cada uno clickeando en alguno de ellos. 

# Hosting de la app (Con Github Pages) 
`https://thomireynoso.github.io/movies-challenge/`

**IMPORTANTE: Por algún motivo de configuración de Github Pages (tiene que ver con el atributo `homepage` de `package.json`, el cual fue añadido para el setup de GH Pages) quedó mal la home inicial al cargar el proyecto (tanto en localhost como en server de GH). Por lo cual, al principio, solo se visualiza el Logo y un boton de `Home`. Si se clickea en cualquiera de estos 2, renderea al componente correcto y se puede navegar normalmente en toda la app.** 


## Funcionalidades / Vistas

### Listado de peliculas y TV shows (/)

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/26986556/231019992-82178c06-60c1-462d-8bb9-80a5e3890037.png">


### Detalle de una pelicula o TV Show (/details/id)
![image](https://user-images.githubusercontent.com/26986556/231020094-70026011-adc4-44b4-adb6-7581b2583611.png)


### Manejo de estados
- Se hace uso de `Redux` para almacenar la data obtenida de la API brindada (https://developers.themoviedb.org/3) y luego switchear entre ambos listados (Movies y Tv shows) a través de un action que se dispara al clickear un boton. 
  
### Tests
- Se agregan tests de los componentes principales detallados en el PR #6, los cuales se pueden ejecutar con `npm test`
 
### Levantar ambiente local 
- Ejecutar `npm install` y `npm start`
