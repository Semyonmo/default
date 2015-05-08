import $ from "jquery";

export default angular
    .module('componentDropdown', [])
    .directive('cDropdown', dropdown);

function dropdown() {
    var directive = {
        link: link,
        template: `
        <div class="dropdown">
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
            list: '=',
            value: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        var dropdown = scope.dropdown;

        setTimeout(function () {
            var dropdownListWidth = $('.dropdown__list', element).width();
            $('.dropdown', element).css('width', dropdownListWidth + 1);
        }, 0);

        scope.$watch('dropdown.list', function () {
            dropdown.selectOption(dropdown.getSelected());
        }, true);

        $('.dropdown__selected', element).focusin(function () {
            $('.dropdown__list').removeClass('display');
            $('.dropdown__list', element).addClass('display');
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

