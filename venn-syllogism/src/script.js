const svg = document.getElementById('venn');

function createCircle(cx, cy, color, label) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', 100);
  circle.setAttribute('fill', color);
  svg.appendChild(circle);

  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', cx);
  text.setAttribute('y', cy);
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('dominant-baseline', 'middle');
  text.textContent = label;
  svg.appendChild(text);

  return circle;
}

const circles = {
  A: createCircle(180, 220, 'red', 'A'),
  B: createCircle(260, 220, 'green', 'B'),
  C: createCircle(220, 120, 'blue', 'C')
};

function resetColors() {
  circles.A.setAttribute('fill-opacity', 0.3);
  circles.B.setAttribute('fill-opacity', 0.3);
  circles.C.setAttribute('fill-opacity', 0.3);
}

function highlight(...names) {
  resetColors();
  names.forEach(name => {
    if (circles[name]) {
      circles[name].setAttribute('fill-opacity', 0.6);
    }
  });
}

function update() {
  const val = document.getElementById('syllogism').value;
  switch (val) {
    case 'AAA':
      highlight('A', 'C');
      break;
    case 'EAC':
      highlight('C', 'B');
      break;
    case 'IBO':
      highlight('A');
      break;
    case 'ABO':
      highlight('A', 'B');
      break;
    default:
      resetColors();
  }
}

update();
document.getElementById('syllogism').addEventListener('change', update);
