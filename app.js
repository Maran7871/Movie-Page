let url = window.location.href;
// console.log (url)
let url_segment = url.split('?');
// console.log (url_segment[1]);

let play_btn = document.getElementById('play');
let video = document.getElementById('video');

play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    }else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended', () => {
    video.play();
})

let date = new Date();
let main_date = date.getDate();
// console.log((main_date))

Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
    }
})

let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        movie_dir: 'Atlee',
        movie_cast: `Shah Rukh Khan, Nayanthara, Vijay Sethupathi`,
        movie_edit: 'Ruben',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,18,19,12,13],
        h: [1,2,4,18,13,12],
        f: [5,6,15,,24,23,7,16,17,18],
        e: [2,7,8,17,18],
        d: [5,22],
        c: [1,2,20,23,8,11,18,19,11,12,19],
        b: [8,5],
        a: [16,15,23,],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'jawan cast.jpg',
        video: 'video/jawan trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        movie_dir: 'Nelson Dilipkumar',
        movie_cast: `Rajnikanth,Vinayakan,Ramya Krishnan,Vasanth Ravi`,
        movie_edit: 'R. Nirmal',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [23,8,11,18,19,13,12],
        h: [1,2,4,18,20],
        f: [5,6,15,17,18],
        e: [2,6,24,23,8,5],
        d: [5,16,15,23,22],
        c: [2,6,24,23,7,16,17,18,19,12,13],
        b: [8,5],
        a: [24,23,7,16,17,],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/jailer cast.jpg',
        video: 'video/Jailer Trailer.mp4' 
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Leo',
        movie_dir: 'Lokesh Kanagaraj',
        movie_cast: `Vijay,Sanjay Dutt,Arjun,Trisha`,
        movie_edit: 'Philomin Raj',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 3,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,18,20,23,8,11,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/leo cast.jpg',
        video: 'video/LEO Tamil Official Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Japan',
        movie_dir: 'Raju Murugan',
        movie_cast: `Karthi,Anu Emmanuel`,
        movie_edit: 'Philomin Raj',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 4,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,18,20,23,8,11,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [1,2,11,12,19],
        c: [],
        b: [5,16,15,23,22],
        a: [8,5],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Japan cast.jpg',
        video: 'video/Japan Trailer.mp4'        
    },    
    {
        pvr: 'PVR Vegus',
        movie: 'Jigarthanda_Double_X',
        movie_dir: 'Karthik Subbaraj',
        movie_cast: `Raghava Lawrence, S. J. Suryah`,
        movie_edit: 'Shafique Mohamed Ali',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 5,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [17,18,19,12,13],
        h: [2,7,8,17,18],
        f: [5,6,15,17,18],
        e: [],
        d: [5,16,15,23,22],
        c: [2,6,24,23,7,16,],
        b: [8,5],
        a: [1,2,4,18,20,23,8,11,18,19,13,12],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/jigar.jpg',
        video: 'video/Jigarthanda DoubleX Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Captain_Miller',
        movie_dir: 'Arun Matheswaran',
        movie_cast: `Dhanush, Priyanka Arul Mohan, Shiva Rajkumar, Sundeep Kishan`,
        movie_edit: 'Philomin Raj',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 6,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,16,15,23,22],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18,20,23,8,11,19,13,12],
        d: [5],
        c: [],
        b: [8,5],
        a: [1,2,11,12,19],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Captain_Miller cast.jpg',
        video: 'video/Caption Miller Trailer.mp4 Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Dhuruva_Natchathiram',
        movie_dir: 'Gautham Vasudev Menon',
        movie_cast: `Vikram, Ritu Varma, R. Parthiban, Radhika Sarathkumar, Simran,Vinayakan`,
        movie_edit: 'Anthony',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 7,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [5,16,15,23,22],
        h: [2,6,24,23,7,16,17,18,19,12,13],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [1,2,4,18,20,23,8,11,18,19,13,12],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Dhruva_Natchathiram cast.jpg',
        video: 'video/Dhuruva Natchathiram Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Indian_2',
        movie_dir: 'S. Shankar',
        movie_cast: `Kamal Haasan, Kajal Aggarwal, Siddharth, S. J. Suryah, Rakul Preet Singh, Priya Bhavani Shankar`,
        movie_edit: 'A. Sreekar Prasad',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 8,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,18,20,23,8,11,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Indian_2_poster.jpg',
        video: 'video/Indian_2 Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Thangalaan',
        movie_dir: 'Pa. Ranjith',
        movie_cast: `Vikram, Pasupathy`,
        movie_edit: 'Selva R. K.',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 9,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,18,20,23,8,11,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Thangalaan_poster.jpg',
        video: 'video/Thangalaan Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Laal_Salaam',
        movie_dir: 'Aishwarya Rajinikanth',
        movie_cast: `Vishnu Vishal, Vikranth`,
        movie_edit: 'B. Pravin Baaskar',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 10,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,1712,13],
        h: [1,2,4,18,20,23,8],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,23,22],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [,18,19,],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Lal_Salaam_poster.jpg.webp',
        video: 'video/Laal Salaam Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Mark_Antony',
        movie_dir: 'Adhik Ravichandran',
        movie_cast: `Vishal, S. J. Suryah`,
        movie_edit: 'Vijay Velukutty',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 11,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [1,2,4,18,20,23,8,11,18,19,13,12],
        b: [8,5],
        a: [1,2,11,12,19],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Mark_Antony Title Poster.jpg',
        video: 'video/Mark_Antony Trailer.mp4 Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'DD_Returns',
        movie_dir: 'S.Prem Anand',
        movie_cast: `Santhanam, Surbhi`,
        movie_edit: 'N. B. Srikanth',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 12,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,18,20,23,8,11,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/DD_Returns_Film_Poster.jpg',
        video: 'video/DD Returns Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Ayalaan',
        movie_dir: 'R. Ravikumar',
        movie_cast: `Sivakarthikeyan, Rakul Preet Singh, Sharad Kelkar, Isha Koppikar`,
        movie_edit: 'Ruben',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 13,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [2,6,24,23,7,16,17,18,19,12,13],
        h: [1,2,4,18,20,23,8,11,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [1,2,11,12,19],
        b: [8,5],
        a: [],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Ayalaan_poster.jpg',
        video: 'video/Ayalaan Trailer.mp4'        
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Kanguva',
        movie_dir: 'Siva',
        movie_cast: `Suriya, Disha Patani, Bobby Deol`,
        movie_edit: 'Nishadh Yusuf',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 14,
        type: '4DX',
        series: ['J','H','F','E','D','C','B','A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [1,2,4,18,19,13,12],
        f: [5,6,15,17,18],
        e: [2,7,8,17,18],
        d: [5,16,15,23,22],
        c: [],
        b: [8,5],
        a: [20,23,8,11,18,],
        price: [800, 800,560,560,560,560,430,430],
        date: main_date,
        img: 'img/Kanguva_poster.jpg',
        video: 'video/Kanguvaa Trailer.mp4 Trailer.mp4'        
    },
    
]

let addSeats = (arr) => {
    //console.log(arr)
    arr.forEach((el, i) => {
        const {series, row_section, seat, price, a, b, c,d, e, f, g, h, j} = el;
    
        // create Row
        for (let index = 0; index < series.length ; index++) {
        //  console.log(series[index]);
        
        let row = document.createElement('div');
        row.className = 'row';

        let booked_seats = [];
        booked_seats = [...eval(series[index].toLocaleLowerCase())];
        // console.log(booked_seats);


        // Create Seats
        for (let seats = 0; seats < seat; seats++) {
            
            if (seats === 0) {
                let span = document.createElement('span');
                span.innerText = series[index];
                row.appendChild(span);
            }
            
            let li = document.createElement('li');
            let filter = booked_seats.filter(el => {
                return el === seats;
            })
            //console.log(filter);

            if (filter.length > 0){
                li.className = "seat booked";
            }else{
                li.className = "seat";
            }
            li.id = series[index]+seats;
            li.setAttribute('book', seats);
            li.setAttribute('sr', series[index]);
            li.innerText = price[index];
            
            li.onclick = () => {
                if (li.className === 'seat booked') {
                    li.classList.remove('selected');
                }else {
                    li.classList.toggle('selected');
                }
                let len = Array.from(document.getElementsByClassName('selected')).length;
                if (len > 0) {
                    document.getElementById('book_ticket').style.display = 'unset';                
                } else {
                    document.getElementById('book_ticket').style.display = 'none';
                }
                
            }
            row.appendChild(li);

            if (seats === seat-1) {
                let span = document.createElement('span');
                span.innerText = series[index];
                row.appendChild(span);
            }
        }

        document.getElementById('chair').appendChild(row);
        }
        
        
    
    })
}

let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
console.log(data);

document.getElementById('title').innerText = data[0].movie;
document.getElementById('poster').src = data[0].img;
document.getElementById('video').src = data[0].video;
document.getElementById('Directed').innerText = data[0].movie_dir;
document.getElementById('cast').innerText = data[0].movie_cast;
document.getElementById('edit').innerText = data[0].movie_edit;

addSeats(data)

let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active');
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate()-1) {
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
// console.log(data);
            addSeats(data)
        }
    })
})

document.getElementById('book_ticket').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
        let seat_price = el.innerText;
        

        let obj = {
            movie: url_segment[1],
            date : main_date
        }

        let getData = pvr.map((obj) => {
            if (
                obj.movie === url_segment[1] && obj.date === main_date
            ){
                obj[seat_sr].push[seat_no];
            }
            return obj;
        });

        // console.log(getData);

       document.getElementById('chair').innerHTML = '';
       let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
       addSeats(data);


       document.getElementById('screen').style.display = 'none';
       document.getElementById('chair').style.display = 'none';
       document.getElementById('det').style.display = 'none';
       document.getElementById('book_ticket').style.display = 'none';
       document.getElementById('back_ticket').style.display = 'unset';
       document.getElementById('ticket').style.display = 'block';
       

       let tic = document.createElement('div');
       tic.className = 'tic';
       tic.innerHTML = `
                    <div class="barcode">
                        <div class="card">
                            <h6>ROW ${seat_sr.toLocaleLowerCase()}</h6>
                            <h6>${main_date} November 2023</h6>
                        </div>
                        
                        <div class="card">
                            <h6>${seat_no}</h6>
                            <h6>23:00</h6>
                        </div>
                        <svg id="${seat_sr}${seat_no}barcode"></svg>
                        <h5>SHAKTHI CINEMA</h5>
                    </div>
                    <div class="tic_details" style="background-image: url('leo 3.jpg')">
                        <div class="type"> 4DX </div>
                        <h5 class="pvr"><span> Shakthi</span>Cinema</h5>
                        <h1> Leo </h1>
                        <div class="seat_det">
                            <div class="seat_cr">
                                <h6>ROW</h6>
                                <h6>${seat_sr.toLocaleLowerCase()}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>SEAT</h6>
                                <h6>${seat_no}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>DATE</h6>
                                <h6>${main_date} <sub>sep</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>TIME</h6>
                                <h6>11:30 <sub>pm</sub></h6>
                            </div>
                        </div>
                    </div>
        `
        document.getElementById('ticket').appendChild(tic); 
        
        JsBarcode(`#${seat_sr}${seat_no}barcode`,
        `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}112023`);

    })
})

document.getElementById('back_ticket').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'inline-block';
       document.getElementById('chair').style.display = 'block';
       document.getElementById('det').style.display = 'flex';
       document.getElementById('book_ticket').style.display = 'unset';
       document.getElementById('back_ticket').style.display = 'none';
       document.getElementById('ticket').style.display = 'none';

});


