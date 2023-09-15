$('.btn').on('click', function (elem) {
	elem.preventDefault();
	let id = $(this).data('id');
	let input = this.previousElementSibling;
	if (input.name == 'content') {
		$(`[data-id="${id}"]`).text(input.value);
	} else if (input.name == 'fontSize') {
		switch (id) {
			case '01':
				$(`#headlineTop`).css('fontSize', `${input.value}rem`);
				break;
			case '02':
				$(`#headlineBottom`).css('fontSize', `${input.value}rem`);
				break;
		}
	}


});

let colorText;
let colorTextBorder;
let defaultColor = "#0055ff";

const startup = () => {
	colorText = document.querySelector("#colorText");
	colorTextBorder = document.querySelector("#colorTextBorder");
	colorText.value = defaultColor;
	colorTextBorder.value = defaultColor;
	colorText.addEventListener("input", updateFirst, false);
	colorTextBorder.addEventListener("input", updateFirst, false);
	colorText.addEventListener("change", updateAll, false);
	colorTextBorder.addEventListener("change", updateAll, false);
	colorText.select();
	colorTextBorder.select();
};

const updateFirst = (event) => {
	// console.dir(event.target.id);
	if (event.target.id == 'colorText') {
		$('#diplomaHeadline > div').css('color', event.target.value);
	}
	else if (event.target.id == 'colorTextBorder') {
		$('#diplomaHeadline > div').css('textStroke', `1px ${event.target.value}`);
	}
};

const updateAll = (event) => {
	if (event.target.id == 'colorText') {
		$('#diplomaHeadline > div').css('color', event.target.value);
	}
	else if (event.target.id == 'colorTextBorder') {
		$('#diplomaHeadline > div').css('textStroke', `1px ${event.target.value}`);
	}
};

window.addEventListener("load", startup, false);