// ==========================================
// CONFIGURACIÓN DE FIGURAS
// ==========================================

const shapes = {
    cube: {
        title: "Cube Volume Calculator",
        formula: "Formula: V = a³",
        inputs: [
            { id: "sideLength", label: "Side Length (a)", min: 0, max: 100, step: 0.1, default: 5 }
        ],
        calculate: (values) => {
            const a = values.sideLength;
            return Math.pow(a, 3);
        },
        getFormulaText: (values) => {
            const a = values.sideLength;
            return `V = ${a} × ${a} × ${a}`;
        },
        draw: (p5, values) => {
            const visualSize = p5.map(values.sideLength, 0, 100, 40, 160);
            p5.box(visualSize);
        }
    },
    sphere: {
        title: "Sphere Volume Calculator",
        formula: "Formula: V = (4/3)πr³",
        inputs: [
            { id: "radius", label: "Radius (r)", min: 0, max: 50, step: 0.1, default: 3 }
        ],
        calculate: (values) => {
            const r = values.radius;
            return (4/3) * Math.PI * Math.pow(r, 3);
        },
        getFormulaText: (values) => {
            const r = values.radius;
            return `V = (4/3) × π × ${r}³`;
        },
        draw: (p5, values) => {
            const visualSize = p5.map(values.radius, 0, 50, 40, 160);
            p5.sphere(visualSize);
        }
    },
    cylinder: {
        title: "Cylinder Volume Calculator",
        formula: "Formula: V = πr²h",
        inputs: [
            { id: "radius", label: "Radius (r)", min: 0, max: 50, step: 0.1, default: 2 },
            { id: "height", label: "Height (h)", min: 0, max: 100, step: 0.1, default: 10 }
        ],
        calculate: (values) => {
            const r = values.radius;
            const h = values.height;
            return Math.PI * Math.pow(r, 2) * h;
        },
        getFormulaText: (values) => {
            const r = values.radius;
            const h = values.height;
            return `V = π × ${r}² × ${h}`;
        },
        draw: (p5, values) => {
            const visualRadius = p5.map(values.radius, 0, 50, 30, 100);
            const visualHeight = p5.map(values.height, 0, 100, 40, 200);
            p5.cylinder(visualRadius, visualHeight);
        }
    }
};

let currentShape = 'cube';
let currentValues = {};

// ==========================================
// LÓGICA DE NAVEGACIÓN
// ==========================================

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remover clase active de todos los links
        document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
        
        // Añadir clase active al link clickeado
        link.classList.add('active');
        
        // Cambiar figura actual
        currentShape = link.dataset.shape;
        updateShapeUI();
    });
});

// ==========================================
// LÓGICA DE ACTUALIZACIÓN DE UI
// ==========================================

function updateShapeUI() {
    const shape = shapes[currentShape];
    
    // Actualizar título y fórmula
    document.getElementById('shapeTitle').textContent = shape.title;
    document.getElementById('shapeFormula').textContent = shape.formula;
    
    // Generar inputs dinámicamente
    const container = document.getElementById('inputsContainer');
    container.innerHTML = '';
    
    currentValues = {};
    
    shape.inputs.forEach(input => {
        currentValues[input.id] = input.default;
        
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        inputGroup.innerHTML = `
            <label for="${input.id}Input">${input.label}</label>
            <div class="input-row">
                <input type="range" id="${input.id}Slider" max="${input.max}" min="${input.min}" step="${input.step}" value="${input.default}"/>
                <div class="input-wrapper">
                    <input type="number" id="${input.id}Input" value="${input.default}"/>
                    <span class="unit">cm</span>
                </div>
            </div>
        `;
        
        container.appendChild(inputGroup);
        
        // Añadir event listeners
        const slider = document.getElementById(`${input.id}Slider`);
        const numberInput = document.getElementById(`${input.id}Input`);
        
        slider.addEventListener('input', () => {
            numberInput.value = slider.value;
            currentValues[input.id] = parseFloat(slider.value);
            updateCalculation();
        });
        
        numberInput.addEventListener('input', () => {
            slider.value = numberInput.value;
            currentValues[input.id] = parseFloat(numberInput.value) || 0;
            updateCalculation();
        });
    });
    
    updateCalculation();
}

// ==========================================
// LÓGICA DE CÁLCULO
// ==========================================

function updateCalculation() {
    const shape = shapes[currentShape];
    const volume = shape.calculate(currentValues);
    const formulaText = shape.getFormulaText(currentValues);
    
    document.getElementById('calcStep').textContent = formulaText;
    document.getElementById('resultValue').textContent = volume.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

// ==========================================
// VISUALIZACIÓN 3D (p5.js)
// ==========================================

function setup() {
    let canvas = createCanvas(400, 300, WEBGL);
    canvas.parent('p5-canvas-container');
}

function draw() {
    background(23, 31, 51);
    
    ambientLight(80);
    directionalLight(221, 183, 255, 0.5, 0.5, -1);
    pointLight(183, 109, 255, 0, 0, 200);

    orbitControl();

    fill(183, 109, 255, 180);
    stroke(221, 183, 255);
    strokeWeight(2);
    
    // Dibujar la figura actual
    shapes[currentShape].draw(this, currentValues);
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    updateShapeUI();
});