function login() {
  const usuario = document.getElementById("username").value;
  const contrasena = document.getElementById("password").value;
  const rol = document.getElementById("rol").value;

  if (rol === "admin" && usuario === "admin" && contrasena === "admin1234") {
    // Redirige al panel de administrador
    window.location.href = "/Proyecto_BD/Enlaces/admin.html";
    return false;
  }

  alert("Credenciales incorrectas o rol no válido.");
  return false; // Previene que el formulario se envíe
}


  // Convierte automáticamente a mayúsculas mientras se escribe
  document.addEventListener("DOMContentLoaded", () => {
    const placaInput = document.getElementById("placa");
    placaInput.addEventListener("input", () => {
      placaInput.value = placaInput.value.toUpperCase();
    });
  });

  function registrarBus() {
    const placa = document.getElementById("placa").value;
    const modelo = document.getElementById("modelo").value;
    const capacidad = document.getElementById("capacidad").value;
    const empresa = document.getElementById("empresa").value;
    const ruta = document.getElementById("ruta").value;

    alert("Bus registrado:\n\n" +
      "Placa: " + placa + "\n" +
      "Modelo: " + modelo + "\n" +
      "Capacidad: " + capacidad + "\n" +
      "Empresa: " + empresa + "\n" +
      "Ruta: " + ruta);

    document.querySelector("form").reset();
    return false;
  }
   
    // Storage objects
    let usuarios = [];
    let conductores = [];
    let buses = [];
    let rutas = [];

    function mostrarFormulario(formId) {
      if (formId === 'verDatos') {
        actualizarDatos();
      }
      document.getElementById(formId).classList.add('active');
    }

    function cerrarFormulario() {
      const formularios = document.querySelectorAll('.formulario');
      formularios.forEach(form => form.classList.remove('active'));
    }

    function registrarUsuario(event) {
      event.preventDefault();
      
      const usuario = {
        nombre: document.getElementById('nombreUsuario').value,
        documento: document.getElementById('documentoUsuario').value,
        email: document.getElementById('emailUsuario').value,
        telefono: document.getElementById('telefonoUsuario').value,
        username: document.getElementById('usernameUsuario').value,
        password: document.getElementById('passwordUsuario').value,
        fechaRegistro: new Date().toLocaleDateString()
      };

      usuarios.push(usuario);
      alert('Usuario registrado exitosamente');
      event.target.reset();
      cerrarFormulario();
      return false;
    }

    function registrarConductor(event) {
      event.preventDefault();
      
      const conductor = {
        nombre: document.getElementById('nombreConductor').value,
        documento: document.getElementById('documentoConductor').value,
        email: document.getElementById('emailConductor').value,
        telefono: document.getElementById('telefonoConductor').value,
        licencia: document.getElementById('licenciaConductor').value,
        username: document.getElementById('usernameConductor').value,
        password: document.getElementById('passwordConductor').value,
        fechaRegistro: new Date().toLocaleDateString()
      };

      conductores.push(conductor);
      alert('Conductor registrado exitosamente');
      event.target.reset();
      cerrarFormulario();
      return false;
    }

    function registrarBus(event) {
      event.preventDefault();
      
      const bus = {
        placa: document.getElementById('placaBus').value,
        modelo: document.getElementById('modeloBus').value,
        capacidad: document.getElementById('capacidadBus').value,
        empresa: document.getElementById('empresaBus').value,
        ruta: document.getElementById('rutaBus').value,
        fechaRegistro: new Date().toLocaleDateString()
      };

      buses.push(bus);
      alert('Bus registrado exitosamente');
      event.target.reset();
      cerrarFormulario();
      return false;
    }

    function registrarRuta(event) {
      event.preventDefault();
      
      const ruta = {
        nombre: document.getElementById('nombreRuta').value,
        origen: document.getElementById('origenRuta').value,
        destino: document.getElementById('destinoRuta').value,
        horarioInicio: document.getElementById('horarioInicio').value,
        horarioFin: document.getElementById('horarioFin').value,
        precio: document.getElementById('precioRuta').value,
        fechaRegistro: new Date().toLocaleDateString()
      };

      rutas.push(ruta);
      alert('Ruta registrada exitosamente');
      event.target.reset();
      cerrarFormulario();
      return false;
    }

    function actualizarDatos() {
      // Mostrar usuarios
      const usuariosDiv = document.getElementById('usuariosData');
      usuariosDiv.innerHTML = usuarios.length === 0 ? '<p>No hay usuarios registrados</p>' : 
        usuarios.map(u => `
          <div class="data-item">
            <strong>${u.nombre}</strong><br>
            Documento: ${u.documento}<br>
            Email: ${u.email}<br>
            Usuario: ${u.username}<br>
            Registrado: ${u.fechaRegistro}
          </div>
        `).join('');

      // Mostrar conductores
      const conductoresDiv = document.getElementById('conductoresData');
      conductoresDiv.innerHTML = conductores.length === 0 ? '<p>No hay conductores registrados</p>' :
        conductores.map(c => `
          <div class="data-item">
            <strong>${c.nombre}</strong><br>
            Documento: ${c.documento}<br>
            Licencia: ${c.licencia}<br>
            Usuario: ${c.username}<br>
            Registrado: ${c.fechaRegistro}
          </div>
        `).join('');

      // Mostrar buses
      const busesDiv = document.getElementById('busesData');
      busesDiv.innerHTML = buses.length === 0 ? '<p>No hay buses registrados</p>' :
        buses.map(b => `
          <div class="data-item">
            <strong>Placa: ${b.placa}</strong><br>
            Modelo: ${b.modelo}<br>
            Capacidad: ${b.capacidad} pasajeros<br>
            Empresa: ${b.empresa}<br>
            Ruta: ${b.ruta}<br>
            Registrado: ${b.fechaRegistro}
          </div>
        `).join('');

      // Mostrar rutas
      const rutasDiv = document.getElementById('rutasData');
      rutasDiv.innerHTML = rutas.length === 0 ? '<p>No hay rutas registradas</p>' :
        rutas.map(r => `
          <div class="data-item">
            <strong>${r.nombre}</strong><br>
            ${r.origen} → ${r.destino}<br>
            Horario: ${r.horarioInicio} - ${r.horarioFin}<br>
            Precio: $${r.precio}<br>
            Registrado: ${r.fechaRegistro}
          </div>
        `).join('');
    }

    function logout() {
      if (confirm('¿Está seguro que desea cerrar sesión?')) {
        window.location.href = '/Proyecto_BD/index.html';
      }
    }

    // Cerrar formulario con ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        cerrarFormulario();
      }
    });

    // Cerrar formulario al hacer clic fuera
    document.querySelectorAll('.formulario').forEach(form => {
      form.addEventListener('click', function(e) {
        if (e.target === this) {
          cerrarFormulario();
        }
      });
    });
  


