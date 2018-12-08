let clock  = "#clock";
let date   = "#clock > div:nth-child(2)";
let time   = "#clock > div:nth-child(1)";
let hour   = "#hour";
let minute = "#minute";
let second = "#second";
let am_pm  = "#am-pm";
let fader  = "#fader";

let week_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function padZeroes(n) {
	if (String(n).length == 1) {
		return "0" + n;
	} else {
		return n;
	}
}
function update_time() {
	var d = new Date();

	$(date).text(week_days[d.getDay()] + " " + padZeroes(d.getDate()) + "/" + padZeroes(d.getMonth() + 1) + "/" + d.getFullYear());

	if (d.getHours() == 0) {
		$(hour).text("12");
	} else if (d.getHours() > 12) {
		$(hour).text(padZeroes(d.getHours() % 12));
	} else {
		$(hour).text(padZeroes(d.getHours()));
	}
	$(minute).text(padZeroes(d.getMinutes()));
	$(second).text(padZeroes(d.getSeconds()));
	if (d.getHours() >= 12) {
		$(am_pm).text(" PM");
	} else {
		$(am_pm).text(" AM");
	}

	$(".progress.minute > div").css("width",(d.getSeconds() / 59) * 100 + "%");
	$(".progress.hour > div")  .css("width",(d.getMinutes() / 59) * 100 + "%");
	$(".progress.day > div")   .css("width",(d.getHours()   / 23) * 100 + "%");
}
window.setInterval(update_time,500); update_time();

$("#links a").each(function() {
	let hover_effect = document.createElement("div");
	let hover_effect_inner = document.createElement("div");
	$(hover_effect_inner).html($(this).html());
	$(hover_effect).addClass("hover-effect").append(hover_effect_inner).appendTo(this);
});
$("#links a").click(function() {
	$(fader).addClass("active");
});
