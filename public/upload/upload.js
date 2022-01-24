const uploadButton = document.getElementById('uploadButton');
console.assert(uploadButton);
// input variables
const filePath = document.getElementById('audioFile');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
// var globalLatLng contains the lat/lng info of the dot.

if (uploadButton) {
  uploadButton.addEventListener('click', async event => {
    // console.log(event);
    // console.log(`file: ${filePath.value}`); // need to figure this out
    // console.log(`name: ${nameInput.value}`);
    // console.log(`description: ${descriptionInput.value}`);
    // console.log(`lat: ${globalLatLng.lat}`);
    // console.log(`lng: ${globalLatLng.lng}`);
    var jsonToUpload = {
      'fileName': filePath.value.split('\\').pop().split('/').pop(),
      'name': nameInput.value,
      'description': descriptionInput.value,
      'location': {
        'lat': globalLatLng.lat,
        'lng': globalLatLng.lng,
      }
    }
    console.log(jsonToUpload);
    postToDatabase(jsonToUpload)
  });
} else {
  console.log('Upload Button element could not be found');
}


async function postToDatabase(jsonData) {
  fetch('/uploadJSON', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  });
}