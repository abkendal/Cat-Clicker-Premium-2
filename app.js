$(function () {

    var model = {
        currentCat: null,
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
                model.currentCat.clickCount = model.currentCat.clickCount + 1;
                view2.render();
            })
        },
        updateCat: function () {
        	$("#cat-name").html(model.currentCat.name);
        	$("#cat-count").html(model.currentCat.clickCount);
        	$("#cat-img").attr("src", model.currentCat.img);
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
    }

    octopus.init();
});