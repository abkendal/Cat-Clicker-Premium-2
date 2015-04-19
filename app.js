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
                url: 'images/cat_picture2.jpg'
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
            for (var q = 1; q <= buttons.length; q++){
                var cat = model.cats[i-2];
                $("#button"+q).click((function(value){
                    return function () {
                        model.currentCat = model.cats[value];
                        console.log(value);
                        console.log(model.cats[value]);
            })(cat));
                }
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
    	},
    	render: function () {
    		octopus.updateCat();
            console.log("view2 render")
    	}
    }

    octopus.init();
});