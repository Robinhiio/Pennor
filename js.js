$(document).ready(function () {
    drawItems();

    function drawItems() {
        for (var i = 0; i < items.length; i++) {
            var itemDiv = $('<div class="item_div"></div>').data("item", i);    //CREATE DIV THATH CONTAIN ITEM NUMBER INDEX
            $(".products_items_section").append(itemDiv);                       // ADD DIV TO PRODUCTS SECTION

            var itemImg = $('<img src=""/>');                                   //CREATE IMAGE WITH ANDD GIVE IT CORRECT SRC
            itemImg.attr("src", items[i].imageURL);

            var itemTitle = $('<p>' + items[i].title + '</p>');                 //CREATE P WITH THE IMAGE TITLE
            itemDiv.append(itemImg);                                            // ADD IMAGE AND P TO THE ITEM DIV
            //  itemDiv.append(itemTitle);
        }
    }

    $(".products_items_section").on("click", ".item_div", function() {
        var clickedItem = $(this).data("item");
        var imageURL = items[clickedItem].imageURL;
        var description = items[clickedItem].description;
        var price = items[clickedItem].price;
        var discount = items[clickedItem].discount;
        var title = items[clickedItem].title;

        $(".item_description_img").attr('src', imageURL);
        $(".item_description_h3").html(title);
        $(".item_description_p").html(description);
        $(".item_price").html('Price: ' + price);
    } )

});

