import { Colaborador } from '../clasess/colaborador/colaborador';
import { Servicio } from '../clasess/servicio/servicio';
import { Horario } from '../clasess/horario/horario';

export class Ls {

    public static colaborades: Colaborador[] = [
        {
            src: 'assets/img/colaborador/colaborador1.jpg',
            nombres: 'Arturo Córdova Aguilar',
            descripcion: `Ing. Geologo egresado de la Universidad Nacional Mayor de San Marcos (1986), estudios de MSc
            en Geologia del Cuaternario en la Vritje Universiteit Brussels de Bélgica (1988). Posee más de 20
            años de experiencia en estudios geológicos especializados en exploraciones geológicas-mineras;
            estudios del medio físico geológico para el Ordenamiento Territorial; estudios de geologia y
            geomorfología orientados a la gestión de los procesos geodinámicos externos destructivos y/o
            riesgos; estudios geológicos-geotécnicos especializados para la elaboración de expedientes
            técnicos para obras hidráulicas e infraestructura ingenieril entre otros estudios de ingeniería
            geológica.`
        },
        {
            src: 'assets/img/colaborador/colaborador2.jpg',
            nombres: 'Juan José Torres Piscoya',
            descripcion: `Ing. Civil /Agrícola egresado de la Universidad Pedro Ruiz Gallo, con mas de 15 años de
            experiencia lograda en la ejecución de Pequeñas , Medianas y Grandes obras de Irrigación,
            Riego tecnificado (gravedad, presurizado), Agua Potable y Saneamiento Rural, Defensa Ribereña
            y construcciones rurales. Además posee una Vasta Experiencia en Obras Civiles y Adscrito a la
            plataforma del gobierno regional Piura como Estimador de Riesgos, con Resolución Ejecutiva
            Regional N° 956-201/GOB.REG.PIURA-PR del 30 de noviembre del 2010.`
        },
        {
            src: 'assets/img/colaborador/colaborador3.jpg',
            nombres: 'Luis Alberto Campos Quispe',
            descripcion: `Ingeniero Geólogo con estudios de Maestría  en Geología, Dinámica terrestre, 
            Riesgos Geológicos y Recursos Minerales en la Universidad  Autónoma de Barcelona –España; 
            Con participación en excavaciones y construcciones de Obras Hidráulicas: Túneles, Presas, 
            canales y estabilidad de taludes; participación en investigaciones Geológicos-Geotécnicos, 
            mecánica de suelos para cimentaciones superficiales y profundas, puentes, carreteras, 
            defensas ribereñas; además con capacidad de procesar e interpretar datos mineralógicos, 
            petrológicos, geoquímicos y geotécnicos.`
        },
        {
            src: 'assets/img/colaborador/colaborador4.jpg',
            nombres: 'Juan Quiroga Vite',
            descripcion: `Ingeniero Geólogo Senior, graduado en la Universidad Nacional Mayor de 
            San Marcos - Lima; Maestría en Recursos Hídricos en la Universidad de Piura (UDEP). 
            Posee más de 20 años experiencia profesional, habiendo participado en diversos proyectos 
            para la industria básica y de la construcción. Coordinador de Estudios y Proyectos, 
            dirigiendo los procesos de planificación y desarrollo en las áreas de Geología, 
            Hidrogeología y Geotecnia y Supervisión de Obra. En los últimos años he realizado 
            estudios para la caracterización del medio geológico en el desarrollo de proyectos mineros, 
            hidrogeológicos, construcción de grandes proyectos hidráulicos de presas.`
        },
        {
            src: 'assets/img/colaborador/colaborador5.jpg',
            nombres: 'Luis César Manayalle Rodríguez',
            descripcion: `Ing. En Recursos Naturales Renovables, egresado de la Universidad Nacional Agraria de la
            Selva - Tingo María, Con Especialidad Identificación, Formulación y Gestión de Proyectos
            Sociales y Productivos de Inversión Pública. Con participación en Estudio de IMPACTO
            AMBIENTAL del Proyecto de la carretera de Pitio Sime, con la consultoría Wilfredo LLuen Vallejos,
            Ferreñafe. Agosto. 2009; en el área de manejo de los recursos naturales y desarrollo
            turístico desde el 1 de enero al 20 de noviembre del 2005; en El proyecto de Forestación en 9
            caseríos de Inkawasi, para la Asociación de Pequeños y Medianos Agricultores “Sagrado Corazón
            de Jesús” Machaycaj – Inkawasi. 30 – 07 – 2003.`
        },
        {
            src: 'assets/img/colaborador/colaborador6.jpg',
            nombres: 'Max Antonio Rumiche Pimienta',
            descripcion: `Ing. Geógrafo egresado de la Universidad Nacional Mayor de San Marcos con título profesional, 
            con conocimientos prácticos de Sistemas de Información Geográfica, análisis territoriales,
            recursos naturales y gestión pública. Posee una vasta experiencia en Consultoría de Análisis de
            Riesgo para los Planes de Desarrollo Urbano y Planes de Acondicionamiento Territorial;
            Especialista en sistemas de información geográfica en distintas temáticas y Ordenamiento
            Territorial.`
        },
        {
            src: 'assets/img/colaborador/colaborador7.jpg',
            nombres: 'María Albañil Ordinola',
            descripcion: `Economista graduada de la Universidad Nacional de Piura; estudios de Maestría 
            en Desarrollo Rural. Experiencia de trabajo en formulación, implementación, evaluación y 
            dirección de proyectos SOCIALES, PRODUCTIVOS, DE FORTALECIMIENTO DE CAPACIDADES EN GESTIÓN 
            EMPRESARIAL Y MEDIO AMBIENTALES;  Desarrollo de estudios económicos y productivos para la 
            Zonificación Ecológica Económica de la Región Piura; fortalecimiento de capacidades y 
            asesoría a organizaciones de pequeños productores y de mujeres emprendedoras, mediante 
            el uso de metodologías participativas y técnicas de “aprender haciendo liderazgo”. `
        }
    ];

    public static servicios: Servicio[] = [
        {
            src: 'assets/img/servicios/servicio-01.jpg',
            alt: 'Servicio 01',
            descripcion: `1. Estudios geológicos y geomorfológicos con aplicación a 
                las labores ingenieriles.`
        },
        {
            src: 'assets/img/servicios/servicio-02.jpg',
            alt: 'Servicio 02',
            descripcion: `2. Estudios geotécnicos especializados en mecánica de suelos 
                y mecánica de rocas.`
        },
        {
            src: 'assets/img/servicios/servicio-03.jpg',
            alt: 'Servicio 03',
            descripcion: `3. Geología y cartografía geológica aplicada a estudios de 
                zonificación económica, ecológica y ordenamiento territorial (ZEE).`
        },
        {
            src: 'assets/img/servicios/servicio-04.jpg',
            alt: 'Servicio 04',
            descripcion: `4. Evaluación del riesgo y peligros geológicos.`
        },
        {
            src: 'assets/img/servicios/servicio-05.jpg',
            alt: 'Servicio 05',
            descripcion: `5. Estudios geomecánicos en túneles y taludes.`
        },
        {
            src: 'assets/img/servicios/servicio-06.jpg',
            alt: 'Servicio 06',
            descripcion: `6. Estudios del subsuelo mediante técnicas de prospección geofísica.`
        },
        {
            src: 'assets/img/servicios/servicio-07.jpg',
            alt: 'Servicio 07',
            descripcion: `7. Estudio de materiales granulares de canteras para ser empleados 
                en obras civiles.`
        },
        {
            src: 'assets/img/servicios/servicio-08.jpg',
            alt: 'Servicio 08',
            descripcion: `8. Servicios de ensayos de laboratorio de mecánica de suelos.`
        },
        {
            src: 'assets/img/servicios/servicio-09.jpg',
            alt: 'Servicio 09',
            descripcion: `9. Trabajos de topográfica.`
        },
        {
            src: 'assets/img/servicios/servicio-10.jpg',
            alt: 'Servicio 10',
            descripcion: `10. Elaboración de expedientes técnicos.`
        }
    ];

    public static horarios: Horario[] = [
        {
            dia: 'Domingo',
            horas: 'Cerrado'
        },
        {
            dia: 'Lunes',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Martes',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Miercoles',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Jueves',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Viernes',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Jueves',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Viernes',
            horas: '7:00 AM - 8:00 PM'
        },
        {
            dia: 'Sábado',
            horas: '9:00 AM - 5:00 PM'
        }
    ];

}   
