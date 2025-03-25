// Function to handle collection redirection
function goToCollection(category) {
    let url = '';
    // Set URL depending on the category
    if (category === 'lips') {
        url = 'collections.html#lips';
    } else if (category === 'face') {
        url = 'collections.html#face';
    } else if (category === 'eyes') {
        url = 'collections.html#eyes';
    }
    
    // Redirect to the corresponding collection page
    window.location.href = url;
}
window.onload = function() {
    // Get the current category from the URL hash (e.g., #lips, #face, #eyes)
    const category = window.location.hash.substring(1); // Remove the '#' symbol from the hash

    // Set the title based on the category
    const title = document.getElementById("collection-title");

    // Define products for each collection
    const products = {
        lips: [
            { name: "lip butter", price: "₱599.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJS_LIB_25_ToastedMarshmallow_Stylized_V2_800x.jpg?v=1742398828" },
            { name: "gloss drip", price: "₱399.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJC_HOLIDAY_24_GlossDrip_Stylized_SwipeSwatch_Besitos_800x.jpg?v=1729536492" },
            { name: "lip oil duo", price: "₱549.00", image: "https://kyliecosmetics.com/cdn/shop/products/KS_LipOilBundle_Ecomm_WS_V2_800x.jpg?v=1676680219" },
            { name: "lip blush", price: "₱399.00", image: "https://kyliecosmetics.com/cdn/shop/products/zlanttpb4q7zz7matrv6_800x.jpg?v=1676415710" },
            { name: "matte lip kit", price: "₱699.00", image: "https://kyliecosmetics.com/cdn/shop/products/matte_lip_kit_kylie_product_swatch_800x.jpg?v=1741811576" },
            { name: "plumping powder matte lip", price: "₱499.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJC_PPMT_24_GirlsGirl_Stylized_e0fb5ad2-8eda-4697-947c-2cf4b270f275_800x.jpg?v=1727902223" },
        ],
        face: [
            { name: "Foundation", price: "₱749.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJC_FDN_24_Light_4.5C_Stylized_bd920382-c18d-409f-ac62-24c2b81562b1_800x.jpg?v=1705450654" },
            { name: "Setting Powder", price: "₱899.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJC_NBPF_Fair_3N_Stylized_9ff463ea-e66f-444d-9691-6f38e4ee750f_800x.jpg?v=1734652307" },
            { name: "daydream soft blur loose powder", price: "₱499.00", image: "https://blkcosmetics.com.ph/cdn/shop/files/daydreamwebsitethumbnailsArtboard1copy8_900x.jpg?v=1696876632" },
            { name: "universal skin tint sun shield spf30", price: "₱649.00", image: "https://blkcosmetics.com.ph/cdn/shop/files/silk_900x.png?v=1723794168" },
            { name: "setting spray", price: "₱549.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJC_SSPRAY_23_Stylized_V2_a804ff85-0984-4121-9963-6965f8dbff69_800x.jpg?v=1705447360" },
            { name: "pressed bronzing powder", price: "₱349.00", image: "https://kyliecosmetics.com/cdn/shop/products/KC-Bronzer-TannedAndGorgeous-CapOff_800x.jpg?v=1676401187" },
        ],
        eyes: [
            { name: "eye shadow palette", price: "₱799.00", image: "https://kyliecosmetics.com/cdn/shop/files/KJC_HOLIDAY_24_WetShimmerQuad_Stylized_800x.jpg?v=1729540940" },
            { name: "volume mascara", price: "₱649.00", image: "https://kyliecosmetics.com/cdn/shop/products/KJC_KVMASC_23_KV_Kylie_PDP_Black_01_WS_V2_e03c6d05-609c-486b-872d-7812a902d5f9_800x.jpg?v=1680637908" },
            { name: "eye liner", price: "₱299.00", image: "https://kyliecosmetics.com/cdn/shop/products/KC-GelPencil_EPI_2023_ShimmeryBlue_800x.jpg?v=1676404506" },
        ]
    };

    // Show the correct collection based on the category
    if (category && products[category]) {
        title.innerHTML = `Shop ${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;
        const productList = document.getElementById("product-list");
        productList.innerHTML = '';

        // Loop through each product and display it
        products[category].forEach(product => {
            const productCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}" width="200px" height="280px">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });
    } else {
        // If no category is found in the URL, show a default message
        title.innerHTML = 'No Collection Found';
        document.getElementById("product-list").innerHTML = '<p class="text-center">Please select a valid collection.</p>';
    }
    
};
