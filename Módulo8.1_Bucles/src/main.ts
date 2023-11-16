import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

console.log('------------------- Apartado 1 -------------------');

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  
  let pacientePed = []

  for(let i = 0; i < pacientes.length; i++){
    
    const paciente = pacientes[i];
    
    if (paciente.especialidad === 'Pediatra'){
      pacientePed.push(paciente)
    }
  }
    return pacientePed
  };
console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacienteInf = []

  for(let i = 0; i < pacientes.length; i++){
    
    const paciente = pacientes[i];
    
    if (paciente.especialidad === 'Pediatra' && paciente.edad <= 10){
      pacienteInf.push(paciente)
    }
  }
    return pacienteInf
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


console.log('------------------- Apartado 2 -------------------');

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  
  let activarProtocolo = false;
  
  for(let i = 0; i < pacientes.length; i++){
    
    const paciente = pacientes[i];

    if (paciente.frecuenciaCardiaca > 100 || paciente.temperatura > 39){
      activarProtocolo = true;
      break;
    } 
  }
  return activarProtocolo
};
console.log(activarProtocoloUrgencia(pacientes));


console.log('------------------- Apartado 3 -------------------');

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {

  let pacientesNuevo : Pacientes[]= []

  for(let i = 0; i < pacientes.length; i++){
    
    const paciente = {...pacientes[i]};

     if(paciente.especialidad === 'Pediatra'){
      paciente.especialidad = 'Medico de familia'
    }

    pacientesNuevo.push(paciente);
  }
  return pacientesNuevo
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));


console.log('------------------- Apartado 4 -------------------');

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

  let hayPaciente = false;
  
  for(let i = 0; i < pacientes.length; i++){
    const paciente = pacientes[i];

    if (paciente.especialidad === 'Pediatra') {
      hayPaciente = true
      break;
    }
  }
  return hayPaciente
};
console.log(hayPacientesDePediatria(pacientes));


console.log('------------------- Apartado 5 -------------------');

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {

  const NumeroPacientesPorEspecialidad = {
    medicoDeFamilia : 0,
    pediatria: 0,
    cardiologia:0,
  }

  for(let i = 0; i < pacientes.length; i++){
    const paciente = pacientes[i];

    if (paciente.especialidad === 'Medico de familia'){
      NumeroPacientesPorEspecialidad['medicoDeFamilia']++;
    } else if (paciente.especialidad === 'Pediatra'){
      NumeroPacientesPorEspecialidad['pediatria']++;
    } else if (paciente.especialidad === 'Cardiólogo'){
      NumeroPacientesPorEspecialidad['cardiologia']++;
    }
  }
  console.log(NumeroPacientesPorEspecialidad);
  return NumeroPacientesPorEspecialidad;
};
cuentaPacientesPorEspecialidad(pacientes);