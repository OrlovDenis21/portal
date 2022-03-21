import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

window.onload = function() {
    class Slider {
        constructor(obj) {
            this.images = document.querySelectorAll(obj.images)
            this.btNext = document.querySelector(obj.next)
            this.btPrev = document.querySelector(obj.prev)
            this.i = 0
            this.btNext.addEventListener('click', this.next.bind(this))
            this.btPrev.addEventListener('click', this.prev.bind(this))
            console.log(this.btNext)
        }
        prev() {
            console.log('click');
            this.images[this.i].classList.remove("show");
            this.i--
            if(this.i < 0) {
                this.i = this.images.length - 1
            }
            this.images[this.i].classList.add("show");
        }
        next() {
            console.log('click right');
            console.log(this.images,this.i)
            this.images[this.i].classList.remove("show");
            this.i++
            if(this.i >= this.images.length) {
                this.i = 0
            }
            this.images[this.i].classList.add("show");
        }
    }
    new Slider({
        images: '.slider .item',
        next: '.slider .arrow .arrow__right',
        prev: '.slider .arrow .arrow__left',
    })
}