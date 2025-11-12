window.onload = function () {
  const reviews = [
    {
      name: "Aisha Malik",
      img: "https://i.pravatar.cc/120?img=1",
      rating: 5,
      text: "Absolutely love the aroma and smooth taste of their cappuccino! The froth is perfect every time, and it’s become my daily go-to coffee for a refreshing start."
    },
    {
      name: "Zain Ahmed",
      img: "https://i.pravatar.cc/120?img=2",
      rating: 4,
      text: "Cozy ambiance and friendly staff. The mocha is perfectly balanced — not too sweet, not too bitter. A great spot for meetings or solo work sessions!"
    },
    {
      name: "Sara Khan",
      img: "https://i.pravatar.cc/120?img=3",
      rating: 5,
      text: "The coffee art is always beautiful, and each cup feels freshly crafted. Their latte has a deep flavor with smooth texture — pure perfection!"
    },
    {
      name: "Hamza Tariq",
      img: "https://i.pravatar.cc/120?img=4",
      rating: 4,
      text: "A calm, cozy place to unwind. The baristas really know what they’re doing — every drink is served with care and a genuine smile. Totally worth it!"
    },
    {
      name: "Fatima Noor",
      img: "https://i.pravatar.cc/120?img=5",
      rating: 5,
      text: "The caramel macchiato is rich, creamy, and incredibly smooth. I love how they maintain the quality — every visit feels special and comforting."
    },
    {
      name: "Ali Raza",
      img: "https://i.pravatar.cc/120?img=12",
      rating: 5,
      text: "Fast service, friendly staff, and the best espresso in town. The aroma alone can make your day — highly recommend Coffee Corner for coffee lovers!"
    }
  ];

  const container = document.getElementById("reviews-container");

  container.innerHTML = "";

  reviews.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("review-card");

    card.innerHTML = `
      <img src="${r.img}" alt="${r.name}" class="review-img">
      <h3>${r.name}</h3>
      <p class="stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
      <p class="review-text">"${r.text}"</p>
    `;

    container.appendChild(card);
  });
};
