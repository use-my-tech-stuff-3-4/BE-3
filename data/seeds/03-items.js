exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("items").del()
      .then(function () {
        // Inserts seed entries
        return knex("items").insert([
          {owner: 1, title: "For rent", type: "Camera", description: "local only", price: "20", availability: true, brand: "Canon", model: "EOS 200", imgURL: "https://i1.adis.ws/i/canon/Canon_EOS_200D_FrontCamera.png?qlt=70&w=800"},
          {owner: 1, title: "New camera", type: "Camera", description: "takes awesome photos", price: "50", availability: true, brand: "Nikon", model: "D5300", imgURL: "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV__2R-oGYSKeMMUpn__DSbsOX4QQI1MBxLX9BO6gD8NqzjK0CXEJ_g==/Views/1519_D5300_front.png"},
          {owner: 2, title: "Flat screen TV", type: "TV", description: "high resolution", price: "20", availability: true, brand: "Samsung", model: "100", imgURL: "https://www.flatpanelshd.com/pictures/samsungf8000-1l.jpg"},
          {owner: 2, title: "Occulus VR", type: "VR", description: "watch cool VR stuff", price: "30", availability: true, brand: "Occulus", model: "Quest", imgURL: "https://cdn.vox-cdn.com/thumbor/oVGiC0t-nd9W9c3P3fvO_GeHIZE=/0x0:2048x1152/1200x800/filters:focal(928x330:1254x656)/cdn.vox-cdn.com/uploads/chorus_image/image/61551629/oculus-quest-vr-headset-1.0.0.jpg"},
          {owner: 3, title: "Sound system", type: "Speakers", description: "high quality sound", price: "30", availability: true, brand: "Sony", model: "XV1", imgURL: "https://images2.imgix.net/p4dbimg/p139/images/equipo-de-sonido-sony-mhc-gpx8-de-17600w-d_nq_np_788000-mlv28231316319_092018-f.jpg?fit=fill&trim=color&trimcolor=FFFFFF&trimtol=5&bg=FFFFFF&w=768&h=576&fm=pjpg"},
          {owner: 4, title: "Portable speaker", type: "Speakers", description: "good quality and portable", price: "10", availability: true, brand: "Bose", model: "Pocket500", imgURL: "https://images-na.ssl-images-amazon.com/images/I/81U9sInk3jL._SL1500_.jpg"},
          {owner: 5, title: "Rent this mic", type: "Microphone", description: "high quality recording", price: "30", availability: true, brand: "Audio Technica", model: "VS900", imgURL: "https://www.audio-technica.com/cms/resource_library/product_images/0f7a34ffe6444f5f/med/at4060_2_sq@2x.jpg"},
          {owner: 1, title: "Renting this out!", type: "Drone", description: "Lorem ipsum dolor sit amet", price: "55", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/200/200/200"},
          {owner: 2, title: "Microphone available", type: "Microphone", description: "Lorem ipsum dolor sit amet", price: "90", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/111/200/200"},
          {owner: 3, title: "Monitor for rent", type: "Monitor", description: "Lorem ipsum dolor sit amet", price: "99", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/112/200/200"},
          {owner: 4, title: "VR set for rent", type: "VR", description: "Lorem ipsum dolor sit amet", price: "86", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/113/200/200"},
          {owner: 5, title: "High end speakers", type: "Speakers", description: "Lorem ipsum dolor sit amet", price: "54", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/114/200/200"},
          {owner: 6, title: "For rent", type: "Camera", description: "Lorem ipsum dolor sit amet", price: "64", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/115/200/200"},
          {owner: 1, title: "For rent", type: "Stereo", description: "Lorem ipsum dolor sit amet", price: "120", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/116/200/200"},
          {owner: 2, title: "For rent", type: "Phone", description: "Lorem ipsum dolor sit amet", price: "111", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/117/200/200"},
          {owner: 3, title: "For rent", type: "Tablet", description: "Lorem ipsum dolor sit amet", price: "222", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/118/200/200"},
          {owner: 4, title: "For rent", type: "Gaming Console", description: "Lorem ipsum dolor sit amet", price: "123", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/119/200/200"},
          {owner: 1, title: "For rent", type: "Drone", description: "Lorem ipsum dolor sit amet", price: "55", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/120/200/200"},
          {owner: 2, title: "For rent", type: "Microphone", description: "Lorem ipsum dolor sit amet", price: "90", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/121/200/200"},
          {owner: 3, title: "For rent", type: "Monitor", description: "Lorem ipsum dolor sit amet", price: "99", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/122/200/200"},
          {owner: 4, title: "For rent", type: "VR", description: "Lorem ipsum dolor sit amet", price: "86", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/123/200/200"},
          {owner: 5, title: "For rent", type: "Speakers", description: "Lorem ipsum dolor sit amet", price: "54", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/124/200/200"},
          {owner: 6, title: "For rent", type: "Camera", description: "Lorem ipsum dolor sit amet", price: "64", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/125/200/200"},
          {owner: 1, title: "For rent", type: "Stereo", description: "Lorem ipsum dolor sit amet", price: "120", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/126/200/200"},
          {owner: 2, title: "For rent", type: "Phone", description: "Lorem ipsum dolor sit amet", price: "111", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/127/200/200"},
          {owner: 3, title: "For rent", type: "Tablet", description: "Lorem ipsum dolor sit amet", price: "222", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/128/200/200"},
          {owner: 4, title: "For rent", type: "Gaming Console", description: "Lorem ipsum dolor sit amet", price: "123", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/129/200/200"},
          {owner: 1, title: "For rent", type: "Drone", description: "Lorem ipsum dolor sit amet", price: "55", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/130/200/200"},
          {owner: 2, title: "For rent", type: "Microphone", description: "Lorem ipsum dolor sit amet", price: "90", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/131/200/200"},
          {owner: 3, title: "For rent", type: "Monitor", description: "Lorem ipsum dolor sit amet", price: "99", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/132/200/200"},
          {owner: 4, title: "For rent", type: "VR", description: "Lorem ipsum dolor sit amet", price: "86", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/133/200/200"},
          {owner: 5, title: "For rent", type: "Speakers", description: "Lorem ipsum dolor sit amet", price: "54", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/134/200/200"},
          {owner: 6, title: "For rent", type: "Camera", description: "Lorem ipsum dolor sit amet", price: "64", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/135/200/200"},
          {owner: 1, title: "For rent", type: "Stereo", description: "Lorem ipsum dolor sit amet", price: "120", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/136/200/200"},
          {owner: 2, title: "For rent", type: "Phone", description: "Lorem ipsum dolor sit amet", price: "111", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/137/200/200"},
          {owner: 3, title: "For rent", type: "Tablet", description: "Lorem ipsum dolor sit amet", price: "222", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/138/200/200"},
          {owner: 4, title: "For rent", type: "Gaming Console", description: "Lorem ipsum dolor sit amet", price: "123", availability: true, brand: "lorem", model: "ipsum", imgURL: "http://picsum.photos/id/139/200/200"},
          
        ]);
      });
  };  