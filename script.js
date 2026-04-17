// =====================
// PAGE NAVIGATION
// =====================
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// =====================
// DATA (EDIT ONLY HERE)
// =====================
const anatomyResources = [
  {
    name: "Line of Action",
    description: "Quick gesture drawing tool with timed poses.",
    link: "https://line-of-action.com"
  },
  {
    name: "Quickposes",
    description: "Practice figure drawing with timed sessions.",
    link: "https://quickposes.com"
  }
];

const tutorials = {
  beginner: [
    {
      title: "Drawing Basics",
      creator: "Proko",
      embed: "https://www.youtube.com/embed/6T_-DiAzYBc"
    }
  ],
  shading: [
    {
      title: "Shading Techniques",
      creator: "Art of Wei",
      embed: "https://www.youtube.com/embed/-WR-FyUQc6I"
    }
  ],
  anatomy: [
    {
      title: "Anatomy Basics",
      creator: "Proko",
      embed: "https://www.youtube.com/embed/1EPNYWeEf1U"
    }
  ]
};

// =====================
// RENDER ANATOMY
// =====================
function renderAnatomy() {
  const container = document.getElementById("anatomy-container");
  container.innerHTML = "";

  anatomyResources.forEach(item => {
    const card = `
      <div class="card">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">
          <button>Visit Site</button>
        </a>
      </div>
    `;
    container.innerHTML += card;
  });
}

// =====================
// RENDER TUTORIALS
// =====================
function renderTutorials() {
  const container = document.getElementById("tutorials-container");
  container.innerHTML = "";

  for (let category in tutorials) {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${category}</h3>`;
    
    tutorials[category].forEach(video => {
      section.innerHTML += `
        <div class="card">
          <h4>${video.title}</h4>
          <p>${video.creator}</p>
          <iframe width="100%" height="200" src="${video.embed}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
    });

    container.appendChild(section);
  }
}

// =====================
// COLOR PALETTE
// =====================
function randomColor() {
  rfunction generateHEXColor(hue) {
  const saturation = Math.floor(Math.random() * 30) + 60; // 60–90%
  const lightness = Math.floor(Math.random() * 30) + 40;  // 40–70%

  return `hex(${hue}, ${saturation}%, ${lightness}%)`;
}

function generatePalette() {
  const container = document.getElementById("palette-container");
  container.innerHTML = "";

  const paletteDiv = document.createElement("div");
  paletteDiv.className = "palette";

  const baseHue = Math.floor(Math.random() * 360);

  for (let i = 0; i < 5; i++) {
    // Spread hues evenly → guarantees variety
    const hue = (baseHue + i * 60) % 360;

    const saturation = Math.floor(Math.random() * 30) + 60;
    const lightness = Math.floor(Math.random() * 30) + 40;

    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const hex = hslToHex(hue, saturation, lightness);

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.background = hsl;

    box.innerHTML = `
      <p>${hex}</p>
      <button onclick="copyColor('${hex}', this)">Copy</button>
    `;

    paletteDiv.appendChild(box);
  }

  container.appendChild(paletteDiv);
}

// =====================
// INIT
// =====================
renderAnatomy();
renderTutorials();
generatePalette();
