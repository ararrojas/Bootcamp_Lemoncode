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

const pacientes: Pacientes[] = 
[
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
  }
];

console.log('------------------- Apartado 1 - A -------------------');

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  
  const pacientesPediatria = pacientes.filter((paciente) => paciente.especialidad === 'Pediatra');

  return pacientesPediatria
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

console.log('------------------- Apartado 1 - B -------------------');

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const infante = pacientes.filter((paciente) => paciente.especialidad === 'Pediatra' && paciente.edad < 10);
  return infante;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

console.log('------------------- Apartado 2 -------------------');

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  pacientes.forEach((paciente) => {
    if (paciente.frecuenciaCardiaca > 100 || paciente.temperatura > 39) {
      activarProtocolo = true;
    }
})
  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

console.log('------------------- Apartado 3 -------------------');

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => pacientes.map((paciente) => ({
  ...paciente,
  especialidad: "Medico de familia"
}));

console.log(reasignaPacientesAMedicoFamilia(pacientes));

console.log('------------------- Apartado 4 -------------------');

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => pacientes.some((paciente) => paciente.especialidad === 'Pediatra');

console.log(HayPacientesDePediatria(pacientes));

console.log('------------------- Apartado 5 -------------------');

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  
  const contadorDeEspecialidad = pacientes.reduce((acc, paciente) => {
    if(paciente.especialidad === "Pediatra"){
      acc.pediatria++;
    } else if (paciente.especialidad === "Medico de familia"){
      acc.medicoDeFamilia++;
    } else if (paciente.especialidad === "Cardiólogo"){
      acc.cardiologia++;
    }
    return acc
    }, 
    { medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0 
    }
  )
  return contadorDeEspecialidad;
  };
  
console.log(cuentaPacientesPorEspecialidad(pacientes));
