// --- 1. SELEKSI ELEMEN DOM ---
const decimalInput = document.getElementById("decimal-input");
const btnConvert = document.getElementById("btn-convert");
const btnSample = document.getElementById("btn-sample");
const btnReset = document.getElementById("btn-reset");

const bitVisualization = document.getElementById("bit-visualization");
const bitGrid = document.getElementById("bit-grid");

const resultsContainer = document.getElementById("results-container");
const resBinary = document.getElementById("res-binary");
const resOctal = document.getElementById("res-octal");
const resHex = document.getElementById("res-hex");
const resBitCount = document.getElementById("res-bit-count");

// --- 2. LOGIKA UTAMA (NUMBER BASE CONVERSION) ---

// Render blok visualisasi 8 bit (1 Byte)
function renderBitGrid(binaryStr) {
    bitGrid.innerHTML = "";
    
    // Pad biner agar minimal 8 bit
    const paddedBinary = binaryStr.padStart(8, "0").slice(-8);

    for (let i = 0; i < paddedBinary.length; i++) {
        const bitVal = paddedBinary[i];
        const bitBox = document.createElement("div");
        bitBox.className = `bit-box ${bitVal === "1" ? "active" : ""}`;
        bitBox.innerText = bitVal;
        bitGrid.appendChild(bitBox);
    }
}

// Fungsi utama proses konversi
function processConversion() {
    const val = decimalInput.value.trim();

    if (val === "" || isNaN(val) || parseInt(val) < 0) {
        alert("Masukkan bilangan bulat positif (>= 0) yang valid!");
        return;
    }

    const decimalNumber = parseInt(val, 10);

    // Konversi basis bilangan menggunakan Number.toString(radix)
    const binaryStr = decimalNumber.toString(2);
    const octalStr = decimalNumber.toString(8);
    const hexStr = decimalNumber.toString(16).toUpperCase();

    // Tampilkan Hasil Konversi
    resBinary.innerText = binaryStr;
    resOctal.innerText = octalStr;
    resHex.innerText = hexStr;
    resBitCount.innerText = `${binaryStr.length} Bit`;

    // Visualisasikan Bit
    renderBitGrid(binaryStr);

    // Tampilkan Komponen
    bitVisualization.classList.remove("hidden");
    resultsContainer.classList.remove("hidden");
}

function loadSampleData() {
    const samples = [8, 25, 42, 128, 255, 1024];
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    decimalInput.value = randomSample;
    processConversion();
}

function resetApp() {
    decimalInput.value = "";
    bitVisualization.classList.add("hidden");
    resultsContainer.classList.add("hidden");
}

// --- 3. BINDING EVENT LISTENERS ---
btnConvert.addEventListener("click", processConversion);
btnSample.addEventListener("click", loadSampleData);
btnReset.addEventListener("click", resetApp);

// Jalankan konversi otomatis saat menekan Enter
decimalInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        processConversion();
    }
});
