$(document).ready(function () {
    $(function () {

        var model = {
            currentCat: null,
            adminView: false,
            cats: [
                {
                    name: 'Furball',
                    clickCount: 0,
                    img: 'images/cat_picture1.jpg'
                },
                {
                    name: 'Chester', 
                    clickCount: 0, 
                    img: 'images/cat_picture2.jpg'
                },
                {
                    name: 'Princess',
                    clickCount: 0,
                    img: 'images/cat_picture3.jpg'
                },
                {
                    name: 'Cuddles',
                    clickCount: 0,
                    img: 'images/cat_picture4.jpg'
                },
                {
                    name: 'Frank',
        			clickCount: 0,
                    img: 'images/cat_picture5.jpg'
                }
            ]
        };


        var octopus = {


            init: function () {
                view1.init();
                model.currentCat = model.cats[0];
                view2.init();
                view3.init();
                $("#form").hide();
            },
            getCats: function () {
            	for (i = 0; i < model.cats.length; i++){
            		$("#cat-list").append('<li>' + '<button id="button' + (i + 1) + '">' + model.cats[i].name + '</button>'+'</li>');
            	}
            },
            bindButtons: function () {
             for (var j = 1; j <= buttons.length; j++){
                    $("#button"+j).on("click", {value:j-1}, function (event) {
                         model.currentCat = model.cats[event.data.value];
                         view2.render();
                    });}
            },

            imageBind: function (){
                $('#cat-img').on("click", function () {
                    model.currentCat.clickCount++;
                    view2.render();
                })
            },
            updateCat: function () {
            	$("#cat-name").html(model.currentCat.name);
            	$("#cat-count").html(model.currentCat.clickCount);
            	$("#cat-img").attr("src", model.currentCat.img);
            },
            adminButton: function () {
                $("#admin").on("click", function () {
                    if(model.adminView == false) {
                        model.adminView = true;
                        $("#form").show();
                    } else {
                        model.adminView = false;
                        $("#form").hide();
                    };

                })
            },
            cancelButton: function () {
                $("#cancel").on("click", function () {
                    $(':input')
                        .not(':button, :submit, :reset, :hidden')
                        .val('')
                        .removeAttr('checked')
                        .removeAttr('selected');
                })

            },
            saveButton: function () {
                $("#save").on("click", function () {
                    var name = $('#name').val();
                    var img = $("#imgurl").val();
                    var clicks =$("#clicks").val();
                    model.currentCat.name = name;
                    model.currentCat.img = img;
                    model.currentCat.clickCount = clicks;
                    view1.render();
                    view2.render();
                });
            }
        };
     

        var view1 = {
            init: function() {
                octopus.getCats();
                buttons = $("button");
                octopus.bindButtons();
                view1.render();
            },
            render: function(){
                var htmlStr = '';
            }
        };

        var view2 = {
        	init: function() {
        		octopus.updateCat();
                octopus.imageBind();
        	},
        	render: function () {
        		octopus.updateCat();
        	}
        };

        var view3 = {
            init: function () {
                octopus.adminButton();
                octopus.cancelButton();
                octopus.saveButton();
            },
            render: function () {
                
            }
        }

        octopus.init();
    });
});