fetch('prodeqt.json')
.then(p => p.json())
.then(data =>{
  data.forEach(a =>{
    let {name,img,des,prise} = a;
    let d = document.querySelector('#d');
    d.innerHTML += `
        <div class="w-44 p-1 border  border-slate-200 rounded-md">
     <img src="${img}" class="w[90%] rounded-t-md object-cover ">
     <div class="p-2">
       <h2 class="text-lg font-semibold">${name}</h2>
       
       <p class="truncate">${des}</p>
       <div class="flex justify-between items-center">
       <p>
         <i class="fa-solid fa-star text-yellow-500"></i>
         <i class="fa-solid fa-star text-yellow-500"></i>
       </p>
       <p>$ ${prise}</p>
       </div>
       <button class=" w-full bg-red-400 px-6 py-1 mt-4 text-xl text-white rounded-lg">Add-cart</button>
     </div>
     
     `;
  })
})