function criarEvento() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
        this._super();
        this.widget().menu( "option", "items", "> :not(.autocomplete)" );
    },
    _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
            var li;
            if ( item.category != currentCategory ) {
                ul.append( "<li class='autocomplete'>" + item.category + "</li>" );
                currentCategory = item.category;
            }
            li = that._renderItemData( ul, item );
            if ( item.category ) {
                li.attr( "aria-label", item.category + " : " + item.label );
            }
        });
    }
});
    var data = [
      { label: "Iphone 8", category: "Apple" },
      { label: "Iphone X", category: "Apple" },
      { label: "Iphone XR", category: "Apple" },
      { label: "Iphone XS", category: "Apple" },
      { label: "Iphone XS Max", category: "Apple" },
      { label: "Iphone 11", category: "Apple" },
      { label: "Iphone 11 Pro", category: "Apple" },
      { label: "Iphone 11 Pro Max", category: "Apple" },
      { label: "Galaxy A10", category: "Samsung" },
      { label: "Galaxy A20", category: "Samsung" },
      { label: "Galaxy A30", category: "Samsung" },
      { label: "Galaxy A50", category: "Samsung" },
      { label: "Galaxy A70", category: "Samsung" },
      { label: "Galaxy S8", category: "Samsung" },
      { label: "Galaxy S8 Plus", category: "Samsung" },
      { label: "Galaxy S9", category: "Samsung" },
      { label: "Galaxy S9 Plus", category: "Samsung" },
      { label: "Galaxy S10e", category: "Samsung" },
      { label: "Galaxy S10", category: "Samsung" },
      { label: "Galaxy S10 Plus", category: "Samsung" },
      { label: "Galaxy Note 9", category: "Samsung" },
      { label: "Galaxy Note 10", category: "Samsung" },
      { label: "Galaxy Note 10 Plus", category: "Samsung" },
      { label: "Motorola One Zoom", category: "Motorola" },
      { label: "Moto G8 Plus", category: "Motorola" },
      { label: "Motorola One Vision", category: "Motorola" },
      { label: "Motorola One Action", category: "Motorola" },
      { label: "Moto G7 Plus", category: "Motorola" },
      { label: "Motorola One Macro", category: "Motorola" },
      { label: "Moto G7", category: "Motorola" },
      { label: "Moto G8 Play", category: "Motorola" },
      { label: "Moto G7 Power", category: "Motorola" },
      { label: "Motorola One", category: "Motorola" },
      { label: "Moto E6 Plus", category: "Motorola" },
      { label: "Moto G7 Play", category: "Motorola" },
      { label: "Moto E5 Play", category: "Motorola" },
      { label: "LG G3 Beat", category: "LG" },
      { label: "LG G3 Stylus", category: "LG" },
      { label: "LG G4", category: "LG" },
      { label: "LG G4 Stylus", category: "LG" },
      { label: "LG G5 SE", category: "LG" },
      { label: "LG G8S ThinQ", category: "LG" },
      { label: "LG Joy", category: "LG" },
      { label: "LG K10", category: "LG" },
      { label: "LG K11 PLUS", category: "LG" },
      { label: "LG K12 Max", category: "LG" },
      { label: "LG Joy", category: "LG" },
      { label: "LG K12+", category: "LG" },
      { label: "LG K40S", category: "LG" },
      { label: "LG K8+", category: "LG" },
      { label: "LG K9", category: "LG" }
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });
}