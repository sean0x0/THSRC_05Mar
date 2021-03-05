const items = [
	{ number: '16', img: '/img/exhib-sample@2x.jpg', tn: '/img/mask.svg', name: 'A館', title: '輪轉世紀 — 軌跡百年', content: '最早的「鐵支路」並非真正的「鐵」支路，而是「木」支路。約西元 1600年左右，英國為了將礦區的煤礦與鐵礦方便運送到附近的港口，因而發展出利用馬匹拉著簡單的車輛運送。台灣高鐵探索館特別於入館處打造充滿科技性與互動性的藍晒圖展示牆，各種鐵道歷史的車輛圖像等你來挖掘。' },
	{ number: '17', img: '/img/exhib-sample@2x.jpg', tn: '/img/temperature.svg', name: 'B館', title: '輪轉世紀 — 軌跡百年', content: '最早的「鐵支路」並非真正的「鐵」支路，而是「木」支路。約西元 1600年左右，英國為了將礦區的煤礦與鐵礦方便運送到附近的港口，因而發展出利用馬匹拉著簡單的車輛運送。台灣高鐵探索館特別於入館處打造充滿科技性與互動性的藍晒圖展示牆，各種鐵道歷史的車輛圖像等你來挖掘。' },
	{ number: '18', img: '/img/exhib-sample@2x.jpg', tn: '/img/disinfect.svg', name: 'C館', title: '輪轉世紀 — 軌跡百年', content: '最早的「鐵支路」並非真正的「鐵」支路，而是「木」支路。約西元 1600年左右，英國為了將礦區的煤礦與鐵礦方便運送到附近的港口，因而發展出利用馬匹拉著簡單的車輛運送。台灣高鐵探索館特別於入館處打造充滿科技性與互動性的藍晒圖展示牆，各種鐵道歷史的車輛圖像等你來挖掘。' },

];

const rightBox = () => { //右邊展區內容
	let html = "";
	items.forEach((value, index) => {
		html += `<section id="list-sec${index + 1}" class="bg-white">

		<figure class="figure mx-auto p-4 pt-lg-6 pb-lg-5">
			<img src="${value.img}"
				class="figure-img img-fluid mb-0 pl-xl-15 pr-xl-20 pl-lg-10 pr-lg-10 position-relative"
				alt="...">

			<figcaption class="figure-caption text-left info-box float-lg-right z-nav">
				<div class="mx-5 display-2 text-right d-none d-lg-block text-toupe-30">${value.number}</div>
				<div class="text-left bg-white shadow p-4 mx-lg-5">
					<h2 class="p-2">${value.title}</h2>
					<p class="card-text text-justify p-2">${value.content}
					</p>
				</div>
			</figcaption>
		</figure>
		
		

	</section>
	<figure class="map hide">
			<img src="${value.tn}"
				class=""
				alt="...">

			<figcaption class="">
				<div class="h5">${value.name}</div>
				
			</figcaption>
		</figure>`;
	});

	document.querySelector("#list-sec").innerHTML = html;
};

/*const map = () => { //左邊小地圖
	let html = "";
	items.forEach((value) => {
		html += `
		<figure class="">
			<img src="${value.tn}"
				class=""
				alt="...">

			<figcaption class="">
				<div class="h5">${value.name}</div>
				
			</figcaption>
		</figure>`;
	});

	document.querySelector("#map").innerHTML = html;
};*/

const leftBox = () => { //左邊展區連結
	let html = "";
	items.forEach((value, index) => {
		html += `
		<li id='test${index + 1}' class="" href="#list-item-1"><span class="h5">${value.number}</span></li>
		
	 `;
	});

	document.querySelector("#list-bullet ul").innerHTML = html;
};

rightBox();
leftBox();
//map();

// JQ 

items.forEach((value, index) => {

	var bullet = $(`#test${index + 1}`)



	bullet.on('click', function (e) {
		var st = $(`#list-sec${index + 1}`).position();
		var navHeight = $('#nav').height() + 30;

		$('html').animate({ scrollTop: st.top - navHeight }, 1000);


	})


	bullet.on('click', function () {
		$('.hollow').removeClass('hollow');
		$(this).addClass('hollow');


		$('.map').not(this).addClass('hide');
		$('.map').removeClass('hide');




		//$(this).addClass('hollow');
	});



	/*if(bullet.on('click')){
		bullet.addClass("hollow");
	} else {
		bullet.removeClass("hollow");
	}*/
});
