new Vue ({
    el: '.slidesContainer',
    data() {
        return {
            images: [
                '![](img/banner-1.png)',
                '![](img/banner-2.png)'
            ],
            slidesIndex: 0,
            timer: null,
        }
    },
    mounted: function() {
        this.startSlide()
    },
    methods: {
        plusSlides() {
            this.slidesIndex += 1;
        },
        subsSlides() {
            this.slidesIndex -= 1;
        },
        startSlide() {
            this.timer = setInterval(this.plusSlides, 3000);
        }
    },
    computed: {
        currentImg(){
            return this.images[Math.abs(this.slidesIndex % this.images.length)]
        }
    }
});
new Vue ({
    el: ".veg-cards",
    data:{
        daftarSayuran: [
            {
                nama: 'Cabai Rawit',
                satuan: 'kg',
                images: '![](/img/Vegetables/Cabai Rawit.png)',
                hargaAwal: 'Rp. 10.000',
                hargaBaru: 'Rp. 5.000',
                rating: '/img/4-rating.png',
                jmlTerjual: '600',
                kota: 'Gunung Kidul',
                provinsi: 'DIY'
            },
            {
                nama: 'Cabai Hijau',
                satuan: 'kg',
                images: '![](/img/Vegetables/Cabai Hijau.png)',
                hargaAwal: 'Rp. 8.500',
                hargaBaru: 'Rp. 4.000',
                rating:'/img/4-rating.png',
                jmlTerjual: '560',
                kota: 'Kulon Progo',
                provinsi: 'DIY'
            },
            {
                nama: 'Bombay',
                satuan: '100 gram',
                images: '![](/img/Vegetables/Bawang Bombay.png)',
                hargaAwal: '',
                hargaBaru: 'Rp. 2.500',
                rating: '/img/3-rating.png',
                jmlTerjual: '700',
                kota: 'Sleman',
                provinsi: 'DIY'
            },
            {
                nama: 'Selada',
                satuan: 'Ikat',
                images: '![](/img/Vegetables/Selada.png)',
                hargaAwal: '',
                hargaBaru: 'Rp. 4.500',
                rating: '/img/3-rating.png',
                jmlTerjual: '300',
                kota: 'Sleman',
                provinsi: 'DIY'
            },
            {
                nama:'Cabai Merah',
                satuan:'kg',
                images:'![](/img/Vegetables/Cabai Merah.jpg)',
                hargaAwal: 'Rp. 25.000',
                hargaBaru: 'Rp. 20.000',
                rating: '/img/4-rating.png',
                jmlTerjual:'1000',
                kota: 'Klaten',
                provinsi:'Jawa Tengah'
            },
            {
                nama: 'Buncis',
                satuan: 'kg',
                images: '![](/img/Vegetables/Buncis.jpg)',
                hargaAwal: '',
                hargaBaru: 'Rp. 15.000',
                rating: '/img/3-rating.png',
                jmlTerjual: '900',
                kota: 'Kulon Progo',
                provinsi: 'DIY'
            },
            {
                nama: 'Bawang Merah',
                satuan: 'kg',
                images: '![](/img/Vegetables/Bawang Merah.jpg)',
                hargaAwal: 'Rp. 20.000',
                hargaBaru: 'Rp. 18.000',
                rating: '/img/4-rating.png',
                jmlTerjual: '900',
                kota: 'Bantul',
                provinsi: 'DIY'
            },
            {
                nama: 'Sawi',
                satuan: 'kg',
                images: '![](/img/Vegetables/Sawi.jpg)',
                hargaAwal: '',
                hargaBaru: 'Rp. 17.000',
                rating: '/img/4-rating.png',
                jmlTerjual: '400',
                kota: 'Klaten',
                provinsi: 'Jawa Tengah'
            }
        ]
    }
});

new Vue({
    el: ".fruits-cards",
    data: {
        daftarBuah: [
            {
                nama: 'Jeruk',
                satuan: 'kg',
                images: '![](/img/Fruits/Jeruk.png)',
                hargaAwal: 'Rp. 35.000',
                hargaBaru: 'Rp. 28.000',
                rating: '/img/4-rating.png',
                jmlTerjual: '560',
                kota: 'Kulon Progo',
                provinsi: 'DIY'
            },
            {
                nama: 'Anggur',
                satuan: 'kg',
                images: '![](/img/Fruits/Anggur.png)',
                hargaAwal: 'Rp. 50.00',
                hargaBaru: 'Rp. 35.000',
                rating: '/img/4-rating.png',
                jmlTerjual: '600',
                kota: 'Gunung Kidul',
                provinsi: 'DIY'
            },
            {
                nama: 'Pisang',
                satuan: '100 gram',
                images: '![](/img/Fruits/Pisang.png)',
                hargaAwal: '',
                hargaBaru: 'Rp. 2.400',
                rating: '/img/3-rating.png',
                jmlTerjual: '300',
                kota: 'Sleman',
                provinsi: 'DIY'
            },
            {
                nama: 'Apel',
                satuan: 'kg',
                images: '![](/img/Fruits/Apel.png)',
                hargaAwal: '',
                hargaBaru: 'Rp. 40.500',
                rating: '/img/3-rating.png',
                jmlTerjual: '700',
                kota: 'Sleman',
                provinsi: 'DIY'
            }
        ]
    }
});
