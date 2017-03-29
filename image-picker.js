jQuery.fn.imagePicker = function(options) {
    var leftButton = $("<div class='picker-left-button'><text>&lt;</text></div>"),
        rightButton = $("<div class='picker-right-button'><text>&gt;</text></div>"),
        center = $("<div class='picker-center'></div>"),
        container = $("<div class='picker-container'></div>"),
        image = $("<img />"),
        select,
        selectedOption;

    this.before(container);

    select = this.change(function() {
        selectedOption = $(this).children("option:checked");
        image.attr({
            src: selectedOption.attr('data-img-src'),
            alt: selectedOption.attr('data-img-alt')
        });
    }).detach();

    leftButton.click(function() {
        select[0].selectedIndex > 0 ? select[0].selectedIndex-- : select[0].selectedIndex = select[0].length - 1;
        select.trigger('change');
    });

    rightButton.click(function() {
        select[0].selectedIndex < select[0].length - 1 ? select[0].selectedIndex++ : select[0].selectedIndex = 0;
        select.trigger('change');
    });

    center.append(select, image);

    container.append(leftButton, center, rightButton);
    container.css("width", options.width);

    select.trigger('change');

    return this;
}
