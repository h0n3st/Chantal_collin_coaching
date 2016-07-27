

var slides = [];
var up = "up";
var down = "down";
var dropdownNumber = 4;

$(document).ready(function(){

	var top ='<div style="clear:both">'
			+'	<div id="masthead" class="col-7">'
			+'		<a href="home.html"><img class = "col-7" src="image/img_logo_transparent.jpg"></a>'
			+'	</div>'
			+'	<div id="contacts" class="col-5">'
			+'		<h4>Téléphone : 514-606-9377<br>'
			+'		Courriel : <a href="mailto:info@chantalcollincoaching.com">info@chantalcollincoaching.com</a></h4>'
			+'	</div>'
			+'</div>'
			+'<img class="col-12 cell_only" src="image/img_wave.jpg">'
			+'<!--	buttons for cell/tablet version -->'
			+'<div id="cell_buttons" class="col-12 cell_only">'
			+'	<div class="btn col-1" style="clear:both;">'
			+'		'
			+'			<ul>'
			+'				<div>'
			+'					<a href="home.html"><li class="btnCell">Accueil</li></a>'
			+'					<li class="arrow"></li>'
			+'				</div>'
			+'			</ul>'

			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" style="clear:both;">'
			+'		'
			+'			<ul >'
			+'				<div>'
			+'					<a href="profil.html">'
			+'						<li class = "btnCell" >Profil</li>'
			+'					</a>'
			+'					<li  onclick=toggleDropdown("dropdownCell01","arrow01") class="arrow" id="arrow01" style="font-weight:bold;">&#709</li>'
			+'				</div>'
			+'			</ul>'
			+'		<div class="dropdown col-1" id="dropdownCell01">'
			+'			<a href="mission.html"><p>Mission</p></a>'
			+'			<a href="croyances.html"><p>Croyances et valeurs</p></a>'
			+'			<a href="parcours.html"><p>Parcours</p></a>'
			+'			<a href="diplomes.html"><p>Diplômes</p></a>'
			+'			<a href="competences.html"><p>Compétences transversales et intérêts</p></a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" style="clear:both;">'
			+'			<ul>'
			+'				<div>'
			+'					<a href="coaching.html"><li class ="btnCell">Coaching </li></a>'
			+'					<li onclick=toggleDropdown("dropdownCell02","arrow02") class = "arrow" id="arrow02" style="font-weight:bold;">&#709</li>'
			+'				</div>'
			+'			</ul>'
			+'		<div class="dropdown" id="dropdownCell02">'
			+'			<a href="philosophie.html"><p>Philosophie du coaching</p></a>'
			+'			<a href="approche.html"><p>Approche et outils</p></a>'
			+'			<a href="role.html"><p>Rôle et responsabilités</p></a>'
			+'			<a href="deontologie.html"><p>Déontologie</p></a>'
			+'			<a href="choisir.html"><p>Comment choisir un coach?</p></a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" style="clear:both;">'
			+'		<ul>'
			+'			<div>'
			+'				<a href="particuliers.html"><li class="btnCell">Particuliers</li></a>'
			+'				<li onclick=toggleDropdown("dropdownCell03","arrow03") class = "arrow" id="arrow03" style="font-weight:bold;">&#709</li>'
			+'			</div>'
			+'		</ul>'
			+'		<div class="dropdown" id="dropdownCell03">'
			+'			<a href="coaching_personnel.html"><p>Coaching personnel</p></a>'
			+'			<a href="coaching_professionnel.html"><p>Coaching professionnel</p></a>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1" style="clear:both;">'
			+'		<ul>'
			+'			<div>'
			+'				<a href="groupes.html"><li class="btnCell">Groupes </li></a>'
			+'				<li onclick=toggleDropdown("dropdownCell04","arrow04") class = "arrow" id="arrow04" style="font-weight:bold;">&#709</li>'
			+'			</div>'
			+'		</ul>'
			+'		<div class="dropdown" id="dropdownCell04">'
			+'			<a href="formation_developpement_personnel.html"><p>Formations en développement personnel</p></a>'
			+'			<a href="formation_developpement_professionnel.html"><p>Formations en développement professionnel</p></a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1"style="clear:both;">'
			+'			<ul>'
			+'				<div>'
			+'					<a href="commentaires.html"><li class="btnCell">Commentaires </li></a>'
			+'					<li class="arrow"></li>'
			+'				</div>'
			+'			</ul>'
			+'		<div class="dropdown">'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn col-1"style="clear:both;">'
			+'			<ul>'
			+'				<div>'
			+'					<a href="contact.html"><li class="btnCell">Contact</li></a>'
			+'					<li class="arrow"></li>'
			+'				</div>'
			+'			</ul>'
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
			+'		<div class="btn" id="btnDsk04" onmouseover=showDropdown("dropdownDsk04") onmouseleave=hideDropdown("dropdownDsk03")>'
			+'			<a href="groupes.html"><span>Groupes</span></a>'
			+'			<div class="dropdown" id="dropdownDsk04">'
			+'				<a href="formation_developpement_personnel.html"><p>Formations en développement personnel</p></a>'
			+'				<a href="formation_developpement_professionnel.html"><p>Formations en développement professionnel</p></a>'
			+'			</div>'
			+'		</div>'
				
			+'	<div class="btn" id="btnDsk03" onmouseover=showDropdown("dropdownDsk03") onmouseleave=hideDropdown("dropdownDsk03")>'
			+'		<a href="particuliers.html"><span>Particuliers</span></a>'
			+'		<div class="dropdown" id="dropdownDsk03">'
			+'			<a href="coaching_personnel.html"><p>Coaching personnel</p></a>'
			+'			<a href="coaching_professionnel.html"><p>Coaching professionnel</p></a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="btn" id="btnDsk02" onmouseover=showDropdown("dropdownDsk02") onmouseleave=hideDropdown("dropdownDsk02")>'
			+'		<a href="coaching.html"><span>Coaching</span></a>'
			+'		<div class="dropdown" id="dropdownDsk02">'
			+'			<a href="philosophie.html"><p>Philosophie du coaching</p></a>'
			+'			<a href="approche.html"><p>Approche et outils</p></a>'
			+'			<a href="role.html"><p>Rôle et responsabilités</p></a>'
			+'			<a href="deontologie.html"><p>Déontologie</p></a>'
			+'			<a href="choisir.html"><p>Comment choisir un coach?</p></a>'

			+'		</div>'
			+'	</div>'
			+'	<div class="btn" id="btnDsk01" onmouseover=showDropdown("dropdownDsk01") onmouseleave=hideDropdown("dropdownDsk01")>'
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
			for(var i = 1 ; i <= dropdownNumber ; i ++ ){
				slides["dropdownDsk0" + i] = up;
			}
			
})

function showDropdown(buttons){
	if(slides[buttons] == up)
		$("#"+buttons).slideDown("fast", function(){
			slides[buttons] = down;
		});

}
function hideDropdown(buttons){
	for(var i = 1 ; i <= dropdownNumber ; i ++ ){
		var str = "dropdownDsk0" + i;
		if(slides[str] == down)
		$("#"+str).slideUp("fast", function(){
			slides[str] = up;
		});
	}
}
function toggleDropdown(button , arrow){

	$("#"+button).slideToggle("fast");
	switchArrow(arrow);
}
function startDownload(){
  window.open("Recording.m4a", 'Download');

}
function switchArrow (arrow){
	var downWards = "˅";
	var upWards = "˄";
	if ($("#"+arrow).html() == downWards)
		$("#"+arrow).html(upWards);
	else
		$("#"+arrow).html(downWards);
}