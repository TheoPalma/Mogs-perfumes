const defaultPrices = {
    2: 19.90,
    5: 34.90
};


const products = {

    "his-confession": {
        name: "His Confession de Lattafa Perfumes",

        brand: "Lattafa",

        description:
            "His Confession de Lattafa Perfumes é um perfume Oriental Amadeirado Masculino. As notas de topo são Lavanda, Canela e Mandarina. As notas de coração são Íris, Benjoim, Cipreste e Mahonial®. As notas de fundo são Baunilha, Fava Tonka, Âmbar, Incenso, Cedro e Patchouli.",

        image: "imagens/his confession.jpg"
    },


    "supremacy-collectors": {

        name:
            "Supremacy Collector's Edition Pour Homme de Afnan",

        brand:
            "Afnan",

        description:
            "Supremacy Collector's Edition Pour Homme de Afnan é um perfume Chipre Frutado Masculino. As notas de topo são Abacaxi, Bergamota, Flores Brancas e Maçã. As notas de coração são Flor de Laranjeira, Bétula e Âmbar. As notas de fundo são Musgo de Carvalho, Almíscar e Âmbar Cinzento.",

        image: "imagens/collectors.jpg",

        prices: {
            2: 39.90,
            5: 52.90
        }
    },


    "liquid-brun": {

        name:
            "Liquid Brun de French Avenue",

        brand:
            "French Avenue",

        description:
            "Liquid Brun de French Avenue é um perfume Amadeirado Masculino. As notas de topo são Canela, Flor de Laranjeira, Cardamomo e Bergamota. As notas de coração são Baunilha de Bourbon e Elemi. As notas de fundo são Pralinê, Ambroxan, Madeira Guaiac e Almíscar.",

        image: "imagens/liquid brun.jpg",

        prices: {
            2: 27.90,
            5: 39.90
        }
    },


    "fakhar-gold": {

        name:
            "Fakhar Gold de Lattafa",

        brand:
            "Lattafa",

        description:
            "Fakhar Gold Extrait da Lattafa é uma fragrância oriental amadeirada, conhecida por seu perfil quente, especiado e levemente floral.",

        image: "imagens/fakhar gold.jpg"
    },


    "sceptre-malachite": {

        name:
            "Sceptre Malachite de Maison Alhambra",

        brand:
            "Maison Alhambra",

        description:
            "Sceptre Malachite é um perfume Oriental Amadeirado Compartilhável. As notas de topo são Tangerina Verde, Bergamota e Groselha Preta. As notas de coração são Notas Aromáticas, Notas Especiadas, Lavanda, Jasmim e Pimenta Rosa. As notas de fundo são Âmbar, Almíscar, Notas Amadeiradas e Vetiver.",

        image:
            "imagens/sceptre malachite.webp"
    },


    "pacific-aura": {

        name:
            "Pacific Aura de Rayhaan",

        brand:
            "Rayhaan",

        description:
            "Pacific Aura de Rayhaan é um perfume Aromático Aquático Masculino. As notas de topo são Hortelã, Mandarina, Cidra, Bergamota, Groselha Preta e Coentro. As notas de coração são Manjericão, Cenoura e Rosa. As notas de fundo são Ambroxan, Figo e Âmbar.",

        image:
            "imagens/Pacific Aura.jpg",

        prices: {
            2: 29.90,
            5: 42.90
        }
    },


    "attar-al-wesal": {

        name:
            "Attar Al Wesal de Al Wataniah",

        brand:
            "Al Wataniah",

        description:
            "Attar Al Wesal é um perfume Oriental Especiado Compartilhável. As notas de topo são Lavanda, Pera, Hortelã, Bergamota e Limão. As notas de coração são Canela, Sálvia Esclaréia e Cominho. As notas de fundo são Casca de Baunilha Negra, Cedro, Âmbar e Patchouli.",

        image:
            "imagens/Attar.jpg"
    },


    "hayaati-al-maleky": {

        name:
            "Hayaati Al Maleky de Lattafa",

        brand:
            "Lattafa",

        description:
            "Hayaati Al Maleky é um perfume Oriental Especiado Compartilhável. As notas de topo são Pimenta Rosa, Noz-moscada, Bergamota e Gengibre. As notas de coração são Cedro, Notas Amadeiradas, Incenso e Ládano. As notas de fundo são Almíscar, Âmbar e Âmbar Cinzento.",

        image:
            "imagens/hayaati al maleky.jpg"
    },


    "ferrari-black": {

        name:
            "Ferrari Black de Scuderia Ferrari",

        brand:
            "Ferrari",

        description:
            "Ferrari Black é um perfume Aromático Fougére Masculino. As notas de topo são Maçã Vermelha, Ameixa, Lima e Bergamota. As notas de coração são Canela, Jasmim, Cardamomo e Rosa. As notas de fundo são Baunilha, Âmbar, Cedro e Almíscar.",

        image:
            "imagens/ferrari black.webp"
    },


    "vulcan-feu": {

        name:
            "Vulcan Feu de French Avenue",

        brand:
            "French Avenue",

        description:
            "Vulcan Feu de French Avenue é um perfume Floral Compartilhável. As notas de topo são Manga, Limão, Gengibre e Ruibarbo. As notas de coração são Pimenta Rosa, Jasmim, Violeta e Pralinê. As notas de fundo são Fava Tonka, Cedro, Âmbar Cinzento e Musgo.",

        image:
            "imagens/vulcan feu.webp",

        prices: {
            2: 29.90,
            5: 42.90
        }
    },


    "asir": {

        name:
            "Asir L’Qalb de Mawwal Arabia",

        brand:
            "Mawwal Arabia",

        description:
            "Asir L’Qalb é um perfume Amadeirado Aromático Compartilhável. As notas de topo são Bergamota, Toranja, Pimenta Rosa e Limão Siciliano. As notas de coração são Lavanda, Vetiver e Gerânio. As notas de fundo são Almíscar, Âmbar e Baunilha.",

        image:
            "imagens/asir.jpg",

        prices: {
            2: 29.90,
            5: 42.90
        }
    },


    "manasik-amber-gold": {

        name:
            "Manasik Amber Gold",

        brand:
            "Manasik",

        description:
            "Manasik Oud Amber Gold é um perfume oriental amadeirado unissex, conhecido por sua intensidade, sofisticação e excelente fixação, combinando oud e âmbar com notas doces e especiadas.",

        image:
            "imagens/manasik amber gold.webp"
    },


    "lujain": {

        name:
            "Lujain de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Lujain de Lattafa Perfumes é um perfume Amadeirado Floral Almiscarado Compartilhável. As notas de topo são Pimenta Rosa e Rosa. As notas de coração são Jasmim Sambac e Tuberosa. As notas de fundo são Sândalo, Baunilha e Fava Tonka.",

        image:
            "imagens/lujain.jpg",

        prices: {
            2: 27.90,
            5: 39.90
        }
    },


    "nautica-voyage": {

        name:
            "Nautica Voyage",

        brand:
            "Nautica",

        description:
            "Nautica Voyage é um perfume Aquático Amadeirado Masculino. As notas de topo são Folhas Verdes e Maçã. As notas de coração são Lótus e Mimosa. As notas de fundo são Almíscar, Cedro, Musgo de Carvalho e Âmbar.",

        image:
            "imagens/Nautica voyage.jpg"
    },


    "opulent-dubai": {

        name:
            "Opulent Dubai de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Opulent Dubai é um perfume Oriental Floral Compartilhável. As notas de topo são Manga, Toranja, Limão e Gengibre. As notas de coração são Jasmim, Cedro e Violeta. As notas de fundo são Notas Amadeiradas, Âmbar Cinzento, Benjoim e Musgo de Carvalho.",

        image:
            "imagens/Opulent Dubai.webp"
    },


    "9pm": {

        name:
            "9PM de Afnan",

        brand:
            "Afnan",

        description:
            "9PM de Afnan é um perfume Oriental Baunilha Masculino. As notas de topo são Maçã, Canela, Lavanda Silvestre e Bergamota. As notas de coração são Flor de Laranjeira e Lírio-do-Vale. As notas de fundo são Baunilha, Fava Tonka, Âmbar e Patchouli.",

        image:
            "imagens/9pm.jpg"
    },


    "amaram-pure-aruba": {

        name:
            "Kings & Queens Pure Aruba",

        brand:
            "Amaran",

        description:
            "Kings & Queens Pure Aruba é um perfume Aromático Frutado Compartilhável. As notas de topo são Bergamota, Limão e Laranja. A nota de coração é Frutas. As notas de fundo são Baunilha de Madagascar, Âmbar e Almíscar Branco.",

        image:
            "imagens/pure aruma.webp"
    }

};




let selectedProduct = "";

let cart =
    JSON.parse(localStorage.getItem("mogsCart")) || [];



function showSection(id) {

    document
        .querySelectorAll("section")
        .forEach(section => {

            section.classList.remove("active");

        });


    const section =
        document.getElementById(id);


    if (section) {

        section.classList.add("active");

    }


    if (id === "carrinho") {

        renderCart();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



function openProduct(id) {

    const product =
        products[id];

    if (!product) return;


    selectedProduct = id;


    document.getElementById("productName")
        .innerText = product.name;


    document.getElementById("productBrand")
        .innerText = product.brand;


    document.getElementById("productDescription")
        .innerText = product.description;


    document.getElementById("productImage")
        .src = product.image;


    document.getElementById("productVolume")
        .value = "2";


    document.getElementById("productQty")
        .value = "1";


    updatePrice();


    showSection("produto");
}


function updatePrice() {

    if (!selectedProduct) return;


    const product =
        products[selectedProduct];


    const volume =
        document.getElementById("productVolume").value;


    const price =
        product.prices
            ? product.prices[volume]
            : defaultPrices[volume];


    document.getElementById("productPrice")
        .innerText =
        price.toFixed(2).replace(".", ",");
}


function changeProductQuantity(value) {

    const input =
        document.getElementById("productQty");


    let quantity =
        parseInt(input.value) || 1;


    quantity += value;


    if (quantity < 1) {

        quantity = 1;

    }


    input.value = quantity;
}


function addProductToCart() {

    const product =
        products[selectedProduct];


    if (!product) return;


    const volume =
        document.getElementById("productVolume").value;


    const quantity =
        parseInt(
            document.getElementById("productQty").value
        ) || 1;


    const price =
        product.prices
            ? product.prices[volume]
            : defaultPrices[volume];


    const existingItem =
        cart.find(item =>
            item.id === selectedProduct &&
            item.volume === volume
        );


    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({

            id: selectedProduct,

            name: product.name,

            brand: product.brand,

            volume: volume,

            price: price,

            quantity: quantity

        });

    }


    saveCart();

    updateCartCount();

    showToast(
        `${product.name} foi adicionado ao carrinho.`
    );
}




function saveCart() {

    localStorage.setItem(
        "mogsCart",
        JSON.stringify(cart)
    );
}




function updateCartCount() {

    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    document.getElementById("cartCount")
        .innerText = total;
}




function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartEmpty =
        document.getElementById("cartEmpty");

    const cartContent =
        document.getElementById("cartContent");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartEmpty.style.display = "block";

        cartContent.style.display = "none";

        return;

    }


    cartEmpty.style.display = "none";

    cartContent.style.display = "block";


    let total = 0;


    cart.forEach((item, index) => {

        const subtotal =
            item.price * item.quantity;


        total += subtotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.volume}ml
                        ·
                        R$ ${item.price
                            .toFixed(2)
                            .replace(".", ",")}
                            cada
                    </p>

                </div>


                <div class="cart-controls">

                    <div class="cart-quantity">

                        <button
                            onclick="changeCartQuantity(${index}, -1)">
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeCartQuantity(${index}, 1)">
                            +
                        </button>

                    </div>


                    <div class="cart-item-price">

                        R$
                        ${subtotal
                            .toFixed(2)
                            .replace(".", ",")}

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeItem(${index})">

                        Remover

                    </button>

                </div>

            </div>

        `;

    });


    document.getElementById("cartTotalPrice")
        .innerText =
        "R$ " +
        total.toFixed(2).replace(".", ",");
}




function changeCartQuantity(index, value) {

    cart[index].quantity += value;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart();

    updateCartCount();

    renderCart();
}




function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    updateCartCount();

    renderCart();

    showToast("Produto removido do carrinho.");
}




function clearCart() {

    if (cart.length === 0) return;


    cart = [];


    localStorage.removeItem("mogsCart");


    updateCartCount();

    renderCart();

    showToast("Carrinho limpo.");
}




function goToCheckout() {

    if (cart.length === 0) {

        showToast("Seu carrinho está vazio.");

        return;

    }


    let message =
        "Olá! Gostaria de fazer um pedido na Mogs Perfumes:%0A%0A";


    cart.forEach(item => {

        message +=
            `• ${item.name} - ${item.volume}ml - ` +
            `Quantidade: ${item.quantity}%0A`;

    });


    let total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    message +=
        `%0ATotal: R$ ${total
            .toFixed(2)
            .replace(".", ",")}`;


    


}




function searchHome() {

    const value =
        document.getElementById("homeSearch")
            .value
            .toLowerCase()
            .trim();


    if (value === "") return;


    document.getElementById("catalogSearch")
        .value = value;


    showSection("catalogo");


    filterProducts();
}




let selectedBrand = "todos";


function filterProducts() {

    const search =
        document.getElementById("catalogSearch")
            .value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(
            "#catalogGrid .product-card"
        );


    let found = 0;


    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();


        const brand =
            card.dataset.brand.toLowerCase();


        const matchesSearch =
            name.includes(search) ||
            brand.includes(search);


        const matchesBrand =
            selectedBrand === "todos" ||
            brand === selectedBrand;


        if (
            matchesSearch &&
            matchesBrand
        ) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("noResults")
        .style.display =
        found === 0
            ? "block"
            : "none";
}




function filterBrand(brand, button) {

    selectedBrand = brand;


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    filterProducts();
}




let currentSlide = 0;


const slides =
    document.querySelectorAll(
        ".hero-slide"
    );


function showSlide(index) {

    slides.forEach(slide =>
        slide.classList.remove("active")
    );


    slides[index]
        .classList.add("active");
}


function nextSlide() {

    currentSlide =
        (currentSlide + 1)
        % slides.length;


    showSlide(currentSlide);
}


function prevSlide() {

    currentSlide =
        (currentSlide - 1 + slides.length)
        % slides.length;


    showSlide(currentSlide);
}


setInterval(
    nextSlide,
    5000
);



let toastTimeout;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.innerText = message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);
}




updateCartCount();

renderCart();
