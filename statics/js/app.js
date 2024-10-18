// Variables de almacenamiento temporal
let users = [];
let appointments = [];

// Registrar usuario y mascota
document.getElementById('registerUserForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const petName = document.getElementById('petName').value;
    const petType = document.getElementById('petType').value;

    const user = { userName, petName, petType, id: users.length + 1 };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuario y mascota registrados con éxito.');
    console.log(users);
});

// Registrar cita médica
document.getElementById('registerAppointmentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    const appointment = { userId, appointmentDate, id: appointments.length + 1 };
    appointments.push(appointment);
    alert('Cita médica registrada con éxito.');
    console.log(appointments);
});

// Consultar usuarios
if (document.getElementById('userListUl')) {
    const userListUl = document.getElementById('userListUl');
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Usuario: ${user.userName}, Mascota: ${user.petName}, Tipo: ${user.petType}`;
        userListUl.appendChild(li);
    });
}

// Consultar citas médicas
if (document.getElementById('appointmentListUl')) {
    const appointmentListUl = document.getElementById('appointmentListUl');
    appointments.forEach(appointment => {
        const li = document.createElement('li');
        li.textContent = `ID Usuario: ${appointment.userId}, Fecha: ${appointment.appointmentDate}`;
        appointmentListUl.appendChild(li);
    });
}
