const menuItems = [
  ["Masala Dosa", "South Indian", "Veg", 120, "Crisp dosa with potato masala, sambar and coconut chutney."],
  ["Mysore Masala Dosa", "South Indian", "Veg", 145, "Spicy red chutney dosa with soft potato masala."],
  ["Idli Sambar", "South Indian", "Veg", 90, "Steamed idli with hot sambar and chutney."],
  ["Medu Vada", "South Indian", "Veg", 95, "Golden lentil vada served with sambar."],
  ["Onion Uttapam", "South Indian", "Veg", 135, "Thick uttapam topped with onion, tomato and coriander."],
  ["Paneer Butter Masala", "North Indian", "Veg", 245, "Paneer cubes in creamy tomato butter gravy."],
  ["Dal Makhani", "North Indian", "Veg", 215, "Slow-cooked black lentils with butter and cream."],
  ["Chole Bhature", "North Indian", "Veg", 180, "Punjabi chole with fluffy bhature."],
  ["Rajma Chawal", "North Indian", "Veg", 170, "Kidney bean curry with steamed rice."],
  ["Veg Kolhapuri", "North Indian", "Veg", 225, "Mixed vegetables in spicy Kolhapuri masala."],
  ["Veg Thali", "Thali", "Veg", 270, "Roti, rice, dal, sabzi, salad, pickle and sweet."],
  ["Maharaja Thali", "Thali", "Veg", 399, "Premium thali with paneer, dal, pulao, breads and dessert."],
  ["Chicken Biryani", "Biryani", "Non-Veg", 285, "Aromatic basmati rice layered with spiced chicken."],
  ["Mutton Biryani", "Biryani", "Non-Veg", 365, "Dum biryani with tender mutton pieces."],
  ["Veg Hyderabadi Biryani", "Biryani", "Veg", 245, "Vegetable dum biryani with raita and salan."],
  ["Egg Biryani", "Biryani", "Non-Veg", 225, "Fragrant biryani rice with boiled egg and masala."],
  ["Butter Chicken", "North Indian", "Non-Veg", 335, "Tandoori chicken in creamy makhani gravy."],
  ["Chicken Tikka Masala", "Tandoor", "Non-Veg", 325, "Smoky chicken tikka in rich onion tomato gravy."],
  ["Paneer Tikka", "Tandoor", "Veg", 265, "Chargrilled paneer with peppers and mint chutney."],
  ["Tandoori Chicken Half", "Tandoor", "Non-Veg", 330, "Smoky tandoor roasted chicken with spices."],
  ["Tandoori Roti", "Breads", "Veg", 35, "Whole wheat bread cooked in tandoor."],
  ["Butter Naan", "Breads", "Veg", 55, "Soft naan finished with butter."],
  ["Garlic Naan", "Breads", "Veg", 70, "Naan topped with garlic, coriander and butter."],
  ["Laccha Paratha", "Breads", "Veg", 65, "Layered wheat paratha baked crisp."],
  ["Pav Bhaji", "Street Food", "Veg", 165, "Mumbai style bhaji with butter toasted pav."],
  ["Vada Pav", "Street Food", "Veg", 55, "Spiced potato fritter in pav with chutneys."],
  ["Pani Puri", "Street Food", "Veg", 80, "Crisp puri with tangy spiced water."],
  ["Samosa Chaat", "Street Food", "Veg", 125, "Crushed samosa with chole, curd and chutneys."],
  ["Hakka Noodles", "Indo Chinese", "Veg", 175, "Wok tossed noodles with vegetables."],
  ["Veg Manchurian", "Indo Chinese", "Veg", 195, "Vegetable dumplings in spicy garlic sauce."],
  ["Chicken Fried Rice", "Indo Chinese", "Non-Veg", 225, "Fried rice with chicken, egg and spring onion."],
  ["Chilli Paneer", "Indo Chinese", "Veg", 220, "Paneer tossed with peppers and chilli garlic sauce."],
  ["Gulab Jamun", "Desserts", "Veg", 85, "Warm milk dumplings soaked in syrup."],
  ["Rasmalai", "Desserts", "Veg", 115, "Soft chenna discs in chilled rabri."],
  ["Kulfi Falooda", "Desserts", "Veg", 145, "Creamy kulfi with falooda, syrup and nuts."],
  ["Chocolate Brownie", "Cafe", "Cafe", 165, "Warm brownie with chocolate sauce."],
  ["Masala Chai", "Cafe", "Cafe", 45, "Indian tea brewed with milk and spices."],
  ["Elaichi Tea", "Cafe", "Cafe", 55, "Cardamom flavoured milk tea."],
  ["Filter Coffee", "Cafe", "Cafe", 70, "South Indian style strong coffee."],
  ["Cold Coffee", "Cafe", "Cafe", 135, "Chilled blended coffee."],
  ["Cappuccino", "Cafe", "Cafe", 145, "Espresso with steamed milk foam."],
  ["Cafe Latte", "Cafe", "Cafe", 155, "Smooth espresso with steamed milk."],
  ["Mocha", "Cafe", "Cafe", 170, "Coffee with chocolate and milk foam."],
  ["Veg Cheese Sandwich", "Cafe", "Cafe", 150, "Grilled sandwich with vegetables and cheese."],
  ["Paneer Wrap", "Cafe", "Cafe", 185, "Paneer tikka filling wrapped in soft tortilla."],
  ["French Fries", "Cafe", "Cafe", 125, "Crispy fries with seasoning."],
  ["Mango Lassi", "Beverages", "Veg", 125, "Sweet yogurt drink blended with mango."],
  ["Sweet Lassi", "Beverages", "Veg", 95, "Classic chilled Punjabi lassi."],
  ["Fresh Lime Soda", "Beverages", "Veg", 90, "Sweet, salted or mixed lime soda."],
  ["Virgin Mojito", "Beverages", "Cafe", 155, "Mint, lime and soda mocktail."]
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  category: item[1],
  type: item[2],
  price: item[3],
  desc: item[4],
  image: menuPhoto(item[0], item[2], index)
}));

const wines = [
  ["Bordeaux", "France", 780],
  ["Champagne", "France", 950],
  ["Chablis", "France", 820],
  ["Beaujolais", "France", 720],
  ["Sancerre", "France", 860],
  ["Cotes du Rhone", "France", 760],
  ["Burgundy", "France", 980],
  ["Medoc", "France", 890],
  ["Pouilly-Fume", "France", 920],
  ["Alsace Riesling", "France", 840],
  ["Chianti", "Italy", 760],
  ["Barolo", "Italy", 1050],
  ["Barbaresco", "Italy", 980],
  ["Prosecco", "Italy", 740],
  ["Amarone", "Italy", 1120],
  ["Soave", "Italy", 690],
  ["Brunello di Montalcino", "Italy", 1180],
  ["Lambrusco", "Italy", 680],
  ["Valpolicella", "Italy", 760],
  ["Frascati", "Italy", 650],
  ["Rioja", "Spain", 760],
  ["Cava", "Spain", 690],
  ["Tempranillo", "Spain", 740],
  ["Priorat", "Spain", 980],
  ["Albarino", "Spain", 790],
  ["Sherry", "Spain", 720],
  ["Garnacha", "Spain", 700],
  ["Monastrell", "Spain", 730],
  ["Verdejo", "Spain", 690],
  ["Toro", "Spain", 810],
  ["Napa Valley Cabernet", "United States", 1250],
  ["Zinfandel", "United States", 820],
  ["Sonoma Chardonnay", "United States", 870],
  ["Merlot California", "United States", 790],
  ["Oregon Pinot Noir", "United States", 1050],
  ["Malbec", "Argentina", 760],
  ["Torrontes", "Argentina", 690],
  ["Bonarda", "Argentina", 710],
  ["Carmenere", "Chile", 740],
  ["Chilean Sauvignon Blanc", "Chile", 720],
  ["Cabernet Chile", "Chile", 760],
  ["Shiraz", "Australia", 780],
  ["Penfolds Grange", "Australia", 1350],
  ["Australian Riesling", "Australia", 790],
  ["Mosel Riesling", "Germany", 820],
  ["Spatburgunder", "Germany", 860],
  ["Eiswein", "Germany", 1180],
  ["Port Wine", "Portugal", 760],
  ["Vinho Verde", "Portugal", 680],
  ["Pinotage", "South Africa", 760]
];

function menuPhoto(name, type, index) {
  return `assets/menu-images/${slug(name)}.png`;
  const accent = type === "Wine" ? "#5b1830" : type === "Non-Veg" ? "#8f2521" : type === "Cafe" ? "#9a5d16" : "#146b5c";
  const icon = type === "Wine" ? "🍷" : type === "Cafe" ? "☕" : type === "Non-Veg" ? "🍗" : "🍽";
  const pattern = [
    ["#170d09", accent, "#d7a34a"],
    ["#20140c", "#8a3a24", "#f0b45a"],
    ["#101b18", "#236d5f", "#e0a747"],
    ["#1d1118", "#6d1f3a", "#d99b3d"],
    ["#18130d", "#7b4a20", "#e8c06a"]
  ][index % 5];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="450" viewBox="0 0 700 450">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${pattern[0]}"/>
          <stop offset="0.55" stop-color="${pattern[1]}"/>
          <stop offset="1" stop-color="${pattern[2]}"/>
        </linearGradient>
      </defs>
      <rect width="700" height="450" fill="url(#g)"/>
      <circle cx="590" cy="76" r="94" fill="rgba(255,255,255,0.13)"/>
      <circle cx="105" cy="360" r="124" fill="rgba(0,0,0,0.18)"/>
      <rect x="38" y="38" width="624" height="374" rx="26" fill="rgba(255,255,255,0.08)" stroke="rgba(255,226,160,0.58)" stroke-width="3"/>
      <text x="50%" y="38%" text-anchor="middle" font-size="96">${icon}</text>
      <text x="50%" y="58%" text-anchor="middle" fill="#fff8e8" font-family="Georgia, serif" font-size="42" font-weight="700">${escapeSvg(name)}</text>
      <text x="50%" y="70%" text-anchor="middle" fill="#ffe2a0" font-family="Arial, sans-serif" font-size="20" letter-spacing="4">${escapeSvg(type)} SPECIAL</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function slug(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeSvg(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

menuItems.push(...wines.map((wine, index) => ({
  id: menuItems.length + index + 1,
  name: wine[0],
  category: `${wine[1]} Wine`,
  type: "Wine",
  price: wine[2],
  desc: `Selected ${wine[0]} from ${wine[1]}, served for premium dining and celebration orders.`,
  image: menuPhoto(wine[0], "Wine", index)
})));

const cart = new Map();
let activeCategory = "All";

const rs = value => `Rs. ${Math.round(value).toLocaleString("en-IN")}`;
const $ = selector => document.querySelector(selector);

const els = {
  tabs: $("#tabs"),
  grid: $("#grid"),
  search: $("#search"),
  type: $("#type"),
  visible: $("#visible"),
  qty: $("#qty"),
  cat: $("#cat"),
  avg: $("#avg"),
  cart: $("#cart"),
  table: $("#table"),
  customer: $("#customer"),
  order: $("#order"),
  orderNo: $("#orderNo"),
  meta: $("#meta"),
  inv: $("#inv"),
  disc: $("#disc"),
  svc: $("#svc"),
  gstRate: $("#gstRate"),
  pay: $("#pay"),
  subt: $("#subt"),
  discAmt: $("#discAmt"),
  svcAmt: $("#svcAmt"),
  gstAmt: $("#gstAmt"),
  grand: $("#grand"),
  clear: $("#clear"),
  print: $("#print")
};

function makeInvoiceNo() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `INV-${date}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function renderTabs() {
  const categories = ["All", ...new Set(menuItems.map(item => item.category))];
  els.tabs.innerHTML = categories.map(category => `
    <button class="tab ${category === activeCategory ? "active" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function filteredItems() {
  const query = els.search.value.trim().toLowerCase();
  const selectedType = els.type.value;
  return menuItems.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const typeMatch = selectedType === "all" || item.type === selectedType;
    const searchText = `${item.name} ${item.category} ${item.type} ${item.desc}`.toLowerCase();
    return categoryMatch && typeMatch && searchText.includes(query);
  });
}

function renderMenu() {
  const items = filteredItems();
  els.visible.textContent = items.length;
  els.cat.textContent = activeCategory;
  els.avg.textContent = rs(items.reduce((sum, item) => sum + item.price, 0) / (items.length || 1));
  els.grid.innerHTML = items.map(item => {
    const badgeClass = item.type === "Veg" ? "veg" : item.type === "Non-Veg" ? "nonveg" : item.type === "Wine" ? "wine" : "cafe";
    const image = item.image ? `
      <div class="item-photo">
        <img src="${item.image}" alt="${item.name} special menu photo" loading="lazy" />
      </div>
    ` : "";
    return `
      <article class="card">
        ${image}
        <div class="top">
          <div>
            <h3 class="name">${item.name}</h3>
            <p class="desc">${item.category}</p>
          </div>
          <span class="badge ${badgeClass}">${item.type}</span>
        </div>
        <p class="desc">${item.desc}</p>
        <div class="foot">
          <div class="price">${rs(item.price)}</div>
          <button class="add" data-add="${item.id}">+ Add</button>
        </div>
      </article>
    `;
  }).join("");
}

function totals() {
  const subtotal = [...cart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = subtotal * (Number(els.disc.value || 0) / 100);
  const base = subtotal - discount;
  const service = base * (Number(els.svc.value || 0) / 100);
  const gst = (base + service) * (Number(els.gstRate.value || 0) / 100);
  return { subtotal, discount, service, gst, grand: base + service + gst };
}

function renderBill() {
  const items = [...cart.values()];
  els.qty.textContent = items.reduce((sum, item) => sum + item.qty, 0);
  els.meta.textContent = `${els.order.value} | ${els.orderNo.value || "No order no."} | ${els.table.value || "No table"}${els.customer.value ? " | " + els.customer.value : ""} | ${els.pay.value}`;

  if (!items.length) {
    els.cart.innerHTML = `<div class="empty">No items added yet. Select dishes from the menu.</div>`;
  } else {
    els.cart.innerHTML = items.map(item => `
      <div class="row">
        <div>
          <div class="cart-name">${item.name}</div>
          <div class="meta-line">${rs(item.price)} x ${item.qty} = ${rs(item.price * item.qty)}</div>
        </div>
        <div class="qty-box">
          <button class="icon" data-id="${item.id}" data-delta="-1">-</button>
          <strong>${item.qty}</strong>
          <button class="icon" data-id="${item.id}" data-delta="1">+</button>
          <button class="icon remove" data-remove="${item.id}">x</button>
        </div>
      </div>
    `).join("");
  }

  const bill = totals();
  els.subt.textContent = rs(bill.subtotal);
  els.discAmt.textContent = `-${rs(bill.discount)}`;
  els.svcAmt.textContent = rs(bill.service);
  els.gstAmt.textContent = rs(bill.gst);
  els.grand.textContent = rs(bill.grand);
}

function addToCart(id) {
  const item = menuItems.find(entry => entry.id === Number(id));
  if (!item) return;
  const row = cart.get(item.id) || { ...item, qty: 0 };
  row.qty += 1;
  cart.set(item.id, row);
  renderBill();
}

function changeQty(id, delta) {
  const row = cart.get(Number(id));
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) cart.delete(row.id);
  else cart.set(row.id, row);
  renderBill();
}

els.inv.textContent = makeInvoiceNo();

els.tabs.addEventListener("click", event => {
  const tab = event.target.closest("[data-category]");
  if (!tab) return;
  activeCategory = tab.dataset.category;
  renderTabs();
  renderMenu();
});

els.grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

els.cart.addEventListener("click", event => {
  const remove = event.target.closest("[data-remove]");
  const delta = event.target.closest("[data-delta]");
  if (remove) {
    cart.delete(Number(remove.dataset.remove));
    renderBill();
  }
  if (delta) changeQty(delta.dataset.id, Number(delta.dataset.delta));
});

[els.search, els.type].forEach(input => input.addEventListener("input", renderMenu));
[els.table, els.customer, els.order, els.orderNo, els.disc, els.svc, els.gstRate, els.pay]
  .forEach(input => input.addEventListener("input", renderBill));

els.clear.addEventListener("click", () => {
  cart.clear();
  els.disc.value = 0;
  els.svc.value = 5;
  els.gstRate.value = 5;
  els.inv.textContent = makeInvoiceNo();
  renderBill();
});

els.print.addEventListener("click", () => {
  if (!cart.size) {
    alert("Please add at least one item before printing the invoice.");
    return;
  }
  window.print();
});

renderTabs();
renderMenu();
renderBill();
