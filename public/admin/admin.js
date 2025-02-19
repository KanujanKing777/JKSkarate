

// Form submission
function uploadKaru() {

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;
    const image2 = document.getElementById("image2").value;

    // Add data to Firestore
    db.collection("Posts").add({
        name: name,
        description: description,
        image: image,
        anotherimageLink: image2
    })
    .then(() => {
        document.getElementById("status").textContent = "Data uploaded successfully!";
        document.getElementById("uploadForm").reset();
    })
    .catch((error) => {
        document.getElementById("status").textContent = `Error: ${error.message}`;
    });
}
