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
    },

    "nebras": {

        name:
            "Nebras de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Lattafa Nebras de Lattafa Perfumes é um perfume Oriental Baunilha Compartilhável. As notas de topo são Bagas Vermelhas e Mandarina. As notas de coração são Baunilha, Cacau e Rosa. As notas de fundo são Açúcar, Fava Tonka, Âmbar e Almíscar.",
        image:
            "imagens/Nebras.webp"
    },

    "nebras-elixir": {

        name:
            "Nebras Elixir de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Nebras Elixir de Lattafa Perfumes é um perfume Oriental Baunilha Compartilhável. As notas de topo são Bala de Leite e Chantilly. As notas de coração são Cana-de-Açúcar e Heliotrópio. As notas de fundo são Baunilha, Ambroxan e Almíscar.",

        image:
            "imagens/nebras elixir.webp"
    },

    "ramz": {

        name:
            "Ramz de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Ramz Lattafa Silver de Lattafa Perfumes é um perfume Oriental Baunilha Compartilhável. As notas de topo são Pera, Lavanda, Hortelã e Bergamota. As notas de coração são Cardamomo e Sálvia. As notas de fundo são Baunilha, Âmbar, Almíscar e Patchouli.",

        image:
            "imagens/ramz.webp"

    },

    "vanilla-espresso": {

        name:
            "Vanilla Espresso de Aurora Scents",

        brand:
            "Aurora Scents",

        description:
            "Vanilla Espresso é uma fragrância Gourmand de baunilha. As notas são Café, Sorvete, Baunilha, Creme de Baunilha, Chantilly e Açúcar Mascavo, criando um perfil cremoso e adocicado que lembra um café com sorvete de baunilha.",

        image:
            "imagens/vanilla espresso.jpg",

        prices: {
            2: 29.90,
            5: 42.90
        }

    },

    "ajayeb": {

        name:
            "Ajayeb de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Ajayeb Dubai de Lattafa Perfumes é um perfume Compartilhável. As notas de topo são Açafrão e Abacaxi. As notas de coração são Café e Folhas de Violeta. As notas de fundo são Manteiga de Caramelo, Baunilha e Sândalo.",
        image:
            "imagens/ajayeb.webp"
    },

    "supremacy-not-only-intense": {

        name:
            "Supremacy Not Only Intense de Afnan",

        brand:
            "Afnan",

        description:
            "Supremacy Not Only Intense de Afnan é um perfume Masculino. As notas de topo são Groselha Preta, Bergamota e Maçã. As notas de coração são Musgo de Carvalho, Patchouli e Lavanda. As notas de fundo são Âmbar Cinzento, Almíscar e Açafrão.",
        image:
            "imagens/supremacy intense.webp",

        prices: {
            2: 39.90,
            5: 52.90
        }
    },

    "9pm-rebel": {

        name:
            "9PM Rebel de Afnan",

        brand:
            "Afnan",

        description:
            "9PM Rebel de Afnan é um perfume Compartilhável. As notas de topo são Abacaxi, Maçã Granny Smith e Mandarina. As notas de coração são Musgo de Carvalho, Cedro e Baunilha. As notas de fundo são Madeira Seca, Âmbar Cinzento, Caramelo e Almíscar.",
        image:
            "imagens/9pm rebel.webp"
    },

    "9am-dive": {

        name:
            "9AM Dive de Afnan",

        brand:
            "Afnan",

        description:
            "9AM Dive de Afnan é um perfume Compartilhável. As notas de topo são Limão, Hortelã, Groselha Preta e Pimenta Rosa. As notas de coração são Maçã, Cedro e Incenso. As notas de fundo são Gengibre, Sândalo, Patchouli e Jasmim.",
        image:
            "imagens/9am dive.webp"
    },

    "turathi-blue": {

        name:
            "Turathi Blue de Afnan",

        brand:
            "Afnan",

        description:
            "Turathi Blue de Afnan é um perfume Masculino. As notas de topo são Bergamota e Mandarina. As notas de coração são Âmbar e Notas Amadeiradas. As notas de fundo são Almíscar, Patchouli e Especiarias.",
        image:
            "imagens/turathi blue.webp"
    },

    "supremacy-pink": {

        name:
            "Supremacy Pink de Afnan",

        brand:
            "Afnan",

        description:
            "Supremacy Pink de Afnan é um perfume Feminino. As notas de topo são Pimenta Rosa e Violeta. As notas de coração são Rosa, Peônia e Lírio-do-Vale. As notas de fundo são Almíscar e Âmbar.",
        image:
            "imagens/supremacy pink.jpg",

        prices: {
            2: 39.90,
            5: 52.90
        }
    },

    "turathi-eletric": {

        name:
            "Turathi Electric de Afnan",

        brand:
            "Afnan",

        description:
            "Turathi Electric de Afnan é um perfume Compartilhável. As notas de topo são Bergamota, Toranja Rosa, Pera e Mandarina. As notas de coração são Maçã, Cedro e Flor de Laranjeira. As notas de fundo são Baunilha, Âmbar, Almíscar e Ambroxan.",
        image:
            "imagens/turathi eletric.webp"
    },

    "supremacy-silver": {

        name:
            "Supremacy Silver de Afnan",

        brand:
            "Afnan",

        description:
            "Supremacy Silver de Afnan é um perfume Amadeirado Floral Almiscarado Masculino. As notas de topo são Abacaxi, Bergamota, Groselha Preta e Maçã. As notas de coração são Bétula, Patchouli, Jasmim Marroquino e Rosa. As notas de fundo são Almíscar, Musgo de Carvalho, Âmbar Cinzento e Baunilha.",
        image:
            "imagens/supremacy silver.webp",

        prices: {
            2: 39.90,
            5: 52.90
        }
    },

    "9pm-elixir": {

        name:
            "9PM Elixir de Afnan",

        brand:
            "Afnan",

        description:
            "9 PM Elixir de Afnan é um perfume Oriental Especiado Compartilhável. As notas de topo são Cardamomo, Noz-Moscada e Elemi. As notas de coração são Pimenta-da-Jamaica, Couro e Lavanda. As notas de fundo são Baunilha, Patchouli, Ládano e Cisto.",
        image:
            "imagens/9pm elixir.webp"
    },

    
"kismet-angel": {

    name:
        "Kismet Angel de Maison Alhambra",

    brand:
        "maison",

    description:
        "Kismet Angel de Maison Alhambra é um perfume Oriental Baunilha Compartilhável. As notas de topo são Baunilha, Favo de Mel e Âmbar. As notas de coração são Conhaque, Canela, Caramelo e Fava-Tonca. A nota de fundo é Chocolate Amargo.",

    image:
        "imagens/kismet angel.webp"
},

"tobacco-touch": {

    name:
        "Tobacco Touch de Maison Alhambra",

    brand:
        "maison",

    description:
        "Tobacco Touch de Maison Alhambra é um perfume Compartilhável. As notas de topo são Tabaco e Notas Especiadas. As notas de coração são Tabaco, Baunilha, Fava-Tonca e Cacau. As notas de fundo são Frutas Secas e Notas Amadeiradas.",

    image:
        "imagens/tobacco touch.jpg"
},

"toscano-leather": {

    name:
        "Toscano Leather de Maison Alhambra",

    brand:
        "maison",

    description:
        "Toscano Leather de Maison Alhambra é um perfume Couro Compartilhável. As notas de topo são Notas Animálicas, Açafrão e Tomilho. As notas de coração são Couro, Framboesa, Notas Amadeiradas, Incenso e Jasmim. As notas de fundo são Couro e Âmbar.",

    image:
        "imagens/toscano leather.webp"
},

"lovely-cherie": {

    name:
        "Lovely Chèrie de Maison Alhambra",

    brand:
        "maison",

    description:
        "Lovely Chèrie de Maison Alhambra é um perfume Compartilhável. As notas de topo são Amêndoa Amarga e Rosa. As notas de coração são Cereja, Cereja Preta e Âmbar. As notas de fundo são Fava-Tonca, Toffee e Bálsamo do Peru.",

    image:
        "imagens/lovely cherie.jpg"
},

"yeah": {

    name:
        "Yeah! de Maison Alhambra",

    brand:
        "maison",

    description:
        "Yeah! de Maison Alhambra é um perfume Aromático Frutado Masculino. As notas de topo são Maçã, Gengibre e Bergamota. As notas de coração são Sálvia, Bagas de Zimbro e Gerânio. As notas de fundo são Madeira de Âmbar, Fava-Tonca, Cedro, Vetiver e Olíbano.",

    image:
        "imagens/yeah.webp"
},

"porto-neroli": {

    name:
        "Porto Neroli de Maison Alhambra",

    brand:
        "maison",

    description:
        "Porto Neroli de Maison Alhambra é um perfume Compartilhável. As notas de topo são Néroli, Limão, Mandarina, Laranja Amarga e Jasmim. As notas de coração são Flor de Laranjeira, Lavanda e Sal Marinho. As notas de fundo são Notas Herbais, Absinto e Âmbar.",

    image:
        "imagens/porto neroli.webp"
},

"jean-lowe-immortal": {

    name:
        "Jean Lowe Immortal de Maison Alhambra",

    brand:
        "maison",

    description:
        "Jean Lowe Immortal de Maison Alhambra é um perfume Oriental Masculino. As notas de topo são Gengibre, Toranja e Bergamota. As notas de coração são Alecrim, Notas Aquáticas, Sálvia e Gerânio. As notas de fundo são Ambroxan, Âmbar e Ládano.",

    image:
        "imagens/jean lowe immortal.jpg"
},

"amber-leather": {

    name:
        "Amber & Leather de Maison Alhambra",

    brand:
        "maison",

    description:
        "Amber & Leather de Maison Alhambra é um perfume Oriental Compartilhável. A nota de topo é Cardamomo. As notas de coração são Couro e Jasmim-Sambac. As notas de fundo são Âmbar, Musgo e Patchouli.",

    image:
        "imagens/amber leather.webp"
},

"karat": {

    name:
        "Karat de Maison Alhambra",

    brand:
        "maison",

    description:
        "Karat de Maison Alhambra é um perfume Floral Compartilhável. As notas de topo são Pêssego, Maracujá, Framboesa, Pera, Cassis, Notas Herbais e Notas Terrosas. A nota de coração é Lírio-do-Vale. As notas de fundo são Almíscar, Baunilha, Heliotrópio, Sândalo e Patchouli.",

    image:
        "imagens/karat.jpg"
},

"gusta": {

    name:
        "Gusta de Maison Alhambra",

    brand:
        "maison",

    description:
        "Gusta de Maison Alhambra é um perfume Aromático Aquático Compartilhável. As notas de topo são Mandarina, Bergamota, Laranja e Abacaxi. As notas de coração são Jasmim, Rosa, Âmbar e Violeta. As notas de fundo são Almíscar, Sândalo, Bétula, Madeira de Agar e Oud.",

    image:
        "imagens/gusta.webp"
},


    "turathi-brown":{

        name:
            "Turathi Brown de Afnan",
        
        brand:
            "Afnan",

        description:"Turathi Brown de Afnan é um perfume Amadeirado Especiado Masculino. As notas de topo são Âmbar, Patchouli, Notas Amadeiradas e Notas Ozônicas. As notas de coração são Notas Especiadas, Especiarias Aromáticas e Baunilha. As notas de fundo são Notas Balsâmicas, Rosa e Notas Aquáticas.",
        image:
            "imagens/turathi brown.webp"
    },

    
    "qaed-al-fursan": {

        name:
            "Qaed Al Fursan de Lattafa Perfumes",

        brand:
            "Lattafa",

        description:
            "Qaed Al Fursan de Lattafa Perfumes é um perfume Oriental Amadeirado Compartilhável. As notas de topo são Abacaxi e Açafrão. As notas de coração são Bálsamo de Abeto e Jasmim. As notas de fundo são Madeira de Cedro, Âmbar e Oud.",
        image:
            "imagens/qaed.webp"
    },





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
