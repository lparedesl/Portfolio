$(document).ready(function() {
    $("a.tab").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    GitHubActivity.feed({
        username: "lparedesl",
        // repository: "your-repo",
        selector: "#feed",
        limit: 10
    });

	$("#send-email").click(function(event) {
		event.preventDefault();
		var name = $("#name-input").val().trim();
		var email = $("#email-input").val().trim();
		var message = $("#message-input").val().trim();
		emailjs.send("gmail", "template_7hezNZIu", {
			"from_name"    : name,
			"to_name"      : "Luis Paredes",
			"reply_to"     : email,
			"message_html" : message
		})
		.then(function(response) {
			$("#name-input").val("");
			$("#email-input").val("");
			$("#message-input").val("");

			$("#message-alert").css({
				"display": "block",
			});
		});
	});
});