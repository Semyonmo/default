import $ from "jquery";

export default angular
    .module('componentDropdown', [])
    .directive('cDropdown', dropdown);

function dropdown() {
    var directive = {
        link: link,
        template: `
        <div class="dropdown" ng-class="dropdown.type">
            <div class="dropdown__selected" tabindex="0">{{dropdown.value}}</div>

            <div class="dropdown__list">
                <div class="dropdown__list-item"
                ng-click="dropdown.selectOption({value: null})"
                ng-class="{ selected: dropdown.empty }">

                </div>
                <div class="dropdown__list-item"
                    ng-repeat="option in dropdown.list"
                    ng-class="{ selected: option.selected }"
                    ng-click="dropdown.selectOption(option)">
                    {{option.value}}
                </div>
            </div>
        </div>`,
        restrict: 'EA',
        controller: DropdownController,
        controllerAs: 'dropdown',
        bindToController: true,
        scope: {
            type: "@",
            list: '=',
            value: '='
        }
    };
    return directive;

    function link(scope, element) {
        var dropdown = scope.dropdown;

        setTimeout(function () {
            var dropdownListWidth = $('.dropdown__list', element).width();
            $('.dropdown', element).css('width', dropdownListWidth + 1);
        }, 0);

        scope.$watch('dropdown.list', function () {
            dropdown.selectOption(dropdown.getSelected());
        }, true);

        $('.dropdown__selected', element).click(function () {
            $('.dropdown__list').removeClass('display');
            $('.dropdown__list', element).addClass('display');
            $('.dropdown__list-item.hover', element).removeClass('hover');
        }).bind('keydown', function (e) {
            var keybordSelectedElement = $('.dropdown__list-item.hover', element)[0] || $('.dropdown__list-item', element)[0];
            var isOpen = $('.dropdown__list', element).hasClass('display');

            switch (event.keyCode) {
                //UP
                case 38:
                    e.preventDefault();
                    console.log('up');
                    if (isOpen) {
                        prev(keybordSelectedElement);
                    }
                    break;

                //DOWN
                case 40:
                    e.preventDefault();
                    console.log('down');

                    if (isOpen) {
                        next(keybordSelectedElement);
                    } else {
                        open(element);
                    }

                    break;

                //ENTER
                case 13:
                    e.preventDefault();
                    console.log('enter');
                    if (isOpen) {
                        select(keybordSelectedElement);
                    } else {
                        open(element);
                    }

                    break;

                //SPACE
                case 32:
                    e.preventDefault();
                    console.log('space');

                    if (!isOpen) {
                        open(element);
                    }

                    break;

                //ESCAPE
                case 27:
                    e.preventDefault();
                    console.log('ecs');

                    if (isOpen) {
                        esc(isOpen);
                    }

                    break;

            }

            function open(element) {
                $('.dropdown__list').removeClass('display');
                $('.dropdown__list', element).addClass('display');
                $(keybordSelectedElement).addClass('hover');
            }


            function next(currentHoverElement) {
                var $current = $(currentHoverElement);
                if (!$current.is(':last-child')) {
                    $current.removeClass('hover').next().addClass('hover');
                }
            }

            function prev(currentHoverElement) {
                var $current = $(currentHoverElement);
                if (!$current.is(':first-child')) {
                    $current.removeClass('hover').prev().addClass('hover');
                }
            }

            function select() {
                var $current = $(keybordSelectedElement);
                $current.click();
                $('.dropdown__list').removeClass('display');
            }

            function esc() {
                $($('.dropdown__list-item', element)[0]).click();
                $('.dropdown__list').removeClass('display');
            }

        });

        $(document).mouseup(function (e) {
            var dropdownList = $('.dropdown');

            if (!dropdownList.is(e.target)
                && dropdownList.has(e.target).length === 0) {
                $('.dropdown__list').removeClass('display');
            }
        });
    }


    function DropdownController() {
        var dropdown = this;

        dropdown.selectOption = function selectOption(option) {
            dropdown.unselect();

            if (option.value == null) {
                dropdown.empty = true;
                dropdown.value = null;
            } else {
                dropdown.empty = false;
                dropdown.value = option.value;
                option.selected = true;
            }
        };

        dropdown.unselect = function unselect() {
            dropdown.list.forEach(function (option) {
                option.selected = false;
            });
        };

        dropdown.getSelected = function () {
            var selectedOption = {
                value: null
            };
            dropdown.list.forEach(function (option) {
                if (option.selected === true) {
                    selectedOption = option;
                }
            });
            return selectedOption;
        }
    }
}

