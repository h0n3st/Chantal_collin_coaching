
$(document).ready(function(){

	var top ='<div id="masthead" class="col-7">'
			+'	<a href="home.html"><img class = "col-7" src="image/img_logo_transparent.jpg" style = "min-height:150px;max-width:500px; height:auto;"></a>'
			+'</div>'
			+'<div id="contacts" class="col-5">'
			+'	<h4>Téléphone : 514-606-9377<br>'
			+'	Courriel : <a href="mailto:info@chantalcollincoaching.com">info@chantalcollincoaching.com</a></h4>'
			+'</div>'


			+'<!--	buttons for cell/tablet version -->'
			+'<div id="cell_buttons" class="col-12 cell_only">'
			+'	<div class="btn col-1">'
			+'		<a href="home.html"><p>Accueil</p></a>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell01" onclick=toggleDropdown("dropdownCell01")>Profil <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell01">'
			+'			<a href="profil.html"><p>Profil</p></a>'
			+'			<a href="mission.html"><p>Mission</p></a>'
			+'			<a href="croyances.html"><p>Croyances et valeurs</p></a>'
			+'			<a href="parcours.html"><p>Parcours</p></a>'
			+'			<a href="diplomes.html"><p>Diplômes</p></a>'
			+'			<a href="competences.html"><p>Compétences transversales et intérêts</p></a>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell02" onclick=toggleDropdown("dropdownCell02")>Coaching <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell02">'
			+'			<a href="coaching.html"><p>Coaching</p></a>'
			+'			<a href="philosophie.html"><p>Philosophie du coaching</p></a>'
			+'			<a href="approche.html"><p>Approche et outils</p></a>'
			+'			<a href="role.html"><p>Rôle et responsabilités</p></a>'
			+'			<a href="deontologie.html"><p>Déontologie</p></a>'
			+'			<a href="choisir.html"><p>Comment choisir un coach?</p></a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" >'
			+'		<p id="btnCell03" onclick=toggleDropdown("dropdownCell03")>Particuliers <span style="font-weight:bold;">&#709</span></p>'
			+'		<div class="dropdown" id="dropdownCell03">'
			+'			<p>Particuliers</p>'
			+'			<a href="coaching_personnel.html"><p>Coaching personnel</p></a>'
			+'			<a href="coaching_professionnel.html"><p>Coaching professionnel</p></a>'

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
			+'		<a href="commentaires.html"><p>Commentaires</p></a>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1">'
			+'		<a href="contact.html"><p>Contact</p></a>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'

			+'</div>'



			+'<!--	buttons for desktop version -->'
			+'<div id="desktop_buttons" class="col-12 desktop_only">'
			+'	<a href="contact.html">'
			+'		<div class="btn" style="margin-right:8.33%;">'
			+'			<span>Contact</span>'
			+'			<div class="dropdown">'

			+'			</div>'
			+'		</div>'
			+'	</a>'
			+'	<a href="commentaires.html">'
			+'		<div class="btn">'
			+'			<span>Commentaires</span>'
			+'			<div class="dropdown">'
			+'			</div>'
			+'		</div>'
			+'	</a>'
			+'		<div class="btn" id="btnDsk04" onmouseover=showDropdown("dropdownDsk04") onmouseleave="hideDropdown()">'
			+'			<span>Groupes</span>'
			+'			<div class="dropdown" id="dropdownDsk04">'
			+'				<p>Coaching numéro 1</p>'
			+'				<p>Coaching numéro 2</p>'
			+'				<p>Coaching numéro 3</p>'
			+'			</div>'
			+'		</div>'
				
			+'	<div class="btn" id="btnDsk03" onmouseover=showDropdown("dropdownDsk03") onmouseleave="hideDropdown()">'
			+'		<span>Particuliers</span>'
			+'		<div class="dropdown" id="dropdownDsk03">'
			+'			<a href="coaching_personnel.html"><p>Coaching personnel</p></a>'
			+'			<a href="coaching_professionnel.html"><p>Coaching professionnel</p></a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn" id="btnDsk02" onmouseover=showDropdown("dropdownDsk02") onmouseleave="hideDropdown()">'
			+'		<a href="coaching.html"><span>Coaching</span></a>'
			+'		<div class="dropdown" id="dropdownDsk02">'
			+'			<a href="philosophie.html"><p>Philosophie du coaching</p></a>'
			+'			<a href="approche.html"><p>Approche et outils</p></a>'
			+'			<a href="role.html"><p>Rôle et responsabilités</p></a>'
			+'			<a href="deontologie.html"><p>Déontologie</p></a>'
			+'			<a href="choisir.html"><p>Comment choisir un coach?</p></a>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn" id="btnDsk01" onmouseover=showDropdown("dropdownDsk01") onmouseleave="hideDropdown()">'
			+'		<a href="profil.html"><span>Profil</span></a>'
			+'		<div class="dropdown" id="dropdownDsk01">'
			+'			<a href="mission.html"><p>Mission</p></a>'
			+'			<a href="croyances.html"><p>Croyances et valeurs</p></a>'
			+'			<a href="parcours.html"><p>Parcours</p></a>'
			+'			<a href="diplomes.html"><p>Diplômes</p></a>'
			+'			<a href="competences.html"><p>Compétences transversales et intérêts</p></a>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn">'
			+'		<a href="home.html"><span>Accueil</span></a>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>';

			var footnote = '<a href="https://www.facebook.com/chantal.collin.984" target="_blank">'
				+'<img src="image/img_fb_logo.jpg" style="width:35px; height:auto; float:right; margin-top:10px; margin-right:5%; border-radius:5px;">'
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
function startDownload(){
  window.open("Recording.m4a", 'Download');

}
