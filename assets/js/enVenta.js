const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: '5.000',
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: '1.200',
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: '4.500',
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa frente al mar con vista panorámica",
    src: "https://i.pinimg.com/originals/33/6c/75/336c75973b06b87fd536f09b67ee11db.jpg",
    descripcion: "Esta casa ofrece impresionantes vistas al mar desde todas las habitaciones",
    ubicacion: "456 Oceanfront Avenue, Coastal Paradise, FL 12345",
    habitaciones: 3,
    baños: 2,
    costo: '7.500',
    smoke: true,
    pets: true,
  },
  {
    nombre: "Chalet rústico en las montañas",
    src: "https://img.freepik.com/fotos-premium/imagen-tranquila-chalet-montana-lujoso-rustico-ubicado-picos-pintorescos-que-ofrece-escape-tranquilo_674594-8077.jpg?w=2000",
    descripcion: "Un acogedor chalet rodeado de naturaleza y tranquilidad",
    ubicacion: "789 Mountain View Road, Serene Peaks, CO 78901",
    habitaciones: 2,
    baños: 1,
    costo: '3.000',
    smoke: true,
    pets: false,
  },
  {
    nombre: "Penthouse moderno en el centro de la ciudad",
    src: "data:image/jpeg;base64,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",
    descripcion: "Un lujoso penthouse con vistas panorámicas de la ciudad y comodidades modernas",
    ubicacion: "101 Downtown Boulevard, Urban Metropolis, NY 10001",
    habitaciones: 5,
    baños: 3,
    costo: '9.000',
    smoke: false,
    pets: true,
  }
];

const divRow = document.querySelector(".row");

for (let propiedad of propiedades_venta) {
  const template = `
  <div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
      ${smokeAllowed(propiedad.smoke)}
      ${petAllowed(propiedad.pets)}`;
  divRow.innerHTML += template;
}

function smokeAllowed(isAllowed) {
  if (isAllowed) {
    return `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    return `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }
}

function petAllowed(isAllowed) {
  if (isAllowed) {
    return `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
  } else {
    return `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
  }
}
