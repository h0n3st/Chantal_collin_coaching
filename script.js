
$(document).ready(function(){

	var top ='<div id="masthead" class="col-7">'
			+'	<img src="img_logo_transparent.jpg">'
			+'</div>'
			+'<div id="contacts" class="col-5">'
			+'	<h4>Téléphone : 514-606-9377<br>'
			+'	Courriel : <a href="mailto:info@chantalcollincoaching.com">info@chantalcollincoaching.com</a></h4>'
			+'</div>'


			+'<!--	buttons for cell/tablet version -->'
			+'<div id="cell_buttons" class="col-12 cell_only">'
			+'	<div class="btn col-1">'
			+'		<p>Accueil</p>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell01" onclick=toggleDropdown("dropdownCell01")>Profil <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell01">'
			+'			<p>Mission</p>'
			+'			<p>Croyances et valeurs</p>'
			+'			<p>Parcours</p>'
			+'			<p>Diplômmes</p>'
			+'			<p>Compétences transversales et intérêts</p>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell02" onclick=toggleDropdown("dropdownCell02")>Coaching <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell02">'
			+'			<p>Philosophie du coaching</p>'
			+'			<p>Approche et outils</p>'
			+'			<p>Rôle et responsabilités</p>'
			+'			<p>Déontologie</p>'
			+'			<p>Comment choisir un coach?</p>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell03" onclick=toggleDropdown("dropdownCell03")>Particuliers <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell03">'
			+'			<p>Coaching personnel</p>'
			+'			<p>Coaching professionnel</p>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell04" onclick=toggleDropdown("dropdownCell04")>Groupes <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell04">'
			+'			<p>Coaching numéro 1</p>'
			+'			<p>Coaching numéro 2</p>'
			+'			<p>Coaching numéro 3</p>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1">'
			+'		<p>Commentaires</p>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1">'
			+'		<p>Contact</p>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'

			+'</div>'



			+'<!--	buttons for desktop version -->'
			+'<div id="desktop_buttons" class="col-12 desktop_only">'
			+'	<div class="btn" style="margin-right:8.33%;">'
			+'		<span>Contact</span>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn">'
			+'		<span>Commentaires</span>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
				
			+'	<div class="btn" id="btnDsk04" onmouseover=showDropdown("dropdownDsk04") onmouseleave="hideDropdown()">'
			+'		<span>Groupes</span>'
			+'		<div class="dropdown" id="dropdownDsk04">'
			+'			<p>Coaching numéro 1</p>'
			+'			<p>Coaching numéro 2</p>'
			+'			<p>Coaching numéro 3</p>'
			+'		</div>'
			+'	</div>'
				
			+'	<div class="btn" id="btnDsk03" onmouseover=showDropdown("dropdownDsk03") onmouseleave="hideDropdown()">'
			+'		<span>Particuliers</span>'
			+'		<div class="dropdown" id="dropdownDsk03">'
			+'			<p>Coaching personnel</p>'
			+'			<p>Coaching professionnel</p>'
						
			+'		</div>'
			+'	</div>'
			+'	<div class="btn" id="btnDsk02" onmouseover=showDropdown("dropdownDsk02") onmouseleave="hideDropdown()">'
			+'		<span>Coaching</span>'
			+'		<div class="dropdown" id="dropdownDsk02">'
			+'			<p>Philosophie du coaching</p>'
			+'			<p>Approche et outils</p>'
			+'			<p>Rôle et responsabilités</p>'
			+'			<p>Déontologie</p>'
			+'			<p>Comment choisir un coach?</p>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn" id="btnDsk01" onmouseover=showDropdown("dropdownDsk01") onmouseleave="hideDropdown()">'
			+'		<span>Profil</span>'
			+'		<div class="dropdown" id="dropdownDsk01">'
			+'			<p>Mission</p>'
			+'			<p>Croyances et valeurs</p>'
			+'			<p>Parcours</p>'
			+'			<p>Diplômmes</p>'
			+'			<p>Compétences transversales et intérêts</p>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn">'
			+'		<span>Accueil</span>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>';

			var footnote = '<a href="https://www.facebook.com/chantal.collin.984" target="_blank">'
				+'<img src="img_fb_logo.jpg" style="width:35px; height:auto; float:right; margin-top:10px; margin-right:5%; border-radius:5px;">'
			+'</a>';

			$("#top").html(top);
			$("#footnote").html(footnote);
})

function showContent(content){
	$(".content").hide();
	$("#"+content).show();
}
function showDropdown(buttons){
	$("#"+buttons).slideDown("fast");

}
function hideDropdown(){
	$(".dropdown").slideUp("fast");
}
function toggleDropdown(buttons){

	$("#"+buttons).slideToggle("fast");
}

