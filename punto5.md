## ✅ 5. Análisis final (teórico)

### Responder lo siguiente:

### ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?

Las clases proporcionan una sintaxis más moderna y legible para definir objetos y su comportamiento, mientras que los prototipos son el mecanismo subyacente que permite la herencia y la creación de objetos en JavaScript.

##### Diferencias:

🔹 Funciones Constructoras (ES5 y anteriores)

- Usa function + this + prototype.

- No tiene palabras reservadas como class, constructor, extends, super o static.

- Los métodos se asignan manualmente al prototype.

🔹 Clases (ES6+)

- Introduce nuevas palabras reservadas:

- class: Define la clase.

- constructor: Reemplaza la función constructora.

- extends: Para herencia.

- super: Para acceder al padre en herencia.

- static: Para métodos estáticos.

- Los métodos se definen directamente en el cuerpo de la clase (sin prototype explícito).

#### Funciones Constructoras con prototype

✅ Ventajas

- Control total sobre prototipos

- Puedes manipular prototype dinámicamente en tiempo de ejecución (útil en metaprogramación).

- Funciona en todos los navegadores, incluso en IE5+.

- Flexibilidad en la creación de instancias

❌ Desventajas

- Sintaxis verbosa y propensa a errores

- La herencia requiere boilerplate (Object.create, ajustar constructor, etc.).

- No admite características modernas

- Legibilidad reducida

- La separación entre el constructor y los métodos en prototype dificulta la lectura.

\*Puedes tener comportamientos inesperados (ej. this no definido en llamadas sin new).

#### Clases (class)

✅ Ventajas

- Sintaxis clara y concisa

- Agrupa constructor, métodos, estáticos y getters/setters en un solo bloque.

- Herencia simplificada

- extends y super manejan automáticamente la cadena prototipal.

- Campos privados (#), métodos estáticos etc.

- Mejor mantenibilidad

- La estructura es predecible y similar a otros lenguajes (Java, C#, etc.).

❌ Desventajas

- Menos flexibilidad en metaprogramación

- No puedes modificar la clase dinámicamente después de su definición (aunque sí su prototype).

- No hoisting

- Deben declararse antes de usarse (a diferencia de las funciones constructoras).

- Limitaciones en navegadores muy antiguos

### ¿Cuáles son las ventajas de usar getters y setters?

Las ventajas de usar getters y setters (métodos para obtener y establecer valores de propiedades) incluyen el control de acceso a los datos, la encapsulación, la flexibilidad para cambiar la implementación interna y la posibilidad de agregar validación.

### ¿Qué problemas pueden surgir al modificar prototipos nativos como String?

Modificar prototipos nativos como String en JavaScript puede generar problemas graves de compatibilidad y mantenimiento en el código. Al cambiar la funcionalidad de un prototipo nativo, se corre el riesgo de romper código existente que dependa de la implementación original, además de crear comportamientos inesperados para otros desarrolladores que utilicen la misma librería o framework y posibles colisiones futuras si en una versión futura de JavaScript agregan un método nativo con el mismo nombre.

### Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

# 📊 Diferencias: Asignar métodos al `prototype` vs. `Object.assign`

🔹 Asignar directamente:
function Persona(nombre) {
this.nombre = nombre;
}

Persona.prototype.greet = function () {
console.log(`Hola, soy ${this.nombre}`);
};
✅ Método claro, individual
✅ Fácil de sobrescribir métodos uno por uno
❌ No ideal si hay muchos métodos que copiar
🔹 Usar Object.assign:
function Persona(nombre) {
this.nombre = nombre;
}

Object.assign(Persona.prototype, personPrototype);
✅ Permite copiar varios métodos de una vez desde personPrototype
✅ Más limpio si tenés muchos métodos
❌ Puede sobrescribir métodos existentes en el prototype
❌ Menos explícito qué métodos estás agregando
