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
let colorHead;
let colorHeadBorder;
let defaultColor = "#0055ff";

const startup = () => {
	colorHead = document.querySelector("#colorHead");
	colorText = document.querySelector("#colorText");
	colorHeadBorder = document.querySelector("#colorHeadBorder");
	colorHead.value = defaultColor;
	colorText.value = defaultColor;
	colorHeadBorder.value = defaultColor;
	colorHead.addEventListener("input", updateFirst, false);
	colorText.addEventListener("input", updateFirst, false);
	colorHeadBorder.addEventListener("input", updateFirst, false);
	colorHead.addEventListener("change", updateAll, false);
	colorText.addEventListener("change", updateAll, false);
	colorHeadBorder.addEventListener("change", updateAll, false);
	colorText.select();
	colorHead.addEventListener("change", updateAll, false);
	colorHeadBorder.select();
};

const updateFirst = (event) => {
	if (event.target.id == 'colorHead') {
		$('#headlineTop').css('color', event.target.value);
		$('#headlineBottom').css('color', event.target.value);
	}
	else if (event.target.id == 'colorHeadBorder') {
		$('#headlineTop').css('textStroke', `1px ${event.target.value}`);
		$('#headlineBottom').css('textStroke', `1px ${event.target.value}`);
	} else if (event.target.id == 'colorText') {
		$('#diplomaPerson').css('color', event.target.value);
		$('#diplomaText').css('color', event.target.value);
	}
};

const updateAll = (event) => {
	if (event.target.id == 'colorHead') {
		$('#headlineTop').css('color', event.target.value);
		$('#headlineBottom').css('color', event.target.value);
	}
	else if (event.target.id == 'colorHeadBorder') {
		$('#headlineTop').css('textStroke', `1px ${event.target.value}`);
		$('#headlineBottom').css('textStroke', `1px ${event.target.value}`);
	} else if (event.target.id == 'colorText') {
		$('#diplomaPerson').css('color', event.target.value);
		$('#diplomaText').css('color', event.target.value);
	}
};

const setBackground = () => {
	let selectedFile = $("#diplomaBackground")[0].files[0];
	$('#diplomaBody').css(
		{
			background: `url(../img/${selectedFile.name}) no-repeat center`,
			backgroundSize: 'cover'
		}
	);
}

// const inputElement = $('#diplomaBackground');
// inputElement.addEventListener("change", handleFiles, false);

window.addEventListener("load", startup, false);