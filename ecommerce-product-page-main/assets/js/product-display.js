class SelectorImages {

    constructor(imagesSelection, selectedImage) {
        this.imagesSelection = imagesSelection;
        this.selectedImage = selectedImage;

        this.imagesSelection.forEach((item) => {
            let data = item.dataset;
            item.addEventListener("click", () => {
                this.#resetSelected(this.imagesSelection)
                this.selectedImage.src = data.targetSrc
                item.classList.add("selected");
            })
        })
    }

    imagesSelection
    selectedImage

    next() {
        let index = this.#findImage();
        this.#resetSelected();
        let next = this.imagesSelection.item(index + 1 === this.imagesSelection.length ? 0 : index +1);
        let data = next.dataset;
        this.selectedImage.src = data.targetSrc
        next.classList.add("selected");
    }

    previous() {
        let index = this.#findImage();
        this.#resetSelected();
        let next = this.imagesSelection.item(index === 0 ? this.imagesSelection.length - 1 : index -1);
        let data = next.dataset;
        this.selectedImage.src = data.targetSrc
        next.classList.add("selected");
    }

    #resetSelected() {
        this.imagesSelection.forEach((item) => {
            item.classList.remove("selected");
        })
    }

    #findImage() {
        let index = -1;
        this.imagesSelection.forEach((item, i) => {
            if(item.classList.contains("selected")){
                index = i;
            }
        })
        return index;
    }
}

let imagesSelection = document.querySelectorAll(".section .product-images__thumbnail");
let selectedImage = document.querySelector("#selected-image");
let previousButton = document.querySelector(".section .product-images__arrow--left");
let nextButton = document.querySelector(".section .product-images__arrow--right")
let selectorImages = new SelectorImages(imagesSelection, selectedImage);

nextButton.addEventListener("click", () => {
    selectorImages.next()
})

previousButton.addEventListener("click", () => {
    selectorImages.previous()
})

let imagesSelectionModal = document.querySelectorAll(".product-images--modal .product-images__thumbnail");
let selectedImageModal = document.querySelector("#zoom-selected-image");
let previousButtonModal = document.querySelector(".product-images--modal .product-images__arrow--left");
let nextButtonModal = document.querySelector(".product-images--modal .product-images__arrow--right")
let selectorImagesModal = new SelectorImages(imagesSelectionModal, selectedImageModal);

nextButtonModal.addEventListener("click", () => {
    selectorImagesModal.next()
})

previousButtonModal.addEventListener("click", () => {
    selectorImagesModal.previous()
})

let zoomProductImageModal = document.querySelector("#zoom-product-image");
let closeButton = document.getElementById("zoom-product-image__close");
selectedImage.addEventListener("click", () => {
    zoomProductImageModal.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
    zoomProductImageModal.classList.remove("is-open");
})