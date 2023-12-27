// Aplicación de reserva de salas


// Definimos un objeto sala con un array donde se muestran las horas libres

function crearSala(_nombreSalaId, _horasLibres) {

   return {

      _nombreSalaId,
      _horasLibres,
      reservasPendientes: [],
      reservasRechazadas: [],
      reservasAprobadas: [],
      mensajesTramite: [],

      get nombreSala() {
         return this._nombreSalaId;
      },

      get horasLibres() {
         return this._horasLibres;
      },

      set aprobarReserva(id) {
         const reservaCargada = this.reservasPendientes.filter((reserva) => {
            return reserva.id === id; // filter out a meeting with its id and preview
         })[0];

         // approve previewing meeting and mark the previewingMeeting.time as a booked hour
         this.reservasAprobadas.push(reservaCargada); // note that approvedMeetings with a 'd' is the array while approveMeeting without a 'd' is the setter
         this.horasLibres.splice(this.horasLibres.indexOf(reservaCargada.hora), 1);

         this.mensajesTramite.push(`${reservaCargada.nombre}, su reserva de sala ha sido aprobada. Hora de reserva: ${reservaCargada.hora} horas`);
      },

      set rechazarReserva(id) {
         const reservaCargada = this.reservasPendientes.filter((reserva) => {
            return reserva.id === id; // filter out a meeting with its id and preview
         })[0];


         this.reservasRechazadas.push(reservaCargada); // note that declinedMeetings with a 'd' is the array while declineMeeting without a 'd' is the setter

         this._respuesta = `${reservaCargada.nombre}, su reserva ha sido rechazada por cuestiones ajenas a nuestra voluntad`;
      },



   }
};


function crearSolicitud(_SolicitudId, _nombreSolicitante, _salaSolicitada, _horaSolicitada) {

   return {

      _SolicitudId,
      _nombreSolicitante,
      _salaSolicitada,
      _horaSolicitada,

      get salaSolicitada() {
         return this._salaSolicitada;
      },

      get id() {
         return this._SolicitudId;
      },

      get nombreSolicitante() {
         return this._nombreSolicitante;
      },

      get horaSolicitada() {
         return this._horaSolicitada;
      },


      consultar: function () {
         console.log(`Solicitud: #${this.id} \n Nombre: ${this.nombreSolicitante} \n Sala: ${this.salaSolicitada.nombreSala} \n Hora: ${this.horaSolicitada} horas`);
         if (this.salaSolicitada.mensajesTramite.length > 0) {
            console.log(`Mensajes de la solicitud...`)
            console.table(`${this.salaSolicitada.mensajesTramite}`);
         } else {
            console.log(`No existen mensajes de tramitación...`)
         }

      },

      tramitar: function () {

         if (this.salaSolicitada.horasLibres.indexOf(this.horaSolicitada) !== -1) {
            this.salaSolicitada.reservasPendientes.push(this.id);

            console.log(`Se ha dado de alta la solicitud #${this.id} para la sala ${this.salaSolicitada.nombreSala}. En breve nos podremos en contacto con usted...`);

            this.salaSolicitada.mensajesTramite.push(`Se ha dado de alta la solicitud #${this.id} para la sala ${this.salaSolicitada.nombreSala}. En breve nos podremos en contacto con usted...`);

         } else {

            console.log(`No puede tramitarse su solicitud para la sala ${this.salaSolicitada.nombreSala}. No tiene horas disponibles...`);

         }
      },
   }
}


console.log("Reserva de Salas");
