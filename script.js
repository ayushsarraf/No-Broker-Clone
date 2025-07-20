document.querySelector(".cta-content").innerHTML = `
  <p>--------- Are you a Property Owner? ---------</p>
  <button class="btn-secondary">Post Free Property Ad</button>
`;

document.querySelector(".loan-content").innerHTML = `
  <p>Do you know how much loan you can get? Get maximum with <b>NoBroker</b>
  <button class="btn-eligibility">Check Eligibility</button></p>
`;

const services = [
  ["Lowest Price", "img/packers.png", "Packers & Movers"],
  ["New Offers", "img/payrent.png", "Pay rent"],
  ["Flat 30% off", "img/rent.png", "Rental Agreement"],
  ["", "img/ClicknEarn.svg", "Click & Earn"],
  ["New", "img/painting.png", "Painting & Cleaning"],
  ["", "img/nobroker.png", "NoBroker For NRIs"]
];

document.querySelector(".services-grid").innerHTML = services.map(([badge, img, text]) => `
  <div class="service-card">
    ${badge ? `<span class="badge">${badge}</span>` : ""}
    <div class="icon"><img src="${img}" alt="${text}"></div>
    <h3>${text}</h3>
  </div>
`).join("");

const benefits = [
  ["img/avoid.png", "Avoid Brokers", "We directly connect you to verified owners to save brokerage"],
  ["img/free.png", "Free Listing", "Easy listing process. Also using WhatsApp"],
  ["img/shortlist.png", "Shortlist without Visit", "Extensive Information makes it easy"],
  ["img/rentalagreement.png", "Rental Agreement", "Assistance in creating Rental agreement & Paper work"]
];

document.querySelector(".benefits-grid").innerHTML = benefits.map(([img, title, desc]) => `
  <div class="benefit-card">
    <div class="benefit-icon"><img src="${img}"></div>
    <h3>${title}</h3>
    <p>${desc}</p>
  </div>
`).join("");

document.querySelector(".assist-content").innerHTML = `
  <div class="assist-image"><img src="img/nobuilder.png"></div>
  <div class="assist-text">
    <p>Get in touch with us to Sell or Rent Your Projects</p>
    <button class="enquire-btn">Enquire Now</button>
    <p class="builder-contact">For Builder Enquiries: <strong>+91 91080 50400</strong></p>
  </div>
`;

const stats = [
  ["₹130 cr+", "Brokerage saved monthly"],
  ["30 Lakh+", "Customers Connected Monthly"],
  ["2 Lakh+", "New Listings Monthly"]
];

document.querySelector(".impact-stats").innerHTML = stats.map(([value, text]) => `
  <div class="impact-box">
    <div class="impact-circle">${value}</div>
    <h3>${text}</h3>
  </div>
`).join("");

document.querySelector(".video-youtube").innerHTML = `
  <iframe src="https://www.youtube.com/embed/0ChlgxhXVws?si=6QbCTKRVigtSQ0fS&controls=0" frameborder="0" allowfullscreen></iframe>
`;

const testimonials = [
  ["Shubham Raibhandar", "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg", "Helps us to find good properties", "The site really helps us to find good properties in the least amount of time without any headache of brokerage."],
  
  ["Lisa Das", "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg", "It's a nice experience", "They helped me to find a new home with friendly roommates."],
  ["Kishore", "https://assets.nobroker.in/images/testimonials/ff8081815373f3bb01538493929b5e5f_2016.08.18.11.26.15.jpg", "Found Great Place to Stay via NoBroker", "NoBroker provides a great place to stay with safe environment."]
];

document.querySelector(".testimonials").innerHTML = testimonials.map(([name, img, title, text]) => `
  <div class="testimonial-card">
    <div class="user-info">
      <img src="${img}">
      <div><strong>${name}</strong><br><div class="stars">★★★★★</div></div>
    </div>
    <h3>${title}</h3>
    <p>"${text}"</p>
  </div>
`).join("");

document.querySelector(".app-image").innerHTML = `
  <img src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png">
`;

document.querySelector(".app-text").innerHTML = `
  <h2>Find A New Home On The Go</h2>
  <p><strong>Download our app</strong></p>
  <p class="sub-text">Where convenience is at your fingertip</p>
  <div class="store-buttons">
    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"></a>
    <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"></a>
  </div>
`;
