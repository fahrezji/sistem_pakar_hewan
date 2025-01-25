document.getElementById('diagnosisForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const hewan = document.getElementById('hewan').value;
    const gejala = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach((checkbox) => {
        gejala.push(checkbox.value);
    });

    const diagnosis = diagnosaPenyakit(hewan, gejala);
    document.getElementById('result').innerText = diagnosis;
});

function diagnosaPenyakit(hewan, gejala) {
    let hasil = "Penyakit tidak terdeteksi.";

    if (hewan === "kucing") {
        if (gejala.includes("demam") && gejala.includes("batuk")) {
            hasil = "Kemungkinan penyakit: Flu Kucing.";
        } else if (gejala.includes("lesu") && gejala.includes("muntah")) {
            hasil = "Kemungkinan penyakit: Infeksi Saluran Pencernaan.";
        }
    } else if (hewan === "anjing") {
        if (gejala.includes("demam") && gejala.includes("batuk")) {
            hasil = "Kemungkinan penyakit: Parvovirus.";
        } else if (gejala.includes("lesu") && gejala.includes("muntah")) {
            hasil = "Kemungkinan penyakit: Gastroenteritis.";
        }
    }

    return hasil;
}