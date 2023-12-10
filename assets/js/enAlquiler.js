const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "2,500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Villa privada con jardín exuberante",
    src: "https://cdn.rusticaltravel.com//images/cache2/90_movil_AP28.jpg_540_380_cf_q100_co-1.jpg",
    descripcion: "Una villa espaciosa con un jardín exuberante y áreas de relajación al aire libre",
    ubicacion: "234 Tranquil Lane, Garden Oasis, TX 67890",
    habitaciones: 6,
    baños: 4,
    costo: '12.000',
    smoke: true,
    pets: true,
  },
  {
    nombre: "Loft artístico en el distrito bohemio",
    src: "https://3.bp.blogspot.com/-TFNIzHWkpZ8/U3XFxM4A4AI/AAAAAAAATTo/T1kYaZkUAPg/s1024/miss-design.com-newyork-apartment-interior-brick-wall-1.jpg",
    descripcion: "Un loft con estilo único en el corazón del distrito artístico",
    ubicacion: "345 Creative Street, Bohemian Quarter, CA 12345",
    habitaciones: 1,
    baños: 1,
    costo: '2.500',
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña acogedora cerca del lago",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/415503131.jpg?k=cd301324c4f0aaf51285b7f84a15becf94aa67b3f3880ba7016b2d2efffd3f34&o=&hp=1",
    descripcion: "Una cabaña encantadora con vistas al lago y acceso directo a actividades al aire libre",
    ubicacion: "456 Lakeside Road, Serene Waterside, WA 56789",
    habitaciones: 3,
    baños: 2,
    costo: '4.500',
    smoke: true,
    pets: false,
  }
];

const divRow = document.querySelector(".row");

for (let propiedad of propiedades_alquiler) {
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
