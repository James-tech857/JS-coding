

const content = document.getElementById('content');
const nextBtn = document.getElementById('1st-content'); // Your button

let spriteUrls = []; // Store images here
let currentIndex = 0; // Track which image is showing

async function pokeman() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        console.log(data);

        // 1. Filter and store the URLs globally
        spriteUrls = Object.values(data.sprites).filter(url => typeof url === 'string');
        
        // 2. Show the first image immediately
        displaySprite();
        
    } catch (error) {
        console.error('Error:', error);
        content.textContent = 'Failed to load Pokemon.';
    }
}

function displaySprite() {
    if (spriteUrls.length === 0) return;
    
    // 3. Update HTML with only the CURRENT image
    content.innerHTML = `
        <h2>Name: BULBASAUR</h2>
        <img src="${spriteUrls[currentIndex]}" style="width: 150px;">
        <p>Image ${currentIndex + 1} of ${spriteUrls.length}</p>
    `;
}

// 4. Button click logic: increment index and loop back to 0 if at the end
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % spriteUrls.length;
    displaySprite();
});

pokeman();



// // // // // https://pokeapi.co/api/v2/pokemon/ditto
// // // // // https://pokeapi.co/api/v2/pokemon/bulbasaur

// // // // // const div=document.getElementById('container');
// // // // // const content=document.getElementById('content');

// // // // // async function pokeman(){
// // // // //   try{
// // // // //     const res=await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
// // // // //     const data=await res.json();
// // // // //     console.log(data);
// // // // //     if(!res.ok){
// // // // //       throw new error(`http error!:${res.stat}`)
// // // // //     }
// // // // //     content.textContent=`pokeman:${data}`;
// // // // //   }

// // // // //   catch(error){
// // // // //     console.log('ERR');
// // // // //   }
// // // // // }
// // // // // pokeman();

// // // // const content=document.getElementById('content');


// // // // async function pokeman() {
// // // //   try {
// // // //     const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    
// // // //     if (!res.ok) {
// // // //       throw new Error(`HTTP error! Status: ${res.status}`);
// // // //     }

// // // //     const data = await res.json();
// // // //     content.innerHTML = `
// // // //   <h2>Name: ${data.name}</h2>
// // // //   <img src="${data.sprites.front_default}" alt="${data.name}">
// // // // `;

// // // //     // Displaying name and image
// // // //     content.innerHTML = `
// // // //     <button>Next</button>
// // // //       <p>Pokemon: ${data.name.toUpperCase()}</p>
// // // //       <img src="${data.sprites.front_default}" />
// // // //     `;

// // // //   } catch (error) {
// // // //     console.error('Error fetching data:', error);
// // // //     content.textContent = 'Failed to load Pokemon.';
// // // //   }
// // // // }
// // // // pokeman();
// // // 

