const products = [
  {name:"Modelo 3D #01", price:"Consultar", icon:"◈", desc:"Pieza decorativa o funcional personalizable."},
  {name:"Modelo 3D #02", price:"Consultar", icon:"◇", desc:"Impresión bajo pedido en diferentes tamaños."},
  {name:"Modelo 3D #03", price:"Consultar", icon:"△", desc:"Acabado y color según disponibilidad."}
];

const box = document.getElementById("products");
box.innerHTML = products.map(p => `
  <article class="product">
    <div class="product-img">${p.icon}</div>
    <div class="product-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="price">${p.price}</span>
      <a class="button secondary" target="_blank" rel="noopener"
        href="https://wa.me/34639062725?text=${encodeURIComponent("Hola, estoy interesado en " + p.name + ".")}">
        Consultar por WhatsApp
      </a>
    </div>
  </article>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
